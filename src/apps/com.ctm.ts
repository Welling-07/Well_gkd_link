// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ctm",
  "name": "CTM Buddy",
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
          "activityIds": ".home.page.MainActivity",
          "matches": "[vid=\"iv_close\"]",
          "exampleUrls": "https://e.gkd.li/fbaa53c3-109d-47b3-b85c-373d93e420d9",
          "snapshotUrls": "https://i.gkd.li/i/13350575",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-底部横幅广告",
      "fastQuery": true,
      "activityIds": "com.ctm.home.page.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13350612",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".home.page.MainActivity",
          "matches": "[vid=\"iv_bottom_adv\"] + [vid=\"btn_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13350612"
        },
        {
          "matches": "[id=\"com.ctm:id/btn_close\"]",
          "fastQuery": true,
          "activityIds": "com.ctm.home.page.MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-浮窗广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.ctm.home.page.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13350575",
      "rules": [
        {
          "matches": "[id=\"com.ctm:id/iv_close\"]",
          "fastQuery": true,
          "activityIds": "com.ctm.home.page.MainActivity"
        }
      ]
    }
  ]
});
