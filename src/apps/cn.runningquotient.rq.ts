// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.runningquotient.rq",
  "name": "RQrun",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动签到",
      "desc": "点击右侧[签到福利]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".page.common_page.MainActivity",
          "matches": "[vid=\"iv_main_checkin_entry\"]",
          "snapshotUrls": "https://i.gkd.li/i/16105502",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "preKeys": 0,
          "activityIds": ".page.common_page.CommonContainerActivity",
          "matches": "@Button[text=\"我知道了\"][clickable=true] <2 View < [index=parent.childCount.minus(1)] <n WebView <<2 [vid=\"common_h5_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/16105938",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "preKeys": 1,
          "activityIds": ".page.common_page.CommonContainerActivity",
          "matches": "[vid=\"iv_setting_header_view_left\"]",
          "snapshotUrls": "https://i.gkd.li/i/16105942",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "cn.runningquotient.rq.page.common_page.MainActivity",
          "matches": "[vid=\"iv_main_checkin_entry\"]",
          "snapshotUrls": "https://i.gkd.li/i/16105502",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "preKeys": 3,
          "activityIds": "cn.runningquotient.rq.page.common_page.CommonContainerActivity",
          "matches": "@[visibleToUser=true][text=\"我知道了\"] <<n [vid=\"common_h5_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/16105938",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "preKeys": 4,
          "activityIds": "cn.runningquotient.rq.page.common_page.CommonContainerActivity",
          "matches": "[vid=\"iv_setting_header_view_left\"]",
          "snapshotUrls": "https://i.gkd.li/i/16105942",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
