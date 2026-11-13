// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.icredit",
  "name": "企查查",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-VIP弹窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.MainMenuActivity",
          "matches": "@Image[childCount=0][visibleToUser=true] <2 View < View < WebView[text$=\"限时返场\" || text=\"首单有礼\"] < WebView < LinearLayout < LinearLayout < FrameLayout < [id=\"android:id/content\"]",
          "exampleUrls": "https://m.gkd.li/57941037/eb232325-12e4-495f-a9f3-5f853d5e66f9",
          "snapshotUrls": [
            "https://i.gkd.li/i/14720494",
            "https://i.gkd.li/i/15112280"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.android.icredit.ui.MainMenuActivity",
          "matches": "[text$=\"限时返场\" || text=\"首单有礼\"] >2 View[childCount=2] > Image[visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/eb232325-12e4-495f-a9f3-5f853d5e66f9",
          "snapshotUrls": [
            "https://i.gkd.li/i/14720494",
            "https://i.gkd.li/i/15112280"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
