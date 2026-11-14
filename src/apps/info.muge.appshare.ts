// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "info.muge.appshare",
  "name": "AppShare",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13842826",
            "https://i.gkd.li/i/13939089",
            "https://i.gkd.li/i/14260635"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@[clickable=true][height<100] - [text*=\"跳过\"][text.length<10]",
          "snapshotUrls": "https://i.gkd.li/i/14553551",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "@[clickable=true][width<130 && height<130] <(1,2) [childCount=2] >2 [text=\"跳过\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15269380",
            "https://i.gkd.li/i/15285908",
            "https://i.gkd.li/i/15520277",
            "https://i.gkd.li/i/28050329"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "@ImageView[width<138 && height<138] < * < ViewGroup +(2,3) [childCount=1] >2 [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28050314",
            "https://i.gkd.li/i/28050323"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13842826",
            "https://i.gkd.li/i/13939089",
            "https://i.gkd.li/i/14260635"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0,
          "fastQuery": true
        },
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][visibleToUser=true][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/14553551",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 4,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.5",
            "top": "width * 0.6984"
          },
          "matches": "@ViewGroup > [text=\"跳过\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15269380",
            "https://i.gkd.li/i/15285908",
            "https://i.gkd.li/i/15520277"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 4,
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12683145",
            "https://i.gkd.li/i/12683173",
            "https://i.gkd.li/i/13702708",
            "https://i.gkd.li/i/13842826",
            "https://i.gkd.li/i/13939089",
            "https://i.gkd.li/i/14260635"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "order": -1,
          "position": {
            "left": "width * 0.0826",
            "top": "width * 0.1"
          },
          "matches": "[vid=\"splash_full_tk_play_card_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15269380",
            "https://i.gkd.li/i/15285908"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 7,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".view.app.detail.AppDetailActivity",
            ".view.app.detail.v4.AppDetailV4Activity",
            ".view.search.v4.SearchActivity"
          ],
          "matches": "FrameLayout[childCount=5] > @FrameLayout[childCount=1][visibleToUser=true][width<50 && height<50] > ImageView[childCount=0] <<n [vid=\"adContainer\" || vid=\"adView\" || vid=\"cardAd\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14382413",
            "https://i.gkd.li/i/25124086",
            "https://i.gkd.li/i/25124059"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[clickable=true][width<90] < FrameLayout -2 * >3 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/26870176"
        },
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[name$=\"ImageView\" || clickable=true][width<90 && height<78] < FrameLayout[childCount=1] <3 FrameLayout[childCount>2] <<(9,11) ViewFactoryHolder <4 View[childCount>2] <<5 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/26870429"
        },
        {
          "name": "软件详情页卡片广告",
          "fastQuery": true,
          "activityIds": "info.muge.appshare.view.app.detail.AppDetailActivity",
          "matches": "FrameLayout[childCount=5] > @FrameLayout[visibleToUser=true] > ImageView <<n [vid=\"adContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/14382413"
        },
        {
          "name": "搜索页卡片广告",
          "fastQuery": true,
          "activityIds": "info.muge.appshare.view.search.app.SearchAppActivity",
          "matches": "FrameLayout[childCount=5] > @FrameLayout[visibleToUser=true] > ImageView <<n [vid=\"adView\"]",
          "snapshotUrls": "https://i.gkd.li/i/14368946"
        }
      ]
    },
    {
      "key": 3,
      "name": "分段广告",
      "desc": "点击关闭-点击不感兴趣",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".view.app.detail.AppDetailActivity",
          "matches": "@[clickable=true][width<100] < [desc^=\"dislike\"] -2 * >3 [text=\"广告\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/3bc12aa2-7673-4261-9e3d-7e1605b22847",
          "snapshotUrls": "https://i.gkd.li/i/13758909"
        },
        {
          "fastQuery": true,
          "activityIds": ".view.app.detail.AppDetailActivity",
          "matches": "FrameLayout[childCount=3] >2 WebView >6 @View[visibleToUser=true] > Image <<n [vid=\"adContainer\"]",
          "exampleUrls": "https://m.gkd.li/57941037/fefece63-2ec2-413c-a292-4583d58478fe",
          "snapshotUrls": "https://i.gkd.li/i/14160959"
        },
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^=\"dislike\"] <n * > FrameLayout >n [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/00bf6a60-c461-4970-bb73-b063376cbafd",
          "snapshotUrls": [
            "https://i.gkd.li/i/24541497",
            "https://i.gkd.li/i/24551719",
            "https://i.gkd.li/i/24612011",
            "https://i.gkd.li/i/24612129"
          ]
        },
        {
          "activityIds": ".MainActivity",
          "excludeMatches": "[text=\"热门搜索\"][visibleToUser=true]",
          "matches": "ViewFactoryHolder FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView[childCount=0][id=null][desc=null][width<60 && height<60]",
          "exampleUrls": "https://e.gkd.li/1dfab1f2-f3d3-4f42-b421-d504083337c0",
          "snapshotUrls": "https://i.gkd.li/i/24541525",
          "excludeSnapshotUrls": "https://i.gkd.li/i/24612044"
        },
        {
          "activityIds": ".MainActivity",
          "matches": "@Image[id=null][desc=null][width<60][visibleToUser=true] < View -2 View >3 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/25484564"
        },
        {
          "preKeys": [
            0,
            1,
            2,
            3
          ],
          "fastQuery": true,
          "activityIds": [
            ".view.app.detail.AppDetailActivity",
            ".MainActivity"
          ],
          "matches": "@[clickable=true] >(1,2) [text=\"不感兴趣\"]",
          "exampleUrls": "https://m.gkd.li/57941037/27a5eebc-a55a-466e-85f3-7642c23b4b3d",
          "snapshotUrls": [
            "https://i.gkd.li/i/14161009",
            "https://i.gkd.li/i/24612850"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-弹窗广告",
      "desc": "广告展示率低于20%时出现的广告",
      "rules": [
        {
          "fastQuery": true,
          "matches": "View[vid=\"v_jump\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/6b1d7b37-edd7-499f-a8b0-ecba24ef2c44",
          "snapshotUrls": "https://i.gkd.li/i/14181146"
        },
        {
          "fastQuery": true,
          "activityIds": ".view.main.MainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "exampleUrls": "https://e.gkd.li/f89eea71-55f0-4c27-a4b0-79ac5296becd",
          "snapshotUrls": "https://i.gkd.li/i/15209619"
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text=\"反馈\"] <n * > @View[childCount=1][index=0 || index=1] > Image[text=\"\"]",
          "exampleUrls": "https://m.gkd.li/57941037/155fdf95-1f5a-4bf3-a8e7-161e6bfe7bbf",
          "snapshotUrls": [
            "https://i.gkd.li/i/15209618",
            "https://i.gkd.li/i/15282994"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".view.main.MainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "exampleUrls": "https://e.gkd.li/b4d9d653-a4ad-4e4f-a8f5-30b1485547b5",
          "snapshotUrls": "https://i.gkd.li/i/15211765"
        },
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@ImageView < FrameLayout - * >2 [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/26151106",
          "exampleUrls": "https://e.gkd.li/2fc699c4-e377-4a54-b798-17f831f5a9f7"
        },
        {
          "name": "应用详情弹窗-x掉",
          "fastQuery": true,
          "activityIds": "com.byazt.fl.Stub_Standard_Activity_T",
          "matches": "@ImageView[text=null][clickable=true] + [text=\"应用详情\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/26277526"
        },
        {
          "activityIds": "info.muge.appshare.view.main.MainActivity",
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView",
          "exampleUrls": "https://m.gkd.li/57941037/13a69193-a276-4115-97dd-bd7a4b49fbee",
          "snapshotUrls": [
            "https://i.gkd.li/i/15209619",
            "https://i.gkd.li/i/15211765"
          ]
        },
        {
          "matches": "RelativeLayout[childCount=2] > RelativeLayout > View[clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/6b1d7b37-edd7-499f-a8b0-ecba24ef2c44",
          "snapshotUrls": "https://i.gkd.li/i/14181146"
        }
      ]
    },
    {
      "key": 5,
      "name": "通知提示-公告弹窗",
      "desc": "点击[收到]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".view.main.MainActivity",
          "matches": "[vid=\"tvSure\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/8b782da0-1501-4839-a19b-92209b4d2723",
          "snapshotUrls": "https://i.gkd.li/i/14345476",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "info.muge.appshare.view.main.MainActivity",
          "matches": "[vid=\"tvSure\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/8b782da0-1501-4839-a19b-92209b4d2723",
          "snapshotUrls": "https://i.gkd.li/i/14345476",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 7,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".view.main.MainActivity",
          "matches": "@[vid=\"tvCancel\"] + [vid=\"tvUpdate\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25123777",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 9,
      "name": "分段广告-软件详情页广告",
      "desc": "点击关闭-点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "activityIds": "info.muge.appshare.view.app.detail.AppDetailActivity",
      "rules": [
        {
          "matches": "FrameLayout[childCount=3] >3 [desc^=\"dislike\"] > @View[clickable=true] <<n [id=\"info.muge.appshare:id/adContainer\"]",
          "exampleUrls": "https://m.gkd.li/57941037/3bc12aa2-7673-4261-9e3d-7e1605b22847",
          "snapshotUrls": "https://i.gkd.li/i/13758909",
          "fastQuery": true,
          "activityIds": "info.muge.appshare.view.app.detail.AppDetailActivity"
        },
        {
          "matches": "FrameLayout[childCount=3] >2 WebView >6 @View[visibleToUser=true] > Image <<n [vid=\"adContainer\"]",
          "exampleUrls": "https://m.gkd.li/57941037/fefece63-2ec2-413c-a292-4583d58478fe",
          "snapshotUrls": "https://i.gkd.li/i/14160959",
          "fastQuery": true,
          "activityIds": "info.muge.appshare.view.app.detail.AppDetailActivity"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "exampleUrls": "https://m.gkd.li/57941037/27a5eebc-a55a-466e-85f3-7642c23b4b3d",
          "snapshotUrls": "https://i.gkd.li/i/14161009",
          "fastQuery": true,
          "activityIds": "info.muge.appshare.view.app.detail.AppDetailActivity"
        }
      ]
    }
  ]
});
