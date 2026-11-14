// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.chinamobile.mcloud",
  "name": "中国移动云盘",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12774833",
      "matchTime": 10000,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".client.ui.setting.UpgradeActivity",
          "matches": [
            "[text=\"发现新版本\"]",
            "[vid=\"bn_cancel\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/14297700",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "matches": [
            "[text=\"发现新版本\"]",
            "[vid=\"bn_cancel\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/14297700",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.chinamobile.mcloud:id/bn_cancel\"] + [id=\"com.chinamobile.mcloud:id/upgrade_title\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000,
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".client.ui.MenuActivity",
            ".client.ui.CustomScanActivity",
            "com.mcloud.login.ui.ConfirmLoginTvActivity"
          ],
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13627826",
            "https://i.gkd.li/i/14549523",
            "https://i.gkd.li/i/14732062"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".client.ui.MenuActivity",
          "matches": "@Image[clickable=true] < View -3 [text=\"马上领取\"] < View < View < View < WebView < WebView < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13627832"
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.chinamobile.mcloud.client.ui.MenuActivity",
            "com.chinamobile.mcloud.client.ui.CustomScanActivity",
            "com.mcloud.login.ui.ConfirmLoginTvActivity"
          ],
          "matches": "[id=\"com.chinamobile.mcloud:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13627826",
            "https://i.gkd.li/i/14549523",
            "https://i.gkd.li/i/14732062"
          ]
        },
        {
          "activityIds": "com.chinamobile.mcloud.client.ui.MenuActivity",
          "matches": "[text=\"马上领取\"] +3 View > Image[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13627832"
        },
        {
          "activityIds": [
            "com.chinamobile.mcloud.client.ui.MenuActivity",
            "com.chinamobile.mcloud.client.ui.CustomScanActivity",
            "com.mcloud.login.ui.ConfirmLoginTvActivity"
          ],
          "fastQuery": true,
          "matches": "[vid=\"rl_container\"] + [vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13627826",
            "https://i.gkd.li/i/14549477",
            "https://i.gkd.li/i/14732062"
          ]
        },
        {
          "activityIds": "com.chinamobile.mcloud.client.ui.MenuActivity",
          "matches": "[text=\"马上领取\"] +n View > Image[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13627832"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-悬浮广告",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".client.ui.MenuActivity",
          "matches": "[vid=\"iv_logo\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13627834"
        },
        {
          "activityIds": "com.chinamobile.mcloud.client.ui.MenuActivity",
          "fastQuery": true,
          "matches": "[id=\"com.chinamobile.mcloud:id/iv_logo\"] + [id=\"com.chinamobile.mcloud:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13627834"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-请求开启自动备份弹窗",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".client.ui.MenuActivity",
          "matches": "[text=\"开启自动备份\"] +4 [text=\"暂不设置\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13627830"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/14882447",
      "rules": [
        {
          "activityIds": ".client.ui.MenuActivity",
          "matches": "[vid=\"btn_push_notice_close_dialog\"]",
          "snapshotUrls": "https://i.gkd.li/i/14882447",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[vid=\"btn_push_notice_close_dialog\"]",
          "snapshotUrls": "https://i.gkd.li/i/14882447",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
