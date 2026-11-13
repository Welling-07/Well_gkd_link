// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.allhistory.dls.marble",
  "name": "全知识",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "desc": "点击暂不开启",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.pwrd.dls.marble.other.notification.NotificationDialogActivity",
          "matches": "[vid=\"v_open\"] + [vid=\"v_not\"]",
          "snapshotUrls": "https://i.gkd.li/i/13997956",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[vid=\"v_open\"] + [vid=\"v_not\"]",
          "snapshotUrls": "https://i.gkd.li/i/13997956",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-左下角参与答题卡片",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.pwrd.dls.marble.moudle.homepage.HomePageActivity",
          "matches": [
            "[vid=\"iv_board\"]",
            "[vid=\"iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13997954",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.pwrd.dls.marble.moudle.homepage.HomePageActivity",
          "matches": "[id=\"com.allhistory.dls.marble:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13997954",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
