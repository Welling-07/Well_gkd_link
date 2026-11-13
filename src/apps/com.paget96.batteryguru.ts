// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.paget96.batteryguru",
  "name": "Battery Guru",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "desc": "点击[移除广告]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "activities.MainActivity",
          "matches": "[vid=\"remove_ads\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/81d94f93-2308-4401-a151-771e5a94b79a",
          "snapshotUrls": "https://i.gkd.li/i/17538140"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告",
      "desc": "点击关闭",
      "rules": [
        {
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "matches": "[id=\"ad_container\"] >3 [id=\"video_container\"] >3 Button[clickable=true][childCount=0][id=null][text=\"\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/40c72a7b-3e68-496f-a993-43ab9c759cbd",
          "snapshotUrls": "https://i.gkd.li/i/23417592"
        },
        {
          "activityIds": ".activities.IntroActivity",
          "matches": "@Button[clickable=true][childCount=0][id=null] < View[childCount=1] <3 View - [id=\"app-interstitial-slot\"] >2 [id=\"abgcp\"]",
          "snapshotUrls": "https://i.gkd.li/i/23416244"
        }
      ]
    }
  ]
});
