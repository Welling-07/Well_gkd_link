// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.netease.cloudmusic",
  "name": "网易云音乐",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "excludeActivityIds": [
            ".music.biz.setting.activity.SettingActivity",
            ".music.biz.search.activity.SearchActivity",
            ".music.biz.rn.activity.BgMainProcessRNActivity"
          ],
          "matches": "[text*=\"跳过\" || text*=\"Skip\"][text.length<10][width<500 && height<200][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30857148",
            "https://i.gkd.li/i/30857149"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15092814",
            "https://i.gkd.li/i/16318423",
            "https://i.gkd.li/i/30857162"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "excludeActivityIds": "com.netease.cloudmusic.music.biz.setting.activity.SettingActivity",
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15092772",
            "https://i.gkd.li/i/15092814"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-卡片广告",
      "desc": "点击[关闭]-点击[直接关闭]/[不感兴趣]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".activity.MainActivity",
            ".music.biz.comment.activity.CommentActivity",
            ".music.biz.voice.player.revisionV1.ProgramPlayerActivityV1"
          ],
          "matches": "[vid=\"tag_ad_banner\" || vid=\"adTagView\" || vid=\"closeAction\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13859634",
            "https://i.gkd.li/i/13927753",
            "https://i.gkd.li/i/14549836",
            "https://i.gkd.li/i/14275955",
            "https://i.gkd.li/i/16047087"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".music.biz.comment.activity.CommentActivity",
          "matches": "@ViewGroup[clickable=true][childCount=2] > ImageView - ViewGroup > TextView[text.length>0] <<n [vid=\"recyclerView\"]",
          "snapshotUrls": "https://i.gkd.li/i/23771616"
        },
        {
          "fastQuery": true,
          "activityIds": ".music.biz.comment.activity.CommentActivity",
          "matches": "@ViewGroup[clickable=true][childCount=1] + ViewGroup[childCount=1] > [text=\"艺人相关\"]",
          "snapshotUrls": "https://i.gkd.li/i/23771678"
        },
        {
          "fastQuery": true,
          "activityIds": [
            ".activity.MainActivity",
            ".music.biz.comment.activity.CommentActivity",
            ".music.biz.voice.player.revisionV1.ProgramPlayerActivityV1"
          ],
          "anyMatches": [
            "[text=\"直接关闭\"][clickable=true]",
            "@[clickable=true] > [text=\"不感兴趣\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13859635",
            "https://i.gkd.li/i/14932659",
            "https://i.gkd.li/i/16047089",
            "https://i.gkd.li/i/23771645"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.netease.cloudmusic.activity.MainActivity",
            "com.netease.cloudmusic.music.biz.voice.player.revisionV1.ProgramPlayerActivityV1"
          ],
          "excludeActivityIds": "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
          "matches": "[vid=\"adTagView\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/a603ceca-7e89-4b1f-9e17-508c583b32d8",
          "snapshotUrls": [
            "https://i.gkd.li/i/13859634",
            "https://i.gkd.li/i/12829964",
            "https://i.gkd.li/i/12829953",
            "https://i.gkd.li/i/16047087"
          ]
        },
        {
          "name": "推荐页广告",
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "matches": "[vid=\"tag_ad_banner\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/b14cda2e-27e5-4a91-8037-3ccbf1f9d0da",
          "snapshotUrls": "https://i.gkd.li/i/13927753"
        },
        {
          "name": "评论区内容推荐",
          "activityIds": "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
          "matches": "@ViewGroup[clickable=true][childCount=2] > ImageView - ViewGroup > TextView[text.length>0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13526986",
            "https://i.gkd.li/i/13526711"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet",
            "com.netease.cloudmusic.activity.MainActivity",
            "com.netease.cloudmusic.music.biz.voice.player.revisionV1.ProgramPlayerActivityV1"
          ],
          "matches": "[text=\"直接关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12829967",
            "https://i.gkd.li/i/13859635",
            "https://i.gkd.li/i/16047089"
          ]
        },
        {
          "preKeys": 6,
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
          "matches": "@[id=\"com.netease.cloudmusic:id/artist_container\"] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13526712"
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.netease.cloudmusic.music.biz.search.activity.SearchActivity",
            "com.netease.cloudmusic.activity.MainActivity"
          ],
          "excludeActivityIds": "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
          "matches": "[vid=\"adTagView\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/a603ceca-7e89-4b1f-9e17-508c583b32d8",
          "snapshotUrls": [
            "https://i.gkd.li/i/14277140",
            "https://i.gkd.li/i/13859634",
            "https://i.gkd.li/i/12829964",
            "https://i.gkd.li/i/12829953"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet",
            "com.netease.cloudmusic.music.biz.search.activity.SearchActivity",
            "com.netease.cloudmusic.activity.MainActivity"
          ],
          "matches": "[text=\"直接关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12829967",
            "https://i.gkd.li/i/14277137",
            "https://i.gkd.li/i/13859635"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".activity.PlayerActivity",
          "matches": "[vid=\"iv_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15282417",
          "fastQuery": true
        },
        {
          "activityIds": ".music.biz.search.activity.SearchActivity",
          "matches": "[vid=\"adCloseIV\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/16385547",
          "fastQuery": true
        },
        {
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"v_close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/23982125",
          "fastQuery": true
        },
        {
          "name": "[我的]页面广告",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "matches": "[id=\"com.netease.cloudmusic:id/resource_view\"] > [id=\"com.netease.cloudmusic:id/close_btn\"]",
          "exampleUrls": "https://m.gkd.li/57941037/827ebe8b-f3c6-4068-8d31-11d5b2578680",
          "snapshotUrls": "https://i.gkd.li/i/12745666",
          "fastQuery": true
        },
        {
          "name": "首页卡片广告",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "matches": "[vid=\"adTagView\"]",
          "snapshotUrls": "https://i.gkd.li/i/15047096",
          "fastQuery": true
        },
        {
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity",
          "matches": "[vid=\"iv_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15282417"
        },
        {
          "activityIds": "com.netease.cloudmusic.music.biz.search.activity.SearchActivity",
          "matches": "[vid=\"adCloseIV\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/16385547",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "rules": [
        {
          "action": "back",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.PlayerActivity",
            ".music.biz.rn.activity.LayerReactNativeActivity",
            ".music.biz.comment.activity.CommentActivity"
          ],
          "excludeMatches": "[text=\"当前场景\" || vid=\"mainDrawerContainer\"][visibleToUser=true]",
          "matches": "[vid=\"dsl_dialog_root\" || text^=\"邀您开通VIP\" || text^=\"本周已免费试听\" || text^=\"免费听模式体验中\" || text^=\"续费后，即可畅听\" || text*=\"小组件到桌面\" || text$=\"开通VIP畅听\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13804534",
            "https://i.gkd.li/i/13848913",
            "https://i.gkd.li/i/13962214",
            "https://i.gkd.li/i/14036940",
            "https://i.gkd.li/i/15047126",
            "https://i.gkd.li/i/15125892",
            "https://i.gkd.li/i/15244091",
            "https://i.gkd.li/i/23770986",
            "https://i.gkd.li/i/20097535",
            "https://i.gkd.li/i/20097609",
            "https://i.gkd.li/i/20115012",
            "https://i.gkd.li/i/22451511",
            "https://i.gkd.li/i/23770978",
            "https://i.gkd.li/i/27080453"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15404777",
            "https://i.gkd.li/i/20115204",
            "https://i.gkd.li/i/20159204",
            "https://i.gkd.li/i/24157914"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "matches": "WebView >n View > TextView + TextView + TextView",
          "snapshotUrls": "https://i.gkd.li/i/13188737",
          "fastQuery": true
        },
        {
          "action": "back",
          "activityIds": [
            "com.netease.cloudmusic.activity.MainActivity",
            "com.netease.cloudmusic.activity.PlayerActivity"
          ],
          "excludeMatches": "[text=\"当前场景\"]",
          "matches": "[vid=\"dsl_dialog_root\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13804534",
            "https://i.gkd.li/i/13848913",
            "https://i.gkd.li/i/13962214",
            "https://i.gkd.li/i/14036940",
            "https://i.gkd.li/i/15047126",
            "https://i.gkd.li/i/15125892",
            "https://i.gkd.li/i/15244091",
            "https://i.gkd.li/i/13230603",
            "https://i.gkd.li/i/15404777"
          ],
          "fastQuery": true
        },
        {
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "matches": "View[childCount=4] > @TextView[index=2][visibleToUser=true] <<n [vid=\"popLayerWebViewContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/15160018"
        },
        {
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "matches": "@ImageView[visibleToUser=true] - * > [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13229016",
            "https://i.gkd.li/i/13962214"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.netease.cloudmusic.activity.MainActivity",
            "com.netease.cloudmusic.activity.PlayerActivity"
          ],
          "matches": "ViewGroup[childCount=2] > @ImageView[index=1][clickable=true][visibleToUser=true] <<n [vid=\"dsl_dialog_root\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14036940",
            "https://i.gkd.li/i/15244091"
          ]
        },
        {
          "fastQuery": true,
          "action": "back",
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity",
          "matches": "[text=\"赞赏功能全新升级啦\"]",
          "snapshotUrls": "https://i.gkd.li/i/13848913"
        },
        {
          "fastQuery": true,
          "action": "back",
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity",
          "matches": "[text=\"立即限免体验\"]",
          "snapshotUrls": "https://i.gkd.li/i/15125892"
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-VIP弹窗",
      "fastQuery": true,
      "rules": [
        {
          "action": "back",
          "activityIds": [
            ".music.biz.rn.activity.MainProcessLayerReactNativeActivity",
            ".activity.MainActivity",
            ".activity.PlayListActivity",
            ".music.biz.rn.activity.LayerReactNativeActivity"
          ],
          "matches": [
            "[text=\"支付宝\"][visibleToUser=true]",
            "[text^=\"确认协议并\" || text=\"立即开通\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13189055",
            "https://i.gkd.li/i/13260416",
            "https://i.gkd.li/i/13996787",
            "https://i.gkd.li/i/13230605",
            "https://i.gkd.li/i/14268181",
            "https://i.gkd.li/i/13391498",
            "https://i.gkd.li/i/14045917",
            "https://i.gkd.li/i/14926722",
            "https://i.gkd.li/i/16242200",
            "https://i.gkd.li/i/20097276",
            "https://i.gkd.li/i/20218350"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/20097306",
          "fastQuery": true
        },
        {
          "fastQuery": true,
          "activityIds": ".music.biz.rn.activity.CashierRNActivity",
          "matches": "[text=\"忍痛离开\"] < @ViewGroup[clickable=true] -n * > [text$=\"VIP可畅享千万曲库\"]",
          "snapshotUrls": "https://i.gkd.li/i/24548104"
        },
        {
          "action": "back",
          "activityIds": [
            "com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity",
            "com.netease.cloudmusic.activity.MainActivity",
            ".activity.PlayListActivity"
          ],
          "matches": [
            "[text=\"支付宝\"]",
            "[text^=\"确认协议并\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13189055",
            "https://i.gkd.li/i/13260416",
            "https://i.gkd.li/i/13996787",
            "https://i.gkd.li/i/13230605",
            "https://i.gkd.li/i/14268181",
            "https://i.gkd.li/i/13391498",
            "https://i.gkd.li/i/14045917",
            "https://i.gkd.li/i/14926722",
            "https://i.gkd.li/i/16242200"
          ],
          "fastQuery": true
        },
        {
          "action": "back",
          "activityIds": "com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity",
          "matches": "[text^=\"邀您开通VIP\"]",
          "snapshotUrls": "https://i.gkd.li/i/14956768",
          "fastQuery": true
        },
        {
          "action": "back",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "matches": "[vid=\"view_button_main\"][text*=\"立即续费\"]",
          "snapshotUrls": "https://i.gkd.li/i/14969806",
          "fastQuery": true
        },
        {
          "action": "back",
          "activityIds": [
            "com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity",
            "com.netease.cloudmusic.activity.MainActivity"
          ],
          "matches": [
            "[text=\"支付宝\"]",
            "[text^=\"确认协议并\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13189055",
            "https://i.gkd.li/i/13260416",
            "https://i.gkd.li/i/13996787",
            "https://i.gkd.li/i/13230605",
            "https://i.gkd.li/i/14268181",
            "https://i.gkd.li/i/13391498",
            "https://i.gkd.li/i/14045917",
            "https://i.gkd.li/i/14926722"
          ],
          "fastQuery": true
        },
        {
          "action": "back",
          "activityIds": [
            "com.netease.cloudmusic.activity.MainActivity",
            "com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity"
          ],
          "matches": "[text$=\"千万级会员曲库\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13228955",
            "https://i.gkd.li/i/14956768"
          ],
          "fastQuery": true
        },
        {
          "action": "back",
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity",
          "matches": "[text=\"搭配沉浸环绕声，享受空间音感\"]",
          "snapshotUrls": "https://i.gkd.li/i/13230603",
          "fastQuery": true
        },
        {
          "action": "back",
          "activityIds": [
            "com.netease.cloudmusic.activity.MainActivity",
            "com.netease.cloudmusic.activity.PlayerActivity"
          ],
          "matches": "[text*=\"免费听30分钟\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12843383",
            "https://i.gkd.li/i/13804534",
            "https://i.gkd.li/i/15047126"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 5,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.MainActivity",
          "matches": [
            "[text*=\"新版本\"]",
            "[text=\"近期不再提示\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13233790",
          "excludeSnapshotUrls": "https://i.gkd.li/i/15092457",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        },
        {
          "activityIds": ".activity.MainActivity",
          "matches": [
            "[vid=\"updateVersionTitle\"][visibleToUser=true]",
            "[vid=\"md_dialog_cm_close_btn\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/8827aa5a-a105-4910-981c-d9ecc036a87d",
          "snapshotUrls": "https://i.gkd.li/i/18492805",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        },
        {
          "matches": [
            "[text*=\"新版本\"]",
            "[text=\"近期不再提示\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13233790",
            "https://i.gkd.li/i/13197457",
            "https://i.gkd.li/i/13228878",
            "https://i.gkd.li/i/15092457"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 7,
      "name": "分段广告-搜索页广告",
      "desc": "该规则触发时会导致输入法收起",
      "fastQuery": true,
      "activityIds": ".music.biz.search.activity.SearchActivity",
      "rules": [
        {
          "matches": "[vid=\"adTagView\" || vid=\"adTagViewNew\"][clickable=true]",
          "exampleUrls": "https://e.gkd.li/afb3fc72-7a69-489a-ac5a-7a70f5685667",
          "snapshotUrls": [
            "https://i.gkd.li/i/16357208",
            "https://i.gkd.li/i/16357111"
          ],
          "fastQuery": true,
          "activityIds": ".music.biz.search.activity.SearchActivity"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"直接关闭\"]",
          "exampleUrls": "https://e.gkd.li/1e2b2822-01dd-455f-8991-1b746c61c07c",
          "snapshotUrls": "https://i.gkd.li/i/16357210",
          "fastQuery": true,
          "activityIds": ".music.biz.search.activity.SearchActivity"
        },
        {
          "matches": "[vid=\"adTagView\" || vid=\"adTagViewNew\"][clickable=true]",
          "exampleUrls": "https://e.gkd.li/afb3fc72-7a69-489a-ac5a-7a70f5685667",
          "snapshotUrls": [
            "https://i.gkd.li/i/16357208",
            "https://i.gkd.li/i/16357111"
          ],
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.music.biz.search.activity.SearchActivity"
        },
        {
          "preKeys": 2,
          "matches": "[text=\"直接关闭\"]",
          "exampleUrls": "https://e.gkd.li/1e2b2822-01dd-455f-8991-1b746c61c07c",
          "snapshotUrls": "https://i.gkd.li/i/16357210",
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.music.biz.search.activity.SearchActivity"
        }
      ]
    },
    {
      "key": 8,
      "name": "其他-分享时[取消勾选]得现金",
      "desc": "仅点击1次",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match",
          "activityIds": ".music.biz.rn.activity.MainProcessLayerReactNativeActivity",
          "matches": "@[clickable=true] > ImageView + [text*=\"勾选后分享到\"]",
          "snapshotUrls": "https://i.gkd.li/i/33880660",
          "exampleUrls": "https://e.gkd.li/61178688-ca5c-4d21-96a2-8d8382665433"
        }
      ]
    },
    {
      "key": 9,
      "name": "局部广告-播放界面广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.netease.cloudmusic.activity.PlayerActivity",
      "rules": [
        {
          "name": "右上角VIP小悬浮",
          "matches": "TextView[text!=null] + ImageView[id=\"com.netease.cloudmusic:id/close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13402634",
            "https://i.gkd.li/i/13402635",
            "https://i.gkd.li/i/13402636"
          ],
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity"
        },
        {
          "name": "巨幅卡片广告1",
          "matches": "[text^=\"跳过广告\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/13527105",
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity"
        },
        {
          "name": "巨幅卡片广告2",
          "matches": "@TextView[text!=null][clickable=true][visibleToUser=true] - ViewGroup > [text*=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14045424",
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity"
        },
        {
          "name": "巨幅卡片广告3",
          "matches": "[vid=\"iv_ad_close\"][clickable=true][visibleToUser=true][focusable=true]",
          "snapshotUrls": "https://i.gkd.li/i/15282417",
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity"
        },
        {
          "name": "巨幅卡片式广告2",
          "matches": "@TextView[index=2] <3 ViewGroup[childCount=3] <<n [id=\"com.netease.cloudmusic:id/container\"]",
          "snapshotUrls": "https://i.gkd.li/i/14045424",
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity"
        }
      ]
    },
    {
      "key": 10,
      "name": "局部广告-发现页顶部视频广告",
      "desc": "自动点击跳过。",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "matches": "[id=\"com.netease.cloudmusic:id/skipBannerAd\"]",
          "snapshotUrls": "https://i.gkd.li/i/13768367",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 12,
      "name": "分段广告-评论区广告",
      "desc": "点击[关闭]-点击[不感兴趣]",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
        "com.netease.cloudmusic.music.biz.comment.activity.ReplyCommentActivity2"
      ],
      "rules": [
        {
          "name": "点击关闭-1",
          "matches": "[vid=\"commentVHRootId\"][visibleToUser=true] - [vid=\"commentVHRootId\"] [vid=\"closeAction\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14549836",
          "fastQuery": true,
          "activityIds": [
            "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
            "com.netease.cloudmusic.music.biz.comment.activity.ReplyCommentActivity2"
          ]
        },
        {
          "name": "点击关闭-2",
          "matches": "[vid=\"commentVHRootId\"][visibleToUser=true] - [vid=\"commentAdContainer\"] >n [vid=\"adTagView\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14275571",
            "https://i.gkd.li/i/14275955",
            "https://i.gkd.li/i/14070500",
            "https://i.gkd.li/i/14964827",
            "https://i.gkd.li/i/14964828"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
            "com.netease.cloudmusic.music.biz.comment.activity.ReplyCommentActivity2"
          ]
        },
        {
          "preKeys": 1,
          "name": "点击[直接关闭]",
          "matches": "[text=\"直接关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14932659",
            "https://i.gkd.li/i/14964832"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
            "com.netease.cloudmusic.music.biz.comment.activity.ReplyCommentActivity2"
          ]
        },
        {
          "preKeys": 0,
          "name": "点击[不感兴趣]",
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/14549856",
          "fastQuery": true,
          "activityIds": [
            "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
            "com.netease.cloudmusic.music.biz.comment.activity.ReplyCommentActivity2"
          ]
        }
      ]
    },
    {
      "key": 13,
      "name": "全屏广告-[获得新徽章]弹窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "matches": "@ImageView[clickable=true] <n * > [text=\"查看我的勋章\"]",
          "exampleUrls": "https://m.gkd.li/57941037/39e34e7d-eae3-4a54-9794-97c2528d13fb",
          "snapshotUrls": "https://i.gkd.li/i/14926750",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
