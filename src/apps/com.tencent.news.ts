// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.news",
  "name": "腾讯新闻",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-信息流广告",
      "desc": "自动点击\"更多\"->\"不感兴趣\"",
      "activityIds": ".activity.SplashActivity",
      "rules": [
        {
          "name": "点击\"更多\"按钮",
          "matches": "FrameLayout[id=\"android:id/content\"][childCount=1] >n [text=\"广告\"] +n [vid=\"dislike_streamAd_more\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12755834",
            "https://i.gkd.li/i/12755852"
          ],
          "activityIds": ".activity.SplashActivity"
        },
        {
          "preKeys": 0,
          "name": "点击\"不感兴趣\"按钮",
          "matches": "[vid=\"dislike_reason_view\"] >n [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12755852",
          "activityIds": ".activity.SplashActivity"
        },
        {
          "name": "点击\"更多\"按钮 (2)",
          "matches": "FrameLayout[id=\"android:id/content\"][childCount=1] >n [text=\"广告\"] +n [id=\"com.tencent.news:id/dislike_streamAd_more\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12755834",
            "https://i.gkd.li/i/12755852",
            "https://i.gkd.li/i/12755914"
          ],
          "activityIds": [
            "com.tencent.news.activity.SplashActivity",
            "com.miui.home.launcher.Launcher"
          ]
        },
        {
          "preKeys": 2,
          "name": "点击\"不感兴趣\"按钮 (2)",
          "matches": "[id=\"com.tencent.news:id/dislike_reason_view\"] >n [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12755852",
          "activityIds": [
            "com.tencent.news.activity.SplashActivity",
            "com.miui.home.launcher.Launcher"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-广告、活动弹窗",
      "rules": [
        {
          "activityIds": ".activity.SplashActivity",
          "matches": "@[text=\"关闭\"] + [text=\"查看活动详情\"]",
          "snapshotUrls": "https://i.gkd.li/i/12755872"
        },
        {
          "activityIds": "com.tencent.news.activity.SplashActivity",
          "matches": "@[text=\"关闭\"] + [text=\"查看活动详情\"]",
          "snapshotUrls": "https://i.gkd.li/i/12755872"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12755824",
      "rules": [
        {
          "activityIds": ".activity.SplashActivity",
          "matches": "[text=\"开启通知\"] + [text=\"先不了\"]",
          "snapshotUrls": "https://i.gkd.li/i/12755824",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"开启通知\"] + [text=\"先不了\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "activityIds": "com.tencent.news.activity.SplashActivity",
      "snapshotUrls": "https://i.gkd.li/i/12755824",
      "rules": [
        {
          "matches": "[text=\"开启通知\"] + [text=\"先不了\"]",
          "activityIds": "com.tencent.news.activity.SplashActivity"
        }
      ]
    }
  ]
});
