// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cmi.jegotrip",
  "name": "无忧行",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.BottomTabsActivity",
          "matches": "[vid=\"ig_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13631904",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.cmi.jegotrip:id/ig_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13631904",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-定位权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.cmi.jegotrip.ui.BottomTabsActivity",
      "snapshotUrls": "https://i.gkd.li/i/13232766",
      "rules": [
        {
          "activityIds": ".ui.BottomTabsActivity",
          "matches": [
            "[text=\"申请定位权限说明\"]",
            "[vid=\"btn_cancel\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13232766",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"申请定位权限说明\"] < LinearLayout +2 LinearLayout [id=\"com.cmi.jegotrip:id/btn_cancel\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.cmi.jegotrip.ui.BottomTabsActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-权限申请弹窗",
      "desc": "点击[取消]",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "pub.devrel.easypermissions.AppSettingsDialogHolderActivity",
          "matches": [
            "[text=\"权限申请\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/16233246",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "matches": "[id=\"com.cmi.jegotrip:id/ig_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13631904",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    }
  ]
});
