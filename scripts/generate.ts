import fs from 'node:fs';
import path from 'node:path';
import JSON5 from 'json5';

type JsonObject = Record<string, unknown>;

type MergedData = {
  categories: JsonObject[];
  globalGroups: JsonObject[];
  apps: { id: string; [key: string]: unknown }[];
};

const root = path.resolve(import.meta.dirname, '..');
const dataFile = path.join(root, 'data', 'merged.json5');
const appsDir = path.join(root, 'src', 'apps');

if (!fs.existsSync(dataFile)) {
  throw new Error(`找不到数据文件: ${dataFile}`);
}

const data = JSON5.parse(fs.readFileSync(dataFile, 'utf8')) as MergedData;

const HEADER =
  '// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。\n';

const lit = (value: unknown) => JSON.stringify(value, null, 2);

/** 同一组内规则名必须唯一，重复时按出现顺序追加 " (2)"、" (3)" ... */
let renamedRules = 0;
const dedupeRuleNames = (groups: JsonObject[]) => {
  for (const group of groups) {
    const raw = group.rules;
    const rules = Array.isArray(raw) ? raw : raw ? [raw] : [];
    const used = new Set<string>();
    for (const rule of rules) {
      if (!rule || typeof rule !== 'object') continue;
      const item = rule as { name?: unknown };
      if (typeof item.name !== 'string') continue;
      let candidate = item.name;
      if (used.has(candidate)) {
        let index = 2;
        while (used.has(`${item.name} (${index})`)) index += 1;
        candidate = `${item.name} (${index})`;
        item.name = candidate;
        renamedRules += 1;
      }
      used.add(candidate);
    }
  }
};

dedupeRuleNames(data.globalGroups);
for (const app of data.apps) {
  dedupeRuleNames((app.groups as JsonObject[]) ?? []);
}

fs.mkdirSync(appsDir, { recursive: true });
for (const name of fs.readdirSync(appsDir)) {
  if (name.endsWith('.ts')) {
    fs.rmSync(path.join(appsDir, name));
  }
}

const seen = new Set<string>();
for (const app of data.apps) {
  if (!/^[A-Za-z0-9._-]+$/.test(app.id)) {
    throw new Error(`应用 id 含有非法文件名字符: ${app.id}`);
  }
  if (seen.has(app.id)) {
    throw new Error(`应用 id 重复: ${app.id}`);
  }
  seen.add(app.id);
}

for (const app of [...data.apps].sort((a, b) =>
  a.id < b.id ? -1 : a.id > b.id ? 1 : 0,
)) {
  const content =
    HEADER +
    "import { defineGkdApp } from '@gkd-kit/define';\n\n" +
    `export default defineGkdApp(${lit(app)});\n`;
  fs.writeFileSync(path.join(appsDir, `${app.id}.ts`), content, 'utf8');
}

fs.writeFileSync(
  path.join(root, 'src', 'categories.ts'),
  HEADER +
    "import { defineGkdCategories } from '@gkd-kit/define';\n\n" +
    `export default defineGkdCategories(${lit(data.categories)});\n`,
  'utf8',
);

fs.writeFileSync(
  path.join(root, 'src', 'globalGroups.ts'),
  HEADER +
    "import { defineGkdGlobalGroups } from '@gkd-kit/define';\n\n" +
    `export default defineGkdGlobalGroups(${lit(data.globalGroups)});\n`,
  'utf8',
);

const groupCount = data.apps.reduce(
  (sum, app) => sum + ((app.groups as unknown[])?.length ?? 0),
  0,
);
const ruleCount = data.apps.reduce((sum, app) => {
  const groups = (app.groups as { rules?: unknown }[]) ?? [];
  return (
    sum +
    groups.reduce((acc, group) => {
      const rules = group.rules;
      if (Array.isArray(rules)) return acc + rules.length;
      return acc + (rules ? 1 : 0);
    }, 0)
  );
}, 0);

console.log(
  `生成完成: ${data.apps.length} 个应用文件, ${groupCount} 个组, ${ruleCount} 条规则, ` +
    `${data.globalGroups.length} 个全局组, ${data.categories.length} 个分类` +
    (renamedRules ? `, 规则重名消歧 ${renamedRules} 条` : ''),
);
