// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "bitcoin.minning.com",
  "name": "Bitcoin Mining",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.vungle.ads.internal.ui.VungleActivity",
          "matches": "@Button[text=\"Close button\"][clickable=true][childCount=0][visibleToUser=true] <5 View[id*=\"ad\"] < View < WebView < WebView < RelativeLayout < [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/99958310-8a0e-47df-b017-b2eea86cd60e",
          "snapshotUrls": "https://i.gkd.li/i/22361347"
        },
        {
          "fastQuery": true,
          "activityIds": "com.applovin.adview.AppLovinFullscreenActivity",
          "matches": "View[childCount=0] < @FrameLayout[clickable=true][childCount=1][visibleToUser=true] - RelativeLayout[getChild(0).getChild(0).getChild(0).getChild(0).id=\"adFrame\"] < FrameLayout < [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/aff580b7-2e95-4145-b50c-07a59d1db617",
          "snapshotUrls": "https://i.gkd.li/i/22337133"
        }
      ]
    }
  ]
});
