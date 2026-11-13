// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zjwh.android_wh_physicalfitness",
  "name": "运动世界",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"iv_close\" || vid=\"ad_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673231",
            "https://i.gkd.li/i/12673523",
            "https://i.gkd.li/i/13166472",
            "https://i.gkd.li/i/22437128",
            "https://i.gkd.li/i/22449070",
            "https://i.gkd.li/i/22495266",
            "https://i.gkd.li/i/22495298",
            "https://i.gkd.li/i/22495361",
            "https://i.gkd.li/i/22508959"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": [
            ".activity.HomeActivity",
            ".mvi.home.HomeActivity"
          ],
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "exampleUrls": "https://e.gkd.li/a7753ec9-5382-42ee-9a41-b4e2b61b9050",
          "snapshotUrls": "https://i.gkd.li/i/17355585",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": [
            ".activity.HomeActivity",
            ".ui.AdActivity",
            ".mvi.home.HomeActivity"
          ],
          "matches": "ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1][visibleToUser=true] < ViewGroup <n ViewGroup <n ViewGroup  >n [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/cb21dc41-bcca-47ec-ae0a-df9aedde48b5",
          "snapshotUrls": [
            "https://i.gkd.li/i/12826124",
            "https://i.gkd.li/i/13228216",
            "https://i.gkd.li/i/13601132",
            "https://i.gkd.li/i/22427117"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "@ImageView[clickable=true][width<110 && height<110] - RelativeLayout >(1,2) [text=\"反馈\"]",
          "exampleUrls": "https://e.gkd.li/6882bcf4-1aa1-47e1-b7ad-299d4aa7bfd9",
          "snapshotUrls": [
            "https://i.gkd.li/i/13554229",
            "https://i.gkd.li/i/22960459"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "activityIds": ".activity.SplashActivity",
          "matches": "@[text=\"跳过\"][clickable=true] +3 RelativeLayout >2 [text=\"点击跳转至第三方页面\"]",
          "snapshotUrls": "https://i.gkd.li/i/12673349",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": [
            ".activity.HomeActivity",
            ".mvi.home.HomeActivity",
            ".mvi.run.RunHistoryDetailActivity"
          ],
          "matches": "@ImageView[childCount=0] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "exampleUrls": "https://e.gkd.li/2debed48-37f2-43ec-8b0f-3a5e06c23ed1",
          "snapshotUrls": [
            "https://i.gkd.li/i/17378546",
            "https://i.gkd.li/i/23145860",
            "https://i.gkd.li/i/25904078"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": [
            ".activity.HomeActivity",
            ".mvi.home.HomeActivity",
            ".mvi.notice.NoticeListActivity"
          ],
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "exampleUrls": "https://e.gkd.li/f640d0c2-197d-45ef-98ff-58a04920bd2d",
          "snapshotUrls": [
            "https://i.gkd.li/i/17358027",
            "https://i.gkd.li/i/23206013",
            "https://i.gkd.li/i/23455815"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image[childCount=0][width<80 && height<80] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [visibleToUser=true][text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/22946236",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "@ImageView[clickable=true][width<100 && height<100] <2 RelativeLayout < RelativeLayout < RelativeLayout < RelativeLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/22946242",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": ".mvi.home.HomeActivity",
          "matches": "@Image[text=\"\"][childCount=0][width<70 && height<70] < View[childCount=1] + * >2 [childCount=0][text=\"淘宝精选广告\"] <<n [vid=\"fl_native\"]",
          "snapshotUrls": "https://i.gkd.li/i/23254520",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "matches": "@[desc=\"top_close_button\"][clickable=true] <<n * + * >(1,3) [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23255102",
            "https://i.gkd.li/i/32145596"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "name": "字节-关闭悬浮球可继续浏览应用",
          "fastQuery": true,
          "activityIds": [
            "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
            "com.byazt.qde.Stub_Standard_Portrait_Activity",
            "com.byazt.cef.Stub_Standard_Portrait_Activity"
          ],
          "matches": "@ImageView[visibleToUser=true][width<100 && height<100] < * < [childCount=1] < ViewGroup <2 [childCount=2] >6 [text*=\"落地页\" || text*=\"三方APP\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28790670",
            "https://i.gkd.li/i/28834493",
            "https://i.gkd.li/i/33345377"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": ".mvi.home.HomeActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n * +n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text*=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": "https://i.gkd.li/i/32145803",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][width<110 && height<110] + RelativeLayout >(2,3) [text=\"反馈\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/33430048",
            "https://i.gkd.li/i/33430738",
            "https://i.gkd.li/i/34107321"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] + ImageView[clickable=true] + [text=\"点击或滑动查看奖励\"]",
          "snapshotUrls": "https://i.gkd.li/i/33430738",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][width<110 && height<110] - [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/33430746",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "name": "优量汇广告",
          "activityIds": [
            "com.zjwh.android_wh_physicalfitness.activity.HomeActivity",
            "com.zjwh.android_wh_physicalfitness.ui.AdActivity"
          ],
          "matches": "[id=\"com.zjwh.android_wh_physicalfitness:id/iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673231",
            "https://i.gkd.li/i/12673523",
            "https://i.gkd.li/i/13166472"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "name": "腾讯SDK",
          "activityIds": ".activity.HomeActivity",
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView[childCount=0][text=null]",
          "exampleUrls": "https://e.gkd.li/a7753ec9-5382-42ee-9a41-b4e2b61b9050",
          "snapshotUrls": [
            "https://i.gkd.li/i/17355585",
            "https://i.gkd.li/i/17358027"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "name": "快手SDK",
          "fastQuery": true,
          "activityIds": [
            ".activity.HomeActivity",
            ".ui.AdActivity"
          ],
          "matches": "ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] < ViewGroup +(3,5) ViewGroup[childCount=2] > [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/cb21dc41-bcca-47ec-ae0a-df9aedde48b5",
          "snapshotUrls": [
            "https://i.gkd.li/i/12826124",
            "https://i.gkd.li/i/13228216",
            "https://i.gkd.li/i/13601132"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "name": "百度SDK",
          "fastQuery": true,
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "@ImageView[clickable=true] - RelativeLayout > [text=\"反馈\"]",
          "exampleUrls": "https://e.gkd.li/6882bcf4-1aa1-47e1-b7ad-299d4aa7bfd9",
          "snapshotUrls": "https://i.gkd.li/i/13554229",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "name": "百青藤广告",
          "activityIds": "com.zjwh.android_wh_physicalfitness.activity.SplashActivity",
          "matches": "@[text=\"跳过\"][clickable=true] +3 RelativeLayout >2 [text=\"点击跳转至第三方页面\"]",
          "snapshotUrls": "https://i.gkd.li/i/12673349",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": ".activity.HomeActivity",
          "matches": "@ImageView[childCount=0] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "exampleUrls": "https://e.gkd.li/2debed48-37f2-43ec-8b0f-3a5e06c23ed1",
          "snapshotUrls": "https://i.gkd.li/i/17378546",
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "activityIds": ".mvi.home.HomeActivity",
      "rules": [
        {
          "fastQuery": true,
          "matches": "ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] <<n * >4 [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/ca109fa3-5a7a-400d-911b-36dd8ac42656",
          "snapshotUrls": [
            "https://i.gkd.li/i/22387192",
            "https://i.gkd.li/i/22656913",
            "https://i.gkd.li/i/22863607",
            "https://i.gkd.li/i/23087561"
          ],
          "activityIds": ".mvi.home.HomeActivity"
        },
        {
          "fastQuery": true,
          "matches": "@Image[childCount=0] < [childCount=1] <n * - * >3 [childCount=0][text=\"广告\"] <<n [vid=\"fl_native\"]",
          "snapshotUrls": "https://i.gkd.li/i/22585927",
          "activityIds": ".mvi.home.HomeActivity"
        },
        {
          "fastQuery": true,
          "activityIds": ".mvi.home.HomeActivity",
          "matches": "[vid=\"ksad_ad_dislike\" || vid=\"tianmu_suspend_iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23054142",
            "https://i.gkd.li/i/26307793"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".mvi.home.HomeActivity",
          "matches": "@ImageView[width<70 && height<70][childCount=0] < FrameLayout[childCount=1] - * > TextView[childCount=0][text.length>0] <<n [vid=\"fl_native\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23289399",
            "https://i.gkd.li/i/23289402"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".mvi.home.HomeActivity",
          "matches": "@[id=\"com.kwad.dy.sdk:id/ksad_ad_dislike\"][clickable=true] - * >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/23773011"
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-卡片广告",
      "desc": "点击关闭-不感兴趣",
      "activityIds": ".mvi.home.HomeActivity",
      "rules": [
        {
          "fastQuery": true,
          "matches": "@Image[childCount=0][width<70&&height<70][id=null][text=\"\"][desc=null] < View[childCount=1][parent.childCount!=2] <n View <n View >n [childCount=0][text=\"广告\"] <<n [vid=\"fl_native\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22514469",
            "https://i.gkd.li/i/22691578",
            "https://i.gkd.li/i/22798099"
          ],
          "activityIds": ".mvi.home.HomeActivity"
        },
        {
          "fastQuery": true,
          "matches": "@TextView[text=\"···\"][visibleToUser=true] <n * >3 [childCount=0][text=\"广告\"] <<n [vid=\"fl_native\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22861405",
            "https://i.gkd.li/i/23451517"
          ],
          "activityIds": ".mvi.home.HomeActivity"
        },
        {
          "preKeys": [
            0,
            1
          ],
          "fastQuery": true,
          "matches": "@[clickable=true] >(1,2) [text=\"不感兴趣\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22514499",
            "https://i.gkd.li/i/22691590"
          ],
          "activityIds": ".mvi.home.HomeActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "通知提示-公告",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".mvi.home.HomeActivity",
            ".mvi.splash.AdActivity"
          ],
          "matches": "@ImageView[vid=\"dialog_close\"] +n [text*=\"公告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22526467",
            "https://i.gkd.li/i/23883452"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": ".mvi.home.HomeActivity",
          "matches": "[vid=\"iv\"] + [vid=\"iv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/23205159",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-不开启可选权限",
      "desc": "点击[暂不开启，继续跑步]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".mvi.home.HomeActivity",
          "matches": [
            "[text=\"必要权限未开启！\" || text^=\"当前必要权限不完整\"]",
            "[text^=\"暂不开启\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/23054372",
            "https://i.gkd.li/i/23054373"
          ]
        }
      ]
    },
    {
      "key": 5,
      "name": "权限提示-定位权限",
      "desc": "点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".mvi.home.HomeActivity",
          "matches": [
            "[text=\"定位服务未开启\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/3be509e1-0663-4989-b763-6d68d88979fe",
          "snapshotUrls": "https://i.gkd.li/i/23096707",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 6,
      "name": "功能类-运动页面自动切换至校园跑",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.zjwh.android_wh_physicalfitness.mvi.home.HomeActivity",
          "matches": [
            "[text=\"学校要求\"][visibleToUser=false]",
            "[text=\"校园跑\"][visibleToUser=true][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/28789636",
          "excludeSnapshotUrls": "https://i.gkd.li/i/28789633"
        }
      ]
    },
    {
      "key": 7,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/c1fa3f37-1617-4d0a-86d3-07fdd154766f",
          "snapshotUrls": "https://i.gkd.li/i/12673495",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 8,
      "name": "未分类-优量汇广告",
      "enable": false,
      "activityIds": [
        "com.zjwh.android_wh_physicalfitness.activity.HomeActivity",
        "com.zjwh.android_wh_physicalfitness.ui.AdActivity"
      ],
      "rules": [
        {
          "matches": "ImageView - RelativeLayout >(3-n) [id=\"com.zjwh.android_wh_physicalfitness:id/iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673231",
            "https://i.gkd.li/i/12673523",
            "https://i.gkd.li/i/13166472"
          ],
          "activityIds": [
            "com.zjwh.android_wh_physicalfitness.activity.HomeActivity",
            "com.zjwh.android_wh_physicalfitness.ui.AdActivity"
          ]
        }
      ]
    },
    {
      "key": 9,
      "name": "未分类-百青藤广告",
      "enable": false,
      "activityIds": "com.zjwh.android_wh_physicalfitness.activity.SplashActivity",
      "rules": [
        {
          "matches": "@[text=\"跳过\"][clickable=true] +(3) RelativeLayout >(2) [text=\"点击跳转至第三方页面\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673349"
          ],
          "activityIds": "com.zjwh.android_wh_physicalfitness.activity.SplashActivity"
        }
      ]
    },
    {
      "key": 10,
      "name": "未分类-快手广告",
      "enable": false,
      "activityIds": [
        "com.zjwh.android_wh_physicalfitness.activity.SplashActivity",
        "com.zjwh.android_wh_physicalfitness.ui.AdActivity"
      ],
      "rules": [
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_splash_root_container\"] >n ViewGroup > [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/12673495",
          "activityIds": [
            "com.zjwh.android_wh_physicalfitness.activity.SplashActivity",
            "com.zjwh.android_wh_physicalfitness.ui.AdActivity"
          ]
        },
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_tk_view\"] >n ViewGroup > @ViewGroup[clickable=true] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/12826112",
            "https://i.gkd.li/i/12826124"
          ],
          "activityIds": [
            "com.zjwh.android_wh_physicalfitness.activity.SplashActivity",
            "com.zjwh.android_wh_physicalfitness.ui.AdActivity"
          ]
        },
        {
          "matches": "[id=\"com.zjwh.android_wh_physicalfitness:id/ksad_tk_view\"] >n ViewGroup > @ViewGroup[childCount=1] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/13228216",
            "https://i.gkd.li/i/13601132"
          ],
          "activityIds": [
            "com.zjwh.android_wh_physicalfitness.activity.SplashActivity",
            "com.zjwh.android_wh_physicalfitness.ui.AdActivity"
          ]
        }
      ]
    },
    {
      "key": 11,
      "name": "未分类-百度广告",
      "enable": false,
      "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
      "actionMaximum": 1,
      "resetMatch": "activity",
      "matchTime": 10000,
      "snapshotUrls": "https://i.gkd.li/i/13554229",
      "rules": [
        {
          "matches": "@ImageView - RelativeLayout[childCount=9]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "actionMaximum": 1,
          "resetMatch": "activity",
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 12,
      "name": "未分类-第三方SDK广告",
      "enable": false,
      "activityIds": "com.zjwh.android_wh_physicalfitness.activity.HomeActivity",
      "rules": [
        {
          "matches": "[id=\"com.zjwh.android_wh_physicalfitness:id/ad_flag_source_layout\"] + [id=\"com.zjwh.android_wh_physicalfitness:id/iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673476"
          ],
          "activityIds": "com.zjwh.android_wh_physicalfitness.activity.HomeActivity"
        }
      ]
    }
  ]
});
