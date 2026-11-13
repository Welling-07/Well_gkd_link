// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.duokan.reader",
  "name": "多看",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "fastQuery": true,
      "activityIds": "com.duokan.reader.DkMainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13248773",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".DkMainActivity",
          "matches": "[vid=\"store_feed_layer_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13248773",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.duokan.reader:id/store_feed_layer_close\"]",
          "fastQuery": true,
          "activityIds": "com.duokan.reader.DkMainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-小说推荐弹窗",
      "rules": [
        {
          "name": "退出阅读时的推荐弹窗",
          "fastQuery": true,
          "activityIds": ".DkMainActivity",
          "matches": "[vid=\"reading_stop_read_recommend_stop\"]",
          "snapshotUrls": "https://i.gkd.li/i/13413412"
        },
        {
          "name": "退出阅读时的推荐弹窗 (2)",
          "activityIds": "com.duokan.reader.DkMainActivity",
          "fastQuery": true,
          "matches": "[id=\"com.duokan.reader:id/reading_stop_read_recommend_stop\"]",
          "snapshotUrls": "https://i.gkd.li/i/13413412"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-小说页广告",
      "desc": "小说页面下方出现的条形广告",
      "fastQuery": true,
      "activityIds": "com.duokan.reader.DkMainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13497902",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".DkMainActivity",
          "matches": "@ImageView < FrameLayout[vid=\"reading__app_ad_view__close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13497902"
        },
        {
          "matches": "@ImageView < FrameLayout[id=\"com.duokan.reader:id/reading__app_ad_view__close\"]",
          "fastQuery": true,
          "activityIds": "com.duokan.reader.DkMainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "分段广告-小说页全屏卡片广告",
      "desc": "点击关闭-点击确定按钮",
      "fastQuery": true,
      "snapshotUrls": [
        "https://i.gkd.li/i/13498048",
        "https://i.gkd.li/i/13497990"
      ],
      "activityIds": ".DkMainActivity",
      "rules": [
        {
          "matches": "@TextView[vid=\"reading__app_ad_view__close\"][text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13498048",
          "fastQuery": true,
          "activityIds": ".DkMainActivity"
        },
        {
          "preKeys": 0,
          "matches": "@TextView[vid=\"ad__feedback_close_dialog_button\"][text=\"知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13497990",
          "fastQuery": true,
          "activityIds": ".DkMainActivity"
        },
        {
          "activityIds": "com.duokan.reader.DkMainActivity",
          "matches": "@TextView[id=\"com.duokan.reader:id/reading__app_ad_view__close\"][text=\"广告\"]",
          "fastQuery": true
        },
        {
          "matches": "@TextView[id=\"com.duokan.reader:id/ad__feedback_close_dialog_button\"][text=\"知道了\"]",
          "fastQuery": true,
          "activityIds": ".DkMainActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "更新提示",
      "desc": "点击以后再说",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".DkMainActivity",
          "matches": "[vid=\"general__common_dialog_view__button_frame\"] >2 [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/14007573",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.duokan.reader:id/general__common_dialog_view__button_frame\"] >2 [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/14007573",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "未分类-首页-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.duokan.reader.DkMainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13248773",
      "rules": [
        {
          "matches": "[id=\"com.duokan.reader:id/store_feed_layer_close\"]",
          "fastQuery": true,
          "activityIds": "com.duokan.reader.DkMainActivity"
        }
      ]
    }
  ]
});
