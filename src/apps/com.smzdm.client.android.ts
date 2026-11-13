// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.smzdm.client.android",
  "name": "什么值得买",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": "com.smzdm.client.android.app.HomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/12695751",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".app.HomeActivity",
          "matches": "[vid=\"dialog_home_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12695751",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.smzdm.client.android:id/dialog_home_close\"]",
          "fastQuery": true,
          "activityIds": "com.smzdm.client.android.app.HomeActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "order": -9,
      "activityIds": "com.smzdm.client.android.app.HomeActivity",
      "fastQuery": true,
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/13198016",
      "matchTime": 10000,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".app.HomeActivity",
          "matches": "[vid=\"tv_version\"] +2 [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13198016",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.smzdm.client.android:id/tv_version\"] +2 [id=\"com.smzdm.client.android:id/iv_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.smzdm.client.android.app.HomeActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-请求读取剪贴板权限弹窗",
      "desc": "点击暂不允许",
      "fastQuery": true,
      "activityIds": "com.smzdm.client.android.app.HomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/13198020",
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".app.HomeActivity",
          "matches": "@[text=\"暂不允许\"] + [text=\"允许\"]",
          "snapshotUrls": "https://i.gkd.li/i/13198020",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"暂不允许\"] + [text=\"允许\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.smzdm.client.android.app.HomeActivity",
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/13438810",
        "https://i.gkd.li/i/13626746"
      ],
      "rules": [
        {
          "activityIds": [
            ".module.haojia.detail.HaojiaDetailActivity",
            ".module.community.module.bask.BaskDetailActivity",
            ".app.HomeActivity"
          ],
          "matches": [
            "TextView[text^=\"开启推送通知\"]",
            "[vid=\"iv_close\" || vid=\"ib_close\"][visibleToUser=true]"
          ],
          "exampleUrls": [
            "https://e.gkd.li/2e979f31-7498-497f-a4ed-b82b884e2d8d",
            "https://e.gkd.li/a52462c1-e3bf-45ad-8639-6fa764f2135d"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13438810",
            "https://i.gkd.li/i/13626746",
            "https://i.gkd.li/i/18150286"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageView[id=\"com.smzdm.client.android:id/ib_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-APP内弹窗广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.smzdm.client.android.app.HomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/12695751",
      "rules": [
        {
          "matches": "[id=\"com.smzdm.client.android:id/dialog_home_close\"]",
          "fastQuery": true,
          "activityIds": "com.smzdm.client.android.app.HomeActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "未分类-通知弹窗",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": [
        "com.smzdm.client.android.module.community.module.bask.BaskDetailActivity",
        "com.smzdm.client.android.module.haojia.detail.HaojiaDetailActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13438810",
        "https://i.gkd.li/i/13626746"
      ],
      "rules": [
        {
          "matches": "ImageView[id=\"com.smzdm.client.android:id/ib_close\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": [
            "com.smzdm.client.android.module.community.module.bask.BaskDetailActivity",
            "com.smzdm.client.android.module.haojia.detail.HaojiaDetailActivity"
          ]
        }
      ]
    }
  ]
});
