// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.smile.gifmaker",
  "name": "快手",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-红包弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.yxcorp.gifshow.HomeActivity",
      "rules": [
        {
          "name": "老友回归红包弹窗",
          "matches": "@ImageView[id=null][clickable=true] + ViewGroup > [text!=null] + [text!=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12708649",
            "https://i.gkd.li/i/12708660"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.yxcorp.gifshow.HomeActivity"
        },
        {
          "name": "限时高额奖励弹窗",
          "matches": "@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup >2 [text=\"立即领取\"]",
          "snapshotUrls": "https://i.gkd.li/i/12708681",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.yxcorp.gifshow.HomeActivity"
        },
        {
          "name": "新人红包弹窗",
          "fastQuery": true,
          "activityIds": "com.yxcorp.plugin.search.SearchActivity",
          "matches": "ImageView[width<128] < [childCount=1] < @[clickable=true] - HorizontalScrollView >5 [text=\"恭喜你获得\"]",
          "snapshotUrls": "https://i.gkd.li/i/32433383",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-首页左侧红包悬浮控件",
      "desc": "点击关闭",
      "activityIds": "com.yxcorp.gifshow.HomeActivity",
      "rules": [
        {
          "matches": "[vid=\"pendant_mask_bg\"] + [vid=\"pendant_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12708671",
            "https://i.gkd.li/i/12708676"
          ],
          "activityIds": "com.yxcorp.gifshow.HomeActivity"
        },
        {
          "matches": "[id=\"com.smile.gifmaker:id/pendant_mask_bg\"] + [id=\"com.smile.gifmaker:id/pendant_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12708671",
            "https://i.gkd.li/i/12708676"
          ],
          "activityIds": "com.yxcorp.gifshow.HomeActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-推荐关注",
      "desc": "自动点击\"关闭/隐藏\"",
      "activityIds": "com.yxcorp.gifshow.HomeActivity",
      "rules": [
        {
          "name": "消息页面-你可能感兴趣的人",
          "matches": "[vid=\"close_pymk\"]",
          "snapshotUrls": "https://i.gkd.li/i/12708707",
          "activityIds": "com.yxcorp.gifshow.HomeActivity"
        },
        {
          "name": "我的页面-你可能感兴趣的人",
          "fastQuery": true,
          "matches": "ViewGroup[childCount=3] > [text=\"隐藏\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14001536",
          "activityIds": "com.yxcorp.gifshow.HomeActivity"
        },
        {
          "name": "朋友推荐弹窗",
          "fastQuery": true,
          "matches": "[text=\"朋友推荐\"] + [vid=\"close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/14232217",
          "activityIds": "com.yxcorp.gifshow.HomeActivity"
        },
        {
          "name": "消息页面-你可能感兴趣的人 (2)",
          "matches": "[id=\"com.smile.gifmaker:id/close_pymk\"]",
          "snapshotUrls": "https://i.gkd.li/i/12708707",
          "activityIds": "com.yxcorp.gifshow.HomeActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "评价提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.yxcorp.gifshow.HomeActivity",
          "matches": "@[vid=\"close\"] +2 * > [text=\"喜欢就给个好评吧\"]",
          "exampleUrls": "https://m.gkd.li/57941037/da412e0f-47db-4cc0-8821-184c6ba42882",
          "snapshotUrls": "https://i.gkd.li/i/14343547",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[vid=\"close\"] +2 * > [text=\"喜欢就给个好评吧\"]",
          "exampleUrls": "https://m.gkd.li/57941037/da412e0f-47db-4cc0-8821-184c6ba42882",
          "snapshotUrls": "https://i.gkd.li/i/14343547",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-直播间广告",
      "rules": [
        {
          "fastQuery": true,
          "action": "back",
          "activityIds": "com.kuaishou.live.core.basic.activity.LiveSlideActivity",
          "matches": "[visibleToUser=true][text=\"幸运奖池\"] <<n [vid=\"webView\"]",
          "exampleUrls": "https://m.gkd.li/57941037/338df1c2-8789-435b-8970-c837b00fc0f5",
          "snapshotUrls": "https://i.gkd.li/i/15629334"
        }
      ]
    },
    {
      "key": 5,
      "name": "分段广告-信息流广告",
      "fastQuery": true,
      "activityIds": "com.yxcorp.gifshow.HomeActivity",
      "rules": [
        {
          "action": "longClick",
          "matches": "@FrameLayout[desc$=\"作品\"][longClickable=true][visibleToUser=true] >(4,5) [text$=\"旗舰店\" || text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/f199ffaf-9ff8-49f5-a3fe-3fc5bbae8f7c",
          "snapshotUrls": [
            "https://i.gkd.li/i/24022468",
            "https://i.gkd.li/i/24024010"
          ],
          "fastQuery": true,
          "activityIds": "com.yxcorp.gifshow.HomeActivity"
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] > [text=\"重复出现\"]",
          "exampleUrls": "https://e.gkd.li/a93df9c1-7abe-4bd0-9d7b-ca6cce5f2286",
          "snapshotUrls": [
            "https://i.gkd.li/i/24024009",
            "https://i.gkd.li/i/24024011"
          ],
          "fastQuery": true,
          "activityIds": "com.yxcorp.gifshow.HomeActivity"
        }
      ]
    },
    {
      "key": 6,
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": [
            "[text=\"开启青少年模式\"]",
            "[text=\"我知道了\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12708609",
            "https://i.gkd.li/i/14969798"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 7,
      "name": "全屏广告-首页红包弹窗",
      "desc": "自动点击x按钮",
      "enable": false,
      "activityIds": "com.yxcorp.gifshow.HomeActivity",
      "rules": [
        {
          "name": "老友回归红包弹窗",
          "matches": "@ImageView[id=null][clickable=true] + ViewGroup > [text!=null] + [text!=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12708649",
            "https://i.gkd.li/i/12708660"
          ],
          "activityIds": "com.yxcorp.gifshow.HomeActivity"
        },
        {
          "name": "限时高额奖励弹窗",
          "matches": "@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup >2 [text=\"立即领取\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12708681"
          ],
          "activityIds": "com.yxcorp.gifshow.HomeActivity"
        }
      ]
    }
  ]
});
