// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "io.microshow.fm",
  "name": "畅听FM",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.MainActivity",
          "matches": "@Button[childCount=0][clickable=true][visibleToUser=true] <2 FrameLayout < RelativeLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/14953007",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "io.microshow.fm.ui.activity.MainActivity",
          "matches": "[id=\"android:id/content\"] > RelativeLayout > FrameLayout[childCount=2] > Button[clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14953007",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
