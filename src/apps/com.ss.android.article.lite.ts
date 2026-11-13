// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.article.lite",
  "name": "头条搜索极速版",
  "groups": [
    {
      "key": 0,
      "name": "功能类-全自动续听书时长",
      "desc": "<03:45有效,时长不足自动看广告",
      "fastQuery": true,
      "activityIds": [
        "com.ss.android.list.news.activity.AudioNewsListActivity",
        "com.ss.android.excitingvideo.ExcitingVideoActivity"
      ],
      "rules": [
        {
          "name": "③已完成-关闭",
          "matches": "[text^=\"03:\" && text.substring(3,5).toInt()>45] - [text=\"剩余时长\"] < * -3 @ImageView[width<102 && height<102] + [text^=\"领取成功\"]",
          "snapshotUrls": "https://i.gkd.li/i/26456102",
          "fastQuery": true,
          "activityIds": [
            "com.ss.android.list.news.activity.AudioNewsListActivity",
            "com.ss.android.excitingvideo.ExcitingVideoActivity"
          ]
        },
        {
          "name": "①点击看视频",
          "matches": "[text.get(1).toInt()<3 || (text^=\"03:\" && text.substring(3,5).toInt()<45)] - [text=\"剩余时长\"] < * + [text^=\"看视频领取\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/26456075",
          "exampleUrls": "https://e.gkd.li/dec3910f-ee59-482b-99e0-aba6de33c67c",
          "fastQuery": true,
          "activityIds": [
            "com.ss.android.list.news.activity.AudioNewsListActivity",
            "com.ss.android.excitingvideo.ExcitingVideoActivity"
          ]
        },
        {
          "preKeys": 1,
          "name": "②领取成功x掉",
          "matches": "ImageView < @ViewGroup[childCount=1][visibleToUser=true] <n ViewGroup[childCount>6] <<6 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/26456098",
          "excludeSnapshotUrls": "https://i.gkd.li/i/26456099",
          "exampleUrls": "https://e.gkd.li/720a223e-70af-455a-965c-dcf1a7228921",
          "fastQuery": true,
          "activityIds": [
            "com.ss.android.list.news.activity.AudioNewsListActivity",
            "com.ss.android.excitingvideo.ExcitingVideoActivity"
          ]
        }
      ]
    },
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
      "key": 3,
      "name": "功能类-首页-你可能感兴趣的人",
      "enable": false,
      "activityIds": "com.ss.android.article.lite.activity.SplashActivity",
      "snapshotUrls": "https://i.gkd.li/i/12705427",
      "rules": [
        {
          "matches": "[text=\"你可能感兴趣的人\"] + [desc=\"关闭\"]",
          "activityIds": "com.ss.android.article.lite.activity.SplashActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-任务页面-签到弹窗",
      "enable": false,
      "activityIds": "com.ss.android.article.lite.activity.SplashActivity",
      "rules": [
        {
          "matches": "UIView[clickable=false] + LynxFlattenUI[clickable=true][visibleToUser=true]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/12705439",
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
