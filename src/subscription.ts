import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

/**
 * 订阅元信息。
 *
 * - id: 订阅唯一标识，必须与其它订阅不同，建议使用一个较大的随机数字
 * - name: GKD 中显示的订阅名称
 * - version: 源文件版本，构建时由 @gkd-kit/tools 写入 dist 并自增，一般无需手动修改
 * - checkUpdateUrl: 相对订阅文件的版本检查文件，GKD 用它判断是否有更新
 * - supportUri: 反馈地址，可填自己的仓库地址或讨论区
 */
export default defineGkdSubscription({
  id: 1234567,
  name: 'Well的GKD订阅',
  version: 1,
  author: 'Well（合并自 AIsouler / Adpro / id667）',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/Welling-07/Well_gkd_link',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
