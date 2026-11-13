// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaoxiongyhh",
  "name": "小熊有好货",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.uzmap.pkg.EntranceActivity",
          "matches": "View[childCount=2] > ImageView + Button[childCount=0][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13401975",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
