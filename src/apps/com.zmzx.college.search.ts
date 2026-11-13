// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zmzx.college.search",
  "name": "大学搜题酱",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "fastQuery": true,
      "priorityTime": 10000,
      "rules": [
        {
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12867875",
            "https://i.gkd.li/i/16812698"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12867875",
            "https://i.gkd.li/i/16812698"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12867875",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "fastQuery": true,
          "priorityTime": 10000
        },
        {
          "position": {
            "left": "width * 0.8981",
            "top": "width * 0.1574"
          },
          "matches": "[id=\"android:id/content\"]",
          "exampleUrls": "https://m.gkd.li/57941037/45daad88-68a3-41b9-933a-943eeae0e4ff",
          "snapshotUrls": "https://i.gkd.li/i/14434685",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 2,
          "fastQuery": true,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "name": "腾讯广告",
          "fastQuery": true,
          "activityIds": [
            ".activity.main.activity.MainActivity",
            ".activity.questionsearch.camera.activity.PicSearchResultActivity",
            ".activity.camerasdk.ZybCameraSDKActivity",
            ".activity.common.CommonCacheHybridActivity"
          ],
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12867751",
            "https://i.gkd.li/i/12894813",
            "https://i.gkd.li/i/13522998",
            "https://i.gkd.li/i/14554866"
          ]
        },
        {
          "name": "快手广告-1",
          "fastQuery": true,
          "activityIds": [
            ".activity.main.activity.MainActivity",
            ".activity.questionsearch.camera.activity.PicSearchResultActivity"
          ],
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup <n * + ViewGroup >3 [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13451304",
            "https://i.gkd.li/i/14519779",
            "https://i.gkd.li/i/14731371"
          ]
        },
        {
          "name": "字节广告-1",
          "activityIds": "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
          "matches": "Image < @View +3 View > View > TextView[text$=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13523288"
        },
        {
          "name": "字节广告-2",
          "fastQuery": true,
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12893408",
            "https://i.gkd.li/i/13929945"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.mercury.sdk.activity.InterstitialPortraitActivity",
          "matches": "[vid=\"iv_itr_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15360368"
        },
        {
          "name": "腾讯广告 (2)",
          "fastQuery": true,
          "activityIds": [
            "com.zmzx.college.search.activity.main.activity.MainActivity",
            "com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity",
            "com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity",
            "com.zmzx.college.search.activity.common.CommonCacheHybridActivity"
          ],
          "matches": "[id=\"com.zmzx.college.search:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12867751",
            "https://i.gkd.li/i/12894813",
            "https://i.gkd.li/i/13522998",
            "https://i.gkd.li/i/14554866"
          ]
        },
        {
          "name": "快手广告-1 (2)",
          "fastQuery": true,
          "activityIds": [
            "com.zmzx.college.search.activity.main.activity.MainActivity",
            "com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity"
          ],
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup <n * + ViewGroup >3 [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13451304",
            "https://i.gkd.li/i/14519779",
            "https://i.gkd.li/i/14731371"
          ]
        },
        {
          "name": "字节广告-2 (2)",
          "fastQuery": true,
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "matches": "[id$=\"tt_reward_full_count_down\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12893408",
            "https://i.gkd.li/i/13929945"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".activity.booksearch.result.activity.SearchScanCodeResultDxActivity",
            ".activity.booksearch.result.activity.AnswerBrowseActivity"
          ],
          "matches": "[vid=\"close_m_image_left_text_right_app_compliance\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13849755",
            "https://i.gkd.li/i/13929965"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".activity.booksearch.result.activity.SearchScanCodeResultDxActivity",
          "matches": "[id^=\"com.zmzx.college.search:id/ad_flag_source\"] - * > [vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13063381"
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity",
            "com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity"
          ],
          "matches": "[vid=\"close_m_image_left_text_right_app_compliance\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13849755",
            "https://i.gkd.li/i/13929965"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity",
          "matches": "[id^=\"com.zmzx.college.search:id/ad_flag_source\"] - * > [id=\"com.zmzx.college.search:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13063381"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/13063373",
        "https://i.gkd.li/i/13623469"
      ],
      "rules": [
        {
          "activityIds": [
            ".activity.main.activity.MainActivity",
            ".activity.init.InitActivity"
          ],
          "matches": "[vid=\"update_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13063373",
            "https://i.gkd.li/i/13623469"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.zmzx.college.search:id/update_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.main.activity.MainActivity",
          "matches": "[text=\"开启推送通知\"] - [vid=\"siv_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440939",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"开启推送通知\"] - [id=\"com.zmzx.college.search:id/siv_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440939",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "评价提示-请求好评弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13476308",
      "rules": [
        {
          "activityIds": ".activity.camerasdk.ZybCameraSDKActivity",
          "matches": "[vid=\"iv_logo\"] + [vid=\"siv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13476308",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.zmzx.college.search:id/iv_logo\"] + [id=\"com.zmzx.college.search:id/siv_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 6,
      "name": "全屏广告-邀好友得开学好礼",
      "desc": "使用返回关闭",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "action": "back",
          "activityIds": ".activity.common.CommonCacheHybridActivity",
          "matches": "[visibleToUser=true][text=\"邀好友得开学好礼\"] <<n [vid=\"webview_root_layout\"]",
          "exampleUrls": "https://m.gkd.li/57941037/d625fcaa-4cf3-4c92-9b27-10542b0262bb",
          "snapshotUrls": "https://i.gkd.li/i/14555042",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "action": "back",
          "activityIds": "com.zmzx.college.search.activity.common.CommonCacheHybridActivity",
          "matches": "[visibleToUser=true][text=\"邀好友得开学好礼\"] <<n [vid=\"webview_root_layout\"]",
          "exampleUrls": "https://m.gkd.li/57941037/d625fcaa-4cf3-4c92-9b27-10542b0262bb",
          "snapshotUrls": "https://i.gkd.li/i/14555042",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "action": "back",
          "activityIds": "com.zmzx.college.search.activity.common.CommonCacheHybridActivity",
          "matches": "[text=\"邀好友得开学好礼\"] <<n [vid=\"webview_root_layout\"]",
          "exampleUrls": "https://m.gkd.li/57941037/d625fcaa-4cf3-4c92-9b27-10542b0262bb",
          "snapshotUrls": "https://i.gkd.li/i/14555042",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 7,
      "name": "分段广告-底部卡片广告",
      "desc": "点击关闭-点击不感兴趣",
      "fastQuery": true,
      "activityIds": ".activity.booksearch.result.activity.AnswerBrowseActivity",
      "rules": [
        {
          "matches": "@[desc$=\"dislike\"] <<n [vid=\"rlBottomADContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/15902162",
          "fastQuery": true,
          "activityIds": ".activity.booksearch.result.activity.AnswerBrowseActivity"
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/15902298",
          "fastQuery": true,
          "activityIds": ".activity.booksearch.result.activity.AnswerBrowseActivity"
        },
        {
          "matches": "@[desc$=\"dislike\"] <<n [vid=\"rlBottomADContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/15902162",
          "fastQuery": true,
          "activityIds": "com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity"
        },
        {
          "preKeys": 2,
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/15902298",
          "fastQuery": true,
          "activityIds": "com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity"
        }
      ]
    },
    {
      "key": 8,
      "name": "通知提示-请求推送通知弹窗",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12867853",
      "rules": [
        {
          "matches": "ImageView[id=\"com.zmzx.college.search:id/siv_dialog_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 9,
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "rules": [
        {
          "name": "快手广告-1",
          "activityIds": [
            "com.zmzx.college.search.activity.main.activity.MainActivity",
            "com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity"
          ],
          "matches": [
            "ViewGroup[childCount=2] [text=\"广告\"]",
            "ViewGroup @ViewGroup[clickable=true][childCount=1] > ImageView"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13346628",
            "https://i.gkd.li/i/13451304",
            "https://i.gkd.li/i/14519779"
          ]
        }
      ]
    }
  ]
});
