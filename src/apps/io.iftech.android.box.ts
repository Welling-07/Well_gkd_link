// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "io.iftech.android.box",
  "name": "小组件盒子",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image[text=\"\"] < View +(n) View >(2) TextView[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706209"
        },
        {
          "activityIds": ".main.HomeActivity",
          "matches": "ImageView - FrameLayout > ImageView[id=null]",
          "snapshotUrls": "https://i.gkd.li/i/12706209"
        },
        {
          "activityIds": "com.anythink.basead.ui.ATPortraitTranslucentActivity",
          "matches": "[vid=\"anythink_myoffer_btn_close_id\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706228"
        },
        {
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "@ImageView[id=null][clickable=true] + RelativeLayout + ImageView + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12706236"
        },
        {
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "@ImageView[id=null][clickable=true] + RelativeLayout > RelativeLayout > ImageView + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12706240"
        },
        {
          "activityIds": "io.iftech.android.box.main.HomeActivity",
          "matches": "ImageView - FrameLayout > ImageView[id=null]",
          "snapshotUrls": "https://i.gkd.li/i/12706209"
        },
        {
          "activityIds": "com.anythink.basead.ui.ATPortraitTranslucentActivity",
          "matches": "[id=\"io.iftech.android.box:id/anythink_myoffer_btn_close_id\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706228"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-会员限时优惠弹窗",
      "activityIds": "io.iftech.android.box.main.HomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/12706226",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.HomeActivity",
          "matches": "@[vid=\"ivClose\"] + [text^=\"限时\"][text$=\"特惠\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706226",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"io.iftech.android.box:id/ivClose\"] + [text^=\"限时\"][text$=\"特惠\"]",
          "activityIds": "io.iftech.android.box.main.HomeActivity",
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
      "snapshotUrls": "https://i.gkd.li/i/14204126",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "order": -9,
      "enable": false,
      "snapshotUrls": "https://i.gkd.li/i/12706195",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text*=\"新版本\"] +(2) [text=\"取消\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
