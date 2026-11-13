// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.moutai.mall",
  "name": "i茅台",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": [
        "com.moutai.mall.MainActivity",
        "com.moutai.mall.module.splash.SplashActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12745130",
        "https://i.gkd.li/i/12745153"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".MainActivity",
            ".module.splash.SplashActivity"
          ],
          "matches": "[vid=\"ivPic\"] + ViewGroup + [vid=\"vClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12745130",
            "https://i.gkd.li/i/12745153"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.moutai.mall:id/ivPic\"] + ViewGroup + [id=\"com.moutai.mall:id/vClose\"]",
          "activityIds": [
            "com.moutai.mall.MainActivity",
            "com.moutai.mall.module.splash.SplashActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12745142",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@[vid=\"vClose\"] - LinearLayout > [text*=\"开通消息通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/12745142",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.moutai.mall:id/vClose\"] - LinearLayout > [text*=\"开通消息通知\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "activityIds": [
        "com.moutai.mall.MainActivity",
        "com.moutai.mall.module.splash.SplashActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12745130",
        "https://i.gkd.li/i/12745153"
      ],
      "rules": [
        {
          "matches": "[id=\"com.moutai.mall:id/ivPic\"] + ViewGroup + [id=\"com.moutai.mall:id/vClose\"]",
          "activityIds": [
            "com.moutai.mall.MainActivity",
            "com.moutai.mall.module.splash.SplashActivity"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "activityIds": "com.moutai.mall.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12745142",
      "rules": [
        {
          "matches": "@[id=\"com.moutai.mall:id/vClose\"] - LinearLayout > [text*=\"开通消息通知\"]",
          "activityIds": "com.moutai.mall.MainActivity"
        }
      ]
    }
  ]
});
