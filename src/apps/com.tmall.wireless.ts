// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tmall.wireless",
  "name": "手机天猫",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": [
        "https://i.gkd.li/i/13162603",
        "https://i.gkd.li/i/13258201",
        "https://i.gkd.li/i/13399536"
      ],
      "rules": [
        {
          "activityIds": [
            ".splash.TMSplashActivity",
            ".maintab.module.TMMainTabActivity",
            ".webview.TMCommonWebViewActivity",
            ".themis.container.TMThemisActivity"
          ],
          "matches": "[vid=\"update_button_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13162603",
            "https://i.gkd.li/i/13258201",
            "https://i.gkd.li/i/13399536",
            "https://i.gkd.li/i/19881137"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.tmall.wireless:id/update_button_cancel\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "activityIds": [
        "com.tmall.wireless.maintab.module.TMMainTabActivity",
        "com.tmall.wireless.turboweb.container.TurboWebViewActivity",
        "com.tmall.wireless.webview.TMCommonWebViewActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13222394",
        "https://i.gkd.li/i/13222500",
        "https://i.gkd.li/i/13222510"
      ],
      "rules": [
        {
          "activityIds": [
            ".maintab.module.TMMainTabActivity",
            ".turboweb.container.TurboWebViewActivity",
            ".webview.TMCommonWebViewActivity"
          ],
          "matches": "Image[id=null][clickable=false] < View + Image[id=null][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13222394",
            "https://i.gkd.li/i/13222500",
            "https://i.gkd.li/i/13222510"
          ]
        },
        {
          "matches": "Image[id=null][clickable=false] < View + Image[id=null][clickable=true]",
          "activityIds": [
            "com.tmall.wireless.maintab.module.TMMainTabActivity",
            "com.tmall.wireless.turboweb.container.TurboWebViewActivity",
            "com.tmall.wireless.webview.TMCommonWebViewActivity"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13258215",
      "rules": [
        {
          "activityIds": ".messagebox.activity.TMMsgboxMainActivity",
          "matches": "View[text=\"开启系统通知\"] - View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13258215",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "View[text=\"开启系统通知\"] - View[clickable=true]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-版本更新",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.tmall.wireless.splash.TMSplashActivity",
        "com.tmall.wireless.maintab.module.TMMainTabActivity",
        "com.tmall.wireless.webview.TMCommonWebViewActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13162603",
        "https://i.gkd.li/i/13258201",
        "https://i.gkd.li/i/13399536"
      ],
      "rules": [
        {
          "matches": "[id=\"com.tmall.wireless:id/update_button_cancel\"]",
          "fastQuery": true,
          "activityIds": [
            "com.tmall.wireless.splash.TMSplashActivity",
            "com.tmall.wireless.maintab.module.TMMainTabActivity",
            "com.tmall.wireless.webview.TMCommonWebViewActivity"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-系统通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "activityIds": "com.tmall.wireless.messagebox.activity.TMMsgboxMainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13258215",
      "rules": [
        {
          "matches": "View[text=\"开启系统通知\"] - View[clickable=true]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "activityIds": "com.tmall.wireless.messagebox.activity.TMMsgboxMainActivity"
        }
      ]
    }
  ]
});
