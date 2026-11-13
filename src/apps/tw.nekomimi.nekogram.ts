// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "tw.nekomimi.nekogram",
  "name": "Nekogram",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/14229236",
        "https://i.gkd.li/i/14372061"
      ],
      "fastQuery": true,
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": "org.telegram.ui.LaunchActivity",
          "matches": "@Button[desc$=\"稍后提醒我\"] - [desc=\"立即下载\"] <3 FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14229236",
            "https://i.gkd.li/i/14372061"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[desc$=\"稍后提醒我\"] -3 * >2 [text=\"更新 Nekogram\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    }
  ]
});
