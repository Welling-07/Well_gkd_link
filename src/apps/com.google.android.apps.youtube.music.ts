// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.google.android.apps.youtube.music",
  "name": "YouTube Music",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-播放界面广告",
      "activityIds": "com.google.android.apps.youtube.music.activities.MusicActivity",
      "snapshotUrls": "https://i.gkd.li/i/13196056",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activities.MusicActivity",
          "matches": "[vid=\"skip_ad_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13196056"
        },
        {
          "matches": "[id=\"com.google.android.apps.youtube.music:id/skip_ad_text\"]",
          "activityIds": "com.google.android.apps.youtube.music.activities.MusicActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-会员广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activities.MusicActivity",
          "matches": "@[desc=\"Close\" || desc=\"No thanks\"][visibleToUser=true] <<n [vid=\"custom\"]",
          "exampleUrls": "https://e.gkd.li/42b2cb6d-b1e2-4cb1-84d8-399939263711",
          "snapshotUrls": [
            "https://i.gkd.li/i/18542111",
            "https://i.gkd.li/i/18727504"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".activities.MusicActivity",
          "matches": "[text=\"No thanks\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/eb519d7d-8d6c-4196-bf23-ea8c0511cfa9",
          "snapshotUrls": "https://i.gkd.li/i/19442247"
        }
      ]
    },
    {
      "key": 2,
      "name": "通知提示-隐私提醒",
      "desc": "点击[OK]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activities.MusicActivity",
          "matches": [
            "[text=\"Privacy check-up\"][visibleToUser=true]",
            "[text=\"Ok\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/bffc2f66-8538-4970-9b7b-9da2e4a397ab",
          "snapshotUrls": "https://i.gkd.li/i/18546896",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
