// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.clggjv.xcjfmd.ffo",
  "name": "Lanerc",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-公告弹窗",
      "desc": "点击[已知晓]",
      "matchTime": 14000,
      "forcedTime": 14000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@Button[desc=\"已知晓\"][clickable=true] <2 View[childCount=2][desc!=null][visibleToUser=true] <<6 FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/29703051",
          "exampleUrls": "https://e.gkd.li/96567525-3f64-4e6e-af40-6e41a81fac96",
          "matchTime": 14000,
          "forcedTime": 14000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "倒计时结束后点击[暂时跳过]",
      "rules": [
        {
          "fastQuery": true,
          "matchRoot": true,
          "activityIds": ".MainActivity",
          "matches": "@View[desc*=\"\\n暂时跳过\\n\"][childCount=4][desc!=null][desc.length>20] <<6 FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/29703246",
          "excludeSnapshotUrls": "https://i.gkd.li/i/29703192",
          "exampleUrls": "https://e.gkd.li/93c04052-3d24-4684-83ec-ccaf13557f22"
        }
      ]
    }
  ]
});
