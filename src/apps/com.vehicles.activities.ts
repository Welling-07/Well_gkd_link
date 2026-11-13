// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vehicles.activities",
  "name": "车旺大卡",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "name": "卡片弹窗",
          "fastQuery": true,
          "activityIds": [
            "com.sinoiov.cwza.discovery.activity.SpyDetailFragmentActivity",
            ".activity.MainActivity",
            "com.sinoiov.cwza.discovery.activity.TrackDetailActivity"
          ],
          "matches": "[vid=\"iv_close\" || vid=\"iv_cancle\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13952578",
            "https://i.gkd.li/i/13952509",
            "https://i.gkd.li/i/13952532"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.sinoiov.cwza.discovery.activity.DrivingDynamicsActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^=\"立即\" || text=\"查看详情\" || text=\"了解更多\" || text=\"去微信看看\" || text$=\"第三方应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\" || text=\"下载应用\" || text=\"打开快应用\"]",
          "snapshotUrls": "https://i.gkd.li/i/13952519"
        },
        {
          "name": "卡片弹窗 (2)",
          "fastQuery": true,
          "activityIds": [
            "com.sinoiov.cwza.discovery.activity.SpyDetailFragmentActivity",
            "com.vehicles.activities.activity.MainActivity",
            "com.sinoiov.cwza.discovery.activity.TrackDetailActivity"
          ],
          "matches": "[id*=\"iv_close\" || id*=\"iv_cancle\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13952578",
            "https://i.gkd.li/i/13952509",
            "https://i.gkd.li/i/13952532"
          ]
        },
        {
          "activityIds": "com.sinoiov.cwza.discovery.activity.DrivingDynamicsActivity",
          "matches": "[id=\"android:id/content\"] >5 ImageView[visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13952519"
        }
      ]
    }
  ]
});
