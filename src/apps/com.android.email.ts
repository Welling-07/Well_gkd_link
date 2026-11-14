// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.email",
  "name": "(小米)电子邮件",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-自启动",
      "desc": "点击[取消]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.wps.multiwindow.main.HomeActivity",
          "matches": [
            "[text*=\"自启动权限未开启\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "exampleUrls": "https://e.gkd.li/1eacdaf8-1405-44d8-a9b9-228e913c5180",
          "snapshotUrls": "https://i.gkd.li/i/17276404",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.wps.multiwindow.main.HomeActivity",
          "matches": [
            "[text^=\"检测到您的自启动权限未开启\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "exampleUrls": "https://e.gkd.li/1eacdaf8-1405-44d8-a9b9-228e913c5180",
          "snapshotUrls": "https://i.gkd.li/i/17276404",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "评价提示",
      "desc": "点击[暂不评价]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.wps.multiwindow.main.HomeActivity",
          "matches": "[text=\"暂不评价\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/28678584",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
