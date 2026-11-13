// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jd.jdlite",
  "name": "京喜特价",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": "com.jd.jdlite.MainFrameActivity",
      "snapshotUrls": "https://i.gkd.li/i/12727396",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainFrameActivity",
          "matches": "@[desc=\"关闭页面\"] - FrameLayout >n [text=\"极速版弹窗\"]",
          "snapshotUrls": "https://i.gkd.li/i/12727396",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[desc=\"关闭页面\"] - FrameLayout >n [text=\"极速版弹窗\"]",
          "activityIds": "com.jd.jdlite.MainFrameActivity",
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
      "snapshotUrls": "https://i.gkd.li/i/13062969",
      "rules": [
        {
          "activityIds": ".MainFrameActivity",
          "matches": "@ImageView[clickable=true] - LinearLayout > [text=\"开启消息通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/13062969",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView[clickable=true] - LinearLayout > [text=\"开启消息通知\"]",
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
      "activityIds": "com.jd.jdlite.MainFrameActivity",
      "snapshotUrls": "https://i.gkd.li/i/12727396",
      "rules": [
        {
          "matches": "@[desc=\"关闭页面\"] - FrameLayout >n [text=\"极速版弹窗\"]",
          "activityIds": "com.jd.jdlite.MainFrameActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "activityIds": "com.jd.jdlite.MainFrameActivity",
      "snapshotUrls": "https://i.gkd.li/i/13062969",
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - LinearLayout > [text=\"开启消息通知\"]",
          "activityIds": "com.jd.jdlite.MainFrameActivity"
        }
      ]
    }
  ]
});
