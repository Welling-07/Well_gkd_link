// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "pansong291.xposed.quickenergy.repair",
  "name": "芝麻粒",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-开屏[提示]弹窗",
      "desc": "点击[我知道了]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "pansong291.xposed.quickenergy.ui.MainActivity",
          "matches": "[text=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13445477",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-开屏弹窗跳过",
      "desc": "打开app点击知道了",
      "enable": false,
      "rules": [
        {
          "activityIds": [
            "pansong291.xposed.quickenergy.ui.MainActivity"
          ],
          "matches": [
            "[id='android:id/button2']"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13445477"
          ]
        }
      ]
    }
  ]
});
