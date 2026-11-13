// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.snda.wifilocating",
  "name": "WiFi万能钥匙",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.lantern.start.main.activity.HomeMainActivity",
          "matches": "[vid=\"interstitial_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/14032794"
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text=\"反馈\"] + View[visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14256643"
        },
        {
          "fastQuery": true,
          "activityIds": "com.zm.wfsdk.core.activity.WfInterstitialActivity",
          "matches": "@[vid=\"wf_interstitial_close_iv\"] < * >5 [vid=\"wf_interstitial_action_tv\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14927523",
            "https://i.gkd.li/i/15320417"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.wifitutu.ui.main.MainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": "https://i.gkd.li/i/14964913"
        },
        {
          "activityIds": "com.wifitutu.ui.main.MainActivity",
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/14964913"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-连接WiFi后弹出的广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.wifitutu.ui.tools.SpeedUpBActivity",
          "matches": "[vid=\"native_express_close_proxy\"]",
          "snapshotUrls": "https://i.gkd.li/i/14622506"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-加速成功后自动点击返回",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.wifitutu.ui.tools.SpeedUpActivity",
          "matches": "[vid=\"success_desc\"] + [vid=\"back_layout\"]",
          "exampleUrls": "https://m.gkd.li/57941037/90a4d16d-b39b-4068-882b-d22acca2b632",
          "snapshotUrls": "https://i.gkd.li/i/14811531"
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-连接WiFi界面右侧悬浮广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.wifitutu.ui.main.MainActivity",
          "matches": "[vid=\"img_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15284722"
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-[我的]界面广告卡片",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.wifitutu.ui.main.MainActivity",
          "matches": "[vid=\"native_express_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15284730"
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-“我的”界面广告卡片",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.wifitutu.ui.main.MainActivity",
          "matches": "@* - [vid=\"native_express_ad_logo_tv\"]",
          "snapshotUrls": "https://i.gkd.li/i/15284730"
        }
      ]
    },
    {
      "key": 6,
      "name": "全屏广告-广告弹窗",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.zm.wfsdk.core.activity.WfInterstitialActivity",
          "matches": "[vid=\"wf_interstitial_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/14927523"
        }
      ]
    }
  ]
});
