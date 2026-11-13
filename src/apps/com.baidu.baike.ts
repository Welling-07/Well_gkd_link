// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.baike",
  "name": "百度百科",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "desc": "自动点击\"不允许\"",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12755717",
      "rules": [
        {
          "activityIds": ".component.push.NotificationEnableDialog",
          "matches": "[text^=\"打开推送通知\"] +2 [text=\"不允许\"]",
          "snapshotUrls": "https://i.gkd.li/i/12755717",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text^=\"打开推送通知\"] +2 [text=\"不允许\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-请求通知权限弹窗",
      "desc": "自动点击【不允许】",
      "enable": false,
      "activityIds": "com.baidu.baike.component.push.NotificationEnableDialog",
      "snapshotUrls": "https://i.gkd.li/i/12755717",
      "rules": [
        {
          "matches": "[text^=\"打开推送通知\"] +2 [text=\"不允许\"]",
          "activityIds": "com.baidu.baike.component.push.NotificationEnableDialog"
        }
      ]
    }
  ]
});
