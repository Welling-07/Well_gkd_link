// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.heytap.music",
  "name": "音乐",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/14987173",
      "rules": [
        {
          "activityIds": "com.allsaints.music.MainActivity",
          "matches": "@ImageView[clickable=true] + [text=\"检测到新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/14987173",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView[clickable=true] + [text=\"检测到新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/14987173",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.allsaints.ad.sjy.reward.SRewardLoadingActivity",
            "com.allsaints.music.MainActivity"
          ],
          "matches": [
            "[vid=\"btnFreeListening\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16200623",
            "https://i.gkd.li/i/21175600"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.allsaints.ad.sjy.reward.SRewardLoadingActivity",
          "matches": "@[vid=\"close\"] - [text=\"看广告免费听 VIP 歌曲\"]",
          "snapshotUrls": "https://i.gkd.li/i/16200623"
        }
      ]
    }
  ]
});
