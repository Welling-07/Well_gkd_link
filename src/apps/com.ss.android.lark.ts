// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.lark",
  "name": "飞书",
  "groups": [
    {
      "key": 0,
      "name": "功能类-桌面端登录确认",
      "fastQuery": true,
      "activityIds": "com.ss.lark.android.passport.biz.feature.sso.suite.SuiteConfirmActivity",
      "snapshotUrls": "https://i.gkd.li/i/13494960",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ss.lark.android.passport.biz.feature.sso.suite.SuiteConfirmActivity",
          "matches": "[text=\"飞书 桌面端登录确认\"] +2 [vid=\"login_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13494960"
        },
        {
          "matches": "[text=\"飞书 桌面端登录确认\"] +2 [id=\"com.ss.android.lark:id/login_button\"]",
          "fastQuery": true,
          "activityIds": "com.ss.lark.android.passport.biz.feature.sso.suite.SuiteConfirmActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-自动查看原图",
      "desc": "查看图片时自动点击\"查看原图\"",
      "activityIds": "com.ss.android.lark.widget.photo.preview.PhotoPagerActivity",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12840528",
      "rules": [
        {
          "activityIds": ".widget.photo.preview.PhotoPagerActivity",
          "fastQuery": true,
          "matches": "[vid=\"look_origin_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/12840528"
        },
        {
          "matches": "[id=\"com.ss.android.lark:id/look_origin_icon\"]",
          "activityIds": "com.ss.android.lark.widget.photo.preview.PhotoPagerActivity",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-自动发送原图",
      "desc": "发送图片时自动勾选\"原图\"",
      "activityIds": "com.ss.android.lark.chatwindow.ChatWindowActivity",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12840551",
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".chatwindow.ChatWindowActivity",
          "matches": "[vid=\"layout_original_photo\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/c985a1e9-ea40-4911-a73f-8ef098909bce",
          "snapshotUrls": "https://i.gkd.li/i/17711351",
          "actionMaximum": 1
        },
        {
          "matches": "@View[id$=\"original_photo\"][checked=false] + [id=\"com.ss.android.lark:id/original_label\"][text=\"原图\"]",
          "activityIds": "com.ss.android.lark.chatwindow.ChatWindowActivity",
          "fastQuery": true,
          "actionMaximum": 1
        }
      ]
    }
  ]
});
