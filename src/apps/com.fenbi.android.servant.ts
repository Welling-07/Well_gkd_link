// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fenbi.android.servant",
  "name": "粉笔",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[id=\"com.fenbi.android.servant:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12999725",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-升级弹窗",
      "enable": false,
      "activityIds": "com.fenbi.android.module.home.HomeActivity",
      "rules": [
        {
          "matches": "[id=\"com.fenbi.android.servant:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12999725",
          "activityIds": "com.fenbi.android.module.home.HomeActivity"
        }
      ]
    }
  ]
});
