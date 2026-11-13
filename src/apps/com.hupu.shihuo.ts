// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hupu.shihuo",
  "name": "识货",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13704887",
      "rules": [
        {
          "matches": "[text=\"去开启\"] + [vid=\"ivClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/13704887",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text^=\"通知分类\"] +n ImageView[id=\"com.hupu.shihuo:id/ivClose\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "activityIds": "com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity",
      "snapshotUrls": "https://i.gkd.li/i/13115664",
      "rules": [
        {
          "activityIds": "com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity",
          "matches": "[vid=\"fragment_container\"] >11 @ViewGroup[clickable=true] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13115664"
        },
        {
          "matches": "[id=\"com.hupu.shihuo:id/fragment_container\"] >11 @ViewGroup[clickable=true] > ImageView",
          "activityIds": "com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "desc": "点击[以后再说]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.shizhi.shihuoapp.module.main.ui.main.MainActivity",
          "matches": "[text=\"发现新版本\"] +2 ViewGroup > [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/14052208",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"发现新版本\"] +2 ViewGroup > [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/14052208",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-请求消息通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.shizhi.shihuoapp.module.main.ui.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13704887",
      "rules": [
        {
          "matches": "[text^=\"通知分类\"] +n ImageView[id=\"com.hupu.shihuo:id/ivClose\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.shizhi.shihuoapp.module.main.ui.main.MainActivity"
        }
      ]
    }
  ]
});
