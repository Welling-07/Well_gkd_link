// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.ugc.aweme.mobile",
  "name": "抖音",
  "groups": [
    {
      "key": 0,
      "name": "功能类-发现通讯录好友弹窗",
      "desc": "点击[暂时不要]",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "forcedTime": 10000,
      "rules": [
        {
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "@[text=\"暂时不要\"] +2 [text=\"发现好友\"]",
          "exampleUrls": "https://m.gkd.li/57941037/af8632c4-f5fd-403a-aca9-daf92ec6cda1",
          "snapshotUrls": "https://i.gkd.li/i/29722723",
          "fastQuery": true,
          "forcedTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-定位权限",
      "desc": "点击[以后再说]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "[text^=\"你还没有开启位置权限\"] +2 * > [text=\"以后再说\"]",
          "exampleUrls": "https://m.gkd.li/57941037/546e45cf-d151-47f4-830e-0f1b7ac21794",
          "snapshotUrls": "https://i.gkd.li/i/14614184",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13255513",
      "rules": [
        {
          "matches": "[id=\"com.ss.android.ugc.aweme.mobile:id/teen_mode_title\"] +n [id=\"com.ss.android.ugc.aweme.mobile:id/bt_i_know\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-发现通讯录好友",
      "desc": "点击【暂时不要】",
      "enable": false,
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/14467866",
      "rules": [
        {
          "matches": "[text=\"发现好友\"] -2 [text=\"暂时不要\"]",
          "fastQuery": true,
          "resetMatch": "app",
          "actionMaximum": 1
        }
      ]
    }
  ]
});
