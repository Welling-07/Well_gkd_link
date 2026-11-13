// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jxedt",
  "name": "驾校一点通",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "activityIds": "com.jxedt.ui.activitys.exercise.OrderExerciseActivity",
      "snapshotUrls": "https://i.gkd.li/i/13195641",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activitys.exercise.OrderExerciseActivity",
          "matches": "[vid=\"img_question_banner_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13195641"
        },
        {
          "matches": "[id=\"com.jxedt:id/img_question_banner_close\"]",
          "activityIds": "com.jxedt.ui.activitys.exercise.OrderExerciseActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.activitys.NewHomeActivity",
          "matches": "[vid=\"img_dialog_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13476741",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.jxedt.ui.activitys.NewHomeActivity",
          "fastQuery": true,
          "matches": "[id=\"com.jxedt:id/img_dialog_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13476741",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
