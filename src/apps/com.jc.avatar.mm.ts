// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jc.avatar.mm",
  "name": "萌妹",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "activityIds": "com.jc.avatar.mm.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13188475",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "snapshotUrls": "https://i.gkd.li/i/13188475",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageView -2 FrameLayout > FrameLayout > FrameLayout > FrameLayout > ImageView",
          "activityIds": "com.jc.avatar.mm.MainActivity",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-广告弹窗",
      "enable": false,
      "activityIds": "com.jc.avatar.mm.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13188475",
      "rules": [
        {
          "matches": "ImageView -2 FrameLayout > FrameLayout > FrameLayout > FrameLayout > ImageView",
          "activityIds": "com.jc.avatar.mm.MainActivity"
        }
      ]
    }
  ]
});
