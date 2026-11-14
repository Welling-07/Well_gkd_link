// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.paokeji.yiqu",
  "name": "喵趣漫画",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "desc": "点击\"暂不\"",
      "order": -9,
      "matchTime": 10000,
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": "com.aster.comic.app.view.bookdetails.BookdetailsActivity",
          "matches": "[vid=\"btnCancel\"]",
          "exampleUrls": "https://m.gkd.li/57941037/2ce54292-bfc6-41c6-b2e5-e7d8302fc522",
          "snapshotUrls": "https://i.gkd.li/i/14140265",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "actionMaximum": 1
        },
        {
          "matches": "[id=\"com.paokeji.yiqu:id/btnCancel\"]",
          "exampleUrls": "https://m.gkd.li/57941037/2ce54292-bfc6-41c6-b2e5-e7d8302fc522",
          "snapshotUrls": "https://i.gkd.li/i/14140265",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text=\"反馈\"] + @View[childCount=2] > [text*=\"跳过\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13829749",
            "https://i.gkd.li/i/14362119"
          ]
        },
        {
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
            "com.aster.comic.app.view.MainActivity"
          ],
          "matches": "[text=\"反馈\"] -(2,4) @View[childCount=1][visibleToUser=true] > Image[childCount=0][text=\"\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13809578",
            "https://i.gkd.li/i/14717730",
            "https://i.gkd.li/i/16062358"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@LinearLayout[clickable=true] - * > [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/14847142"
        },
        {
          "fastQuery": true,
          "activityIds": "com.aster.comic.app.view.MainActivity",
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "snapshotUrls": "https://i.gkd.li/i/15374245"
        },
        {
          "activityIds": [
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "matches": "[text=\"反馈\"] + View[childCount=1] > Image[childCount=0][text=\"\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15711106",
            "https://i.gkd.li/i/17301509"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.kwad.sdk.api.proxy.app.KsRewardVideoActivity",
          "matches": "@[id=\"com.kwad.dy.sdk:id/ksad_end_close_btn\"] - [text=\"免费获取\"]",
          "snapshotUrls": "https://i.gkd.li/i/16369203"
        },
        {
          "fastQuery": true,
          "activityIds": "com.kwad.sdk.api.proxy.app.KsRewardVideoActivity",
          "matches": "@ViewGroup[clickable=true] +3 ViewGroup > [text*=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/16401930"
        },
        {
          "name": "腾讯SDK-1",
          "fastQuery": true,
          "activityIds": [
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T"
          ],
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13830354",
            "https://i.gkd.li/i/13842966"
          ]
        },
        {
          "name": "腾讯SDK-2",
          "fastQuery": true,
          "activityIds": "com.aster.comic.app.view.MainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "snapshotUrls": "https://i.gkd.li/i/15173845"
        },
        {
          "name": "字节SDK",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "FrameLayout[desc*=\"close\"] > View",
          "snapshotUrls": "https://i.gkd.li/i/13839519"
        },
        {
          "fastQuery": true,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down\"]",
          "snapshotUrls": "https://i.gkd.li/i/13810767"
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "Image[childCount=0][text=\"\"] < @View + View > [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/13810150"
        },
        {
          "fastQuery": true,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
          "matches": [
            "[text*=\"广告\"]",
            "[text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13809629"
        },
        {
          "activityIds": "com.aster.comic.app.view.MainActivity",
          "matches": "[id=\"android:id/content\"] >2 FrameLayout[childCount=9] >3 FrameLayout[childCount=2] > @FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/15374245"
        },
        {
          "name": "腾讯SDK-1 (2)",
          "activityIds": [
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T"
          ],
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/13830354",
            "https://i.gkd.li/i/13842716",
            "https://i.gkd.li/i/13842966"
          ]
        },
        {
          "name": "腾讯SDK-2 (2)",
          "activityIds": "com.aster.comic.app.view.MainActivity",
          "matches": "[id=\"android:id/content\"] >3 FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/15173845"
        }
      ]
    },
    {
      "key": 3,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text=\"跳过\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14753912",
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1,
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14031922",
            "https://i.gkd.li/i/14322264"
          ],
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1,
          "actionMaximumKey": 0,
          "priorityTime": 10000,
          "fastQuery": true
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14031922",
            "https://i.gkd.li/i/14322264"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告",
      "enable": false,
      "activityIds": [
        "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
        "com.aster.comic.app.view.MainActivity",
        "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
      ],
      "rules": [
        {
          "name": "腾讯SDK-1",
          "actionDelay": 350,
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/13830354",
            "https://i.gkd.li/i/13842716",
            "https://i.gkd.li/i/13842966"
          ],
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "name": "腾讯SDK-2",
          "actionDelay": 350,
          "matches": "[id=\"android:id/content\"] >3 FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/15173845",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "name": "字节SDK",
          "matches": "FrameLayout[desc*=\"close\"] > View",
          "snapshotUrls": [
            "https://i.gkd.li/i/13839432",
            "https://i.gkd.li/i/13839519"
          ],
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "name": "穿山甲SDK-1",
          "actionDelay": 350,
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after\"]",
          "snapshotUrls": "https://i.gkd.li/i/13810767",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "name": "穿山甲SDK-2",
          "actionDelay": 350,
          "matches": "[text=\"反馈\"] <<n View + View[childCount=1]",
          "snapshotUrls": "https://i.gkd.li/i/13830798",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "name": "穿山甲SDK-3",
          "actionDelay": 350,
          "matches": "[text*=\"跳过\" && text.length<=6] <2 @View -(3-n) View < View",
          "snapshotUrls": "https://i.gkd.li/i/13829749",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "name": "穿山甲SDK-4",
          "actionDelay": 350,
          "matches": "[text=\"反馈\"] -n @View[index<=1] > Image[text.length=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13809737",
            "https://i.gkd.li/i/13809578"
          ],
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "name": "穿山甲SDK-5",
          "actionDelay": 350,
          "matches": "[text=\"反馈\"] <<n View - View[childCount=1]",
          "snapshotUrls": "https://i.gkd.li/i/13810150",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "name": "快手SDK-1",
          "matches": "[text*=\"跳过\"] <n *[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13809629",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "name": "快手SDK-2",
          "matches": "[vid=\"ksad_auto_close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13837855",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "name": "快手SDK-3",
          "matches": "[vid=\"ksad_video_container\"] < * >n ViewGroup[index=1] >n @ViewGroup[clickable=true] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13829312",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        }
      ]
    },
    {
      "key": 5,
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text=\"反馈\"] + @View[childCount=2] > [text=\"跳过\"]",
          "exampleUrls": "https://m.gkd.li/57941037/6f12fd12-b956-474a-834c-8ebba00efbff",
          "snapshotUrls": "https://i.gkd.li/i/14362119"
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "Image[text=\"\"] < @View +4 [text=\"反馈\"] + * >2 [text=\"广告\"]",
          "exampleUrls": "https://m.gkd.li/57941037/9bf34f1f-f1a1-4fb8-a84a-96cb8e1c2669",
          "snapshotUrls": "https://i.gkd.li/i/14717730"
        }
      ]
    }
  ]
});
