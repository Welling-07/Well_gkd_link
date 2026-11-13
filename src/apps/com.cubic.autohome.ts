// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cubic.autohome",
  "name": "汽车之家",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "activityIds": "com.cubic.autohome.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12836324",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[vid=\"operate_show_exit_layout\"]",
          "snapshotUrls": "https://i.gkd.li/i/12836324",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.cubic.autohome:id/operate_show_exit_layout\"]",
          "activityIds": "com.cubic.autohome.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告",
      "rules": [
        {
          "name": "领福利悬浮窗",
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@ImageView[visibleToUser=true] < * <2 * - [id=\"android:id/tabhost\"]",
          "snapshotUrls": "https://i.gkd.li/i/13885414"
        },
        {
          "name": "直播悬浮窗",
          "activityIds": ".MainActivity",
          "matches": "[id=\"com.autohome.main.car:id/image_live_close\" || id=\"com.autohome.main.car:id/view_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/24221462"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-右下角领福利悬浮窗",
      "desc": "点击X",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.cubic.autohome.MainActivity",
          "matches": "@ImageView[visibleToUser=true] < * <2 * - [id=\"android:id/tabhost\"]",
          "snapshotUrls": "https://i.gkd.li/i/13885414",
          "fastQuery": true
        }
      ]
    }
  ]
});
