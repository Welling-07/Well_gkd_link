// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.alibaba.android.rimet",
  "name": "钉钉",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-消息列表上方广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@FrameLayout > [vid=\"icft_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13325125",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@FrameLayout > [id=\"com.alibaba.android.rimet:id/icft_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13325125",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-文件即将过期提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@FrameLayout[vid=\"layout_close\"] -2 TextView[text=\"文件即将过期请备份\"]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/13325125",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@FrameLayout[id=\"com.alibaba.android.rimet:id/layout_close\"] -2 TextView[text=\"文件即将过期请备份\"]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/13325125",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-自动点击原图",
      "actionMaximum": 1,
      "fastQuery": true,
      "activityIds": "com.alibaba.android.dingtalk.photoui.activitys.AlbumActivity",
      "rules": [
        {
          "matches": "CheckBox[vid=\"cb_send_origin\"][text=\"原图\"][checked=false]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13309648",
            "https://i.gkd.li/i/13309845"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": "com.alibaba.android.dingtalk.photoui.activitys.AlbumActivity"
        },
        {
          "matches": "CheckBox[id=\"com.alibaba.android.rimet:id/cb_send_origin\"][text=\"原图\"][checked=false]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13309648",
            "https://i.gkd.li/i/13309845"
          ],
          "actionMaximum": 1,
          "fastQuery": true,
          "activityIds": "com.alibaba.android.dingtalk.photoui.activitys.AlbumActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@Button[text*=\"暂不更新\"] + Button[text*=\"更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402478",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "TextView[vid=\"dialog_close_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13772151",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "TextView[id=\"com.alibaba.android.rimet:id/dialog_close_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13772151",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-扫码自动登录桌面版",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "activityIds": "com.alibaba.android.user.qrcode.WebLoginActivity",
      "rules": [
        {
          "matches": "[vid=\"btn_login\"]",
          "snapshotUrls": "https://i.gkd.li/i/13433981",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "activity",
          "activityIds": "com.alibaba.android.user.qrcode.WebLoginActivity"
        },
        {
          "matches": "[id=\"com.alibaba.android.rimet:id/btn_login\"]",
          "snapshotUrls": "https://i.gkd.li/i/13433981",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "activity",
          "activityIds": "com.alibaba.android.user.qrcode.WebLoginActivity"
        }
      ]
    }
  ]
});
