// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.steampy.app",
  "name": "SteamPY",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[vid=\"pyAdLayout\"] > [vid=\"count_down_view\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/26231218",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13695519",
      "rules": [
        {
          "activityIds": ".activity.common.MainActivity",
          "matches": "@[vid=\"imgClose\"] - RelativeLayout [vid=\"tv_update\"]",
          "snapshotUrls": "https://i.gkd.li/i/13695519",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.steampy.app:id/imgClose\"] - RelativeLayout [id=\"com.steampy.app:id/tv_update\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-首页优惠券弹窗自动点击领取/使用",
      "fastQuery": true,
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".activity.common.MainActivity",
          "matches": "[vid=\"coupon_right\"]",
          "exampleUrls": [
            "https://e.gkd.li/2e87decb-54ba-4f8b-9330-f037c220d2d9",
            "https://e.gkd.li/b2e256c2-c606-430c-afa9-3cd02f4d56c2"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16860018",
            "https://i.gkd.li/i/16860017"
          ],
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-版本更新",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.steampy.app.activity.common.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13695519",
      "rules": [
        {
          "matches": "@[id=\"com.steampy.app:id/imgClose\"] - RelativeLayout [id=\"com.steampy.app:id/tv_update\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.steampy.app.activity.common.MainActivity"
        }
      ]
    }
  ]
});
