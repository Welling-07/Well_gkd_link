// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.speedtest.lite",
  "name": "网速管家极速版",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "activityIds": "cn.speedtest.lite.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12715483",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.MainActivity",
          "matches": "@[vid=\"iv_close\"] - [vid=\"ll_main_pane\"] >2 [vid=\"tv_upgrade_content\"]",
          "snapshotUrls": "https://i.gkd.li/i/12715483",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"cn.speedtest.lite:id/iv_close\"] - [id=\"cn.speedtest.lite:id/ll_main_pane\"] >2 [id=\"cn.speedtest.lite:id/tv_upgrade_content\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "cn.speedtest.lite.main.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-新人专享优惠弹窗",
      "activityIds": "cn.speedtest.lite.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12715511",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.MainActivity",
          "matches": "@[vid=\"iv_close\"] - RelativeLayout >n [vid=\"ad_banner\"]",
          "snapshotUrls": "https://i.gkd.li/i/12715511",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"cn.speedtest.lite:id/iv_close\"] - RelativeLayout >n [id=\"cn.speedtest.lite:id/ad_banner\"]",
          "activityIds": "cn.speedtest.lite.main.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
