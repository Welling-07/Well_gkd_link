// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lphtsccft",
  "name": "涨乐财富通",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": [
        "com.lphtsccft.zhangle.startup.SplashScreenActivity",
        "com.lphtsccft.zhangle.main.MainActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12646899",
        "https://i.gkd.li/i/12646925"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".zhangle.startup.SplashScreenActivity",
            ".zhangle.main.MainActivity"
          ],
          "matches": "[vid=\"tv_never\"][text=\"不再提醒\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12646899",
            "https://i.gkd.li/i/12646925"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.lphtsccft:id/tv_never\"][text=\"不再提醒\"]",
          "activityIds": [
            "com.lphtsccft.zhangle.startup.SplashScreenActivity",
            "com.lphtsccft.zhangle.main.MainActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "order": -9,
      "activityIds": ".zhangle.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12699308",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[text*=\"升级体验\"] +2 LinearLayout > [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/12699308",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".zhangle.main.MainActivity"
        },
        {
          "matches": "[vid=\"iv_update_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/16760030",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".zhangle.main.MainActivity"
        },
        {
          "matches": "[text*=\"升级体验\"] +2 LinearLayout > [text=\"取消\"]",
          "activityIds": "com.lphtsccft.zhangle.main.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-右侧悬浮广告",
      "activityIds": "com.lphtsccft.zhangle.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12892821",
      "rules": [
        {
          "activityIds": ".zhangle.main.MainActivity",
          "matches": "[vid=\"home_float_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12892821"
        },
        {
          "matches": "[id=\"com.lphtsccft:id/home_float_close\"]",
          "activityIds": "com.lphtsccft.zhangle.main.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "activityIds": [
        "com.lphtsccft.zhangle.startup.SplashScreenActivity",
        "com.lphtsccft.zhangle.main.MainActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12646899",
        "https://i.gkd.li/i/12646925"
      ],
      "rules": [
        {
          "matches": "[id=\"com.lphtsccft:id/tv_never\"][text=\"不再提醒\"]",
          "activityIds": [
            "com.lphtsccft.zhangle.startup.SplashScreenActivity",
            "com.lphtsccft.zhangle.main.MainActivity"
          ]
        }
      ]
    }
  ]
});
