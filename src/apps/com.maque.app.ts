// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.maque.app",
  "name": "麻雀省钱",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页活动弹窗",
      "activityIds": "com.uzmap.pkg.EntranceActivity",
      "snapshotUrls": "https://i.gkd.li/i/12640100",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.uzmap.pkg.EntranceActivity",
          "matches": "ViewGroup[childCount=2] > ImageView[clickable=true] + ViewGroup[clickable=true][childCount=1] > ImageView[id=null][clickable=false]",
          "snapshotUrls": "https://i.gkd.li/i/12640100",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
