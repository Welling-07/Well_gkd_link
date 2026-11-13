// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.myzaker.ZAKER_Phone",
  "name": "ZAKER",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "fastQuery": true,
      "priorityTime": 10000,
      "actionMaximumKey": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/0c69945f-ac0e-44a8-a0a3-95544e53849f",
          "snapshotUrls": "https://i.gkd.li/i/20689993",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "position": {
            "left": "width * 0.9009",
            "top": "width * 0.075"
          },
          "matches": "[vid=\"cover_pic\"]",
          "exampleUrls": "https://m.gkd.li/57941037/c140267a-a48a-45a9-9303-7507aa2008e4",
          "snapshotUrls": "https://i.gkd.li/i/13694552",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "position": {
            "left": "width * 0.9009",
            "top": "width * 0.075"
          },
          "fastQuery": true,
          "matches": "[id=\"com.myzaker.ZAKER_Phone:id/cover_pic\"]",
          "exampleUrls": "https://m.gkd.li/57941037/c140267a-a48a-45a9-9303-7507aa2008e4",
          "snapshotUrls": "https://i.gkd.li/i/13694552",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "position": {
            "left": "width * 0.8871",
            "top": "width * 0.0851"
          },
          "matches": "[vid=\"cover_pic\"]",
          "snapshotUrls": "https://i.gkd.li/i/14958042",
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1,
          "fastQuery": true,
          "priorityTime": 10000,
          "actionMaximumKey": 0
        }
      ]
    }
  ]
});
