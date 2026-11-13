// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.bankabc",
  "name": "中国农业银行",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "matchRoot": true,
      "rules": [
        {
          "matches": "[vid=\"close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/67cfc2f8-a108-4382-976a-0da7d13764e9",
          "snapshotUrls": "https://i.gkd.li/i/14179162",
          "matchRoot": true,
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/a5f6ec81-04f6-4678-b1d5-f2f326521945",
          "snapshotUrls": "https://i.gkd.li/i/17879768",
          "matchRoot": true,
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"com.android.bankabc:id/close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/67cfc2f8-a108-4382-976a-0da7d13764e9",
          "snapshotUrls": "https://i.gkd.li/i/14179162",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0,
          "matchRoot": true
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchTime": 10000,
      "activityIds": ".MainActivity",
      "rules": [
        {
          "matches": "[vid=\"upgrade_checkbox\"][checked=false]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14208545",
            "https://i.gkd.li/i/16410094"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "[vid=\"negativeTextView\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14208545",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "[vid=\"iv_negative\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/16410094",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        },
        {
          "matches": "[vid=\"upgrade_checkbox\"][checked=false]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14208545",
            "https://i.gkd.li/i/16410094"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000,
          "activityIds": ".MainActivity"
        },
        {
          "preKeys": 3,
          "matches": "[vid=\"negativeTextView\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14208545",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000,
          "activityIds": ".MainActivity"
        },
        {
          "preKeys": 3,
          "matches": "[vid=\"iv_negative\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/16410094",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000,
          "activityIds": ".MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-定位权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/14208572",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[text=\"允许获取位置信息\"] +n * > [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/14208572",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"允许获取位置信息\"] +n * > [text=\"取消\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/14208621",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[vid=\"iv_notification_reminder_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14208621",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[vid=\"iv_notification_reminder_dialog_close\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        }
      ]
    }
  ]
});
