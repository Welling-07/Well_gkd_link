// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.oppo.store",
  "name": "OPPO商城",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "desc": "点击下次再说",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13295202",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@[text=\"下次再说\"] -3 [text=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/13295202",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"下次再说\"] -n [text=\"发现新版本\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": "com.oppo.store.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13295201",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "ImageView[vid=\"dialog_delete\"][desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13295201",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageView[id=\"com.oppo.store:id/dialog_delete\"][desc=\"关闭\"]",
          "fastQuery": true,
          "activityIds": "com.oppo.store.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-升级提示",
      "desc": "点击下次再说",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": "com.oppo.store.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13295202",
      "rules": [
        {
          "matches": "@[text=\"下次再说\"] -n [text=\"发现新版本\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": "com.oppo.store.MainActivity"
        }
      ]
    }
  ]
});
