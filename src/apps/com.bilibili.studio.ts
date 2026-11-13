// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.bilibili.studio",
  "name": "必剪",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "desc": "点击[不开启]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.bcut.homepage.widget.MainActivity",
      "rules": [
        {
          "matches": "TextView[text=\"开启设置\"] - TextView[text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/12867401",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.bcut.homepage.widget.MainActivity"
        },
        {
          "matches": "ImageView[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12908880",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.bcut.homepage.widget.MainActivity"
        },
        {
          "matches": "ImageView[vid=\"iv_push_tips_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12908886",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.bcut.homepage.widget.MainActivity"
        },
        {
          "matches": "ImageView[id=\"com.bilibili.studio:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12908880",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.bcut.homepage.widget.MainActivity"
        },
        {
          "matches": "ImageView[id=\"com.bilibili.studio:id/iv_push_tips_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12908886",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.bcut.homepage.widget.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "desc": "勾选\"忽略\"-点击\"以后再说\"",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13496049",
      "rules": [
        {
          "name": "勾选\"忽略\"",
          "matches": "[text=\"忽略此版本的更新\"][checked=false]",
          "snapshotUrls": "https://i.gkd.li/i/13496049",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "preKeys": 0,
          "name": "点击\"以后再说\"",
          "matches": "[vid=\"update_btn_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13496049",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "勾选\"忽略\" (2)",
          "matches": "[id=\"com.bilibili.studio:id/update_cbx_ignore_version\"][checked=false]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "preKeys": 2,
          "name": "点击\"以后再说\" (2)",
          "matches": "[id=\"com.bilibili.studio:id/update_btn_cancel\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-通知权限请求",
      "desc": "会出现在创作、模板、我的页面，自动点击不开启。",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.bcut.homepage.widget.MainActivity",
      "rules": [
        {
          "matches": "TextView[text=\"开启设置\"] - TextView[text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/12867401",
          "fastQuery": true,
          "activityIds": "com.bcut.homepage.widget.MainActivity"
        },
        {
          "matches": "ImageView[id=\"com.bilibili.studio:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12908880",
          "fastQuery": true,
          "activityIds": "com.bcut.homepage.widget.MainActivity"
        },
        {
          "matches": "ImageView[id=\"com.bilibili.studio:id/iv_push_tips_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12908886",
          "fastQuery": true,
          "activityIds": "com.bcut.homepage.widget.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-版本更新",
      "desc": "勾选【忽略】-点击【以后再说】",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.bcut.homepage.widget.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13496049",
      "rules": [
        {
          "name": "勾选【忽略】",
          "matches": "[id=\"com.bilibili.studio:id/update_cbx_ignore_version\"][checked=false]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.bcut.homepage.widget.MainActivity"
        },
        {
          "preKeys": 0,
          "name": "点击【以后再说】",
          "matches": "[id=\"com.bilibili.studio:id/update_btn_cancel\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.bcut.homepage.widget.MainActivity"
        }
      ]
    }
  ]
});
