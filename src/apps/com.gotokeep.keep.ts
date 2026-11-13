// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.gotokeep.keep",
  "name": "Keep",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".refactor.business.main.activity.MainActivity",
          "matches": "[vid=\"imgCloseHomePageDialog\"]",
          "snapshotUrls": "https://i.gkd.li/i/13761641",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "matches": "[id=\"com.gotokeep.keep:id/layoutLottie\"] +(1,2) [id=\"com.gotokeep.keep:id/imgCloseHomePageDialog\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12706102",
            "https://i.gkd.li/i/13761641"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-首页信息流广告",
      "activityIds": ".refactor.business.main.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12706115",
      "rules": [
        {
          "matches": "[vid=\"textAdTag\"] + [vid=\"imgClose\"]",
          "activityIds": ".refactor.business.main.activity.MainActivity"
        },
        {
          "matches": "[id=\"com.gotokeep.keep:id/textAdTag\"] + [id=\"com.gotokeep.keep:id/imgClose\"]",
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-运动购页面-弹窗广告",
      "rules": [
        {
          "activityIds": ".refactor.business.main.activity.MainActivity",
          "matches": "ImageView + LinearLayout > ImageView[id=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12706111"
        },
        {
          "activityIds": ".refactor.business.main.activity.MainActivity",
          "matches": "[vid=\"contentContainer\"] + [vid=\"closeImageView\"]",
          "snapshotUrls": "https://i.gkd.li/i/13766358"
        },
        {
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "matches": "ImageView + LinearLayout > ImageView[id=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12706111"
        },
        {
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "matches": "[id=\"com.gotokeep.keep:id/contentContainer\"] + [id=\"com.gotokeep.keep:id/closeImageView\"]",
          "snapshotUrls": "https://i.gkd.li/i/13766358"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-请求开启通知权限弹窗",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13761671",
      "rules": [
        {
          "matches": "@[text=\"暂不开启\"] +2 [text=\"开启通知权限\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "更新提示",
      "desc": "点击\"暂不升级\"",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[vid=\"text_secondary_action\"]",
          "exampleUrls": "https://m.gkd.li/57941037/6b0091e9-1bf1-49bd-be5c-e6997bc9accb",
          "snapshotUrls": "https://i.gkd.li/i/14126005",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.gotokeep.keep:id/text_secondary_action\"]",
          "exampleUrls": "https://m.gkd.li/57941037/6b0091e9-1bf1-49bd-be5c-e6997bc9accb",
          "snapshotUrls": "https://i.gkd.li/i/14126005",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12706097",
      "rules": [
        {
          "matches": "[text$=\"未成年人模式\"] +2 @[clickable=true] > [text=\"我知道了\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 6,
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.gotokeep.keep.refactor.business.main.activity.MainActivity",
          "matches": "[id=\"com.gotokeep.keep:id/layoutLottie\"] +(1,2) [id=\"com.gotokeep.keep:id/imgCloseHomePageDialog\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12706102",
            "https://i.gkd.li/i/13761641"
          ]
        }
      ]
    }
  ]
});
