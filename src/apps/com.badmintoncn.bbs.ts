// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.badmintoncn.bbs",
  "name": "中羽在线",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "name": "红包弹窗",
          "activityIds": "net.duohuo.magappx.main.IndexTabActivity",
          "matches": "[vid=\"iv_close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/13635224",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "红包弹窗 (2)",
          "activityIds": "net.duohuo.magappx.main.IndexTabActivity",
          "fastQuery": true,
          "matches": "[id=\"com.badmintoncn.bbs:id/iv_close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/13635224",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
