// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hyww.wisdomtree",
  "name": "智慧树",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "name": "百度广告",
          "fastQuery": true,
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "@ImageView[clickable=true][childCount=0] + RelativeLayout >(1,2) [text=\"反馈\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13799876",
            "https://i.gkd.li/i/13852024"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "百度广告 (2)",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "[id=\"android:id/content\"] >n RelativeLayout[childCount<=3] > ImageView[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13799876",
            "https://i.gkd.li/i/13852024"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告",
      "rules": [
        {
          "name": "信息流广告",
          "fastQuery": true,
          "matches": "@[vid=\"rl_down\"] <<n [vid=\"tt_ad_content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13852023"
        },
        {
          "name": "信息流广告 (2)",
          "fastQuery": true,
          "matches": "[vid=\"time_line_type\"] <<n * > * > [vid=\"rl_down\"]",
          "snapshotUrls": "https://i.gkd.li/i/13852023"
        }
      ]
    }
  ]
});
