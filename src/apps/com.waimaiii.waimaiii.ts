// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.waimaiii.waimaiii",
  "name": "歪麦霸王餐",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.sangshen.ad_jg_flutter_sdk.SplashAdActivity",
      "rules": [
        {
          "matches": "View > View[childCount=2] > ImageView[clickable=true] + ImageView[id=\"\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13346187",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.sangshen.ad_jg_flutter_sdk.SplashAdActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[id$=\"ksad_ad_dislike\"] <n RelativeLayout - FrameLayout >3 [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/5559308c-b40c-484f-a4ee-c162b507fb27",
          "snapshotUrls": "https://i.gkd.li/i/24790719"
        },
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] <2 ViewGroup <2 ViewGroup <2 ViewGroup - ViewGroup >3 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/24656915"
        }
      ]
    },
    {
      "key": 2,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/13346166",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13346451",
            "https://i.gkd.li/i/13694837",
            "https://i.gkd.li/i/13930573"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "name": "【圆圈跳过】型-穿山甲SDK",
          "matches": "[id=\"com.byted.pangle:id/tt_splash_skip_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13346451",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"com.waimaiii.waimaiii:id/flContainer\"] >n FrameLayout[childCount=3] > FrameLayout + @View[clickable=true] + TextView",
          "snapshotUrls": "https://i.gkd.li/i/13694837",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"android:id/content\"] >9 FrameLayout + View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13930573",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        }
      ]
    }
  ]
});
