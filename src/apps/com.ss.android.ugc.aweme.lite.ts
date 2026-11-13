// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.ugc.aweme.lite",
  "name": "抖音极速版",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": [
            "[text*=\"更新\" || text*=\"下载\" || text*=\"安装\" || text*=\"升级\"][visibleToUser=true]",
            "[text$=\"再说\" || text^=\"忽略\" || text^=\"取消\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/30620547",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-功能体验邀请弹窗",
      "rules": [
        {
          "name": "[首页商城]体验邀请弹窗",
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.commerce.sdk.MallContainerActivity",
          "matches": [
            "UIText[text^=\"立即体验\"]",
            "FlattenUIText[text=\"不再提示\"][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13684791"
        },
        {
          "name": "\"首页商城\"体验邀请弹窗",
          "activityIds": "com.ss.android.ugc.aweme.commerce.sdk.MallContainerActivity",
          "matches": "[text=\"不再提示\"] + @ECCustomUiImage[clickable=true] +n LynxFlattenUI[text^=\"立即体验\"]",
          "snapshotUrls": "https://i.gkd.li/i/13684791"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-打招呼表情",
      "desc": "聊天界面,朋友在线,打个招呼... 点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "@[desc=\"关闭\"][clickable=true] - [text*=\"打个招呼\"]",
          "snapshotUrls": "https://i.gkd.li/i/31596787",
          "exampleUrls": "https://e.gkd.li/0e381602-a24a-45fa-839d-e20999ad30f9"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-朋友推荐弹窗",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.ss.android.ugc.aweme.main.MainActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/13650523",
      "rules": [
        {
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "[text=\"朋友推荐\"] +2 [vid=\"close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13650523",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"朋友推荐\"] +2 [id=\"com.ss.android.ugc.aweme.lite:id/close\"][clickable=true]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.ss.android.ugc.aweme.main.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "desc": "点击暂不开启",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        ".com.ss.android.ugc.aweme.main.MainActivity",
        ".detail.ui.DetailActivity",
        ".profile.ui.UserProfileActivity",
        ".com.ss.android.ugc.aweme.main.MainActivity",
        ".setting.serverpush.ui.PushSettingManagerActivity"
      ],
      "rules": [
        {
          "matches": [
            "TextView[text$=\"提醒\" || text$=\"通知\"][text.length>5][visibleToUser=true]",
            "[text=\"以后再说\" || text=\"暂不开启\" || text=\"禁止\" || text=\"取消\" || text=\"保持现状\"][clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13888485",
            "https://i.gkd.li/i/32760384",
            "https://i.gkd.li/i/32754778"
          ],
          "exampleUrls": "https://e.gkd.li/3916c33e-f0dc-45c3-8d81-db4bddf761ed",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".com.ss.android.ugc.aweme.main.MainActivity",
            ".detail.ui.DetailActivity",
            ".profile.ui.UserProfileActivity",
            ".com.ss.android.ugc.aweme.main.MainActivity",
            ".setting.serverpush.ui.PushSettingManagerActivity"
          ],
          "matchTime": 10000
        },
        {
          "matches": "[id=\"com.ss.android.ugc.aweme.lite:id/gl7\"] > [id=\"com.ss.android.ugc.aweme.lite:id/h5q\"]",
          "snapshotUrls": "https://i.gkd.li/i/13888485",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".com.ss.android.ugc.aweme.main.MainActivity",
            ".detail.ui.DetailActivity",
            ".profile.ui.UserProfileActivity",
            ".com.ss.android.ugc.aweme.main.MainActivity",
            ".setting.serverpush.ui.PushSettingManagerActivity"
          ]
        }
      ]
    },
    {
      "key": 5,
      "name": "功能类-选择图片时自动勾选原图",
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.im.sdk.media.choose.MediaChooseActivity",
          "matches": "[text=\"原图\"][desc^=\"未选中\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13946092",
            "https://i.gkd.li/i/13946033"
          ]
        },
        {
          "activityIds": "com.ss.android.ugc.aweme.im.sdk.media.choose.MediaChooseActivity",
          "matches": "[id=\"com.ss.android.ugc.aweme.lite:id/amh\"][desc^=\"未选中\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13946092",
            "https://i.gkd.li/i/13946033"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 6,
      "name": "全屏广告",
      "rules": [
        {
          "activityIds": "com.ss.android.ugc.aweme.live.LiveDummyHybridTransparentActivity",
          "matches": "@Image[clickable=true][text!=null][width<100 && height<100] +4 View >2 [text=\"同意协议并查看额度\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/23558501"
        },
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "@UIView[text=\"不感兴趣\"][clickable=true] +2 FlattenUIText[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/24123937"
        },
        {
          "fastQuery": true,
          "matchRoot": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "@ImageView[id=null][text=null][width<100][height<100] < ViewGroup[childCount>1] <2 LinearLayout < HorizontalScrollView < ScrollView < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [vid=\"action_bar_root\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25547227",
            "https://i.gkd.li/i/28449818"
          ]
        }
      ]
    },
    {
      "key": 7,
      "name": "全屏广告-添加桌面小组件",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "@ImageView[clickable=true] - [text$=\"桌面小组件\"]",
          "snapshotUrls": "https://i.gkd.li/i/25208769"
        }
      ]
    },
    {
      "key": 8,
      "name": "功能类-刷到推广视频时[上滑]",
      "desc": "广告/应用/购物/游戏/咨询/预约/子薇剧场 等推广视频",
      "rules": [
        {
          "fastQuery": true,
          "actionCd": 300,
          "actionDelay": 200,
          "swipeArg": {
            "start": {
              "x": "screenWidth/2",
              "y": "screenHeight * 0.6"
            },
            "end": {
              "x": "screenWidth/2",
              "y": "screenHeight * 0.3"
            },
            "duration": 200
          },
          "activityIds": [
            "com.ss.android.ugc.aweme.main.MainActivity",
            "com.ss.android.ugc.aweme.detail.ultra.ui.UltraDetailActivity",
            "com.ss.android.ugc.aweme.detail.ui.DetailActivity"
          ],
          "matches": "([text$=\"广告 展开\" || text$=\"广告 收起\" || text$=\"广告 \"][vid=\"desc\"][visibleToUser=true]) || ([text=\"应用\" || text=\"购物\" || text$=\"游戏\" || text=\"咨询\" || text=\"子薇剧场\" || text=\"预约\"][text.length<6][index=1][visibleToUser=true])",
          "snapshotUrls": [
            "https://i.gkd.li/i/29214101",
            "https://i.gkd.li/i/29579093",
            "https://i.gkd.li/i/29686900",
            "https://i.gkd.li/i/32619091",
            "https://i.gkd.li/i/29214002"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/29686899"
        }
      ]
    },
    {
      "key": 9,
      "name": "局部广告-商品卡片",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "@ImageView[clickable=true] + [focusable=true] >4 [text=\"购买\"][index=1][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/30344666",
          "exampleUrls": "https://e.gkd.li/b7f062ff-1bff-4990-bb67-72bd0818e5d8"
        }
      ]
    },
    {
      "key": 10,
      "name": "分段广告-搜索结果页广告",
      "desc": "①点击[反馈] ②选一个[理由]",
      "fastQuery": true,
      "activityIds": "com.ss.android.ugc.aweme.search.activity.SearchResultActivity",
      "rules": [
        {
          "name": "①点击[反馈]",
          "matches": "@[desc=\"广告反馈\"] <3 [childCount=3] + [visibleToUser=true] >5 [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30505021",
            "https://i.gkd.li/i/30505027"
          ],
          "exampleUrls": "https://e.gkd.li/35d4bb61-f1d7-46cb-a7df-2a9fdf2136cd",
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.search.activity.SearchResultActivity"
        },
        {
          "preKeys": 0,
          "name": "②选一个[理由]",
          "position": {
            "left": "width * 0.2646",
            "top": "width * 0.1972"
          },
          "matches": "ImageView[childCount=0] < @ViewGroup <<(7,8) [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30505023",
            "https://i.gkd.li/i/32619430"
          ],
          "exampleUrls": "https://e.gkd.li/c1314e68-d89a-42e3-af74-c50303f5546a",
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.search.activity.SearchResultActivity"
        }
      ]
    },
    {
      "key": 11,
      "name": "功能类-自动切换到[作品]列表",
      "desc": "在用户主页时,若存在[橱窗/商品/服务],则点击[作品]",
      "rules": [
        {
          "fastQuery": true,
          "actionCd": 10000,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "[visibleToUser=false] < ViewPager[childCount>1] - ViewGroup >3 @[desc^=\"作品\"][clickable=true] +n [name$=\"ActionBar$Tab\"] >3 [text=\"橱窗\" || text=\"商品\" || text=\"服务\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30619207",
            "https://i.gkd.li/i/30619569",
            "https://i.gkd.li/i/30621467",
            "https://i.gkd.li/i/30621712"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/30619208",
            "https://i.gkd.li/i/30619506"
          ],
          "exampleUrls": "https://e.gkd.li/966b01bd-3c89-4f19-83af-7e9429ab25ed"
        }
      ]
    },
    {
      "key": 12,
      "name": "功能类-评论区-自动展开评论",
      "desc": "只展开一级评论，不点击展示更多",
      "fastQuery": true,
      "activityIds": [
        ".detail.ui.DetailActivity",
        ".com.ss.android.ugc.aweme.main.MainActivity",
        ".com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity",
        ".searcharticle.detail.ArticleDetailActivity",
        ".search.activity.SearchResultActivity",
        ".detail.ultra.ui.UltraDetailActivity",
        ".playlet.videodetail.PlayletVideoPlayActivity"
      ],
      "rules": [
        {
          "matches": "@[clickable=true] > [text^=\"展开\"][text$=\"回复\"]",
          "snapshotUrls": "https://i.gkd.li/i/32755488",
          "excludeSnapshotUrls": "https://i.gkd.li/i/32755811",
          "exampleUrls": [
            "https://e.gkd.li/a2be5c9e-afe9-4992-8c83-bbe191d68d76",
            "https://e.gkd.li/1609405d-5a20-445d-bb2f-5de5a9b1237d"
          ],
          "fastQuery": true,
          "activityIds": [
            ".detail.ui.DetailActivity",
            ".com.ss.android.ugc.aweme.main.MainActivity",
            ".com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity",
            ".searcharticle.detail.ArticleDetailActivity",
            ".search.activity.SearchResultActivity",
            ".detail.ultra.ui.UltraDetailActivity",
            ".playlet.videodetail.PlayletVideoPlayActivity"
          ]
        }
      ]
    },
    {
      "key": 13,
      "name": "功能类-评论区-自动展开评论_全部",
      "desc": "基于上面追加点击展开更多",
      "fastQuery": true,
      "activityIds": [
        ".detail.ui.DetailActivity",
        ".com.ss.android.ugc.aweme.main.MainActivity",
        ".com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity",
        ".searcharticle.detail.ArticleDetailActivity",
        ".search.activity.SearchResultActivity",
        ".detail.ultra.ui.UltraDetailActivity",
        ".playlet.videodetail.PlayletVideoPlayActivity"
      ],
      "rules": [
        {
          "matches": "@[clickable=true] > [text^=\"展开更多\"]",
          "snapshotUrls": "https://i.gkd.li/i/32755811",
          "exampleUrls": "https://e.gkd.li/1609405d-5a20-445d-bb2f-5de5a9b1237d",
          "fastQuery": true,
          "activityIds": [
            ".detail.ui.DetailActivity",
            ".com.ss.android.ugc.aweme.main.MainActivity",
            ".com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity",
            ".searcharticle.detail.ArticleDetailActivity",
            ".search.activity.SearchResultActivity",
            ".detail.ultra.ui.UltraDetailActivity",
            ".playlet.videodetail.PlayletVideoPlayActivity"
          ]
        }
      ]
    },
    {
      "key": 14,
      "name": "功能类-自动开启[自动连播]",
      "desc": "仅在刚进抖极时第1个视频生效, ①[长按]视频 ②开启[自动联播]",
      "fastQuery": true,
      "matchRoot": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
      "rules": [
        {
          "name": "①[长按]视频",
          "action": "longClickCenter",
          "matches": "[vid=\"viewpager\"][desc=\"视频\"][childCount=2][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/34420783",
          "excludeSnapshotUrls": "https://i.gkd.li/i/34418998",
          "fastQuery": true,
          "matchRoot": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity"
        },
        {
          "preKeys": 0,
          "name": "②开启[自动联播]",
          "matches": "@Switch[clickable=true][checked=false] - [text=\"自动连播\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/34423078",
            "https://i.gkd.li/i/34419001"
          ],
          "fastQuery": true,
          "matchRoot": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity"
        },
        {
          "preKeys": 0,
          "name": "③已开-按[返回键]",
          "action": "back",
          "actionMaximumKey": 1,
          "matches": "@Switch[clickable=true][checked=true] - [text=\"自动连播\"]",
          "snapshotUrls": "https://i.gkd.li/i/34421280",
          "fastQuery": true,
          "matchRoot": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity"
        }
      ]
    },
    {
      "key": 15,
      "name": "青少年模式",
      "desc": "点击\"我知道了\"/\"关闭\"",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "Button[desc=\"开启青少年模式\"] + Button[text=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13111607",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "actionMaximumKey": 0,
          "matches": "Button[text=\"开启青少年模式\"] + LinearLayout > Button[text=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13542867"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 16,
      "name": "通知提示-消息提醒弹窗",
      "desc": "点击暂不开启",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "[id=\"com.ss.android.ugc.aweme.lite:id/gl7\"] > [id=\"com.ss.android.ugc.aweme.lite:id/h5q\"]",
          "snapshotUrls": "https://i.gkd.li/i/13888485",
          "fastQuery": true
        }
      ]
    }
  ]
});
