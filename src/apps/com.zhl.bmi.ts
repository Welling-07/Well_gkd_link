// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zhl.bmi",
  "name": "乐看视频",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "activityIds": ".MainActivity",
      "fastQuery": true,
      "snapshotUrls": [
        "https://i.gkd.li/i/13255787",
        "https://i.gkd.li/i/13255786",
        "https://i.gkd.li/i/13542343"
      ],
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13255787",
            "https://i.gkd.li/i/13255786"
          ],
          "fastQuery": true,
          "activityIds": ".MainActivity"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "snapshotUrls": "https://i.gkd.li/i/13542343",
          "fastQuery": true,
          "activityIds": ".MainActivity"
        },
        {
          "matches": "@ImageView < FrameLayout[childCount=1] <(2,3) FrameLayout <(1,2) FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.zhl.bmi.MainActivity",
          "fastQuery": true
        }
      ]
    }
  ]
});
