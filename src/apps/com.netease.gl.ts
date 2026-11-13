// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.netease.gl",
  "name": "网易大神",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "activityIds": "com.netease.gl.serviceupdate.widget.DialogUpdate",
      "snapshotUrls": "https://i.gkd.li/i/12883135",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".serviceupdate.widget.DialogUpdate",
          "matches": "@[vid=\"iv_close\"] +2 LinearLayout >n [vid=\"btn_update\"]",
          "snapshotUrls": "https://i.gkd.li/i/12883135",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] +2 LinearLayout >n [id=\"com.netease.gl:id/btn_update\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.netease.gl.serviceupdate.widget.DialogUpdate"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "activityIds": ".ui.activity.welcome.WelcomeActivity",
          "matches": "@[vid=\"iv_close\"] + [vid=\"iv_cover\"]",
          "snapshotUrls": "https://i.gkd.li/i/12883277"
        },
        {
          "activityIds": "com.netease.gl.ui.activity.welcome.WelcomeActivity",
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] + [id=\"com.netease.gl:id/iv_cover\"]",
          "snapshotUrls": "https://i.gkd.li/i/12883277"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13072071",
      "rules": [
        {
          "activityIds": ".compfeed.widget.CommonWebPopupDialog",
          "matches": "@[vid=\"iv_close\"] + [text=\"开启推送\"]",
          "snapshotUrls": "https://i.gkd.li/i/13072071",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] + [text=\"开启推送\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "activityIds": "com.netease.gl.compfeed.widget.CommonWebPopupDialog",
      "snapshotUrls": "https://i.gkd.li/i/13072071",
      "rules": [
        {
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] + [text=\"开启推送\"]",
          "activityIds": "com.netease.gl.compfeed.widget.CommonWebPopupDialog"
        }
      ]
    }
  ]
});
