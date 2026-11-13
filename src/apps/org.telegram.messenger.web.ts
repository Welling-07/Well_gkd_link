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
      "key": 3,
      "name": "功能类-更多-保存到相册",
      "desc": "右上角菜单-点击[保存到相册]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "org.telegram.ui.LaunchActivity",
          "matches": "@[clickable=true][left>350] > [text=\"保存到相册\" || text=\"儲存到相簿\" || text=\"Save to Gallery\"]",
          "exampleUrls": "https://e.gkd.li/f164341a-32fa-4054-9ae1-85d5e686bd64"
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-只保存单个媒体",
      "desc": "弹窗-点击 [这张图片]或[该媒体]",
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text^=\"保存\" || text^=\"儲存\" || text^=\"Save\"] < * +2 * > [text^=\"这\" || text^=\"這\" || text^=\"This\" || text^=\"该\"][clickable=true]",
          "exampleUrls": "https://e.gkd.li/322731e7-f595-4775-9986-a9cff001e861",
          "activityIds": "org.telegram.ui.LaunchActivity"
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
