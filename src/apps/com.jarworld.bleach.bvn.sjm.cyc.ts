// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jarworld.bleach.bvn.sjm.cyc",
  "name": "次元城动漫",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/13626949",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13626950",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.kwad.sdk.api.proxy.app.KsRewardVideoActivity",
          "matches": "ViewGroup[childCount=2] > ViewGroup[childCount=2] > @ViewGroup[clickable=true][childCount=1][visibleToUser=true] > ImageView[childCount=0] <<n [vid=\"ksad_js_reward_card\"]",
          "snapshotUrls": "https://i.gkd.li/i/13635410",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.jarworld.bleach.bvn.sjm.cyc.MainActivity",
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/13626949",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.jarworld.bleach.bvn.sjm.cyc.MainActivity",
          "matches": "[id=\"com.jarworld.bleach.bvn.sjm.cyc:id/ksad_container\"] ViewGroup[childCount=1] > @ViewGroup[clickable=true][childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13626950",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.kwad.sdk.api.proxy.app.KsRewardVideoActivity",
          "matches": [
            "WebView > View > View > [text=\"广告\"]",
            "ViewGroup[childCount=2] > @ViewGroup[childCount=1] > ImageView[childCount=0]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13635410",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
