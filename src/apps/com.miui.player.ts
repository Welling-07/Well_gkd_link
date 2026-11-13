// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miui.player",
  "name": "小米音乐",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25094542",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusiclite.activity.player.MusicPlayerActivity",
          "matches": "[vid=\"free_mode_tips_layout\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13303283"
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "matches": "[vid=\"cl_floating_promote\"] > [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13562649"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-横幅广告",
      "desc": "关闭播放页面横幅广告",
      "fastQuery": true,
      "activityIds": "com.tencent.qqmusiclite.activity.player.MusicPlayerActivity",
      "rules": [
        {
          "matches": "[vid=\"ad_skip_text\"][text=\"关闭\"]",
          "exampleUrls": "https://m.gkd.li/57941037/d923ba1b-3098-49b0-8593-c84dbaa16612",
          "snapshotUrls": [
            "https://i.gkd.li/i/13304347",
            "https://i.gkd.li/i/13304344"
          ],
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusiclite.activity.player.MusicPlayerActivity"
        },
        {
          "matches": "[text=\"广告｜跳过\"]",
          "exampleUrls": "https://m.gkd.li/57941037/2ae1ca24-fb50-48ff-9343-e5607b512127",
          "snapshotUrls": "https://i.gkd.li/i/14711960",
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusiclite.activity.player.MusicPlayerActivity"
        },
        {
          "matches": "[id=\"com.miui.player:id/ad_skip_text\"][text=\"关闭\"]",
          "exampleUrls": "https://m.gkd.li/57941037/d923ba1b-3098-49b0-8593-c84dbaa16612",
          "snapshotUrls": [
            "https://i.gkd.li/i/13304347",
            "https://i.gkd.li/i/13304344"
          ],
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusiclite.activity.player.MusicPlayerActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusiccommon.hybrid.HybridViewActivity",
          "matches": "@ViewGroup[clickable=true][childCount=0][visibleToUser=true] < ViewGroup[childCount=1] < ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid=\"webview_container\"]",
          "exampleUrls": "https://e.gkd.li/5e6fd5f8-6ad3-4a46-ab34-c9b6b2d7a112",
          "snapshotUrls": "https://i.gkd.li/i/17783777",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.tencent.qqmusiccommon.hybrid.HybridViewActivity",
          "matches": "[id=null][desc~=\".*关闭.*按钮.*\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700955",
            "https://i.gkd.li/i/22562104"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-弹窗广告（部分误触）",
      "desc": "注意：会关闭年度报告邀请函弹窗",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "matches": "[vid=\"iv_close_dialog_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13623503"
        }
      ]
    },
    {
      "key": 5,
      "name": "功能类-看广告视频领VIP",
      "desc": "等待15s自动点击\"退出\"",
      "rules": [
        {
          "actionDelay": 15000,
          "fastQuery": true,
          "activityIds": "com.tencentmusic.ad.tmead.reward.TMERewardActivity",
          "matches": "[vid=\"tme_ad_skip_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13610667"
        },
        {
          "actionDelay": 15000,
          "fastQuery": true,
          "activityIds": "com.tencentmusic.ad.tmead.reward.TMERewardActivity",
          "matches": "[id=\"com.miui.player:id/tme_ad_skip_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13610667"
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告-主界面卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "matches": "[vid=\"ad_close\"][text=null]",
          "exampleUrls": "https://e.gkd.li/32ad4d0f-8992-45b0-9e1f-82ce2cc58dcb",
          "snapshotUrls": "https://i.gkd.li/i/16773614"
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "matches": "[vid=\"banner_divider\"] - * > [vid=\"close_banner\"]",
          "exampleUrls": "https://e.gkd.li/d9b74767-84b6-4668-8a9b-261bd938a8a3",
          "snapshotUrls": "https://i.gkd.li/i/20420253"
        }
      ]
    },
    {
      "key": 7,
      "name": "分段广告-首页卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "matches": "[vid=\"ad_more\"]",
          "exampleUrls": "https://e.gkd.li/e7d3d6c3-d8be-4e0f-ac02-e5df2a0615b3",
          "snapshotUrls": "https://i.gkd.li/i/20420265"
        },
        {
          "preKeys": 0,
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "matches": "[vid=\"ad_close\"][text=\"不感兴趣\"]",
          "exampleUrls": "https://e.gkd.li/6ca7beba-98b8-4892-b275-1a116d040115",
          "snapshotUrls": "https://i.gkd.li/i/20420322"
        }
      ]
    },
    {
      "key": 8,
      "name": "全屏广告-体验臻品音质",
      "desc": "连接设备30min臻品音质-> x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusiclite.activity.player.MusicPlayerActivity",
          "matches": "[text$=\"钟免费体验\"] < * - [text$=\"臻品音质\"] <2 * - @View[clickable=true][text=null][childCount=0] <<4 [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/3bffcfdf-4d08-4461-8c43-24521d85e697",
          "snapshotUrls": "https://i.gkd.li/i/29175549"
        }
      ]
    },
    {
      "key": 9,
      "name": "局部广告-浮窗广告",
      "desc": "关闭右侧飘窗广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.tencent.qqmusiclite.activity.player.MusicPlayerActivity",
      "snapshotUrls": "https://i.gkd.li/i/13303283",
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/free_mode_tips_layout\"] + [id=\"com.miui.player:id/iv_close\"]",
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusiclite.activity.player.MusicPlayerActivity"
        }
      ]
    },
    {
      "key": 10,
      "name": "全屏广告-看广告免费听弹窗",
      "enable": false,
      "activityIds": "com.tencent.qqmusiccommon.hybrid.HybridViewActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/13304343"
      ],
      "rules": [
        {
          "matches": "ViewGroup > @ViewGroup + ViewGroup[childCount=5]",
          "activityIds": "com.tencent.qqmusiccommon.hybrid.HybridViewActivity"
        }
      ]
    },
    {
      "key": 11,
      "name": "局部广告-首页右侧悬浮卡片",
      "enable": false,
      "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
      "fastQuery": true,
      "snapshotUrls": [
        "https://i.gkd.li/i/13562649"
      ],
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/cl_floating_promote\"] > [id=\"com.miui.player:id/iv_close\"]",
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 12,
      "name": "功能类-年度报告邀请函弹窗",
      "desc": "点击关闭",
      "enable": false,
      "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
      "fastQuery": true,
      "snapshotUrls": [
        "https://i.gkd.li/i/13623503"
      ],
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/iv_close_dialog_button\"]",
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 13,
      "name": "全屏广告-会员过期续费弹窗",
      "enable": false,
      "activityIds": "com.tencent.qqmusiccommon.hybrid.HybridViewActivity",
      "snapshotUrls": "https://i.gkd.li/i/12700955",
      "rules": [
        {
          "matches": "[id=null][desc=\"关闭弹框按钮\"][clickable=true]",
          "activityIds": "com.tencent.qqmusiccommon.hybrid.HybridViewActivity"
        }
      ]
    },
    {
      "key": 14,
      "name": "局部广告-\"我的\"页面顶部卡片广告",
      "enable": false,
      "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12700984",
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/banner_image\"] + [id=\"com.miui.player:id/close_banner\"]",
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity"
        }
      ]
    },
    {
      "key": 15,
      "name": "局部广告-首页卡片广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
      "exampleUrls": "https://e.gkd.li/32ad4d0f-8992-45b0-9e1f-82ce2cc58dcb",
      "snapshotUrls": "https://i.gkd.li/i/16773614",
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/ad_close\"]",
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity"
        }
      ]
    }
  ]
});
