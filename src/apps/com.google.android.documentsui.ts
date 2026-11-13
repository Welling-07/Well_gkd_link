// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.google.android.documentsui",
  "name": "Android 系统文件选择器",
  "groups": [
    {
      "key": 0,
      "name": "功能类-授权第三方应用访问文件夹",
      "desc": "自动点击\"使用此文件夹\"->\"允许\"",
      "activityIds": "com.android.documentsui.picker.PickActivity",
      "rules": [
        {
          "matches": "[text=\"使用此文件夹\"]",
          "snapshotUrls": "https://i.gkd.li/i/12799610",
          "activityIds": "com.android.documentsui.picker.PickActivity"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"取消\"] + [text=\"允许\"]",
          "snapshotUrls": "https://i.gkd.li/i/12799603",
          "activityIds": "com.android.documentsui.picker.PickActivity"
        }
      ]
    }
  ]
});
