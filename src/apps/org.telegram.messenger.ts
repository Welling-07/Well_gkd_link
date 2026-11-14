// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "org.telegram.messenger",
  "name": "Telegram",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "action": "back",
          "fastQuery": true,
          "activityIds": "org.telegram.ui.LaunchActivity",
          "matches": "[text=\"打开通知\"] + [text*=\"打开 Telegram 的通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/22850638",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-顶部横幅提示",
      "desc": "此规则覆盖生日提示、拍卖提示以及部分广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "org.telegram.ui.LaunchActivity",
          "matches": "@ImageView[desc=null][clickable=true][width<140 && height<140] - LinearLayout >2 TextView[text*=\"生日\" || text*=\"birthday\" || text$=\"!\" || text$=\".\"][text.length>10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22971075",
            "https://i.gkd.li/i/23725025",
            "https://i.gkd.li/i/24560612",
            "https://i.gkd.li/i/28998200"
          ]
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
          "snapshotUrls": [
            "https://i.gkd.li/i/26602366",
            "https://i.gkd.li/i/26609984"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
