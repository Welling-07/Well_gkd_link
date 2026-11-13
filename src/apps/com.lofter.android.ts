// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lofter.android",
  "name": "LOFTER",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".global.home.TabHomeActivity",
          "matches": "[vid=\"global_ad_layout\"] > [vid=\"close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/0559eada-7899-4c8a-8634-ef3f55227492",
          "snapshotUrls": "https://i.gkd.li/i/16494241"
        },
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.lofter.android.global.home.TabHomeActivity",
          "matches": "[vid=\"global_ad_layout\"] > [vid=\"close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/0559eada-7899-4c8a-8634-ef3f55227492",
          "snapshotUrls": "https://i.gkd.li/i/16494241"
        }
      ]
    },
    {
      "key": 1,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15023951",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/14204158",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000,
          "fastQuery": true
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/14204158",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
