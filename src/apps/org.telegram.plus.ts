// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "org.telegram.plus",
  "name": "Telegram+ (Plus Messenger)",
  "groups": [
    {
      "key": 2,
      "name": "权限提示-通讯录权限",
      "desc": "点击[稍后]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "org.telegram.ui.LaunchActivity",
          "matches": [
            "[text*=\"通讯录\"]",
            "[text=\"稍后\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/25730831",
          "exampleUrls": "https://e.gkd.li/d0f31779-9ed8-47a1-9324-c898e9add118",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-安装未知应用",
      "desc": "不允许, 点击[稍后]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "org.telegram.ui.LaunchActivity",
          "matches": [
            "[text^=\"此应用已被限制安装 APK\"]",
            "[text=\"稍后\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/26217948"
        }
      ]
    }
  ]
});
