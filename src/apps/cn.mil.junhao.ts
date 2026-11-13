// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.mil.junhao",
  "name": "中国军号",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/13806892",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"splash_adv_ship\"]",
          "snapshotUrls": "https://i.gkd.li/i/13806892",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-右侧悬浮窗",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.mediacloud.app.nav2.AppHome21Style",
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 [vid=\"float_feedback\"]",
          "snapshotUrls": "https://i.gkd.li/i/13806896"
        },
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.mediacloud.app.nav2.AppHome21Style",
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 FrameLayout <2 [vid=\"fragment_containerx\"]",
          "snapshotUrls": "https://i.gkd.li/i/13806894"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-首页右侧浮窗",
      "enable": false,
      "activityIds": "com.mediacloud.app.nav2.AppHome21Style",
      "snapshotUrls": "https://i.gkd.li/i/13806894",
      "rules": [
        {
          "matches": "[vid=\"fragment_containerx\"] > FrameLayout > ImageView[index=2][clickable=true]",
          "activityIds": "com.mediacloud.app.nav2.AppHome21Style"
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-意见反馈浮窗",
      "enable": false,
      "activityIds": "com.mediacloud.app.nav2.AppHome21Style",
      "snapshotUrls": "https://i.gkd.li/i/13806896",
      "rules": [
        {
          "matches": "[vid=\"float_feedback\"] > ImageView[index=2][clickable=true]",
          "activityIds": "com.mediacloud.app.nav2.AppHome21Style"
        }
      ]
    }
  ]
});
