// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lenovo.browser.hd",
  "name": "联想浏览器HD",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13401982",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": "com.zui.launcher.drawer.NormalLauncher",
          "matches": "[text=\"发现新版本\"] - * > [vid=\"fl_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13401982",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"发现新版本\"] - * > [id=\"com.lenovo.browser.hd:id/fl_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
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
      "snapshotUrls": "https://i.gkd.li/i/13401980",
      "rules": [
        {
          "activityIds": "com.zui.launcher.drawer.NormalLauncher",
          "matches": "[text=\"开启消息通知\"] +n * > [vid=\"tv_cancle\"]",
          "snapshotUrls": "https://i.gkd.li/i/13401980",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"开启消息通知\"] +n * > [id=\"com.lenovo.browser.hd:id/tv_cancle\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "activityIds": "com.zui.launcher.drawer.NormalLauncher",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13401980",
      "rules": [
        {
          "matches": "[text=\"开启消息通知\"] +n * > [id=\"com.lenovo.browser.hd:id/tv_cancle\"]",
          "activityIds": "com.zui.launcher.drawer.NormalLauncher",
          "fastQuery": true
        }
      ]
    }
  ]
});
