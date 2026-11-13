// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ideal.flyerteacafes",
  "name": "飞客",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.ideal.flyerteacafes.ui.HomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/13466119",
      "rules": [
        {
          "activityIds": [
            ".ui.HomeActivity",
            ".ui.activity.thread.NormalThreadActivity"
          ],
          "matches": "@[vid=\"close\" || vid=\"iv_close\"] - FrameLayout > [vid=\"iv_adv_tip\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13466119",
            "https://i.gkd.li/i/27550981"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.ideal.flyerteacafes:id/close\"] - FrameLayout > [id=\"com.ideal.flyerteacafes:id/tv_time_down\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ideal.flyerteacafes.ui.HomeActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-信息流广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.thread.NormalThreadActivity",
          "matches": "@TextView[visibleToUser=true] <3 View < [id=null][childCount=3] <n View[childCount>10] <6 [id=\"comment-list\"] <n View[childCount>10] < WebView < WebView < [vid=\"webContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/27529035"
        }
      ]
    }
  ]
});
