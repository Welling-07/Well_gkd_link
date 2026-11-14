// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zhihu.android",
  "name": "知乎",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "excludeActivityIds": [
            ".app.SearchActivity",
            ".comment.ui.activity.CommentListActivity",
            ".feature.short_container_feature.ui.ShortContainerHostActivity"
          ],
          "matches": "([vid=\"btn_skip\"][visibleToUser=true]) || ([text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true])",
          "exampleUrls": "https://e.gkd.li/e129aaa6-bf4f-4455-9242-a6779667d814",
          "snapshotUrls": [
            "https://i.gkd.li/i/18221451",
            "https://i.gkd.li/i/22714295"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/18221225",
            "https://i.gkd.li/i/23141429",
            "https://i.gkd.li/i/24229324"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "TextView[width<114 && height<67] - @View[clickable=true][visibleToUser=true][width<135] <3 FrameLayout[childCount=4][getChild(1).getChild(0).childCount=3] <2 FrameLayout[childCount=2][getChild(0).width=0] < [vid=\"show_layout\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30968922",
            "https://i.gkd.li/i/31332983"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "actionMaximumKey": 0,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/30968922",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "actionMaximumKey": 0,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-信息流广告",
      "desc": "点击关闭-点击内容不感兴趣",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".feature.short_container_feature.ui.",
            ".ContentActivity"
          ],
          "matches": "@[clickable=true][visibleToUser=true] -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n ViewGroup >n [text*=\"广告\"][childCount=0][id=null][desc=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13849671",
            "https://i.gkd.li/i/14645530",
            "https://i.gkd.li/i/14178516",
            "https://i.gkd.li/i/13849442",
            "https://i.gkd.li/i/14178979",
            "https://i.gkd.li/i/14178980",
            "https://i.gkd.li/i/14206949",
            "https://i.gkd.li/i/14206988",
            "https://i.gkd.li/i/18008867",
            "https://i.gkd.li/i/25572259"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/17002118",
            "https://i.gkd.li/i/17002119",
            "https://i.gkd.li/i/17002120"
          ],
          "fastQuery": true
        },
        {
          "activityIds": [
            ".ContentActivity",
            ".feature.short_container_feature.ui.ShortContainerHostActivity"
          ],
          "matches": "ImageView < @[index=parent.childCount.minus(1)][clickable=true][width<150] <n ViewGroup + [childCount=2] >3 [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28661886",
            "https://i.gkd.li/i/28590141"
          ],
          "fastQuery": true
        },
        {
          "activityIds": ".app.ui.activity.MainActivity",
          "matches": "@ImageView[clickable=true][childCount=0] < FrameLayout[childCount=1] - * > [text*=\"广告\" || text$=\"商品介绍\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14296163",
            "https://i.gkd.li/i/14321041",
            "https://i.gkd.li/i/14468152",
            "https://i.gkd.li/i/17237944"
          ],
          "fastQuery": true
        },
        {
          "activityIds": [
            ".app.ui.activity.MainActivity",
            ".ContentActivity",
            ".feature.short_container_feature.ui.ShortContainerHostActivity"
          ],
          "matches": "@ViewGroup[clickable=true][childCount=1] <(2,3,4) ViewGroup -(2,3) ViewGroup[childCount>1] >(1,2) [text*=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/60c4dea8-99c1-4a6f-aca6-a098b5ed76d7",
          "snapshotUrls": [
            "https://i.gkd.li/i/14192451",
            "https://i.gkd.li/i/18217217",
            "https://i.gkd.li/i/19591989",
            "https://i.gkd.li/i/21813914",
            "https://i.gkd.li/i/24214771"
          ],
          "fastQuery": true
        },
        {
          "activityIds": ".app.ui.activity.MainActivity",
          "matches": "@ViewGroup[clickable=true][childCount=1] <3 ViewGroup < ViewGroup -(2,3) ViewGroup >2 [text*=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14332161",
            "https://i.gkd.li/i/14730741"
          ],
          "fastQuery": true
        },
        {
          "activityIds": ".feature.short_container_feature.ui.ShortContainerHostActivity",
          "matches": "@[vid=\"remove\"] - [vid=\"subtitle\"][text*=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17268845",
            "https://i.gkd.li/i/17268869"
          ],
          "fastQuery": true
        },
        {
          "preKeys": [
            0,
            1,
            2,
            3,
            4,
            5
          ],
          "name": "②点击[不感兴趣]",
          "activityIds": [
            ".feature.short_container_feature.ui.ShortContainerHostActivity",
            ".ContentActivity",
            ".app.ui.activity.MainActivity"
          ],
          "matches": "@[clickable=true] >(1,3) [text$=\"不感兴趣\" || text^=\"屏蔽作者\" || text=\"不喜欢该内容\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13849689",
            "https://i.gkd.li/i/17237940",
            "https://i.gkd.li/i/17268849",
            "https://i.gkd.li/i/23431871"
          ],
          "fastQuery": true
        },
        {
          "activityIds": [
            "com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity",
            "com.zhihu.android.ContentActivity"
          ],
          "matches": "@ImageView[clickable=true][visibleToUser=true] -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n * >n [text*=\"广告\"][childCount=0][id=null][desc=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13849671",
            "https://i.gkd.li/i/14645530",
            "https://i.gkd.li/i/14178516",
            "https://i.gkd.li/i/13849442",
            "https://i.gkd.li/i/14178979",
            "https://i.gkd.li/i/14178980",
            "https://i.gkd.li/i/14206949",
            "https://i.gkd.li/i/14206988"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/17002118",
            "https://i.gkd.li/i/17002119",
            "https://i.gkd.li/i/17002120"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "matches": "@ImageView[clickable=true] < * - * > [text*=\"广告\" || text$=\"商品介绍\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14296163",
            "https://i.gkd.li/i/14321041",
            "https://i.gkd.li/i/14468152",
            "https://i.gkd.li/i/17237944"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "matches": "@ViewGroup[clickable=true] <4 * -3 * >2 [text*=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14192451",
          "fastQuery": true
        },
        {
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "matches": "@ViewGroup[clickable=true] <3 * < * -3 * >2 [text*=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14730741",
          "fastQuery": true
        },
        {
          "preKeys": [
            7,
            8,
            9,
            10,
            5
          ],
          "activityIds": [
            "com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity",
            "com.zhihu.android.ContentActivity",
            "com.zhihu.android.app.ui.activity.MainActivity"
          ],
          "matches": "@[clickable=true] >(1,3) [text$=\"不感兴趣\" || text^=\"屏蔽作者\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13849689",
            "https://i.gkd.li/i/17237940",
            "https://i.gkd.li/i/17268849"
          ],
          "fastQuery": true
        },
        {
          "preKeys": [
            7,
            8,
            9,
            10
          ],
          "activityIds": [
            "com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity",
            "com.zhihu.android.ContentActivity",
            "com.zhihu.android.app.ui.activity.MainActivity"
          ],
          "matches": "@[clickable=true] >3 [text$=\"不感兴趣\" || text^=\"屏蔽作者\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13849689",
            "https://i.gkd.li/i/17237940"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "rules": [
        {
          "activityIds": [
            ".app.ui.activity.MainActivity",
            ".mix.activity.ContentMixProfileActivity",
            ".app.ui.activity.HostActivity"
          ],
          "matches": [
            "[text$=\"内容推送\" || text=\"开启私信通知\"]",
            "[vid=\"btn_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/18057057",
            "https://i.gkd.li/i/20647853",
            "https://i.gkd.li/i/22762314"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.zhihu.android:id/guide_title\"] - [id=\"com.zhihu.android:id/guide_image_exit\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/25cfef06-fe50-4250-bf45-1f6210f95063",
          "snapshotUrls": "https://i.gkd.li/i/12647583",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0
        },
        {
          "matches": [
            "[text$=\"内容推送\"]",
            "[vid=\"btn_close\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/1d1fee24-3ba0-4cf1-a0d5-696f4f62a5e0",
          "snapshotUrls": "https://i.gkd.li/i/14917866",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 1
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "name": "会员页弹窗广告",
          "activityIds": ".app.ui.activity.MainActivity",
          "matches": "[vid=\"dismiss\"]",
          "snapshotUrls": "https://i.gkd.li/i/12707676",
          "fastQuery": true
        },
        {
          "name": "首页弹窗广告",
          "activityIds": ".app.ui.activity.AdAlphaVideoActivity",
          "matches": "[vid=\"tv_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14648128",
          "fastQuery": true
        },
        {
          "name": "会员页红包弹窗",
          "activityIds": ".app.ui.activity.MainActivity",
          "matches": "[vid=\"floating_close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/12647421",
          "fastQuery": true
        },
        {
          "action": "clickCenter",
          "activityIds": ".creatorcenter.CreatorCenterHostActivity",
          "matches": "View[text=\"关闭\"] > @[visibleToUser=true][text=\"关闭\"] <<n [vid=\"webview_bg\"]",
          "snapshotUrls": "https://i.gkd.li/i/14955183",
          "fastQuery": true
        },
        {
          "name": "会员页弹窗广告 (2)",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "matches": "[id=\"com.zhihu.android:id/dismiss\"]",
          "snapshotUrls": "https://i.gkd.li/i/12707676",
          "fastQuery": true
        },
        {
          "name": "首页弹窗广告 (2)",
          "activityIds": "com.zhihu.android.app.ui.activity.AdAlphaVideoActivity",
          "matches": "[vid=\"tv_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14648128",
          "fastQuery": true
        },
        {
          "name": "会员页红包弹窗 (2)",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "matches": "[id=\"com.zhihu.android:id/floating_close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/12647421",
          "fastQuery": true
        },
        {
          "action": "clickCenter",
          "activityIds": "com.zhihu.android.creatorcenter.CreatorCenterHostActivity",
          "matches": "View[text=\"关闭\"] > @[visibleToUser=true][text=\"关闭\"] <<n [vid=\"webview_bg\"]",
          "snapshotUrls": "https://i.gkd.li/i/14955183",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "name": "搜索栏上方广告",
          "fastQuery": true,
          "activityIds": ".app.ui.activity.MainActivity",
          "matches": [
            "[vid=\"ad_container\"]",
            "[vid=\"img_close_focus\"]"
          ],
          "exampleUrls": "https://m.gkd.li/101449500/11c26ab8-0b01-4345-8ea8-d4e97233b723",
          "snapshotUrls": "https://i.gkd.li/i/14156887"
        },
        {
          "name": "评论区广告",
          "fastQuery": true,
          "activityIds": ".comment.ui.activity.CommentListActivity",
          "matches": "@ViewGroup[childCount=1][clickable=true][visibleToUser=true][getChild(0).name$=\"SvgView\"] - [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/d81b6bc4-f4f9-466d-8edb-7af27c707ca5",
          "snapshotUrls": "https://i.gkd.li/i/20711018"
        },
        {
          "name": "优质答主推荐",
          "fastQuery": true,
          "activityIds": ".feature.short_container_feature.ui.ShortContainerHostActivity",
          "matches": "@[vid=\"ic_close\"][clickable=true] -n [text=\"更多优质答主\"]",
          "snapshotUrls": "https://i.gkd.li/i/24335648"
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-信息流广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".feature.short_container_feature.ui.ShortContainerHostActivity",
          "matches": "@[index=parent.childCount.minus(1)][clickable=true][width<150] -n [text^=\"知乎\" || text=\"创作者小助手\"][index!=2]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14235024",
            "https://i.gkd.li/i/14944631",
            "https://i.gkd.li/i/14232195"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/14232195",
          "fastQuery": true
        },
        {
          "activityIds": [
            ".mix.activity.ContentMixProfileActivity",
            ".mixshortcontainer.MixShortContainerActivity"
          ],
          "matches": "@[text=\"\" || text=\"×\"][childCount=0][width<110 && height<110] <n [childCount>2] > [visibleToUser=true][text$=\"广告\" || text=\"查看详情\"] <<n [vid=\"web_frame\" || vid=\"view_content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14220104",
            "https://i.gkd.li/i/14421277",
            "https://i.gkd.li/i/15285359",
            "https://i.gkd.li/i/14391614",
            "https://i.gkd.li/i/15282584",
            "https://i.gkd.li/i/20648888"
          ],
          "fastQuery": true
        },
        {
          "activityIds": [
            "com.zhihu.android.mix.activity.ContentMixProfileActivity",
            "com.zhihu.android.mixshortcontainer.MixShortContainerActivity"
          ],
          "matches": "@[text=\"×\"][visibleToUser=true] <n * > [visibleToUser=true][text*=\"广告\" || text=\"查看详情\"] <<n [vid=\"web_frame\" || vid=\"view_content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14220104",
            "https://i.gkd.li/i/14421277",
            "https://i.gkd.li/i/15285359"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "matches": "@ViewGroup[clickable=true] <3 * < * -2 * >2 [text$=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14332161",
          "fastQuery": true
        },
        {
          "activityIds": [
            "com.zhihu.android.mixshortcontainer.MixShortContainerActivity",
            "com.zhihu.android.mix.activity.ContentMixProfileActivity"
          ],
          "matches": "@Image[clickable=true][visibleToUser=true] <2 * > [visibleToUser=true][text$=\"广告\"] <<n [vid=\"view_content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14391614",
            "https://i.gkd.li/i/15282584"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true]  -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n * > [text*=\"知乎\" || text=\"创作者小助手\"][childCount=0][id=null][desc=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14235024",
            "https://i.gkd.li/i/14944631",
            "https://i.gkd.li/i/14232195",
            "https://i.gkd.li/i/14232195"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告-悬浮广告",
      "fastQuery": true,
      "rules": [
        {
          "name": "发现页面-右侧年卡折扣悬浮窗",
          "activityIds": ".app.ui.activity.MainActivity",
          "matches": [
            "[vid=\"activity_img\"]",
            "[vid=\"activity_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/14296251",
          "fastQuery": true
        },
        {
          "name": "首页-右侧悬浮窗广告",
          "activityIds": ".app.ui.activity.MainActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] + * >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14635636",
          "fastQuery": true
        },
        {
          "name": "回答页-底部关注悬浮窗",
          "activityIds": ".feature.short_container_feature.ui.ShortContainerHostActivity",
          "matches": "[vid=\"close_img\"]",
          "snapshotUrls": "https://i.gkd.li/i/14970008",
          "fastQuery": true
        },
        {
          "activityIds": ".mix.activity.ContentMixProfileActivity",
          "matches": "View[childCount=3] > @View[clickable=true][childCount=1][text=\"\"] > Image[childCount=0][text=\"\"] <<n [vid=\"view_content\"]",
          "exampleUrls": "https://e.gkd.li/6b9afb50-47a3-4426-a157-9b170b57c616",
          "snapshotUrls": "https://i.gkd.li/i/16422471",
          "fastQuery": true
        },
        {
          "name": "发现页面-右侧年卡折扣悬浮窗 (2)",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "matches": [
            "[vid=\"activity_img\"]",
            "[vid=\"activity_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/14296251",
          "fastQuery": true
        },
        {
          "name": "首页-右侧悬浮窗广告 (2)",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] + * >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14635636",
          "fastQuery": true
        },
        {
          "name": "回答页-底部关注悬浮窗 (2)",
          "activityIds": "com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity",
          "matches": "[vid=\"close_img\"]",
          "snapshotUrls": "https://i.gkd.li/i/14970008",
          "fastQuery": true
        },
        {
          "activityIds": "com.zhihu.android.mix.activity.ContentMixProfileActivity",
          "matches": "View[childCount=3] > @View[clickable=true][childCount=1][text=\"\"] > Image[childCount=0][text=\"\"] <<n [vid=\"view_content\"]",
          "exampleUrls": "https://e.gkd.li/6b9afb50-47a3-4426-a157-9b170b57c616",
          "snapshotUrls": "https://i.gkd.li/i/16422471",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 7,
      "name": "更新提示",
      "order": -9,
      "matchTime": 10000,
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "activityIds": [
        ".app.ui.activity.MainActivity",
        ".feature.short_container_feature.ui.ShortContainerHostActivity"
      ],
      "rules": [
        {
          "name": "勾选[不再提醒]",
          "matches": "CheckBox[text=\"不再提醒\"][checked=false][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965",
          "snapshotUrls": [
            "https://i.gkd.li/i/14445502",
            "https://i.gkd.li/i/14445815"
          ],
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "actionMaximum": 1,
          "activityIds": [
            ".app.ui.activity.MainActivity",
            ".feature.short_container_feature.ui.ShortContainerHostActivity"
          ]
        },
        {
          "preKeys": 0,
          "name": "点击[取消]",
          "matches": [
            "[text=\"去应用市场\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965",
          "snapshotUrls": "https://i.gkd.li/i/14445502",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "actionMaximum": 1,
          "activityIds": [
            ".app.ui.activity.MainActivity",
            ".feature.short_container_feature.ui.ShortContainerHostActivity"
          ]
        },
        {
          "name": "勾选[不再提醒] (2)",
          "matches": "CheckBox[text=\"不再提醒\"][checked=false][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965",
          "snapshotUrls": [
            "https://i.gkd.li/i/14445502",
            "https://i.gkd.li/i/14445815"
          ],
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "actionMaximum": 1,
          "activityIds": [
            ".app.ui.activity.MainActivity",
            ".feature.short_container_feature.ui.ShortContainerHostActivity"
          ]
        },
        {
          "preKeys": 2,
          "name": "点击[取消] (2)",
          "matches": [
            "[text=\"去应用市场\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965",
          "snapshotUrls": "https://i.gkd.li/i/14445502",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "actionMaximum": 1,
          "activityIds": [
            ".app.ui.activity.MainActivity",
            ".feature.short_container_feature.ui.ShortContainerHostActivity"
          ]
        }
      ]
    },
    {
      "key": 10,
      "name": "评价提示-评论区氛围评价卡片",
      "desc": "点击关闭",
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".comment.ui.activity.CommentListActivity",
          "matches": "@ViewGroup[clickable=true] - [text^=\"你对该内容下的评论氛围是否满意\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/60674332-41a3-4a31-907e-7af6c23182bf",
          "snapshotUrls": "https://i.gkd.li/i/20473238",
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 11,
      "name": "局部广告-搜索栏上方广告",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "matches": [
            "[vid=\"ad_container\"]",
            "[vid=\"img_close_focus\"]"
          ],
          "exampleUrls": "https://m.gkd.li/101449500/11c26ab8-0b01-4345-8ea8-d4e97233b723",
          "snapshotUrls": "https://i.gkd.li/i/14156887"
        }
      ]
    }
  ]
});
