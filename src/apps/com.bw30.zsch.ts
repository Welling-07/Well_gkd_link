// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.bw30.zsch",
  "name": "四川航空",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/13068699"
      ],
      "rules": [
        {
          "activityIds": "com.bw.zsch.MainActivityTab",
          "matches": "[vid=\"tv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13068699",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.bw30.zsch:id/tv_cancel\"]",
          "fastQuery": true,
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
      "fastQuery": true,
      "activityIds": [
        "com.bw.zsch.MainActivityTab"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13068699"
      ],
      "rules": [
        {
          "matches": "[id=\"com.bw30.zsch:id/tv_cancel\"]",
          "fastQuery": true,
          "activityIds": [
            "com.bw.zsch.MainActivityTab"
          ]
        }
      ]
    }
  ]
});
