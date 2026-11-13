// 本地等价构建脚本：
// 沙箱环境无法运行 tsx（esbuild 需要 spawn 子进程），这里改用正则从生成好的
// src/*.ts 中取出纯 JSON 数据，再调用与 scripts/check.ts、scripts/build.ts
// 完全相同的 @gkd-kit/tools 接口，验证数据合法性并生成 dist。
// 在 GitHub Actions 中仍然使用 pnpm run build（tsc + tsx）。
import fs from 'node:fs';
import path from 'node:path';
import JSON5 from 'json5';
import { checkSubscription, updateDist } from '@gkd-kit/tools';

const root = path.resolve(import.meta.dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

const extractJson = (file, marker) => {
  const src = read(file);
  const start = src.indexOf(marker);
  if (start < 0) throw new Error(`${file} 中找不到 ${marker}`);
  const json = src.slice(start + marker.length, src.lastIndexOf(')'));
  return JSON.parse(json);
};

const subscriptionSrc = read('src/subscription.ts');
const pick = (name) => {
  const match = subscriptionSrc.match(
    new RegExp(`^ {2}${name}:\\s*(.+?),?$`, 'm'),
  );
  if (!match) throw new Error(`src/subscription.ts 中找不到 ${name}`);
  return match[1].trim().replace(/,$/, '');
};
const pickString = (name) => {
  const raw = pick(name);
  return raw.replace(/^['"`]/, '').replace(/['"`]$/, '');
};
const pickOptionalString = (name) => {
  const present = new RegExp(`^ {2}${name}:`, 'm').test(subscriptionSrc);
  return present ? pickString(name) : undefined;
};

const appsDir = path.join(root, 'src', 'apps');
const apps = fs
  .readdirSync(appsDir)
  .filter((name) => name.endsWith('.ts'))
  .sort()
  .map((name) => extractJson(path.join('src', 'apps', name), 'defineGkdApp('));

const subscription = {
  id: Number(pick('id')),
  name: pickString('name'),
  version: Number(pick('version')),
  author: pickString('author'),
  checkUpdateUrl: pickString('checkUpdateUrl'),
  supportUri: pickOptionalString('supportUri'),
  categories: extractJson('src/categories.ts', 'defineGkdCategories('),
  globalGroups: extractJson('src/globalGroups.ts', 'defineGkdGlobalGroups('),
  apps,
};

console.log(
  `loaded: ${apps.length} apps, ${subscription.categories.length} categories, ${subscription.globalGroups.length} global groups`,
);

checkSubscription(subscription);
console.log('checkSubscription: OK');

const changed = await updateDist(subscription);
console.log('updateDist:', changed ? 'dist updated' : 'no changes');

const dist = JSON5.parse(
  fs.readFileSync(path.join(root, 'dist', 'gkd.json5'), 'utf8'),
);
const version = JSON5.parse(
  fs.readFileSync(path.join(root, 'dist', 'gkd.version.json5'), 'utf8'),
);
const groupCount = dist.apps.reduce((sum, app) => sum + app.groups.length, 0);
const ruleCount = dist.apps.reduce(
  (sum, app) =>
    sum +
    app.groups.reduce(
      (acc, group) =>
        acc +
        (Array.isArray(group.rules) ? group.rules.length : group.rules ? 1 : 0),
      0,
    ),
  0,
);
console.log(
  `dist: id=${dist.id} version=${version.version} apps=${dist.apps.length} groups=${groupCount} rules=${ruleCount} categories=${dist.categories.length} globalGroups=${dist.globalGroups.length}`,
);
