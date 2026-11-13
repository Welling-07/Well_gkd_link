// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.aiwu.market",
  "name": "爱吾游戏宝盒",
  "groups": [
    {
      "key": 0,
      "name": "青少年模式",
      "desc": "点击[我知道了]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.activity.NewHomeActivity",
          "matches": "[vid=\"hintTextView2\"] + [vid=\"confirmView\"]",
          "snapshotUrls": "https://i.gkd.li/i/14032203",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[vid=\"hintTextView2\"] + [vid=\"confirmView\"]",
          "snapshotUrls": "https://i.gkd.li/i/14032203",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
