# Well 的 GKD 订阅（AIsouler + Adpro + id667）

仓库地址：<https://github.com/Welling-07/Well_gkd_link>　订阅在 GKD 中显示为 **Well的GKD订阅**。

本仓库基于 [gkd-kit/subscription-template](https://github.com/gkd-kit/subscription-template) 构建，用于发布一个由三个公开 GKD 订阅合并而成的个人订阅：

| 来源 | 说明 |
| --- | --- |
| `@aisouler/gkd_subscription` | https://registry.npmmirror.com/@aisouler/gkd_subscription/0.0.147/files/dist/AIsouler_gkd.json5 |
| `@adpro/gkd_subscription` | https://registry.npmmirror.com/@adpro/gkd_subscription/latest/files/dist/Adpro_gkd.json5（原作者已停止维护） |
| `id667` | https://gkd-subscription-667.pages.dev/gkd.json5 |

合并结果：**996 个应用 / 2721 个组 / 6191 条规则**（含 6 个全局组、14 条全局规则），12 个分类，其中 621 个组默认关闭。相同条目只保留一份，组级默认值已物化进规则，跨源点击链（`preKeys` / `actionMaximumKey` / `actionCdKey` / `scopeKeys`）已重新映射。

> 已删除全部「功能类」分组（自动点击、自动展开、自动点赞/倍速等非屏蔽类规则，共 581 组 / 1025 条规则），只保留开屏广告、更新提示、权限提示、局部/全屏/分段广告、通知提示、评价提示、青少年模式等屏蔽类规则。79 个应用因规则全部属于「功能类」而被整体移除。
>
> 同一组内出现重名的规则会被追加 ` (2)`、` (3)` 后缀，因为 `checkSubscription` 要求组内规则名唯一。

## 订阅地址

```text
https://raw.githubusercontent.com/Welling-07/Well_gkd_link/main/dist/gkd.json5
```

jsDelivr 镜像（国内更快，GitHub 更新后可能有几分钟缓存）：

```text
https://fastly.jsdelivr.net/gh/Welling-07/Well_gkd_link@main/dist/gkd.json5
```

在 GKD 里添加订阅时请使用上面的**直链**，不要用 `github.com/.../blob/...` 页面地址。

完整的仓库创建、推送、发布步骤见 [发布指南.md](./发布指南.md)。

## 目录结构

```text
data/merged.json5        合并后的完整订阅数据（唯一数据源，约 3 MB）
scripts/generate.ts      由 data/merged.json5 生成 src/apps/*.ts、categories、globalGroups
scripts/check.ts         模板自带：tsc 后调用 checkSubscription 校验
scripts/build.ts         模板自带：调用 updateDist 生成 dist
scripts/local_build.mjs  无 pnpm / tsx 环境时的等价校验与构建脚本
src/subscription.ts      订阅元信息（id、名称、作者、supportUri、checkUpdateUrl）
src/apps/<packageId>.ts  每个应用一个文件，由 scripts/generate.ts 生成
src/categories.ts        12 个分类，自动生成
src/globalGroups.ts      6 个全局组，自动生成
dist/                    构建产物：gkd.json5 / gkd.version.json5 / CHANGELOG.md / README.md
```

## 本地构建

```shell
pnpm install --registry=https://registry.npmmirror.com
pnpm run generate   # data/merged.json5 -> src/apps/*.ts（会先清空 src/apps）
pnpm run check      # tsc --noEmit + checkSubscription
pnpm run build      # 生成 dist/gkd.json5 与 dist/gkd.version.json5
```

如果环境里无法运行 `tsx`（例如沙箱禁止子进程），可以用下面的等价脚本完成校验与构建：

```shell
node scripts/local_build.mjs
```

它直接从已生成的 `src/*.ts` 中取出 JSON 数据，调用与 `check.ts`、`build.ts` 相同的 `checkSubscription` 和 `updateDist`。

## 更新规则

1. 优先修改 `data/merged.json5`；也可以直接改 `src/apps/*.ts`，但**下次执行 `pnpm run generate` 会覆盖 `src/apps`**。
2. 执行 `pnpm run generate && pnpm run build`（或 `node scripts/local_build.mjs`）。
3. 提交并推送到 GitHub，然后手动运行 `build_release` workflow；`updateDist` 会在内容变化时把 `dist` 里的版本号 +1，并更新 CHANGELOG。

## 变更订阅信息

订阅名称、作者、反馈地址写在 `src/subscription.ts`，同时 `data/merged.json5` 顶部的 `name` / `author` 也建议改成一样，避免下次 `pnpm run generate` 之后两边不一致。改完重新构建即可。

## 致谢与声明

规则内容来自上述三个公开订阅，版权归各原作者所有；本仓库仅做去重合并与再发布。若原作者不希望被合并，请提 issue 或自行删除对应应用文件。
