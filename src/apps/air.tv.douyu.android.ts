// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "air.tv.douyu.android",
  "name": "斗鱼",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-直播间广告",
      "activityIds": [
        "tv.douyu.view.activity.PlayerActivity",
        "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
      ],
      "rules": [
        {
          "name": "右下方悬浮广告-1",
          "matches": "ViewGroup[childCount=8] > ViewGroup[index=5] >4 RelativeLayout[visibleToUser=true] > ImageView[clickable=true][index=1]",
          "snapshotUrls": "https://i.gkd.li/i/13948990",
          "excludeSnapshotUrls": "https://i.gkd.li/i/14310474",
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        },
        {
          "name": "视频下方横幅广告-1",
          "matches": "[id=\"android:id/content\"] > RelativeLayout >2 FrameLayout > ViewGroup[childCount=4] > ImageView[clickable=true][childCount=0][visibleToUser=true][index=parent.childCount.minus(1)]",
          "snapshotUrls": "https://i.gkd.li/i/14667860",
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        },
        {
          "name": "右下方悬浮广告-2",
          "fastQuery": true,
          "matches": "@ImageView[visibleToUser=true][childCount=0] -(1,2) * >3 [text=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14668232",
            "https://i.gkd.li/i/17978451"
          ],
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        },
        {
          "name": "右下方悬浮广告-3",
          "fastQuery": true,
          "matches": "@ImageView[clickable=true][visibleToUser=true] +(1,2) ViewGroup >2 [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/cfd83f2b-580d-4659-8966-eb5f4fe21ecd",
          "snapshotUrls": [
            "https://i.gkd.li/i/16939767",
            "https://i.gkd.li/i/24661966"
          ],
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        },
        {
          "name": "右下方悬浮广告-4",
          "fastQuery": true,
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0][index=1] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid=\"big_live_actions_layout\"]",
          "exampleUrls": "https://e.gkd.li/cfd83f2b-580d-4659-8966-eb5f4fe21ecd",
          "snapshotUrls": "https://i.gkd.li/i/16939767",
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        },
        {
          "name": "视频下方横幅广告-2",
          "fastQuery": true,
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] - FrameLayout >2 [text=\"去看看\" || text^=\"立即\"]",
          "exampleUrls": "https://e.gkd.li/942ee7a5-43e1-4709-b967-7af1a6900e4c",
          "snapshotUrls": [
            "https://i.gkd.li/i/14668232",
            "https://i.gkd.li/i/18032754",
            "https://i.gkd.li/i/24661966"
          ],
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        },
        {
          "matches": "ImageView < ViewGroup + @ViewGroup[childCount=1][clickable=true] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/12892825",
            "https://i.gkd.li/i/13037239",
            "https://i.gkd.li/i/14692807"
          ],
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        },
        {
          "matches": "ViewPager[childCount=3] + @View + ImageView + View",
          "snapshotUrls": "https://i.gkd.li/i/12892825",
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        },
        {
          "matches": "RelativeLayout[childCount=3] > ViewPager + @View + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13056107",
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        },
        {
          "matches": "ViewGroup[childCount=4] > View + ImageView + FrameLayout + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13056107",
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        },
        {
          "matches": "FrameLayout[childCount=2] > @ImageView - FrameLayout > RelativeLayout > WebView",
          "snapshotUrls": "https://i.gkd.li/i/13056107",
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        },
        {
          "matches": "[id=\"android:id/content\"] > RelativeLayout >4 FrameLayout + ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/14668232",
            "https://i.gkd.li/i/14668248",
            "https://i.gkd.li/i/14667860"
          ],
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        },
        {
          "fastQuery": true,
          "matches": "@ImageView[visibleToUser=true] -2 * >3 [text=\"推荐\"]",
          "snapshotUrls": "https://i.gkd.li/i/14668232",
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        },
        {
          "fastQuery": true,
          "matches": "@ImageView[clickable=true][visibleToUser=true] + ViewGroup >2 [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/cfd83f2b-580d-4659-8966-eb5f4fe21ecd",
          "snapshotUrls": "https://i.gkd.li/i/16939767",
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] - RelativeLayout > RelativeLayout > RelativeLayout[childCount=2] > ViewPager[childCount=2] > FrameLayout[childCount=1][id=null] >3 ImageView[childCount=0][id=null][text=null]",
          "exampleUrls": "https://e.gkd.li/cfd83f2b-580d-4659-8966-eb5f4fe21ecd",
          "snapshotUrls": "https://i.gkd.li/i/16939767",
          "activityIds": [
            "tv.douyu.view.activity.PlayerActivity",
            "com.douyu.module.player.p.rambobase.RamboPlayerActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "青少年模式",
      "desc": "关闭青少年模式提醒弹窗",
      "enable": false,
      "snapshotUrls": "https://i.gkd.li/i/12472598",
      "rules": [
        {
          "matches": "[text=\"开启青少年模式\"] + [text=\"我知道了\"]"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text=\"立即升级\"] - [text=\"忽略\"][clickable=true]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
