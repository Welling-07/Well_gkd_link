// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ximalaya.ting.lite",
  "name": "喜马拉雅极速版",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image < View + View + View > View > View > TextView[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13218286"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-小说推荐弹窗",
      "fastQuery": true,
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13229127",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "matches": "[vid=\"main_iv_novel_back\"]",
          "snapshotUrls": "https://i.gkd.li/i/13229127",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_iv_novel_back\"]",
          "fastQuery": true,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-支付宝提现弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13256447",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "matches": "[vid=\"main_login_guide_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13256447",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_login_guide_close\"]",
          "fastQuery": true,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13256505",
      "rules": [
        {
          "activityIds": "com.ximalaya.ting.android.host.activity.WelComeActivity",
          "matches": "[text=\"立即开启\"] + [vid=\"host_dialog_cancel_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13256505",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"立即开启\"] + [id=\"com.ximalaya.ting.lite:id/host_dialog_cancel_iv\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-首页、推荐页-卡片广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_ad_top_home_iv_close\"]",
          "fastQuery": true,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "未分类-支付宝提现广告弹窗",
      "desc": "点击右上角圆形x",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13256447",
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_login_guide_close\"]",
          "fastQuery": true,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity"
        }
      ]
    },
    {
      "key": 6,
      "name": "未分类-关闭开启通知弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.ximalaya.ting.android.host.activity.WelComeActivity",
      "snapshotUrls": "https://i.gkd.li/i/13256505",
      "rules": [
        {
          "matches": "[text=\"立即开启\"] + [id=\"com.ximalaya.ting.lite:id/host_dialog_cancel_iv\"]",
          "fastQuery": true,
          "activityIds": "com.ximalaya.ting.android.host.activity.WelComeActivity"
        }
      ]
    }
  ]
});
