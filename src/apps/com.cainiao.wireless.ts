// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cainiao.wireless",
  "name": "菜鸟",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "matches": "[vid=\"draw_dialog_iv_close\" || vid=\"package_import_ad_dialog_iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16118156",
            "https://i.gkd.li/i/22570634"
          ]
        },
        {
          "activityIds": "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
          "matches": "View[childCount=4] > Image + View + Image + View[text.length>0][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13042279"
        },
        {
          "fastQuery": true,
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "matches": "View[clickable=true] > @[text=\"关闭\"] + [visibleToUser=true][text=\"活动\"] <<n [vid=\"browser_fragment_layout\"]",
          "snapshotUrls": "https://i.gkd.li/i/14033859"
        },
        {
          "fastQuery": true,
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "matches": "[vid=\"dialog_full_image_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13842492"
        },
        {
          "fastQuery": true,
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "matches": "@[text=\"关闭\"] + [visibleToUser=true][text=\"活动\"] <<n [vid=\"browser_fragment_layout\"]",
          "snapshotUrls": "https://i.gkd.li/i/14033859"
        },
        {
          "fastQuery": true,
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "matches": "[vid=\"cn_bottom_sheet_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/16118155"
        },
        {
          "fastQuery": true,
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "matches": "[desc=\"恭喜你获得\" || desc=\"你想买的\"] - @ImageView[id=null][text=null][clickable=true][visibleToUser=true][width<150&&height<150] <2 FrameLayout <2 FrameLayout < FrameLayout < [vid=\"fl_guide_ad_get_reward_dialog_dx_container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22441306",
            "https://i.gkd.li/i/22570632"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "matches": "Image[childCount=0][width<100 && height<100] < @View[clickable=true][childCount=1] - Image[childCount=0][text=\"超时享\"] <<n [vid=\"browser_fragment_layout\"]",
          "snapshotUrls": "https://i.gkd.li/i/24099845"
        },
        {
          "fastQuery": true,
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "matches": "@Image[clickable=true][width<100 && height<100] +3 * > [childCount=0][text=\"开心收下\"] <<n [vid=\"browser_fragment_layout\"]",
          "snapshotUrls": "https://i.gkd.li/i/28173171"
        },
        {
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "matches": "[vid=\"draw_dialog_iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/16118156"
        },
        {
          "fastQuery": true,
          "activityIds": "com.cainiao.wireless.homepage.view.activity.HomePageActivity",
          "matches": "View[clickable=true] > @[text=\"关闭\"] + [visibleToUser=true][text=\"活动\"] <<n [vid=\"browser_fragment_layout\"]",
          "snapshotUrls": "https://i.gkd.li/i/14033859"
        },
        {
          "fastQuery": true,
          "activityIds": "com.cainiao.wireless.homepage.view.activity.HomePageActivity",
          "matches": "[vid=\"dialog_full_image_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13842492"
        },
        {
          "fastQuery": true,
          "activityIds": "com.cainiao.wireless.homepage.view.activity.HomePageActivity",
          "matches": "@[text=\"关闭\"] + [visibleToUser=true][text=\"活动\"] <<n [vid=\"browser_fragment_layout\"]",
          "snapshotUrls": "https://i.gkd.li/i/14033859"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "matches": "View[desc=\"立即查看\"] +2 ImageView[id=null]",
          "snapshotUrls": "https://i.gkd.li/i/12914450"
        },
        {
          "fastQuery": true,
          "activityIds": "com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity",
          "matches": "[vid=\"iv_banner_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15879126"
        },
        {
          "fastQuery": true,
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "matches": "FrameLayout[childCount=8] > @FrameLayout[clickable=true][childCount=0][text=null] + ImageView[childCount=0][text=null] <<n [vid=\"layout_root\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16024305",
            "https://i.gkd.li/i/16518502"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "matches": "[vid=\"home_task_action_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/16024305"
        },
        {
          "fastQuery": true,
          "activityIds": "com.cainiao.wireless.homepage.view.activity.HomePageActivity",
          "matches": "FrameLayout[childCount=8] > @FrameLayout[clickable=true][childCount=0][text=null] + ImageView[childCount=0][text=null] <<n [vid=\"layout_root\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16024305",
            "https://i.gkd.li/i/16518502"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.cainiao.wireless.homepage.view.activity.HomePageActivity",
          "matches": "[vid=\"home_task_action_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/16024305"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "order": -9,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13042207",
      "rules": [
        {
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "matches": "[text=\"确认\"] - [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13042207",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"确认\"] - [text=\"取消\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "desc": "自动点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13068573",
      "rules": [
        {
          "matches": "[vid=\"gg_dialog_base_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.cainiao.wireless:id/gg_dialog_base_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "评价提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/13692761",
        "https://i.gkd.li/i/14969859"
      ],
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"好评\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 7,
      "name": "其他-好友代取功能提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "matches": [
            "[text^=\"好友代取\"]",
            "[text=\"下次再说\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23787455"
        }
      ]
    },
    {
      "key": 8,
      "name": "局部广告-超时享服务",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".homepage.view.activity.HomePageActivity",
          "matches": "[desc^=\"激活超时享服务\"] -2 @[clickable=true] < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid=\"package_dx_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/29924327"
        }
      ]
    }
  ]
});
