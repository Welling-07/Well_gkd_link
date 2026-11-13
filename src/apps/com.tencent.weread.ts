// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.weread",
  "name": "微信读书",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matchTime": 30000,
          "activityIds": [
            ".module.bottomSheet.BottomSheetForFragment",
            ".WeReadFragmentActivity"
          ],
          "matches": "[vid=\"open_notification_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642247",
            "https://i.gkd.li/i/13233735"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".WeReadFragmentActivity",
          "matches": "[text=\"开启推送通知\"] +3 [clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14190089",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matchTime": 30000,
          "matches": "[id=\"com.tencent.weread:id/open_notification_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642247",
            "https://i.gkd.li/i/13233735"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"开启推送通知\"] +3 [clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14190089",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "matchTime": 30000,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13233668",
      "rules": [
        {
          "matches": "[text=\"设置青少年模式\"] - LinearLayout >2 [text=\"我知道了\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "matchTime": 30000,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "通知提示-开启推送通知",
      "enable": false,
      "rules": [
        {
          "name": "通知提示-开启推送通知提示信息",
          "actionMaximum": 1,
          "resetMatch": "app",
          "matches": "[text=\"开启推送通知\"] +3 [clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14190089"
        }
      ]
    }
  ]
});
