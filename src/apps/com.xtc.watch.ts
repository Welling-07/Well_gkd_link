// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xtc.watch",
  "name": "小天才",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity14",
          "matches": [
            "[text=\"App功能更新了\"]",
            "[vid=\"iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13197390",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text=\"App功能更新了\"]",
            "[id=\"com.xtc.watch:id/iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13197390",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity13",
          "matches": [
            "[text*=\"开启消息通知\"]",
            "[vid=\"iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13063274",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".view.home.activity.XtcHomeActivity",
          "matches": "[vid=\"iv_notify_permission_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13059965",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity13",
          "matches": [
            "[text*=\"开启消息通知\"]",
            "[id=\"com.xtc.watch:id/iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13063274",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.xtc.watch:id/iv_notify_permission_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13059965",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-弹窗提醒",
      "desc": "已知包括APP升级提醒与开启通知提醒，自动点击关闭。",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.xtc.widget.phone.popup.activity.CustomActivity14",
        "com.xtc.widget.phone.popup.activity.CustomActivity13"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13197390",
        "https://i.gkd.li/i/13063274"
      ],
      "rules": [
        {
          "matches": "[id=\"com.xtc.watch:id/iv_close\"]",
          "fastQuery": true,
          "activityIds": [
            "com.xtc.widget.phone.popup.activity.CustomActivity14",
            "com.xtc.widget.phone.popup.activity.CustomActivity13"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-开启通知提醒",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.xtc.watch.view.home.activity.XtcHomeActivity"
      ],
      "rules": [
        {
          "matches": [
            "[id=\"com.xtc.watch:id/iv_notify_permission_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13059965"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.xtc.watch.view.home.activity.XtcHomeActivity"
          ]
        }
      ]
    }
  ]
});
