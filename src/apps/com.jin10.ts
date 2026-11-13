// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jin10",
  "name": "金十数据",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "activityIds": [
        "com.jin10.lgd.update.UpdateActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12706043"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".lgd.update.UpdateActivity",
          "matches": "@[vid=\"update_cancel\"] + [vid=\"iv_pic\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706043",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.jin10:id/update_cancel\"] + [id=\"com.jin10:id/iv_pic\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.jin10.lgd.update.UpdateActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".lgd.biz.MainActivity",
          "matches": "[id$=\"iv_body\" || id$=\"iv_pic\" || vid=\"body_ad\"] <n [visibleToUser=true] > [vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12706045",
            "https://i.gkd.li/i/12706047",
            "https://i.gkd.li/i/31375320"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-会员页面顶部广告",
      "activityIds": [
        "com.jin10.lgd.biz.MainActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12706051"
      ],
      "rules": [
        {
          "activityIds": ".lgd.biz.MainActivity",
          "matches": "[vid=\"iv_header\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706051"
        },
        {
          "matches": "[id=\"com.jin10:id/iv_header\"] + [id=\"com.jin10:id/iv_close\"]",
          "activityIds": [
            "com.jin10.lgd.biz.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-首页弹窗广告",
      "enable": false,
      "activityIds": [
        "com.jin10.lgd.biz.MainActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12706045"
      ],
      "rules": [
        {
          "matches": "[id=\"com.jin10:id/iv_body\"] + [id=\"com.jin10:id/iv_close\"]",
          "activityIds": [
            "com.jin10.lgd.biz.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-快讯页面弹窗广告",
      "enable": false,
      "activityIds": [
        "com.jin10.lgd.biz.MainActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12706047"
      ],
      "rules": [
        {
          "matches": "@[id=\"com.jin10:id/iv_close\"] + [id=\"com.jin10:id/iv_pic\"]",
          "activityIds": [
            "com.jin10.lgd.biz.MainActivity"
          ]
        }
      ]
    }
  ]
});
