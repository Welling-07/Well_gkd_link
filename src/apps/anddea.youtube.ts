// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "anddea.youtube",
  "name": "YouTube RVX",
  "groups": [
    {
      "key": 0,
      "name": "功能类-评论区自动点击[翻译成中文]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "matches": "@Button[desc^=\"翻译成中文\"][visibleToUser=true] <<n [vid=\"results\"]",
          "exampleUrls": "https://e.gkd.li/c16f1e91-7c74-46d4-bcb2-dc15e9b6812d",
          "snapshotUrls": "https://i.gkd.li/i/18287650"
        }
      ]
    }
  ]
});
