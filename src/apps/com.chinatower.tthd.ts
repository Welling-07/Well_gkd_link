// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.chinatower.tthd",
  "name": "铁塔换电",
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
          "activityIds": "com.chinatower.fghd.customer.home.HomeNewActivity",
          "matches": "[vid=\"fl_content_container\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13694901",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.chinatower.fghd.customer.home.HomeNewActivity",
          "fastQuery": true,
          "matches": "[id=\"com.chinatower.tthd:id/fl_content_container\"] + [id=\"com.chinatower.tthd:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13694901",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
