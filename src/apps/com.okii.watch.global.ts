// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.okii.watch.global",
  "name": "小天才",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13630943",
      "rules": [
        {
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13630943",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.okii.watch.global:id/iv_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "其他-手表安全守护弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13630944",
      "rules": [
        {
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity13",
          "matches": "[vid=\"photo_sensitive_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/8a5030a1-2b24-4a8a-a944-29d0eaabf936",
          "snapshotUrls": "https://i.gkd.li/i/13630944",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity13",
          "matches": "[id=\"com.okii.watch.global:id/photo_sensitive_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/8a5030a1-2b24-4a8a-a944-29d0eaabf936",
          "snapshotUrls": "https://i.gkd.li/i/13630944",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.okii.watch.global:id/photo_sensitive_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});
