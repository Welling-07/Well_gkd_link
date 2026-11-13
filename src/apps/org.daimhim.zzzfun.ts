// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "org.daimhim.zzzfun",
  "name": "ZzzFun",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "activityIds": "org.daimhim.zzzfun.ui.home.video.VideoDetailsActivity",
      "snapshotUrls": "https://i.gkd.li/i/13402608",
      "rules": [
        {
          "activityIds": ".ui.home.video.VideoDetailsActivity",
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402608"
        },
        {
          "matches": "ImageView -2 ImageView + FrameLayout > ImageView",
          "activityIds": "org.daimhim.zzzfun.ui.home.video.VideoDetailsActivity"
        }
      ]
    }
  ]
});
