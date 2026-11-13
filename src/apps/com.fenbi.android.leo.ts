// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fenbi.android.leo",
  "name": "小猿口算",
  "groups": [
    {
      "key": 0,
      "name": "评价提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13226140",
      "rules": [
        {
          "activityIds": ".imgsearch.sdk.activity.NewCheckCameraActivity",
          "matches": "@[text=\"残忍拒绝\"] + [text*=\"好评\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/13226140",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"残忍拒绝\"] + [text*=\"好评\"][text.length<=10]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-评分弹窗",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": "com.fenbi.android.leo.imgsearch.sdk.activity.NewCheckCameraActivity",
      "snapshotUrls": "https://i.gkd.li/i/13226140",
      "rules": [
        {
          "matches": "@[text=\"残忍拒绝\"] + [text*=\"好评\"][text.length<=10]",
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": "com.fenbi.android.leo.imgsearch.sdk.activity.NewCheckCameraActivity"
        }
      ]
    }
  ]
});
