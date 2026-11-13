// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.google.android.apps.translate",
  "name": "Google翻译",
  "groups": [
    {
      "key": 0,
      "name": "功能类-关闭登录备份翻译记录弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".TranslateActivity",
          "matches": [
            "[text=\"备份您的翻译历史记录\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13495796",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-登录弹窗",
      "desc": "登录备份翻译记录",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.google.android.apps.translate.TranslateActivity",
      "snapshotUrls": "https://i.gkd.li/i/13495796",
      "rules": [
        {
          "matches": "Button[id=\"com.google.android.apps.translate:id/sign_in_button\"] + [id=\"com.google.android.apps.translate:id/secondary_action_button\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.google.android.apps.translate.TranslateActivity"
        }
      ]
    }
  ]
});
