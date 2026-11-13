// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.boohee.one",
  "name": "薄荷健康",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "activityIds": "com.boohee.library.update.UpdateDialogActivity",
      "snapshotUrls": "https://i.gkd.li/i/12716918",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.boohee.library.update.UpdateDialogActivity",
          "matches": "@[vid=\"tv_ignore\"] + [vid=\"tv_update\"]",
          "snapshotUrls": "https://i.gkd.li/i/12716918",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.boohee.one:id/tv_ignore\"] + [id=\"com.boohee.one:id/tv_update\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.boohee.library.update.UpdateDialogActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-发现页弹窗广告",
      "activityIds": "com.sensorsdata.sf.ui.view.DialogActivity",
      "snapshotUrls": "https://i.gkd.li/i/12716970",
      "rules": [
        {
          "matches": "LinearLayout[childCount=2] > @ImageView[id=null][clickable=true] + ImageView",
          "activityIds": "com.sensorsdata.sf.ui.view.DialogActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12716950",
      "rules": [
        {
          "activityIds": ".app.account.ui.activity.MsgCategoryActivityV2",
          "matches": "[vid=\"img_close_push\"]",
          "snapshotUrls": "https://i.gkd.li/i/12716950",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.boohee.one:id/img_close_push\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-请求开启通知权限弹窗",
      "desc": "自动点击x按钮",
      "enable": false,
      "activityIds": "com.boohee.one.app.account.ui.activity.MsgCategoryActivityV2",
      "snapshotUrls": "https://i.gkd.li/i/12716950",
      "rules": [
        {
          "matches": "[id=\"com.boohee.one:id/img_close_push\"]",
          "activityIds": "com.boohee.one.app.account.ui.activity.MsgCategoryActivityV2"
        }
      ]
    }
  ]
});
