// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wm.dmall",
  "name": "多点",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页-弹窗广告",
      "fastQuery": true,
      "activityIds": "com.wm.dmall.MainActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/13197627"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"advert_close\"]",
          "exampleUrls": "https://e.gkd.li/60b65af4-7efa-4e82-b294-d96d5b426953",
          "snapshotUrls": "https://i.gkd.li/i/13197627",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "matches": [
            "[vid=\"coupon_activity\"][text=\"去使用\"]",
            "[vid=\"iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13331283",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.wm.dmall.MainActivity"
        },
        {
          "matches": "[id=\"com.wm.dmall:id/advert_close\"]",
          "fastQuery": true,
          "activityIds": "com.wm.dmall.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-首页-浮窗广告",
      "fastQuery": true,
      "activityIds": "com.wm.dmall.MainActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/13197634",
        "https://i.gkd.li/i/13246242"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "anyMatches": [
            "@[vid=\"iv_close\"] + [vid=\"view_float\"]",
            "[vid=\"close_iV\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13197634",
          "excludeSnapshotUrls": "https://i.gkd.li/i/13246242"
        },
        {
          "matches": "@[id=\"com.wm.dmall:id/iv_close\"] + [id=\"com.wm.dmall:id/view_float\"]",
          "fastQuery": true,
          "activityIds": "com.wm.dmall.MainActivity"
        },
        {
          "matches": "[id=\"com.wm.dmall:id/close_iV\"]",
          "fastQuery": true,
          "activityIds": "com.wm.dmall.MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "activityIds": "com.wm.dmall.MainActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": [
            "[vid=\"update_confirm_btn\"]",
            "[vid=\"close_btn\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13234668",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[id=\"com.wm.dmall:id/update_confirm_btn\"]",
            "[id=\"com.wm.dmall:id/close_btn\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13234668"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.wm.dmall.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-优惠劵提示",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "matches": [
            "[id=\"com.wm.dmall:id/coupon_activity\"][text=\"去使用\"]",
            "[id=\"com.wm.dmall:id/iv_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13331283"
          ],
          "fastQuery": true
        }
      ]
    }
  ]
});
