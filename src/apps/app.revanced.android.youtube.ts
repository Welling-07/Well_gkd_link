// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "app.revanced.android.youtube",
  "name": "YouTube ReVanced",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-会员广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "matches": "@[desc=\"不用了，谢谢\" || desc=\"关闭\" || desc=\"我暂时不要\" || desc=\"Close\" || desc=\"No thanks\"][visibleToUser=true][clickable=true] <n ViewGroup < [vid=\"custom\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/20856330",
            "https://i.gkd.li/i/28311636"
          ],
          "exampleUrls": [
            "https://e.gkd.li/3c45eae4-383d-489b-ae58-f58d70ea4478",
            "https://e.gkd.li/28d7203a-d807-4f0d-be86-2b76a06a30e8"
          ]
        }
      ]
    }
  ]
});
