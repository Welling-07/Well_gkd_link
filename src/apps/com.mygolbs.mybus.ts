// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mygolbs.mybus",
  "name": "掌上公交",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-卡片广告",
      "activityIds": [
        ".RTimeActivity",
        ".NewHomePageActivity",
        ".StationsResultActivityNew",
        ".mapsearch.poisearch.PoiSearchActivity"
      ],
      "rules": [
        {
          "name": "点击底部中间x关闭图标",
          "matches": "[vid=\"ad_frameLayout\"] RelativeLayout[childCount=4] > TextView[text.length>0] + ImageView + ImageView[clickable=true][id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790521",
            "https://i.gkd.li/i/12790706",
            "https://i.gkd.li/i/12790841",
            "https://i.gkd.li/i/12790887"
          ],
          "activityIds": [
            ".RTimeActivity",
            ".NewHomePageActivity",
            ".StationsResultActivityNew",
            ".mapsearch.poisearch.PoiSearchActivity"
          ]
        },
        {
          "name": "点击右上/下角x关闭图标",
          "matches": "[vid=\"ad_frameLayout\"] View[childCount=2||childCount=3] > View[childCount=4] > View[childCount=1] > Image[text=\"\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790656",
            "https://i.gkd.li/i/12790903"
          ],
          "activityIds": [
            ".RTimeActivity",
            ".NewHomePageActivity",
            ".StationsResultActivityNew",
            ".mapsearch.poisearch.PoiSearchActivity"
          ]
        },
        {
          "name": "点击右上角x关闭图标-2",
          "matches": "[vid=\"ad_frameLayout\"] View[childCount=5] > View[childCount=2][index=4] > View[childCount=1] > Image[text=\"\"]",
          "snapshotUrls": "https://i.gkd.li/i/12790610",
          "activityIds": [
            ".RTimeActivity",
            ".NewHomePageActivity",
            ".StationsResultActivityNew",
            ".mapsearch.poisearch.PoiSearchActivity"
          ]
        },
        {
          "name": "点击右上角x关闭图标-3",
          "matches": "[vid=\"ad_frameLayout\"] View[childCount=2] > View[childCount=6][index=0] > View[childCount=1][index=3] > Image[text=\"\"]",
          "snapshotUrls": "https://i.gkd.li/i/12790941",
          "activityIds": [
            ".RTimeActivity",
            ".NewHomePageActivity",
            ".StationsResultActivityNew",
            ".mapsearch.poisearch.PoiSearchActivity"
          ]
        },
        {
          "name": "点击右下角x关闭按钮",
          "matches": "[text=\"广告\"] <3 View + @View[clickable=true] >2 [text=\"×\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12791122",
          "activityIds": [
            ".RTimeActivity",
            ".NewHomePageActivity",
            ".StationsResultActivityNew",
            ".mapsearch.poisearch.PoiSearchActivity"
          ]
        },
        {
          "preKeys": [
            0,
            1,
            2,
            3
          ],
          "name": "点击不感兴趣",
          "matches": "@LinearLayout[clickable=true][childCount<=2] > [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790671",
            "https://i.gkd.li/i/12790551",
            "https://i.gkd.li/i/12790616",
            "https://i.gkd.li/i/12790707",
            "https://i.gkd.li/i/12790717"
          ],
          "activityIds": [
            ".RTimeActivity",
            ".NewHomePageActivity",
            ".StationsResultActivityNew",
            ".mapsearch.poisearch.PoiSearchActivity"
          ]
        },
        {
          "name": "点击底部中间x关闭图标 (2)",
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] RelativeLayout[childCount=4] > TextView[text.length>0] + ImageView + ImageView[clickable=true][id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790521",
            "https://i.gkd.li/i/12790706",
            "https://i.gkd.li/i/12790841",
            "https://i.gkd.li/i/12790887"
          ],
          "activityIds": [
            "com.mygolbs.mybus.RTimeActivity",
            "com.mygolbs.mybus.NewHomePageActivity",
            "com.mygolbs.mybus.StationsResultActivityNew",
            "com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity"
          ]
        },
        {
          "name": "点击右上/下角x关闭图标 (2)",
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] View[childCount=2||childCount=3] > View[childCount=4] > View[childCount=1] > Image[text=\"\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790656",
            "https://i.gkd.li/i/12790903"
          ],
          "activityIds": [
            "com.mygolbs.mybus.RTimeActivity",
            "com.mygolbs.mybus.NewHomePageActivity",
            "com.mygolbs.mybus.StationsResultActivityNew",
            "com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity"
          ]
        },
        {
          "name": "点击右上角x关闭图标-2 (2)",
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] View[childCount=5] > View[childCount=2][index=4] > View[childCount=1] > Image[text=\"\"]",
          "snapshotUrls": "https://i.gkd.li/i/12790610",
          "activityIds": [
            "com.mygolbs.mybus.RTimeActivity",
            "com.mygolbs.mybus.NewHomePageActivity",
            "com.mygolbs.mybus.StationsResultActivityNew",
            "com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity"
          ]
        },
        {
          "name": "点击右上角x关闭图标-3 (2)",
          "matches": "[id=\"com.mygolbs.mybus:id/ad_frameLayout\"] View[childCount=2] > View[childCount=6][index=0] > View[childCount=1][index=3] > Image[text=\"\"]",
          "snapshotUrls": "https://i.gkd.li/i/12790941",
          "activityIds": [
            "com.mygolbs.mybus.RTimeActivity",
            "com.mygolbs.mybus.NewHomePageActivity",
            "com.mygolbs.mybus.StationsResultActivityNew",
            "com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity"
          ]
        },
        {
          "name": "点击右下角x关闭按钮 (2)",
          "matches": "[text=\"广告\"] <3 View + @View[clickable=true] >2 [text=\"×\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12791122",
          "activityIds": [
            "com.mygolbs.mybus.RTimeActivity",
            "com.mygolbs.mybus.NewHomePageActivity",
            "com.mygolbs.mybus.StationsResultActivityNew",
            "com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity"
          ]
        },
        {
          "name": "点击不感兴趣 (2)",
          "matches": "@LinearLayout[clickable=true][childCount<=2] > [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790671",
            "https://i.gkd.li/i/12790551",
            "https://i.gkd.li/i/12790616",
            "https://i.gkd.li/i/12790707",
            "https://i.gkd.li/i/12790717"
          ],
          "activityIds": [
            "com.mygolbs.mybus.RTimeActivity",
            "com.mygolbs.mybus.NewHomePageActivity",
            "com.mygolbs.mybus.StationsResultActivityNew",
            "com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity"
          ]
        },
        {
          "name": "点击暂不领取",
          "matches": "[id=\"com.mygolbs.mybus:id/ll_ad\"] [id=\"com.mygolbs.mybus:id/btn_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12791579",
          "activityIds": [
            "com.mygolbs.mybus.RTimeActivity",
            "com.mygolbs.mybus.NewHomePageActivity",
            "com.mygolbs.mybus.StationsResultActivityNew",
            "com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".mapsearch.poisearch.PoiSearchActivity",
            ".LoginActivity"
          ],
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790762",
            "https://i.gkd.li/i/14587392"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "ImageView[childCount=0] < LinearLayout < @LinearLayout[clickable=true] - * > [text=\"反馈\"]",
          "exampleUrls": "https://m.gkd.li/57941037/ec768f05-5431-4684-af40-a7987dff2ec6",
          "snapshotUrls": "https://i.gkd.li/i/14546373"
        },
        {
          "fastQuery": true,
          "activityIds": "com.qq.e.ads.ADActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] - [text=\"国货大牌 新年必囤\"]",
          "exampleUrls": "https://m.gkd.li/57941037/f7dc0b47-b37f-409a-aebe-4aaa844aa897",
          "snapshotUrls": "https://i.gkd.li/i/14587397"
        },
        {
          "fastQuery": true,
          "activityIds": [
            ".NewHomePageActivity",
            ".RTimeActivity"
          ],
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14219270",
            "https://i.gkd.li/i/14572506"
          ]
        },
        {
          "name": "点击右上角x关闭图标",
          "activityIds": [
            "com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity",
            "com.mygolbs.mybus.NewHomePageActivity",
            "com.mygolbs.mybus.RTimeActivity",
            "com.mygolbs.mybus.LoginActivity"
          ],
          "matches": "FrameLayout[childCount=2] > FrameLayout[childCount>4] > FrameLayout[index=1][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790762",
            "https://i.gkd.li/i/14219270",
            "https://i.gkd.li/i/14572506",
            "https://i.gkd.li/i/14587392"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-顶栏小广告",
      "activityIds": ".RTimeActivity",
      "rules": [
        {
          "name": "点击右侧x关闭按钮",
          "matches": "[vid=\"ad_close2\"]",
          "snapshotUrls": "https://i.gkd.li/i/12790841",
          "activityIds": ".RTimeActivity"
        },
        {
          "name": "点击右侧x关闭按钮 (2)",
          "matches": "[id=\"com.mygolbs.mybus:id/ad_close2\"]",
          "snapshotUrls": "https://i.gkd.li/i/12790841",
          "activityIds": "com.mygolbs.mybus.RTimeActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "desc": "自动点击\"取消\"",
      "activityIds": "com.mygolbs.mybus.defines.CustomDialog",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".defines.CustomDialog",
          "matches": [
            "[text$=\"请开启通知权限\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12715980",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text$=\"请开启通知权限\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12715980",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.mygolbs.mybus.defines.CustomDialog"
        },
        {
          "matches": [
            "[id=\"com.mygolbs.mybus:id/message\"][text$=\"请开启通知权限\"]",
            "[id=\"com.mygolbs.mybus:id/view_neg\"] > [id=\"com.mygolbs.mybus:id/negativeButton\"][text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12715980",
          "activityIds": "com.mygolbs.mybus.defines.CustomDialog",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-签到成功弹窗",
      "desc": "点击关闭",
      "activityIds": "com.mygolbs.mybus.guligold.SignSuccessActivity",
      "snapshotUrls": "https://i.gkd.li/i/12716035",
      "rules": [
        {
          "activityIds": ".guligold.SignSuccessActivity",
          "matches": "@[vid=\"iv_close\"] < RelativeLayout - LinearLayout >n [text=\"签到成功\"]",
          "snapshotUrls": "https://i.gkd.li/i/12716035"
        },
        {
          "matches": "@[id=\"com.mygolbs.mybus:id/iv_close\"] < RelativeLayout - LinearLayout >n [text=\"签到成功\"]",
          "activityIds": "com.mygolbs.mybus.guligold.SignSuccessActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "actionCdKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/f1099ff6-38aa-4393-8cf5-418ab8ffd20e",
          "snapshotUrls": "https://i.gkd.li/i/12745634",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "exampleUrls": "https://m.gkd.li/57941037/8b0c3f96-ae36-4799-87c2-1ea37c3d2d4c",
          "snapshotUrls": [
            "https://i.gkd.li/i/12790485",
            "https://i.gkd.li/i/14546388"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000,
          "actionCdKey": 0
        },
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "actionCdKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[childCount=0][visibleToUser=true][(text.length<10 && (text*=\"跳过\" || text*=\"跳過\" || text*=\"skip\" || text*=\"Skip\")) || id$=\"tt_splash_skip_btn\" || vid*=\"skip\" || vid*=\"Skip\" || desc*=\"跳过\" || desc*=\"skip\" || (vid*=\"count\" && vid*=\"down\" && vid!*=\"countdown\" && vid!*=\"load\" && vid!*=\"add\" && vid!*=\"ead\" && vid!*=\"time\")]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 2,
          "actionCdKey": 2,
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView",
          "exampleUrls": "https://m.gkd.li/57941037/8b0c3f96-ae36-4799-87c2-1ea37c3d2d4c",
          "snapshotUrls": "https://i.gkd.li/i/14546388",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 2,
          "actionCdKey": 2,
          "priorityTime": 10000
        }
      ]
    }
  ]
});
