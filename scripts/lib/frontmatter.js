const CANONICAL_KEY_ORDER = [
  'id',
  'name',
  'scope',
  'category',
  'format',
  'tech_stack',
  'tags',
  'recommended_ai',
  'description',
  'preview',
  'author',
  'source_url'
];

export function unquote(raw) {
  const s = (raw ?? '').trim();
  if (s.startsWith('"') && s.endsWith('"') && s.length >= 2) {
    try {
      return JSON.parse(s);
    } catch {
      return s.slice(1, -1);
    }
  }
  if (s.startsWith("'") && s.endsWith("'") && s.length >= 2) {
    return s.slice(1, -1).replace(/''/g, "'");
  }
  return s;
}

export function formatScalar(value, forceQuote = false) {
  const str = String(value ?? '');
  if (forceQuote || str === '' || /[:#"'[\]{}\n\r]|^\s|\s$/.test(str)) {
    return JSON.stringify(str);
  }
  return str;
}

export function parseYamlSubset(raw) {
  const obj = {};
  const lines = raw.replace(/\r\n/g, '\n').split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.trimStart().startsWith('#')) {
      i++;
      continue;
    }

    const keyMatch = line.match(/^(\w[\w_-]*):\s*(.*)/);
    if (!keyMatch) {
      i++;
      continue;
    }

    const key = keyMatch[1];
    const rest = keyMatch[2].trim();

    if (rest === '') {
      const children = [];
      const subMap = {};
      i++;
      while (i < lines.length && (lines[i].startsWith('  ') || lines[i].trim() === '')) {
        const child = lines[i];
        if (!child.trim()) {
          i++;
          continue;
        }
        const listItem = child.match(/^\s+-\s+(.*)/);
        const mapItem = child.match(/^\s+(\w[\w_-]*):\s*(.*)/);
        if (listItem) {
          children.push(unquote(listItem[1]));
        } else if (mapItem) {
          subMap[mapItem[1]] = unquote(mapItem[2]);
        }
        i++;
      }
      if (children.length > 0) {
        obj[key] = children;
      } else if (Object.keys(subMap).length > 0) {
        obj[key] = subMap;
      } else {
        obj[key] = null;
      }
      continue;
    }

    if (rest === '[]') {
      obj[key] = [];
    } else {
      obj[key] = unquote(rest);
    }
    i++;
  }

  return obj;
}

export function parseFrontmatter(content) {
  const normalized = content.replace(/\r\n/g, '\n');
  if (!normalized.startsWith('---\n')) {
    return null;
  }

  let endIndex = normalized.indexOf('\n---\n', 4);
  let delimiterLen = 5;
  if (endIndex === -1) {
    if (normalized.endsWith('\n---')) {
      endIndex = normalized.length - 4;
      delimiterLen = 4;
    } else {
      return null;
    }
  }

  const rawYaml = normalized.slice(4, endIndex);
  const body = normalized.slice(endIndex + delimiterLen);
  return {
    data: parseYamlSubset(rawYaml),
    body
  };
}

export function stringifyFrontmatter(data, body = '') {
  const lines = [];
  const emitted = new Set();
  const keys = [
    ...CANONICAL_KEY_ORDER.filter(k => Object.prototype.hasOwnProperty.call(data, k)),
    ...Object.keys(data).filter(k => !CANONICAL_KEY_ORDER.includes(k))
  ];

  for (const key of keys) {
    if (emitted.has(key)) continue;
    emitted.add(key);
    const val = data[key];

    if (Array.isArray(val)) {
      if (val.length === 0) {
        lines.push(`${key}: []`);
      } else {
        lines.push(`${key}:`);
        for (const item of val) {
          lines.push(`  - ${formatScalar(item, false)}`);
        }
      }
      continue;
    }

    if (val && typeof val === 'object') {
      lines.push(`${key}:`);
      for (const [subKey, subVal] of Object.entries(val)) {
        const forceQuote = key === 'description' || subKey === 'zh' || subKey === 'en';
        lines.push(`  ${subKey}: ${formatScalar(subVal, forceQuote)}`);
      }
      continue;
    }

    const forceQuote = key === 'preview' || key === 'source_url';
    lines.push(`${key}: ${formatScalar(val ?? '', forceQuote)}`);
  }

  const cleanBody = body.replace(/^\n?/, '\n');
  return `---\n${lines.join('\n')}\n---\n${cleanBody}`;
}
