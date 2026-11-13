// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hbsclj.uth",
  "name": "栗子漫画",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-公告弹窗",
      "desc": "点击x掉",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "WebView[text=\"公告\"] >3 [text=\"✕\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/29899905",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-阅读页底部横幅",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@ImageView[visibleToUser=true][width<64 && height<64][left>getPrev(1).width.div(10).times(9)][top>getPrev(1).height.div(8).times(7)] < FrameLayout[childCount=1] <<n [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/29899896"
        }
      ]
    }
  ]
});
