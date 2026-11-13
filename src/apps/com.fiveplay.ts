// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fiveplay",
  "name": "5EPlay",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".sihp_homepage.module.main.Main2Activity",
          "matches": "@[vid=\"iv_close\"] - * > [text=\"打开消息推送\"]",
          "exampleUrls": "https://m.gkd.li/57941037/020e18ab-1bf1-4639-b32a-777719881dcb",
          "snapshotUrls": "https://i.gkd.li/i/14680645",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "matches": "@[vid=\"iv_close\"] - * > [text=\"打开消息推送\"]",
          "exampleUrls": "https://m.gkd.li/57941037/020e18ab-1bf1-4639-b32a-777719881dcb",
          "snapshotUrls": "https://i.gkd.li/i/14680645",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-首页右下角浮窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".sihp_homepage.module.main.Main2Activity",
          "matches": "[vid=\"iv_ad_float_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/16825082",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "matches": "[id=\"com.fiveplay:id/iv_ad_float_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/16825082",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".login.view.dialog.UpdateHintDialog",
      "rules": [
        {
          "matches": "[vid=\"cb_ignore_version\"][checked=false][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/4833b753-6fcd-4caf-b57a-1a27fdfecd0a",
          "snapshotUrls": "https://i.gkd.li/i/23833318",
          "excludeSnapshotUrls": "https://i.gkd.li/i/23833319",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".login.view.dialog.UpdateHintDialog"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"暂不更新\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/23833318",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".login.view.dialog.UpdateHintDialog"
        }
      ]
    }
  ]
});
