// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xianfengniao.vanguardbird",
  "name": "先锋鸟",
  "groups": [
    {
      "key": 0,
      "name": "功能类-今日任务自动点击签到",
      "desc": "首页-今日任务-点击签到",
      "fastQuery": true,
      "activityIds": ".ui.common.activity.MainActivity",
      "rules": [
        {
          "matches": "[text=\"签到\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24839618",
          "fastQuery": true,
          "activityIds": ".ui.common.activity.MainActivity"
        },
        {
          "matches": "[vid=\"tv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/24839655",
          "fastQuery": true,
          "activityIds": ".ui.common.activity.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-个人页面自动点击签到",
      "desc": "个人页点击签到",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.common.activity.MainActivity",
          "matches": "@[clickable=true] > [text=\"点击签到\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24839732"
        }
      ]
    }
  ]
});
