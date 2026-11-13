// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xyhui",
  "name": "PU口袋校园",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "name": "腾讯广告",
          "fastQuery": true,
          "activityIds": [
            ".start.PUMainActivity",
            ".start.LoadingActivity",
            ".lut.act.LutMainActivity"
          ],
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14472097",
            "https://i.gkd.li/i/13695488",
            "https://i.gkd.li/i/23325238"
          ]
        },
        {
          "name": "快手广告",
          "fastQuery": true,
          "activityIds": [
            ".start.PUMainActivity",
            ".start.LoadingActivity"
          ],
          "matches": "ImageView < @ViewGroup[clickable=true] < * <2 * +n * >(1,3) [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/1d51a37a-0444-4850-983c-3646b494204a",
          "snapshotUrls": [
            "https://i.gkd.li/i/16837806",
            "https://i.gkd.li/i/13259196",
            "https://i.gkd.li/i/13259198"
          ]
        },
        {
          "name": "字节广告",
          "fastQuery": true,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "View[clickable=true] < FrameLayout +4 * >2 [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/13259183"
        },
        {
          "name": "美数广告",
          "fastQuery": true,
          "activityIds": "com.meishu.sdk.activity.SdkInterstitialActivity",
          "matches": "[vid=\"ms_activity_sdk_interstitial_cacel\" || vid=\"ms_interstitial_v2_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13458692",
            "https://i.gkd.li/i/34106754"
          ]
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text=\"反馈\"] + @View[visibleToUser=true] > Image",
          "snapshotUrls": "https://i.gkd.li/i/14560546"
        },
        {
          "fastQuery": true,
          "activityIds": [
            ".start.PUMainActivity",
            ".start.LoadingActivity",
            ".lut.act.LutMainActivity"
          ],
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14472098",
            "https://i.gkd.li/i/14766902",
            "https://i.gkd.li/i/23146070",
            "https://i.gkd.li/i/23304106",
            "https://i.gkd.li/i/24488993"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".lut.act.LutMainActivity",
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/240494b6-026f-49f7-a77d-986e70077218",
          "snapshotUrls": "https://i.gkd.li/i/18245369"
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
          "matches": "@Image[childCount=0][text=\"\"] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text=\"反馈\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/22863858"
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.anythink.basead.ui.ATPortraitTranslucentActivity",
            "com.smartdigimkt.sdk.basead.ui.ATPortraitTranslucentActivity",
            "com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity",
            "com.anythink.core.common.inner.ui.ATPortraitTranslucentActivity",
            "cj.mobile.fw.activity.PtgInteractionPortraitActivity"
          ],
          "matches": "[vid=\"anythink_myoffer_btn_close_id\" || vid=\"sdm_myoffer_btn_close_id\" || vid=\"beizi_interstitial_ad_close_iv\" || vid=\"closeAdvertLayout\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22868736",
            "https://i.gkd.li/i/23293759",
            "https://i.gkd.li/i/23577343",
            "https://i.gkd.li/i/30700901",
            "https://i.gkd.li/i/34106741"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".lut.act.LutMainActivity",
          "matches": "@[text=\"关闭\"] < * +n * >(1,2) [text*=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23125533",
            "https://i.gkd.li/i/23577305"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".lut.act.LutMainActivity",
          "matches": "@ImageView[width<140 && height<140] - * > [text^=\"请允许\"][text$=\"安装应用\"]",
          "snapshotUrls": "https://i.gkd.li/i/23125594"
        },
        {
          "name": "京东广告",
          "fastQuery": true,
          "activityIds": ".lut.act.LutMainActivity",
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "snapshotUrls": "https://i.gkd.li/i/23325124"
        },
        {
          "fastQuery": true,
          "activityIds": "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
          "matches": "@ImageView[width<100 && height<100] <<4 * + * >4 [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/23567050"
        },
        {
          "fastQuery": true,
          "activityIds": ".lut.act.LutMainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "snapshotUrls": "https://i.gkd.li/i/23937136"
        },
        {
          "name": "京东广告2",
          "fastQuery": true,
          "activityIds": ".lut.act.LutMainActivity",
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^=\"扭动或点击\"]",
          "snapshotUrls": "https://i.gkd.li/i/27525121"
        },
        {
          "fastQuery": true,
          "activityIds": "com.octopus.ad.AdActivity",
          "matches": "@ImageView[childCount=0][clickable=true][width<110 && height<110] - [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/34106756"
        },
        {
          "fastQuery": true,
          "activityIds": ".lut.act.LutMainActivity",
          "matches": "@[id=\"cj.mobile.wm.allmodules:id/wm_pop_pic_close\"][visibleToUser=true] +n LinearLayout > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/34106749"
        },
        {
          "name": "腾讯广告 (2)",
          "activityIds": [
            "com.xyhui.start.PUMainActivity",
            "com.xyhui.start.LoadingActivity",
            "com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity"
          ],
          "matches": "[id=\"android:id/content\"] >(4,5) @FrameLayout[index=1] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/14472097",
            "https://i.gkd.li/i/14472098",
            "https://i.gkd.li/i/13695488",
            "https://i.gkd.li/i/14766902"
          ]
        },
        {
          "name": "快手广告 (2)",
          "fastQuery": true,
          "activityIds": [
            "com.xyhui.start.PUMainActivity",
            "com.xyhui.start.LoadingActivity"
          ],
          "matches": "ImageView < @ViewGroup[clickable=true] < * <2 * +n * >(1,3) [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/1d51a37a-0444-4850-983c-3646b494204a",
          "snapshotUrls": [
            "https://i.gkd.li/i/16837806",
            "https://i.gkd.li/i/13259196",
            "https://i.gkd.li/i/13259198"
          ]
        },
        {
          "name": "美数广告 (2)",
          "fastQuery": true,
          "activityIds": "com.meishu.sdk.activity.SdkInterstitialActivity",
          "matches": "[id=\"com.xyhui:id/ms_activity_sdk_interstitial_cacel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13458692"
        },
        {
          "name": "快手广告 (3)",
          "fastQuery": true,
          "activityIds": "com.xyhui.start.LoadingActivity",
          "matches": "ImageView < @ViewGroup[clickable=true] < * <2 * + * >3 [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13259196",
            "https://i.gkd.li/i/13259198"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-首页-右侧浮窗广告",
      "fastQuery": true,
      "activityIds": [
        "com.xyhui.start.PUMainActivity",
        "com.xyhui.start.LoadingActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12846543",
        "https://i.gkd.li/i/12868119"
      ],
      "rules": [
        {
          "activityIds": [
            ".lut.act.LutMainActivity",
            ".start.PUMainActivity",
            ".start.LoadingActivity"
          ],
          "matches": "ImageView[vid=\"deleteIv\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22863860",
            "https://i.gkd.li/i/12846543",
            "https://i.gkd.li/i/12868119"
          ],
          "fastQuery": true
        },
        {
          "matches": "ImageView[id=\"com.xyhui:id/deleteIv\"]",
          "fastQuery": true,
          "activityIds": [
            "com.xyhui.start.PUMainActivity",
            "com.xyhui.start.LoadingActivity"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.pu.activity.act.ActivityApplyResult",
          "matches": [
            "[text^=\"打开系统消息通知\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23206833"
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-打开应用自动进入部落",
      "desc": "点击我的-我的部落-已通过-部落详情（如果有多个则点击第一个，仅开屏时触发一次）",
      "rules": [
        {
          "name": "点击导航栏[我的]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".lut.act.LutMainActivity",
          "matches": "@ViewGroup[clickable=true][visibleToUser=true] > [text=\"我的\"] <<n [vid=\"mCustomTabView\"]",
          "snapshotUrls": "https://i.gkd.li/i/23303536"
        },
        {
          "name": "点击[我的部落]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".lut.act.LutMainActivity",
          "matches": "@LinearLayout[vid=\"itemView\"][visibleToUser=true] > [text=\"我的部落\"]",
          "snapshotUrls": "https://i.gkd.li/i/23303537"
        },
        {
          "name": "点击[已通过]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.lut.tribe.act.MyLutTribeAct",
          "matches": "@RelativeLayout[clickable=true][visibleToUser=true] > [text=\"已通过\"]",
          "snapshotUrls": "https://i.gkd.li/i/23303538"
        },
        {
          "preKeys": 2,
          "name": "进入部落详情",
          "fastQuery": true,
          "activityIds": "com.lut.tribe.act.MyLutTribeAct",
          "matches": "@LinearLayout[clickable=true][visibleToUser=true] < [vid=\"mRecyclerView\"]",
          "snapshotUrls": "https://i.gkd.li/i/23303539"
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-报名成功自动返回",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.pu.activity.act.ActivityApplyResult",
          "matches": [
            "[text$=\"报名成功!\"]",
            "[text=\"完成\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/27527412"
        }
      ]
    },
    {
      "key": 5,
      "name": "功能类-签到成功自动返回",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.pu.activity.act.ActivityApplyResult",
          "matches": [
            "[text$=\"签到成功！\"]",
            "[text=\"完成\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/27527409"
        }
      ]
    },
    {
      "key": 6,
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
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14560058",
            "https://i.gkd.li/i/14560214"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "fastQuery": true
        },
        {
          "fastQuery": true,
          "matches": "[text^=\"跳过\"][text.length<=10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642486",
            "https://i.gkd.li/i/12846496",
            "https://i.gkd.li/i/12868232"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "action": "clickCenter",
          "matches": "[vid=\"ms_skipView\"]",
          "snapshotUrls": "https://i.gkd.li/i/16486847",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14560058",
            "https://i.gkd.li/i/14560214"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 7,
      "name": "更新提示",
      "order": -9,
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": [
        "https://i.gkd.li/i/12908853",
        "https://i.gkd.li/i/12908865"
      ],
      "rules": [
        {
          "matches": "ImageView[id=\"com.xyhui:id/closeIv\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});
