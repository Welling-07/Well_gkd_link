// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xunlei.downloadprovider",
  "name": "迅雷",
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
          "excludeActivityIds": ".search.ui.search.SearchOperateActivity",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15048443",
            "https://i.gkd.li/i/15048416"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/16388942",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "position": {
            "left": "width * 0.9055",
            "top": "width * 0.1611"
          },
          "excludeMatches": "[text*=\"跳过\"]",
          "matches": "[vid=\"native_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/15048354",
          "excludeSnapshotUrls": "https://i.gkd.li/i/15048376",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/24539634",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "excludeActivityIds": ".search.ui.search.SearchOperateActivity",
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15048443",
            "https://i.gkd.li/i/15048416",
            "https://i.gkd.li/i/16388942"
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
          "snapshotUrls": [
            "https://i.gkd.li/i/15048443",
            "https://i.gkd.li/i/15048416"
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
      "key": 1,
      "name": "分段广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".frame.MainTabActivity",
            ".download.taskdetails.newui.DownloadDetailsActivity"
          ],
          "matches": "[vid=\"hermes_ad_banner_negative\" || vid=\"close_iv\"  || vid=\"btn_ad_feedback\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/95d56e24-3223-4112-9222-de6d489aa79b",
          "snapshotUrls": [
            "https://i.gkd.li/i/23762793",
            "https://i.gkd.li/i/23845066"
          ]
        },
        {
          "preKeys": 0,
          "fastQuery": true,
          "activityIds": [
            ".frame.MainTabActivity",
            ".download.taskdetails.newui.DownloadDetailsActivity"
          ],
          "matches": "[text=\"不感兴趣\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/490bd679-86a5-432e-b0de-427da5513484",
          "snapshotUrls": [
            "https://i.gkd.li/i/23762972",
            "https://i.gkd.li/i/23845065"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".frame.MainTabActivity",
          "matches": "[vid=\"close_btn\" || id=\"com.noah.dycsdk.dynamic_sdk:id/noah_interstitial_close_button\" || text=\"关闭\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/71c2dc44-a976-4910-8e44-26e39865406e",
          "snapshotUrls": [
            "https://i.gkd.li/i/16388890",
            "https://i.gkd.li/i/25843616",
            "https://i.gkd.li/i/25902800"
          ]
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image[childCount=0][text=\"\"][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12868667",
            "https://i.gkd.li/i/12881946",
            "https://i.gkd.li/i/13295179"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": [
            ".frame.MainTabActivity",
            ".launch.LaunchActivity"
          ],
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882132",
            "https://i.gkd.li/i/12901374",
            "https://i.gkd.li/i/12882237"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.xunlei.web.XLWebViewActivity$XLWebViewActivityImpl",
          "matches": "[text$=\"专属惊喜价\"] + View > @[desc^=\"javascript\"][clickable=true][childCount=0][width<120&&height<120][visibleToUser=true] <<n [vid=\"refreshLayout\"]",
          "exampleUrls": "https://e.gkd.li/ade9ca8a-b7a5-4a22-8c1f-d14423a34136",
          "snapshotUrls": [
            "https://i.gkd.li/i/16914136",
            "https://i.gkd.li/i/23833175",
            "https://i.gkd.li/i/23845039"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".download.center.DownloadCenterActivity",
          "matches": [
            "[text=\"开通超级会员\"]",
            "[vid=\"close_btn\"]"
          ],
          "exampleUrls": "https://e.gkd.li/6448cedc-2bad-4aa5-846c-9ad82c310545",
          "snapshotUrls": "https://i.gkd.li/i/17658831"
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "matches": "@ImageView[childCount=0] < ViewGroup[childCount=1] < ViewGroup[childCount=1] < ViewGroup[childCount=1] < ViewGroup[childCount=1] +2 ViewGroup >3 [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23762955",
            "https://i.gkd.li/i/24541418"
          ]
        },
        {
          "activityIds": "com.byazt.fl.Stub_Standard_Portrait_Activity",
          "matches": "@[text*=\"跳过\"] <n * - [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/25843756"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13228920",
      "rules": [
        {
          "activityIds": "com.xunlei.upgrade.XUpgradeActivity",
          "matches": "[vid=\"x_upgrade_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13228920",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/x_upgrade_cancel\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12882939",
        "https://i.gkd.li/i/15048352",
        "https://i.gkd.li/i/15048355",
        "https://i.gkd.li/i/15048357"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".frame.MainTabActivity",
          "matches": "[text=\"立即领取\" || text=\"点击领取\" || text^=\"此云盘为您的私人云盘\"] + [vid=\"close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882939",
            "https://i.gkd.li/i/15048352",
            "https://i.gkd.li/i/15048355",
            "https://i.gkd.li/i/15048357"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".search.ui.search.SearchOperateActivity",
          "matches": "[vid=\"search_banner_ad_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/d9e25fc3-249f-4fb9-8606-606ed0c9c893",
          "snapshotUrls": "https://i.gkd.li/i/17725350"
        },
        {
          "fastQuery": true,
          "activityIds": ".frame.MainTabActivity",
          "matches": "[vid=\"home_flow_item_close_iv\" || vid=\"ad_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23762842",
            "https://i.gkd.li/i/23762864"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".xpan.pan.activity.XPanFileBrowserActivity",
          "matches": "[vid=\"btn_ad_feedback\"]",
          "snapshotUrls": "https://i.gkd.li/i/23795248"
        },
        {
          "fastQuery": true,
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "[((text$=\"领取\" || text^=\"立即\") && text.length<5) || text^=\"此云盘为您的私人云盘\"] <n * > [vid=\"close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882939",
            "https://i.gkd.li/i/15048352",
            "https://i.gkd.li/i/15048355",
            "https://i.gkd.li/i/15048357"
          ]
        }
      ]
    },
    {
      "key": 5,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xunlei.uikit.activity.TransformActivity",
          "matches": [
            "[text=\"是否打开系统通知\"]",
            "[vid=\"btn_close\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/bf1ee4f5-126c-46c7-bac1-5e41ec4546e3",
          "snapshotUrls": "https://i.gkd.li/i/15322046",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text=\"是否打开系统通知\"]",
            "[vid=\"btn_close\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/bf1ee4f5-126c-46c7-bac1-5e41ec4546e3",
          "snapshotUrls": "https://i.gkd.li/i/15322046",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 6,
      "name": "分段广告-视频详情页广告",
      "enable": false,
      "rules": [
        {
          "name": "点击关闭-1",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "fastQuery": true,
          "matches": "[id=\"com.xunlei.downloadprovider:id/hermes_ad_banner_negative\"]",
          "snapshotUrls": "https://i.gkd.li/i/12707701"
        },
        {
          "preKeys": 0,
          "name": "点击不感兴趣",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
            "com.xunlei.downloadprovider.feedback.view"
          ],
          "fastQuery": true,
          "matches": "[id=\"com.xunlei.downloadprovider:id/feedback_not_interested_layout\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625418",
            "https://i.gkd.li/i/12707717",
            "https://i.gkd.li/i/12707702"
          ]
        },
        {
          "name": "点击关闭-2",
          "activityIds": "com.xunlei.downloadprovider.feedback.view",
          "fastQuery": true,
          "matches": "[id=\"com.xunlei.downloadprovider:id/ad_ima_skip\"]",
          "snapshotUrls": "https://i.gkd.li/i/12882988"
        },
        {
          "name": "点击关闭-3",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "fastQuery": true,
          "matches": "[id=\"com.xunlei.downloadprovider:id/play_detail_ad_title\"] + [id=\"com.xunlei.downloadprovider:id/close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13228423"
        }
      ]
    },
    {
      "key": 7,
      "name": "分段广告-视频详情页直播推荐",
      "desc": "自动点击\"减少推荐\"",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "matches": "[id=\"com.xunlei.downloadprovider:id/title_tv\"] + [id=\"com.xunlei.downloadprovider:id/more\"]",
          "snapshotUrls": "https://i.gkd.li/i/12707701",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "activityIds": [
            "com.xunlei.downloadprovider.download.center.newcenter",
            "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity"
          ],
          "matches": "[id=\"com.xunlei.downloadprovider:id/close_ad\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12707710",
            "https://i.gkd.li/i/14005330"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 8,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.launch.LaunchActivity"
          ],
          "matches": [
            "@[text=\"关闭\"]",
            "[text*=\"广告\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12892871",
            "https://i.gkd.li/i/13799878"
          ]
        },
        {
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "ImageView < @ViewGroup[visibleToUser=true] < ViewGroup +n ViewGroup > [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12879452",
            "https://i.gkd.li/i/12882199",
            "https://i.gkd.li/i/12881911",
            "https://i.gkd.li/i/12892912",
            "https://i.gkd.li/i/12881976"
          ]
        },
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "[vid=\"close_btn\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/71c2dc44-a976-4910-8e44-26e39865406e",
          "snapshotUrls": "https://i.gkd.li/i/16388890"
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image[childCount=0][text=\"\"] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12868667",
            "https://i.gkd.li/i/12881946",
            "https://i.gkd.li/i/13295179"
          ]
        },
        {
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.launch.LaunchActivity"
          ],
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView[childCount=0][text=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882132",
            "https://i.gkd.li/i/12901374",
            "https://i.gkd.li/i/12882237"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "matches": "[id=\"com.xunlei.downloadprovider:id/hermes_ad_banner_negative\"]",
          "snapshotUrls": "https://i.gkd.li/i/13597068"
        },
        {
          "fastQuery": true,
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "ImageView[childCount=0] < @ViewGroup[clickable=true] < ViewGroup <n ViewGroup + ViewGroup >3 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13761275"
        }
      ]
    },
    {
      "key": 9,
      "name": "分段广告-\"下载页\"卡片广告",
      "desc": "需选二次弹窗关闭原因",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "name": "点击更多\"···\"",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "[id=\"com.xunlei.downloadprovider:id/ad_more\"]",
          "snapshotUrls": "https://i.gkd.li/i/12881865",
          "fastQuery": true
        },
        {
          "name": "点击\"x\"",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "matches": "[id=\"com.xunlei.downloadprovider:id/btn_ad_feedback\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12892893",
            "https://i.gkd.li/i/12901395"
          ],
          "fastQuery": true
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "关闭原因选\"减少推荐\"",
          "activityIds": [
            "com.xunlei.downloadprovider.download.center.newcenter",
            "com.xunlei.downloadprovider.frame.MainTabActivity"
          ],
          "matches": "[id=\"com.xunlei.downloadprovider:id/close_ad\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12881877",
            "https://i.gkd.li/i/13198070",
            "https://i.gkd.li/i/13484249"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 10,
      "name": "局部广告-搜索页面顶部广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.xunlei.downloadprovider.search.ui.search.SearchOperateActivity",
      "snapshotUrls": "https://i.gkd.li/i/12882892",
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/search_banner_ad_close\"]",
          "fastQuery": true,
          "activityIds": "com.xunlei.downloadprovider.search.ui.search.SearchOperateActivity"
        }
      ]
    },
    {
      "key": 11,
      "name": "全屏广告-会员续费广告",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "name": "\"我的\"",
          "activityIds": [
            "com.xunlei.downloadprovider.homepage.member",
            "com.xunlei.downloadprovider.frame.MainTabActivity"
          ],
          "matches": "@[id=\"com.xunlei.downloadprovider:id/close_btn\"] - LinearLayout [text=\"您的会员已过期\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12707698",
            "https://i.gkd.li/i/13448909"
          ],
          "fastQuery": true
        },
        {
          "name": "\"下载页\"1",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "[id=\"com.xunlei.downloadprovider:id/all_picture_image\"] + [id=\"com.xunlei.downloadprovider:id/close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/12882928",
          "fastQuery": true
        },
        {
          "name": "\"首页\"",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "[text=\"您的会员已过期\"] < LinearLayout +n [id=\"com.xunlei.downloadprovider:id/touch_bottom_bar_bubble_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13259268",
          "fastQuery": true
        },
        {
          "activityIds": "com.xunlei.web.XLWebViewActivity$XLWebViewActivityImpl2",
          "matches": "[text=\"支付优惠卡\"] >3 View[childCount=2] >2 View[childCount=9] > @View[clickable=true][visibleToUser=true][childCount=0][index=0][desc!=null] <<n [vid=\"refreshLayout\"]",
          "exampleUrls": "https://e.gkd.li/ade9ca8a-b7a5-4a22-8c1f-d14423a34136",
          "snapshotUrls": "https://i.gkd.li/i/16914136",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 12,
      "name": "分段广告-视频详情-直播推荐",
      "desc": "自动点击【减少推荐】",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "matches": "[id=\"com.xunlei.downloadprovider:id/title_tv\"] + [id=\"com.xunlei.downloadprovider:id/more\"]",
          "snapshotUrls": "https://i.gkd.li/i/12707701",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "matches": "[id=\"com.xunlei.downloadprovider:id/close_ad\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12707710",
            "https://i.gkd.li/i/14031920"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 13,
      "name": "未分类-应用内广告弹窗",
      "desc": "⚠ 此规则容易误触，因此默认关闭。",
      "enable": false,
      "rules": [
        {
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.launch.LaunchActivity"
          ],
          "matches": "@[text=\"关闭\"] +n * >n [text*=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12868648",
            "https://i.gkd.li/i/12879372",
            "https://i.gkd.li/i/12882366",
            "https://i.gkd.li/i/12892871",
            "https://i.gkd.li/i/13799878"
          ]
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "Image[text=\"\"] < @View + View +n View > View > TextView[text$=\"广告\"][text.length<=10]",
          "actionDelay": 1000,
          "snapshotUrls": [
            "https://i.gkd.li/i/12868667",
            "https://i.gkd.li/i/12881946",
            "https://i.gkd.li/i/13295179"
          ]
        },
        {
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.launch.LaunchActivity"
          ],
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882132",
            "https://i.gkd.li/i/12901374"
          ]
        },
        {
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "ImageView < FrameLayout - FrameLayout > FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12882166"
        },
        {
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12882237"
        },
        {
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "[text=\"广告\"] <2 ViewGroup -2 ViewGroup >n [text=\"跳过\"] + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12881976"
        },
        {
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": [
            "ViewGroup[childCount=2] > ImageView + TextView[text=\"广告\"]",
            "ViewGroup[childCount=1] > @ViewGroup[childCount=1][clickable=true] > ImageView[childCount=0]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13761275"
        },
        {
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "TextView[text=\"广告\"] <n ViewGroup -2 ViewGroup > @ViewGroup",
          "snapshotUrls": "https://i.gkd.li/i/12879452"
        }
      ]
    },
    {
      "key": 14,
      "name": "未分类-【下载页】广告卡片",
      "desc": "需选二次弹窗关闭原因",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "name": "点击更多【···】",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "[id=\"com.xunlei.downloadprovider:id/ad_more\"]",
          "snapshotUrls": "https://i.gkd.li/i/12881865",
          "fastQuery": true
        },
        {
          "name": "点击【x】",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "matches": "[id=\"com.xunlei.downloadprovider:id/btn_ad_feedback\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12892893",
            "https://i.gkd.li/i/12901395"
          ],
          "fastQuery": true
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "关闭原因选【减少推荐】",
          "activityIds": [
            "com.xunlei.downloadprovider.download.center.newcenter",
            "com.xunlei.downloadprovider.frame.MainTabActivity"
          ],
          "matches": "[id=\"com.xunlei.downloadprovider:id/close_ad\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/128818775",
            "https://i.gkd.li/i/13198070",
            "https://i.gkd.li/i/13484249"
          ],
          "fastQuery": true
        }
      ]
    }
  ]
});
