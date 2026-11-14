// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.chaoxing.mobile",
  "name": "学习通",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchRoot": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.SplashActivity",
          "matches": "@[clickable=true] > [text^=\"跳过\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/26644070",
          "exampleUrls": "https://e.gkd.li/42ea0ef8-e1c6-43e8-8f48-971439c19d58",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchRoot": true
        }
      ]
    },
    {
      "key": 3,
      "name": "通知提示-剪贴板内容已更新",
      "desc": "点击[知道了]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".notify.ui.NoticeBodyActivity",
            ".webapp.ui.WebAppCommonViewer",
            ".group.ui.TopicBodyActivity"
          ],
          "matches": [
            "[text*=\"剪贴板内容已更新\"][visibleToUser=true]",
            "[text=\"知道了\"][clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/33947533",
            "https://i.gkd.li/i/34332781",
            "https://i.gkd.li/i/34748077"
          ],
          "exampleUrls": "https://e.gkd.li/c5a068c5-33ee-4911-a1a8-238b73097f53"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13197374",
      "rules": [
        {
          "activityIds": ".main.ui.MainTabActivity",
          "matches": "[vid=\"vNotificationItemClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/13197374",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.chaoxing.mobile:id/vNotificationItemClose\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 9,
      "name": "未分类-开启消息通知",
      "desc": "自动点击关闭",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.chaoxing.mobile.main.ui.MainTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/13197374",
      "rules": [
        {
          "matches": "[id=\"com.chaoxing.mobile:id/vNotificationItemClose\"]",
          "fastQuery": true,
          "activityIds": "com.chaoxing.mobile.main.ui.MainTabActivity"
        }
      ]
    }
  ]
});
