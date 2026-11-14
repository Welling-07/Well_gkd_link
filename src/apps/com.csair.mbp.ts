// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.csair.mbp",
  "name": "南方航空",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".CSMBPActivity",
          "matches": "[vid=\"close_btn\"]",
          "exampleUrls": "https://e.gkd.li/c6aeaf1c-e4d6-4b9c-a4bf-ee5b05d2bb30",
          "snapshotUrls": "https://i.gkd.li/i/13197497",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-首页弹窗广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.csair.mbp.CSMBPActivity",
      "snapshotUrls": "https://i.gkd.li/i/13197497",
      "rules": [
        {
          "matches": "[id=\"com.csair.mbp:id/close_btn\"]",
          "fastQuery": true,
          "activityIds": "com.csair.mbp.CSMBPActivity"
        }
      ]
    }
  ]
});
