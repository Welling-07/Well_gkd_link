// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zuoyebang.knowledge",
  "name": "作业帮家长版",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13695522",
      "rules": [
        {
          "matches": "[vid=\"cancel_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13695522",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.zuoyebang.knowledge:id/cancel_button\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "评价提示-赏好评弹窗",
      "fastQuery": true,
      "activityIds": "com.baidu.homework.activity.init.InitActivity",
      "snapshotUrls": "https://i.gkd.li/i/13043228",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.baidu.homework.activity.init.InitActivity",
          "matches": "TextView[vid=\"btn_cancle\"]",
          "snapshotUrls": "https://i.gkd.li/i/13043228",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "TextView[id=\"com.zuoyebang.knowledge:id/btn_cancle\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.baidu.homework.activity.init.InitActivity"
        }
      ]
    }
  ]
});
