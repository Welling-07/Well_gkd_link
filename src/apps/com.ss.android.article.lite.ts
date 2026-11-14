// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.article.lite",
  "name": "头条搜索极速版",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页-红包弹窗",
      "enable": false,
      "activityIds": "com.ss.android.article.lite.activity.SplashActivity",
      "snapshotUrls": "https://i.gkd.li/i/12705414",
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] + [text$=\"现金红包\"]",
          "activityIds": "com.ss.android.article.lite.activity.SplashActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-首页-右侧悬浮广告",
      "enable": false,
      "activityIds": "com.ss.android.article.lite.activity.SplashActivity",
      "snapshotUrls": "https://i.gkd.li/i/12705452",
      "rules": [
        {
          "matches": "FrameLayout[id!=null] > @ImageView[id!=null][clickable=true] + ImageView[id!=null]",
          "activityIds": "com.ss.android.article.lite.activity.SplashActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-任务页面-右侧悬浮红包",
      "enable": false,
      "activityIds": "com.ss.android.article.lite.activity.SplashActivity",
      "snapshotUrls": "https://i.gkd.li/i/12705447",
      "rules": [
        {
          "matches": "UIScrollView + UIView + UISvg",
          "activityIds": "com.ss.android.article.lite.activity.SplashActivity"
        }
      ]
    },
    {
      "key": 6,
      "name": "全屏广告-任务页面-答题弹窗",
      "enable": false,
      "activityIds": "com.ss.android.article.lite.activity.SplashActivity",
      "rules": [
        {
          "matches": "[text^=\"答对\"][text$=\"金币\"] + FlattenUIImage[clickable=true]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/12705456",
          "activityIds": "com.ss.android.article.lite.activity.SplashActivity"
        }
      ]
    },
    {
      "key": 7,
      "name": "全屏广告-搜索页面-搜索得金币弹窗",
      "enable": false,
      "activityIds": "com.android.bytedance.search.SearchActivity",
      "rules": [
        {
          "matches": "[text^=\"搜索\"][text$=\"金币\"] + LynxFlattenUI + UISvg",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/12705468",
          "activityIds": "com.android.bytedance.search.SearchActivity"
        }
      ]
    }
  ]
});
