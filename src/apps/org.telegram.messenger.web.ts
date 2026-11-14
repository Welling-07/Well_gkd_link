// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "org.telegram.messenger.web",
  "name": "Telegram",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "matchTime": 10000,
      "resetMatch": "app",
      "fastQuery": true,
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/13847837",
      "rules": [
        {
          "matches": [
            "[text=\"更新 Telegram\"]",
            "@View[clickable=true] + [text=\"请稍后提醒我\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13847837",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text=\"更新 Telegram\"]",
            "[text=\"请稍后提醒我\"] - View"
          ],
          "matchTime": 10000,
          "resetMatch": "app",
          "fastQuery": true,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 1,
      "name": "其他-添加生日提示",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "org.telegram.ui.LaunchActivity",
          "matches": "@ImageView[clickable=true] - * >2 [text^=\"添加您的生日\" || text^=\"Add your birthday\"]",
          "snapshotUrls": "https://i.gkd.li/i/26601844"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通讯录权限",
      "desc": "点击稍后",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "org.telegram.ui.LaunchActivity",
          "matches": "@[text=\"Not now\" || text^=\"稍后\"] < [childCount=2] - ScrollView >2 [text*=\"contacts\" || text*=\"联系人\"][text.length>20]",
          "snapshotUrls": "https://i.gkd.li/i/28680747",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "通知提示-同意消息通知",
      "desc": "点击【继续】",
      "enable": false,
      "fastQuery": true,
      "activityIds": "org.telegram.ui.LaunchActivity",
      "snapshotUrls": "https://i.gkd.li/i/14048218",
      "rules": [
        {
          "matches": "[text=\"打开通知\"] +n [text=\"继续\"]",
          "fastQuery": true,
          "activityIds": "org.telegram.ui.LaunchActivity"
        }
      ]
    }
  ]
});
