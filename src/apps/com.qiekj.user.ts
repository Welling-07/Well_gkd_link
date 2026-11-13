// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qiekj.user",
  "name": "胖乖生活",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[vid=\"btn_cancelUpdate\"][text*=\"暂不更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13435011",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.qiekj.user:id/btn_cancelUpdate\"][text*=\"暂不更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13435011",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-开启[自动抵扣]开关",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.scan.AfterPayUseAct",
          "matches": "@[vid=\"switchView\"][checked=false] - [vid=\"tv_automatic_use\"]",
          "exampleUrls": "https://e.gkd.li/85bbfba2-5011-4f48-a08a-45386836ebd6",
          "snapshotUrls": "https://i.gkd.li/i/17260785"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.home.MyDeviceAct",
          "matches": [
            "[text*=\"广告\"][visibleToUser=true]",
            "[text=\"关闭\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/bccff301-de1c-4d70-8b99-f9acf8e04efa",
          "snapshotUrls": "https://i.gkd.li/i/18032031"
        },
        {
          "fastQuery": true,
          "activityIds": "com.tianmu.biz.activity.InterstitialActivity",
          "matches": "[vid=\"tianmu_widget_iv_close\"]",
          "exampleUrls": "https://e.gkd.li/3f3d3462-7121-4f37-8252-1ef82e74f626",
          "snapshotUrls": "https://i.gkd.li/i/18033023"
        },
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@ImageView[clickable=true] - [text=\"|\"] - [text$=\"s\"]",
          "exampleUrls": "https://e.gkd.li/343016ff-dd8f-4a19-8e3c-63520b087e98",
          "snapshotUrls": "https://i.gkd.li/i/12903095"
        },
        {
          "fastQuery": true,
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] + RelativeLayout >2 [text=\"反馈\"]",
          "exampleUrls": "https://e.gkd.li/501c8360-a261-40fb-b361-f1c6493289d7",
          "snapshotUrls": "https://i.gkd.li/i/18094642"
        },
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"iv_cancel\" || vid=\"ad_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/13b65be1-e126-4a32-a4d8-efc0f20623bc",
          "snapshotUrls": [
            "https://i.gkd.li/i/24045175",
            "https://i.gkd.li/i/24100793"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.octopus.ad.AdActivity",
          "matches": "@ImageView[clickable=true][childCount=0][width<100 && height<100] - [text=\"反馈\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/c5363e69-4206-4266-9e45-3ce1cc650bd2",
          "snapshotUrls": "https://i.gkd.li/i/24100775"
        }
      ]
    },
    {
      "key": 3,
      "name": "开屏广告",
      "order": -10,
      "activityIds": "com.qiekj.user.MainActivity",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[id=\"com.qiekj.user:id/native_splash_view\"] >n [text^=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/12903088",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "activityIds": "com.qiekj.user.MainActivity"
        },
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_splash_root_container\"] >n [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/12903086",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000,
          "activityIds": "com.qiekj.user.MainActivity"
        },
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_splash_root_container\"] >n ViewGroup > TextView + TextView + ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12903095",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000,
          "activityIds": "com.qiekj.user.MainActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-支付自动抵扣",
      "desc": "点击【自动抵扣】开关",
      "enable": false,
      "fastQuery": true,
      "activityIds": ".ui.activity.scan.AfterPayUseAct",
      "rules": [
        {
          "matches": "[vid=\"tv_automatic_use\"] + [vid=\"switchView\"][checked=false]",
          "exampleUrls": "https://e.gkd.li/23e3fc7e-1668-448d-824e-3e7238b18972",
          "snapshotUrls": "https://i.gkd.li/i/17260785",
          "fastQuery": true,
          "activityIds": ".ui.activity.scan.AfterPayUseAct"
        }
      ]
    }
  ]
});
