// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.gov.pbc.dcep",
  "name": "数字人民币",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13840408",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".main.activity.MainActivity",
          "matches": "[vid=\"upgrade_dialog_cancel\"][!(text=\"退出应用\")]",
          "snapshotUrls": "https://i.gkd.li/i/13840408",
          "excludeSnapshotUrls": "https://i.gkd.li/i/17607391",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[vid=\"upgrade_dialog_cancel\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        }
      ]
    }
  ]
});
