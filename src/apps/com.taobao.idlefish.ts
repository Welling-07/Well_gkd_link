// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.taobao.idlefish",
  "name": "闲鱼",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13538351",
      "rules": [
        {
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity",
          "matches": "@ImageView[clickable=true][desc=null] < [desc^=\"开启系统通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/13538351",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[desc^=\"开启系统通知\"] > ImageView[clickable=true][desc=null]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-手机信息权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".maincontainer.activity.MainActivity",
          "matches": [
            "[text*=\"手机信息权限\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://e.gkd.li/81e3e4d8-f297-4476-b22c-73f0b97879ee",
          "snapshotUrls": "https://i.gkd.li/i/13620277",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13832272",
      "activityIds": ".maincontainer.activity.MainActivity",
      "rules": [
        {
          "matches": "[text=\"立即升级\"] -2 [text=\"暂不升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13832272",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".maincontainer.activity.MainActivity"
        },
        {
          "matches": "@ImageView[text=null][desc=null][clickable=true][width>84 && width<124] - View[height<158] <2 [childCount=3] < RelativeLayout - [vid=\"fish_layer_js_native_window_background_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/26053923",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".maincontainer.activity.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告",
      "desc": "点击关闭",
      "rules": [
        {
          "activityIds": ".maincontainer.activity.MainActivity",
          "matches": "WebView[text=\"Rax App\"] > [id=\"root\"] >(3,6) View[index=parent.childCount.minus(1)][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14551046",
            "https://i.gkd.li/i/24981766"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".search_implement.SearchResultActivity",
          "matches": "@[index=parent.childCount.minus(1)][clickable=true][width<250][height<250] <n View <<6 m0 <<6 [vid=\"fish_layer_container_id\"]",
          "snapshotUrls": "https://i.gkd.li/i/23125419"
        },
        {
          "fastQuery": true,
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity",
          "matches": "@[clickable=true][width<200] <<(4,6) View[id=\"root\"] <<(5,8) [vid=\"fish_layer_container_id\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23183586",
            "https://i.gkd.li/i/25796344"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "分段广告-信息流广告",
      "desc": "警告⚠️: 该规则有可能会误触,请谨慎开启",
      "fastQuery": true,
      "forcedTime": 100000,
      "rules": [
        {
          "action": "longClick",
          "activityIds": ".search_implement.SearchResultActivity",
          "matches": "@[longClickable=true] >3 [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/19603954",
          "exampleUrls": "https://e.gkd.li/ca42e088-6fae-4402-a000-06418bf054cf",
          "fastQuery": true,
          "forcedTime": 100000
        },
        {
          "action": "longClick",
          "activityIds": [
            ".maincontainer.activity.MainActivity",
            ".detail.DetailActivity"
          ],
          "matches": "@[longClickable=true][childCount=0][height>width] < [childCount>1] >(1,3,4) [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19604324",
            "https://i.gkd.li/i/29751786",
            "https://i.gkd.li/i/29753749",
            "https://i.gkd.li/i/31875408"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/29753324",
          "exampleUrls": "https://e.gkd.li/738c623e-58fe-45a1-9a28-957f0f812c72",
          "fastQuery": true,
          "forcedTime": 100000
        },
        {
          "action": "longClick",
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity",
          "matches": "View[desc$=\"广告\"][longClickable=true][visibleToUser=true][childCount>2]",
          "snapshotUrls": "https://i.gkd.li/i/19593497",
          "excludeSnapshotUrls": "https://i.gkd.li/i/19604467",
          "fastQuery": true,
          "forcedTime": 100000
        },
        {
          "name": "②点击[引起不适]",
          "preKeys": [
            0,
            1,
            2
          ],
          "actionCd": 500,
          "actionDelay": 50,
          "activityIds": [
            "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity",
            "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity"
          ],
          "matches": "[desc=\"引起不适\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19593500",
            "https://i.gkd.li/i/19603913",
            "https://i.gkd.li/i/19604317",
            "https://i.gkd.li/i/29751857"
          ],
          "fastQuery": true,
          "forcedTime": 100000
        },
        {
          "name": "②点击[不感兴趣]",
          "preKeys": 1,
          "activityIds": ".maincontainer.activity.MainActivity",
          "matches": "@[clickable=true] +2 [text=\"商品不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/29753752",
          "fastQuery": true,
          "forcedTime": 100000
        },
        {
          "preKeys": 3,
          "name": "③仅消除preKeys=20蓄势",
          "action": "none",
          "actionMaximum": 1,
          "activityIds": [
            ".detail.DetailActivity",
            ".maincontainer.activity.MainActivity",
            ".search_implement.SearchResultActivity"
          ],
          "matches": "[parent=null]",
          "fastQuery": true,
          "forcedTime": 100000
        }
      ]
    },
    {
      "key": 8,
      "name": "局部广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".maincontainer.activity.MainActivity",
          "matches": "@ImageView[clickable=true][width<100] <(2,5) FrameLayout <<(3,4) [vid=\"fish_layer_container_id\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25796897",
            "https://i.gkd.li/i/26184285"
          ]
        }
      ]
    },
    {
      "key": 9,
      "name": "局部广告-悬浮广告",
      "desc": "商品详情页右侧-x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".detail.DetailActivity",
          "matches": "Image[width<60 && height<60] < @View <n [childCount=2] < [id=\"root\"] <<2 * <2 WebView <<2 [vid=\"fish_layer_container_id\"]",
          "snapshotUrls": "https://i.gkd.li/i/26837679",
          "exampleUrls": "https://e.gkd.li/d08c424f-8411-4d65-ba23-02703e328176"
        }
      ]
    },
    {
      "key": 11,
      "name": "权限提示",
      "enable": false,
      "actionMaximum": 1,
      "activityIds": "com.taobao.idlefish.maincontainer.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13620277",
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@Button[visibleToUser=true][text=\"取消\"] <<n FrameLayout >n TextView[text*=\"手机信息\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.taobao.idlefish.maincontainer.activity.MainActivity"
        },
        {
          "matches": "@Button[text=\"取消\"] <<n FrameLayout >n TextView[text*=\"手机信息\"]",
          "actionMaximum": 1,
          "activityIds": "com.taobao.idlefish.maincontainer.activity.MainActivity",
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 12,
      "name": "全屏广告-红包弹窗",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.taobao.idlefish.maincontainer.activity.MainActivity",
          "matches": "WebView[text=\"Rax App\"] > [id=\"root\"] >6 View[index=2][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14551046",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 13,
      "name": "分段广告-搜索结果页广告",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity",
          "matches": "@[clickable=true] > [desc$=\"广告\"]",
          "excludeMatches": "@[clickable=true] > [desc^=\"反馈成功\"]",
          "action": "longClick",
          "snapshotUrls": [
            "https://i.gkd.li/i/14723597",
            "https://i.gkd.li/i/14723718"
          ]
        },
        {
          "preKeys": 0,
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity",
          "matches": "[desc^=\"不喜欢该商品\"] > ImageView[index=1][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14723632"
        }
      ]
    },
    {
      "key": 14,
      "name": "通知提示",
      "enable": false,
      "actionMaximum": 1,
      "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity",
      "snapshotUrls": "https://i.gkd.li/i/13538351",
      "rules": [
        {
          "matches": "[desc^=\"开启系统通知\"] > ImageView[clickable=true][desc=null]",
          "actionMaximum": 1,
          "activityIds": "com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity"
        }
      ]
    }
  ]
});
