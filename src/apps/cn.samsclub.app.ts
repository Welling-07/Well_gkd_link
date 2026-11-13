// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.samsclub.app",
  "name": "山姆会员商店",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "actionMaximum": 1,
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] <2 [vid=\"advertising_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13609106",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@ImageView[vid=\"close_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/15879369",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "@ImageView[clickable=true] <2 [id=\"cn.samsclub.app:id/advertising_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13609106",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-定位权限",
      "activityIds": "cn.samsclub.app.ui.MainActivity",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": "[vid=\"tips_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13609113",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"cn.samsclub.app:id/tips_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13609113",
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "cn.samsclub.app.ui.MainActivity",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-底部横幅广告",
      "desc": "x掉[亲友卡待赠送]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": "[vid=\"fragment_home_window_delete_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13609113",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-关闭「您有一张亲友卡待赠送」通知条",
      "enable": false,
      "activityIds": "cn.samsclub.app.ui.MainActivity",
      "rules": [
        {
          "matches": "[id=\"cn.samsclub.app:id/fragment_home_window_delete_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13609113",
          "activityIds": "cn.samsclub.app.ui.MainActivity"
        }
      ]
    }
  ]
});
