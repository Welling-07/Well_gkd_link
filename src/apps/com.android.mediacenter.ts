// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.mediacenter",
  "name": "华为音乐",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "action": "clickCenter",
          "matches": "[text^=\"跳过\"][text.length<=10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12901417",
            "https://i.gkd.li/i/12908742"
          ],
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
      "name": "全屏广告-VIP弹窗广告",
      "desc": "点击底部圆形x图标关闭弹窗",
      "activityIds": ".MainActivity",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12914026",
      "exampleUrls": "https://github.com/gkd-kit/inspect/assets/38517192/433dd71c-4fe5-41c9-a2da-dd3ac29f8dd4",
      "rules": [
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.android.mediacenter:id/iv_close\"]",
          "activityIds": "com.android.mediacenter.MainActivity",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-推荐卡片广告",
      "desc": "点击卡片右上角[广告],点击不感兴趣[直接关闭]",
      "fastQuery": true,
      "rules": [
        {
          "name": "点击卡片右上角[广告]",
          "activityIds": ".MainActivity",
          "matches": "[vid=\"ad_more_layout\"]",
          "snapshotUrls": "https://i.gkd.li/i/12914077",
          "fastQuery": true
        },
        {
          "name": "点击不感兴趣[直接关闭]",
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "matches": "[vid=\"label_title\"][text=\"直接关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/12914078",
          "fastQuery": true
        },
        {
          "name": "点击卡片右上角[广告] (2)",
          "activityIds": "com.android.mediacenter.MainActivity",
          "matches": "[id=\"com.android.mediacenter:id/ad_more_layout\"]",
          "snapshotUrls": "https://i.gkd.li/i/12914077",
          "exampleUrls": "https://github.com/gkd-kit/inspect/assets/38517192/37ee4a9b-2518-41e6-8227-7b204ed1bf61",
          "fastQuery": true
        },
        {
          "name": "点击不感兴趣[直接关闭] (2)",
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "matches": "[id=\"com.android.mediacenter:id/label_title\"][text=\"直接关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/12914078",
          "exampleUrls": "https://github.com/gkd-kit/inspect/assets/38517192/d098a194-80ff-49a1-b80e-191f7574a816",
          "fastQuery": true
        }
      ]
    }
  ]
});
