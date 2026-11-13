// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hnnx.pmbank",
  "name": "河南农信",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13536762",
      "rules": [
        {
          "matches": "[visibleToUser=true][text=\"是否下载最新版客户端？\"] <<n [id=\"android:id/parentPanel\"] Button[text=\"取消\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-版本更新",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.yitong.mbank.app.android.activity.SplashActivity",
      "snapshotUrls": "https://i.gkd.li/i/13536762",
      "rules": [
        {
          "matches": "[text=\"是否下载最新版客户端？\"] <<n [id=\"android:id/parentPanel\"] Button[text=\"取消\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.yitong.mbank.app.android.activity.SplashActivity"
        }
      ]
    }
  ]
});
