// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.health",
  "name": "荣耀运动健康",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"iv_close_filled\"]",
          "snapshotUrls": "https://i.gkd.li/i/13759407"
        },
        {
          "fastQuery": true,
          "activityIds": "com.hihonor.health.main.MainActivity",
          "matches": "[id=\"com.hihonor.health:id/iv_close_filled\"]",
          "snapshotUrls": "https://i.gkd.li/i/13759407"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"btn_close\"][desc=\"关闭弹窗\"]",
          "exampleUrls": "https://e.gkd.li/1ab101bd-59cb-46c0-bbb1-7a0a9dccf79a",
          "snapshotUrls": "https://i.gkd.li/i/16454150",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.hihonor.health.main.MainActivity",
          "matches": "[vid=\"btn_close\"][desc=\"关闭弹窗\"]",
          "exampleUrls": "https://e.gkd.li/1ab101bd-59cb-46c0-bbb1-7a0a9dccf79a",
          "snapshotUrls": "https://i.gkd.li/i/16454150",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
