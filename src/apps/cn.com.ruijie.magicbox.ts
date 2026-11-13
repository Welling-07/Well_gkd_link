// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.ruijie.magicbox",
  "name": "无线魔盒",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "activityIds": "cn.com.ruijie.wifibox.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12642359",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.com.ruijie.wifibox.activity.MainActivity",
          "matches": "@ImageView[vid=\"imageView_close\"] +(2) RelativeLayout > LinearLayout > [text*=\"新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/12642359",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView[id=\"cn.com.ruijie.magicbox:id/imageView_close\"] +(2) RelativeLayout > LinearLayout > [text*=\"新版本\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "cn.com.ruijie.wifibox.activity.MainActivity"
        }
      ]
    }
  ]
});
