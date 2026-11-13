// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sup.android.superb",
  "name": "皮皮虾",
  "groups": [
    {
      "key": 0,
      "name": "青少年模式",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13796869",
      "rules": [
        {
          "activityIds": "com.sup.superb.m_teenager.view.EnterTeenagerModeDialogActivity",
          "matches": "[text$=\"青少年模式\"] + [text=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13796869",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[text$=\"青少年模式\"] + [text=\"我知道了\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13691081",
      "rules": [
        {
          "matches": "[text=\"开启推送通知\"] +2 * > [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13691081",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-右上角红包悬浮窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.sup.android.base.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13624220",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.sup.android.base.MainActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] < RelativeLayout[childCount=2] < FrameLayout - [vid=\"tab_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13624220",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "FrameLayout > RelativeLayout > @ImageView[clickable=true] + ImageView",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.sup.android.base.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "desc": "点击[我再想想]",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text=\"发现新版本\"] +2 * > [text=\"我再想想\"]",
          "snapshotUrls": "https://i.gkd.li/i/13858490",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "评价提示",
      "desc": "点击取消",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            "com.sup.android.base.MainActivity",
            "com.sup.android.base.praise.PraiseDialogActivity"
          ],
          "matches": [
            "[text^=\"喜欢皮皮虾吗\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14005608",
            "https://i.gkd.li/i/15285383"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text^=\"喜欢皮皮虾吗\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14005608",
            "https://i.gkd.li/i/15285383"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "全屏广告-集五福弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.sup.android.base.MainActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <2 RelativeLayout[childCount=2] < [id=\"android:id/content\"]",
          "exampleUrls": "https://m.gkd.li/57941037/246d1d0b-d493-4d40-bbb7-9c04ae6b457d",
          "snapshotUrls": "https://i.gkd.li/i/14151026",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.sup.android.base.MainActivity",
          "matches": "[id=\"com.sup.android.superb:id/afa\"]",
          "exampleUrls": "https://m.gkd.li/57941037/246d1d0b-d493-4d40-bbb7-9c04ae6b457d",
          "snapshotUrls": "https://i.gkd.li/i/14151026",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告-卡片广告",
      "desc": "点击[关闭广告]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.sup.android.base.MainActivity",
          "matches": "[text=\"关闭广告\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/af1e7624-540b-4646-b812-3b748966e903",
          "snapshotUrls": "https://i.gkd.li/i/14471869"
        }
      ]
    },
    {
      "key": 7,
      "name": "分段广告-信息流广告",
      "desc": "点击展开-点击[不感兴趣]",
      "activityIds": "com.sup.android.base.MainActivity",
      "fastQuery": true,
      "rules": [
        {
          "matches": "RecyclerView > FrameLayout[id!=null] >4 FrameLayout[childCount=5] > ViewGroup[childCount=1] > @ImageView[clickable=true][childCount=0] <<n [vid=\"view_pager\"]",
          "snapshotUrls": "https://i.gkd.li/i/14886478",
          "fastQuery": true,
          "activityIds": "com.sup.android.base.MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/14886477",
          "fastQuery": true,
          "activityIds": "com.sup.android.base.MainActivity"
        },
        {
          "matches": "RecyclerView > FrameLayout[id!=null] >6 ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14886478",
          "activityIds": "com.sup.android.base.MainActivity",
          "fastQuery": true
        },
        {
          "preKeys": 2,
          "fastQuery": true,
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/14886477",
          "activityIds": "com.sup.android.base.MainActivity"
        },
        {
          "fastQuery": true,
          "matches": "@[text=\"关闭广告\"] + RelativeLayout > [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/14471889",
          "activityIds": "com.sup.android.base.MainActivity"
        },
        {
          "matches": "RecyclerView > FrameLayout[id!=null] >6 ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14886478",
          "activityIds": "com.sup.android.base.MainActivity",
          "fastQuery": true
        },
        {
          "preKeys": 5,
          "fastQuery": true,
          "matches": "@RelativeLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/14886477",
          "activityIds": "com.sup.android.base.MainActivity"
        }
      ]
    },
    {
      "key": 8,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/14667409",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/14667409",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
