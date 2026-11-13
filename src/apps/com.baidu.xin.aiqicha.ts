// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.xin.aiqicha",
  "name": "爱企查",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/12755738",
        "https://i.gkd.li/i/12755762"
      ],
      "rules": [
        {
          "activityIds": "com.baidu.newbridge.fast.MainFastActivity",
          "matches": "[vid=\"update_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12755738",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.baidu.xin.aiqicha:id/update_cancel\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "desc": "自动点击\"不允许\"/关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "name": "点击不允许",
          "activityIds": "com.baidu.newbridge.fast.MainFastActivity",
          "matches": "[vid=\"notice_dialog_cancel_iv\"]",
          "exampleUrls": "https://m.gkd.li/57941037/9c26bb3a-d770-429a-b211-46b97a47f5f0",
          "snapshotUrls": "https://i.gkd.li/i/12755733",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "点击关闭",
          "activityIds": "com.baidu.newbridge.fast.MainFastActivity",
          "matches": "@[vid=\"close\"] +2 [text=\"打开消息通知\"]",
          "exampleUrls": "https://m.gkd.li/57941037/92a1bd1b-91c5-42a8-830b-9b721815d9a4",
          "snapshotUrls": "https://i.gkd.li/i/12755756",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "点击不允许 (2)",
          "matches": "[id=\"com.baidu.xin.aiqicha:id/notice_dialog_cancel_iv\"]",
          "exampleUrls": "https://m.gkd.li/57941037/9c26bb3a-d770-429a-b211-46b97a47f5f0",
          "snapshotUrls": "https://i.gkd.li/i/12755733",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "点击关闭 (2)",
          "matches": "@[id=\"com.baidu.xin.aiqicha:id/close\"] +2 [text=\"打开消息通知\"]",
          "exampleUrls": "https://m.gkd.li/57941037/92a1bd1b-91c5-42a8-830b-9b721815d9a4",
          "snapshotUrls": "https://i.gkd.li/i/12755756",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-请求通知权限弹窗",
      "desc": "自动点击【不允许】",
      "enable": false,
      "activityIds": "com.baidu.newbridge.fast.MainFastActivity",
      "snapshotUrls": "https://i.gkd.li/i/12755733",
      "rules": [
        {
          "matches": "[id=\"com.baidu.xin.aiqicha:id/notice_dialog_cancel_iv\"]",
          "activityIds": "com.baidu.newbridge.fast.MainFastActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-请求通知权限提示信息",
      "desc": "自动点击x按钮",
      "enable": false,
      "activityIds": "com.baidu.newbridge.fast.MainFastActivity",
      "snapshotUrls": "https://i.gkd.li/i/12755756",
      "rules": [
        {
          "matches": "@[id=\"com.baidu.xin.aiqicha:id/close\"] +2 [text=\"打开消息通知\"]",
          "activityIds": "com.baidu.newbridge.fast.MainFastActivity"
        }
      ]
    }
  ]
});
