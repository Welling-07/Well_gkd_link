// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.copymanga.app",
  "name": "拷貝漫畫",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "activityIds": [
        "com.copymanga.app.MainActivity",
        "com.reaper.flutter.reaper_flutter_plugin.activity.ReaperSplashActivity"
      ],
      "actionDelay": 400,
      "fastQuery": true,
      "rules": [
        {
          "name": "快手广告-1",
          "activityIds": "com.miui.home.launcher.Launcher",
          "matches": "@ImageView[clickable=true][width<78] <n [visibleToUser=true] -2 * >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13259085",
          "fastQuery": true,
          "actionDelay": 400
        },
        {
          "name": "快手广告-2",
          "activityIds": [
            ".MainActivity",
            "com.kwad.components.ad.interstitial"
          ],
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625486",
            "https://i.gkd.li/i/12504488",
            "https://i.gkd.li/i/13344156"
          ],
          "fastQuery": true,
          "actionDelay": 400
        },
        {
          "name": "快手广告-3",
          "activityIds": ".MainActivity",
          "matches": [
            "ViewGroup > [text=\"广告\"]",
            "@ViewGroup[clickable=true] > [text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13696292",
          "fastQuery": true,
          "actionDelay": 400
        },
        {
          "name": "腾讯广告-1",
          "actionDelay": 400,
          "activityIds": ".MainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12504520",
            "https://i.gkd.li/i/12661019",
            "https://i.gkd.li/i/13193877",
            "https://i.gkd.li/i/12892156",
            "https://i.gkd.li/i/12504501",
            "https://i.gkd.li/i/13259082"
          ],
          "fastQuery": true
        },
        {
          "name": "腾讯广告-2",
          "actionDelay": 400,
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "snapshotUrls": "https://i.gkd.li/i/13246786",
          "fastQuery": true,
          "activityIds": [
            "com.copymanga.app.MainActivity",
            "com.reaper.flutter.reaper_flutter_plugin.activity.ReaperSplashActivity"
          ]
        },
        {
          "name": "腾讯广告-3",
          "activityIds": ".MainActivity",
          "matches": "[vid=\"interact_ad_root\"] > [vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13521801",
            "https://i.gkd.li/i/13332719"
          ],
          "fastQuery": true,
          "actionDelay": 400
        },
        {
          "name": "腾讯广告-4",
          "actionDelay": 400,
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "snapshotUrls": "https://i.gkd.li/i/13233178",
          "fastQuery": true,
          "activityIds": [
            "com.copymanga.app.MainActivity",
            "com.reaper.flutter.reaper_flutter_plugin.activity.ReaperSplashActivity"
          ]
        },
        {
          "name": "字节广告-1",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@View[clickable=true] < FrameLayout[desc*=\"close\"] +4 FrameLayout[desc!=null] >2 [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/13372542",
          "fastQuery": true,
          "actionDelay": 400
        },
        {
          "activityIds": "com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity",
          "matches": "@[clickable=true] > ImageView[vid=\"beizi_interstitial_ad_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/25049918",
          "fastQuery": true,
          "actionDelay": 400
        },
        {
          "name": "字节广告-3",
          "actionDelay": 400,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image[childCount=0][text=\"\"][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12925052",
            "https://i.gkd.li/i/12925095"
          ],
          "fastQuery": true
        },
        {
          "name": "百度广告-1",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "@ImageView[clickable=true][width<134 && height<134] <n RelativeLayout >(1,3) [text=\"反馈\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25189723",
            "https://i.gkd.li/i/33947096"
          ],
          "fastQuery": true,
          "actionDelay": 400
        },
        {
          "matches": "[vid=\"ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/30617190",
          "fastQuery": true,
          "activityIds": [
            "com.copymanga.app.MainActivity",
            "com.reaper.flutter.reaper_flutter_plugin.activity.ReaperSplashActivity"
          ],
          "actionDelay": 400
        },
        {
          "name": "快手广告-1 (2)",
          "activityIds": "com.copymanga.app.MainActivity",
          "matches": [
            "ViewGroup > [text=\"广告\"]",
            "ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13259085",
          "actionDelay": 400,
          "fastQuery": true
        },
        {
          "name": "快手广告-2 (2)",
          "activityIds": [
            "com.copymanga.app.MainActivity",
            "com.kwad.components.ad.interstitial"
          ],
          "matches": "[text=\"广告\"] <2 ViewGroup -(2,3) ViewGroup > ViewGroup[clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625486",
            "https://i.gkd.li/i/12504486",
            "https://i.gkd.li/i/12504488",
            "https://i.gkd.li/i/13344156"
          ],
          "actionDelay": 400,
          "fastQuery": true
        },
        {
          "name": "快手广告-3 (2)",
          "activityIds": "com.copymanga.app.MainActivity",
          "matches": [
            "ViewGroup > [text=\"广告\"]",
            "@ViewGroup[clickable=true] > [text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13696292",
          "actionDelay": 400,
          "fastQuery": true
        },
        {
          "name": "腾讯广告-1 (2)",
          "activityIds": "com.copymanga.app.MainActivity",
          "matches": "ImageView -(1,2) FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12504520",
            "https://i.gkd.li/i/12661019",
            "https://i.gkd.li/i/13193877",
            "https://i.gkd.li/i/12892156",
            "https://i.gkd.li/i/12504501",
            "https://i.gkd.li/i/13259082"
          ],
          "actionDelay": 400,
          "fastQuery": true
        },
        {
          "name": "腾讯广告-2 (2)",
          "matches": "ImageView <2 FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/13246786",
          "activityIds": [
            "com.copymanga.app.MainActivity",
            "com.reaper.flutter.reaper_flutter_plugin.activity.ReaperSplashActivity"
          ],
          "actionDelay": 400,
          "fastQuery": true
        },
        {
          "name": "腾讯广告-3 (2)",
          "matches": "[id=\"com.copymanga.app:id/interact_ad_root\"] > [id=\"com.copymanga.app:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13521801",
            "https://i.gkd.li/i/13332719"
          ],
          "activityIds": [
            "com.copymanga.app.MainActivity",
            "com.reaper.flutter.reaper_flutter_plugin.activity.ReaperSplashActivity"
          ],
          "actionDelay": 400,
          "fastQuery": true
        },
        {
          "name": "腾讯广告-4 (2)",
          "matches": "ImageView - ImageView - FrameLayout > FrameLayout > FrameLayout > FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13233178",
          "activityIds": [
            "com.copymanga.app.MainActivity",
            "com.reaper.flutter.reaper_flutter_plugin.activity.ReaperSplashActivity"
          ],
          "actionDelay": 400,
          "fastQuery": true
        },
        {
          "name": "字节广告-1 (2)",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": [
            "[desc^=\"logoad\"] > [text=\"广告\"]",
            "[desc^=\"webview-close\"] > View[clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13372542",
          "actionDelay": 400,
          "fastQuery": true
        },
        {
          "name": "字节广告-3 (2)",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image[childCount=0][text=\"\"] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12925052",
            "https://i.gkd.li/i/12925095"
          ],
          "actionDelay": 400,
          "fastQuery": true
        },
        {
          "name": "字节广告-2",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text=\"反馈\"] -2 @View - Image",
          "snapshotUrls": "https://i.gkd.li/i/12925052",
          "actionDelay": 400,
          "fastQuery": true
        },
        {
          "name": "字节广告-3 (3)",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text=\"反馈\"] -4 @View < View[childCount=7]",
          "snapshotUrls": "https://i.gkd.li/i/12925095",
          "actionDelay": 400,
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "name": "快手广告-1",
          "activityIds": ".MainActivity",
          "matches": "[id^=\"com.copymanga.app:id/ad_flag_source\"] - * > [vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504525"
        },
        {
          "name": "快手广告-2",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "matches": "[vid=\"close_m_image_left_text_right_no_compliance\"]",
          "snapshotUrls": "https://i.gkd.li/i/13761154"
        },
        {
          "name": "腾讯广告",
          "activityIds": ".MainActivity",
          "matches": "FrameLayout[childCount=3] > LinearLayout + FrameLayout[childCount=1] > ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12851671",
            "https://i.gkd.li/i/12909005"
          ]
        },
        {
          "name": "快手广告-1 (2)",
          "activityIds": "com.copymanga.app.MainActivity",
          "matches": "[id^=\"com.copymanga.app:id/ad_flag_source\"] - * > [id=\"com.copymanga.app:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504525"
        },
        {
          "name": "快手广告-2 (2)",
          "activityIds": "com.copymanga.app.MainActivity",
          "fastQuery": true,
          "matches": "[id=\"com.copymanga.app:id/close_m_image_left_text_right_no_compliance\"]",
          "snapshotUrls": "https://i.gkd.li/i/13761154"
        },
        {
          "name": "腾讯广告 (2)",
          "activityIds": "com.copymanga.app.MainActivity",
          "matches": "FrameLayout[childCount=3] > LinearLayout + FrameLayout[childCount=1] > ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12851671",
            "https://i.gkd.li/i/12909005"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-关闭赞助提示",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "matches": "@[desc=\"就这样吧\"] + [desc^=\"赞助免广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12851627",
          "activityIds": ".MainActivity"
        },
        {
          "matches": "@[desc=\"就这样吧\"] + [desc^=\"赞助免广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12851627",
          "activityIds": "com.copymanga.app.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-自动确认线路",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc=\"进入拷贝漫画\"]",
          "snapshotUrls": "https://i.gkd.li/i/13233179",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[desc=\"进入拷贝漫画\"]",
          "snapshotUrls": "https://i.gkd.li/i/13233179",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "通知提示-公告弹窗",
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc=\"系统提示\"] +2 [desc=\"确定\"]",
          "exampleUrls": "https://m.gkd.li/57941037/7577dafa-9e3e-44de-bd20-c52f8a30e9c6",
          "snapshotUrls": "https://i.gkd.li/i/13233180",
          "matchTime": 30000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[desc=\"系统提示\"] +n [desc=\"确定\"]",
          "exampleUrls": "https://m.gkd.li/57941037/7577dafa-9e3e-44de-bd20-c52f8a30e9c6",
          "snapshotUrls": "https://i.gkd.li/i/13233180",
          "matchTime": 30000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
