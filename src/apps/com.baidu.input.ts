// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.input",
  "name": "百度输入法",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-创作祝福弹窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/14179064",
      "rules": [
        {
          "activityIds": ".ImeAppMainActivity",
          "matches": "[id=\"android:id/content\"] >2 [vid=\"button_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14179064",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1
        },
        {
          "matches": "[id=\"android:id/content\"] >2 [vid=\"button_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-底部会员悬浮卡片",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "position": {
            "left": "width * 0.9269",
            "top": "width * 0.113"
          },
          "activityIds": ".layout.store.subshop.activity.SkinShopActivity",
          "matches": "@[desc=\"开会员，全部皮肤免费用\"] <<n [vid=\"shop_content_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/15320905",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".ImeAppMainActivity",
          "matches": "[vid=\"close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/15320990",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "position": {
            "left": "width * 0.9269",
            "top": "width * 0.113"
          },
          "activityIds": "com.baidu.input.layout.store.subshop.activity.SkinShopActivity",
          "matches": "@[desc=\"开会员，全部皮肤免费用\"] <<n [vid=\"shop_content_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/15320905",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.baidu.input.ImeAppMainActivity",
          "matches": "[vid=\"close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/15320990",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15376423",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/14406395",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-皮肤页-底部VIP弹窗",
      "enable": false,
      "activityIds": "com.baidu.input.ImeAppMainActivity",
      "snapshotUrls": "https://i.gkd.li/i/14179107",
      "rules": [
        {
          "matches": "[desc=\"开会员，全部皮肤免费用\"] +5 View[clickable=true]",
          "activityIds": "com.baidu.input.ImeAppMainActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-皮肤试用页-卡片广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.baidu.input.ImeSkinTryActivity",
      "snapshotUrls": "https://i.gkd.li/i/14205945",
      "rules": [
        {
          "matches": "[vid=\"close_btn\"]",
          "fastQuery": true,
          "activityIds": "com.baidu.input.ImeSkinTryActivity"
        }
      ]
    }
  ]
});
