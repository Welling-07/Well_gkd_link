// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver",
  "name": "TwiTake",
  "groups": [
    {
      "key": 0,
      "name": "评价提示-评分弹窗",
      "desc": "点击 LATER ",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "",
          "matches": [
            "[text=\"Love it\"][visibleToUser=true]",
            "[text=\"LATER\"][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13748858",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver:id/tv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13748858",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver.MainActivity",
          "matches": "[id=\"downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver:id/tv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13748858",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
