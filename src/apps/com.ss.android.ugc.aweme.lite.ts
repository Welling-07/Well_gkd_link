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
