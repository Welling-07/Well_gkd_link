// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.woaika.kashen",
  "name": "我爱卡",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-定位权限",
      "desc": "点击\"暂不\"",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.WIKHomeActivity",
          "matches": "[id=\"android:id/button2\"][text=\"暂不\"]",
          "exampleUrls": "https://m.gkd.li/57941037/ae172e3f-42e2-4de2-8bd5-de7eb624c359",
          "snapshotUrls": "https://i.gkd.li/i/14070846",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.woaika.kashen.ui.WIKHomeActivity",
          "matches": "[id=\"android:id/button2\"][text=\"暂不\"]",
          "exampleUrls": "https://m.gkd.li/57941037/ae172e3f-42e2-4de2-8bd5-de7eb624c359",
          "snapshotUrls": "https://i.gkd.li/i/14070846",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-请求位置、存储权限",
      "desc": "点击\"我知道了\"",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[vid=\"tvPermissionDescDialogConfirm\"]",
          "exampleUrls": "https://m.gkd.li/57941037/6faf1f01-5b77-414b-91d8-98dcb5673f7c",
          "snapshotUrls": "https://i.gkd.li/i/14070836",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
