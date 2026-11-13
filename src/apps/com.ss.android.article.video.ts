// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.article.video",
  "name": "西瓜视频",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13328430",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".activity.SplashActivity",
          "matches": "@[desc=\"关闭\"] - LinearLayout > [text=\"立即升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13328430",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[desc=\"关闭\"] - LinearLayout > [text=\"立即升级\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/13456568",
      "matchTime": 10000,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.SplashActivity",
          "matches": [
            "[text=\"开启推送通知\"]",
            "[text=\"暂不开启\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13456568",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@TextView[id=\"com.ss.android.article.video:id/sj\"][text=\"暂不开启\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-红包弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.ss.android.article.video.activity.SplashActivity",
      "snapshotUrls": "https://i.gkd.li/i/13620299",
      "rules": [
        {
          "activityIds": ".activity.SplashActivity",
          "matches": "@FlattenUIImage[clickable=true] -2 [text=\"开心收下\"]",
          "snapshotUrls": "https://i.gkd.li/i/13620299",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@FlattenUIImage[clickable=true] -2 [text=\"开心收下\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ss.android.article.video.activity.SplashActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/6f8312b0-e110-4098-9db9-48358069601a",
          "snapshotUrls": "https://i.gkd.li/i/17530523",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 4,
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12472628",
      "rules": [
        {
          "matches": "[text$=\"青少年模式\"] +n [text=\"我知道了\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "未分类-通知弹窗",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "snapshotUrls": "https://i.gkd.li/i/13456568",
      "rules": [
        {
          "matches": "@TextView[id=\"com.ss.android.article.video:id/sj\"][text=\"暂不开启\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "activity"
        }
      ]
    }
  ]
});
