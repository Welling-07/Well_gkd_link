// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.shinyv.cnr",
  "name": "云听",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "yt.com.module.home.MainActivity",
          "matches": "[vid=\"iv_close\"]",
          "exampleUrls": "https://e.gkd.li/d1680c51-70c8-4d50-9560-f5e091685ee8",
          "snapshotUrls": "https://i.gkd.li/i/16914130",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "activityIds": "yt.com.module.home.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12817933",
      "rules": [
        {
          "matches": "[id=\"com.shinyv.cnr:id/iv_ad\"] + [id=\"com.shinyv.cnr:id/iv_close\"]",
          "activityIds": "yt.com.module.home.MainActivity"
        }
      ]
    }
  ]
});
