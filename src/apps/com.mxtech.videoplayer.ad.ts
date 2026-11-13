// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mxtech.videoplayer.ad",
  "name": "MX 播放器",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-谷歌广告",
      "activityIds": ".ActivityMediaList",
      "rules": [
        {
          "matches": "[desc=\"Advertisement\"] + View >(2) View + Button[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12642204",
          "activityIds": ".ActivityMediaList"
        },
        {
          "matches": "[desc=\"Advertisement\"] + View >(2) View + Button[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642204"
          ],
          "activityIds": "com.mxtech.videoplayer.ad.ActivityMediaList"
        }
      ]
    }
  ]
});
