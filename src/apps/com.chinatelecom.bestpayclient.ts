// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.chinatelecom.bestpayclient",
  "name": "翼支付",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13391544",
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": "[vid=\"bupdate_tv_bottom_tip\"]",
          "snapshotUrls": "https://i.gkd.li/i/13391544",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/bupdate_tv_bottom_tip\"]",
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
      "rules": [
        {
          "name": "权益页",
          "fastQuery": true,
          "activityIds": ".ui.MainActivity",
          "matches": "[name$=\"Dialog\"] >4 @[clickable=true][visibleToUser=true] - View >(1,2) [childCount=0][text=\"\"] + Image[text!=null][childCount=0] <<n [vid=\"best_h5_container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13402692",
            "https://i.gkd.li/i/24428096"
          ]
        },
        {
          "name": "首页1",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".ui.MainActivity",
          "matches": "[vid=\"iv_dialog_close_one\" || vid=\"iv_sky_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455790",
            "https://i.gkd.li/i/15369212",
            "https://i.gkd.li/i/18160066"
          ]
        },
        {
          "name": "首页2",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "matches": "[text=\"甜橙信用卡\"] >2  View[childCount=2] > @Image[clickable=true][text!=null] <<n [vid=\"h5_pc_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13626324"
        },
        {
          "name": "借贷页",
          "activityIds": ".ui.MainActivity",
          "fastQuery": true,
          "matches": "@[clickable=true][text=\"\"][visibleToUser=true] <<n [vid=\"best_h5_container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455929",
            "https://i.gkd.li/i/24427912"
          ]
        },
        {
          "name": "信用卡页面",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "matches": "[vid=\"h5_pc_container\"] >2 bc >5 View > View >3 View[childCount=3] > @[clickable=true][width<150 && height<150][visibleToUser=true] + * + View[childCount=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13696322",
            "https://i.gkd.li/i/13696323"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/24420758"
        },
        {
          "name": "权益页 (2)",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "fastQuery": true,
          "matches": "Dialog >3 View[childCount=2] > @View[clickable=true] > Image[childCount=0] <<n [id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402692"
        },
        {
          "name": "首页1 (2)",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "fastQuery": true,
          "matches": "[vid=\"iv_dialog_close_one\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455790",
            "https://i.gkd.li/i/15369212"
          ]
        },
        {
          "name": "首页2 (2)",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "fastQuery": true,
          "matches": "[text=\"甜橙信用卡\"] >2  View[childCount=2] > @Image[clickable=true][text!=null] <<n [id=\"com.chinatelecom.bestpayclient:id/h5_pc_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13626324"
        },
        {
          "name": "借贷页 (2)",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "fastQuery": true,
          "matches": "@View[clickable=true][text=\"\"] <<n [id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13455929"
        },
        {
          "name": "信用卡页面 (2)",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/h5_pc_container\"] >n View[childCount=3] > @[clickable=true] + * + [childCount=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13696322",
            "https://i.gkd.li/i/13696323"
          ]
        },
        {
          "name": "权益页 (3)",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "fastQuery": true,
          "matches": "Image < @View[clickable=true][index=1] <<n Dialog <<n [id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402692"
        },
        {
          "name": "首页1 (3)",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "fastQuery": true,
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/iv_dialog_close_one\"]",
          "snapshotUrls": "https://i.gkd.li/i/13455790"
        },
        {
          "name": "首页2 (3)",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "fastQuery": true,
          "matches": "[text=\"甜橙信用卡\"] >2 View[childCount=2] > @Image[clickable=true][text!=null] <<n [id=\"com.chinatelecom.bestpayclient:id/h5_pc_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13626324"
        },
        {
          "name": "信用卡页面 (3)",
          "fastQuery": true,
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "matches": "[childCount=0] -2 @[clickable=true] <n View[childCount=3] <<n [vid=\"h5_pc_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/14603126"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-悬浮窗小广告",
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13402711",
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": "[vid=\"best_h5_container\"] View[childCount=2] > @View[clickable=true] + View[clickable=true] > Image[text!=null]",
          "exampleUrls": "https://m.gkd.li/57941037/4457a342-5750-45d8-ad8e-233dd1da3de3",
          "snapshotUrls": "https://i.gkd.li/i/13402711",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": ".ui.MainActivity",
          "matches": "[vid=\"iv_market_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/14326e73-6c7c-4659-8493-d4b196746b2a",
          "snapshotUrls": "https://i.gkd.li/i/14456159",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"] View[childCount=2] > @View[clickable=true] + View[clickable=true] > Image[text!=null]",
          "exampleUrls": "https://m.gkd.li/57941037/4457a342-5750-45d8-ad8e-233dd1da3de3",
          "snapshotUrls": "https://i.gkd.li/i/13402711",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity",
          "matches": "[vid=\"iv_market_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/14326e73-6c7c-4659-8493-d4b196746b2a",
          "snapshotUrls": "https://i.gkd.li/i/14456159",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.chinatelecom.bestpayclient:id/best_h5_container\"] View[childCount=2] > @View[clickable=true] +  View[clickable=true] > Image[text!=null]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.chinatelecom.bestpayclient.ui.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-年底积分活动弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
      "snapshotUrls": [
        "https://i.gkd.li/i/13543032",
        "https://i.gkd.li/i/13625037"
      ],
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "matches": "View[childCount=2] > @View[index=1][clickable=true][childCount=1] > Image[childCount=0] <<n [vid=\"h5_pc_container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13543032",
            "https://i.gkd.li/i/13625037"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "activity"
        },
        {
          "matches": "View > View[index=1][clickable=true][childCount=1] > Image",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "activity",
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "fastQuery": true
        }
      ]
    }
  ]
});
