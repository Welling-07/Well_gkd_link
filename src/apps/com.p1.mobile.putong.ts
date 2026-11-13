// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.p1.mobile.putong",
  "name": "探探",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "desc": "点击[取消]",
      "matchTime": 10000,
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": ".core.newui.main.NewMainAct",
          "matches": "@[vid=\"buttonDefaultNeutral\"][clickable=true] > [text=\"取消\"]",
          "exampleUrls": "https://m.gkd.li/57941037/2326365c-b31e-429a-9357-765d1c58da4c",
          "snapshotUrls": "https://i.gkd.li/i/14445054",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[vid=\"buttonDefaultNeutral\"][clickable=true] > [text=\"取消\"]",
          "exampleUrls": "https://m.gkd.li/57941037/2326365c-b31e-429a-9357-765d1c58da4c",
          "snapshotUrls": "https://i.gkd.li/i/14445054",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "desc": "点击[暂不设置]",
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".core.ui.seepage.likers.FakeLikersAct",
          "matches": "[text=\"打开通知\"] + [text=\"暂不设置\"]",
          "exampleUrls": "https://m.gkd.li/57941037/137e9907-9767-4acf-b803-034182346ef3",
          "snapshotUrls": "https://i.gkd.li/i/14445055",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"打开通知\"] + [text=\"暂不设置\"]",
          "exampleUrls": "https://m.gkd.li/57941037/137e9907-9767-4acf-b803-034182346ef3",
          "snapshotUrls": "https://i.gkd.li/i/14445055",
          "fastQuery": true,
          "resetMatch": "app",
          "actionMaximum": 1,
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 2,
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/14332010",
      "rules": [
        {
          "matches": "@[text=\"我知道了\"] + [text=\"开启青少年模式\"]",
          "fastQuery": true,
          "resetMatch": "app",
          "actionMaximum": 1
        }
      ]
    }
  ]
});
