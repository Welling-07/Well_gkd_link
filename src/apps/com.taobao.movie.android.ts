// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.taobao.movie.android",
  "name": "淘票票",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".common.minuscampaign.MinusDialogActivity",
          "matches": "@[clickable=true][width<151] - [vid=\"minus_dialog\"]",
          "snapshotUrls": "https://i.gkd.li/i/31164402",
          "exampleUrls": "https://e.gkd.li/05265ff0-580f-4e4c-8432-9f45626beb5c"
        }
      ]
    },
    {
      "key": 1,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/b0b7bd5e-89fc-4079-b17f-1b1cf4938658",
          "snapshotUrls": "https://i.gkd.li/i/16498740",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
