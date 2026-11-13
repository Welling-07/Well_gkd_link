// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sankuai.meituan.takeoutnew",
  "name": "美团外卖",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/13415044",
        "https://i.gkd.li/i/13276882"
      ],
      "fastQuery": true,
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": "com.sankuai.waimai.business.page.homepage.MainActivity",
          "matches": "[vid=\"wm_upgrade_force_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13415044",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.sankuai.meituan.takeoutnew:id/wm_upgrade_force_cancel\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "activityIds": "com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity",
      "rules": [
        {
          "activityIds": "com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity",
          "matches": "@ImageView[clickable=true] - FrameLayout > FrameLayout > FrameLayout TextView[text=\"点我领取\"]",
          "snapshotUrls": "https://i.gkd.li/i/13175526"
        },
        {
          "fastQuery": true,
          "activityIds": "com.sankuai.waimai.business.page.homepage.MainActivity",
          "matches": "ImageView < @[clickable=true] - FrameLayout >5 [text=\"外卖神券\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25865139",
          "exampleUrls": "https://e.gkd.li/b82ac99a-4902-453f-a59d-a11bf55560aa"
        },
        {
          "name": "美团买药弹窗-点击[暂时放弃]",
          "matches": "[text=\"送亲友\"] <2 FrameLayout[childCount=2] > [text=\"暂时放弃\"][clickable=true]",
          "activityIds": "com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-直播悬浮窗",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.sankuai.waimai.business.restaurant.poicontainer.WMRestaurantActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] + [text=\"正在讲解\"]",
          "exampleUrls": "https://e.gkd.li/d7119268-6710-4bf4-a46c-eaefa4105791",
          "snapshotUrls": "https://i.gkd.li/i/16359035"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-关闭美食广告弹窗",
      "enable": false,
      "activityIds": "com.sankuai.waimai.platform.mach.dialog.DynamicDialog",
      "rules": [
        {
          "matches": "@[desc=\"关闭\"][clickable=true] > ImageView",
          "activityIds": "com.sankuai.waimai.platform.mach.dialog.DynamicDialog"
        }
      ]
    }
  ]
});
