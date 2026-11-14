// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.luna.music",
  "name": "汽水音乐",
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
          "fastQuery": true,
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/14232395",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "[text^=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15087528",
            "https://i.gkd.li/i/15148298"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/14232395",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0,
          "fastQuery": true
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/14232395",
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
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            "com.luna.biz.ad.AdActivity",
            "com.luna.biz.main.main.MainActivity"
          ],
          "matches": "@[text=\"稍后再说\"] + [text=\"立即升级\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14790279",
            "https://i.gkd.li/i/21427972"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"稍后再说\"] + [text=\"立即升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/14790279",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-VIP弹窗",
      "desc": "直接关闭所有底部半屏弹窗",
      "fastQuery": true,
      "activityIds": [
        "com.luna.biz.main.main.MainActivity",
        "com.luna.biz.ad.AdActivity"
      ],
      "rules": [
        {
          "name": "底部半屏弹窗",
          "action": "back",
          "excludeMatches": "FlattenUIText[text=\"立得全天畅听\" || text=\"立即解锁 今日畅听\"][visibleToUser=true]",
          "matches": "FlattenUIText[text=\"开会员听整月\" || text=\"购买汽水会员\" || text*=\"免费听\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/43099439-a0ab-4da0-a686-5c960df92607",
          "snapshotUrls": [
            "https://i.gkd.li/i/13533795",
            "https://i.gkd.li/i/13660652",
            "https://i.gkd.li/i/13533797",
            "https://i.gkd.li/i/14767233",
            "https://i.gkd.li/i/16280954",
            "https://i.gkd.li/i/16342691",
            "https://i.gkd.li/i/17580823",
            "https://i.gkd.li/i/18183749"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/13613296",
            "https://i.gkd.li/i/14237527",
            "https://i.gkd.li/i/18242457"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.luna.biz.main.main.MainActivity",
            "com.luna.biz.ad.AdActivity"
          ]
        },
        {
          "name": "全屏弹窗",
          "matches": "@LynxFlattenUI[clickable=true] -2 FlattenUIText[text=\"立即抢购\"]",
          "snapshotUrls": "https://i.gkd.li/i/16278152",
          "fastQuery": true,
          "activityIds": [
            "com.luna.biz.main.main.MainActivity",
            "com.luna.biz.ad.AdActivity"
          ]
        },
        {
          "name": "0.01开通7天VIP",
          "action": "clickCenter",
          "anyMatches": [
            "@View[childCount=2][index=1] >2 [text$=\"天体验卡\" || text^=\"VIP\"][visibleToUser=true]",
            "@[text$=\"天体验卡\" || text^=\"VIP\" || desc$=\"天体验卡\" || desc^=\"VIP\"][visibleToUser=true] < [index=parent.childCount.minus(1)] <n * <2 [childCount=2] <<5 [id=\"android:id/content\"]"
          ],
          "position": {
            "left": "width * 0.90",
            "top": "width * 0.09"
          },
          "snapshotUrls": [
            "https://i.gkd.li/i/26757915",
            "https://i.gkd.li/i/28302150"
          ],
          "exampleUrls": "https://e.gkd.li/4cefa02b-b83e-4f68-b861-d377ea427514",
          "fastQuery": true,
          "activityIds": [
            "com.luna.biz.main.main.MainActivity",
            "com.luna.biz.ad.AdActivity"
          ]
        },
        {
          "name": "底部半屏弹窗 (2)",
          "action": "back",
          "matches": "FlattenUIText[text=\"开会员听整月\" || text=\"购买汽水会员\" || text=\"试听中，开通VIP听全曲\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13533795",
            "https://i.gkd.li/i/13660652",
            "https://i.gkd.li/i/13533797",
            "https://i.gkd.li/i/14767233",
            "https://i.gkd.li/i/16280954",
            "https://i.gkd.li/i/16342691",
            "https://i.gkd.li/i/13613296"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.luna.biz.main.main.MainActivity",
            "com.luna.biz.ad.AdActivity"
          ]
        },
        {
          "action": "back",
          "matches": "FlattenUIText[text=\"看视频免费听\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13533795",
            "https://i.gkd.li/i/13660652",
            "https://i.gkd.li/i/13533797",
            "https://i.gkd.li/i/13613296"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.luna.biz.main.main.MainActivity",
            "com.luna.biz.ad.AdActivity"
          ]
        },
        {
          "action": "back",
          "matches": "FlattenUIText[text=\"当前已享\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14767233",
            "https://i.gkd.li/i/13613296"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.luna.biz.main.main.MainActivity",
            "com.luna.biz.ad.AdActivity"
          ]
        }
      ]
    },
    {
      "key": 5,
      "name": "评价提示-评分弹窗",
      "desc": "使用返回关闭弹窗",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "action": "back",
          "matches": "[text=\"为汽水音乐评分\"]",
          "exampleUrls": "https://m.gkd.li/57941037/a7e53af0-8b84-4619-b369-69b949ab2ce4",
          "snapshotUrls": "https://i.gkd.li/i/14720841",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告-悬浮窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": "com.luna.biz.main.main.MainActivity",
      "rules": [
        {
          "matches": "[vid=\"fl_pendant_container\"] > [vid=\"view_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/8a427d5f-680b-4562-9cf3-90b1db82df0f",
          "snapshotUrls": "https://i.gkd.li/i/13674376",
          "fastQuery": true,
          "activityIds": "com.luna.biz.main.main.MainActivity"
        },
        {
          "matches": "@View[clickable=true][width<126 && height<60] < [childCount=3] <n [childCount>=4] < FrameLayout[childCount>=3] <2 [childCount=2] <2 ViewPager <<3 [vid=\"navigation_container_under_bottom_bar\"]",
          "exampleUrls": "https://e.gkd.li/42a3884a-6888-4d5b-aa61-7ff5159a5228",
          "snapshotUrls": [
            "https://i.gkd.li/i/28298866",
            "https://i.gkd.li/i/28436303"
          ],
          "fastQuery": true,
          "activityIds": "com.luna.biz.main.main.MainActivity"
        },
        {
          "fastQuery": true,
          "activityIds": "com.luna.biz.main.main.MainActivity",
          "matches": "[id=\"com.luna.music:id/fl_pendant_container\"] > [id=\"com.luna.music:id/view_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/8a427d5f-680b-4562-9cf3-90b1db82df0f",
          "snapshotUrls": "https://i.gkd.li/i/13674376"
        }
      ]
    },
    {
      "key": 7,
      "name": "其他-关闭[更多直播]推荐",
      "desc": "直播间出现[更多直播]时点击右上角关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.luna.biz.live.plugin.LunaDefaultLivePlayerActivity",
          "matches": "@[desc=\"关闭\"][clickable=true] <n RelativeLayout + FrameLayout >4 [text=\"更多直播\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/148466b5-9769-4b79-b648-f2cf7719e3e7",
          "snapshotUrls": "https://i.gkd.li/i/22922565"
        }
      ]
    },
    {
      "key": 9,
      "name": "局部广告-抖音看过视频提示浮窗",
      "desc": "播放器右侧浮窗[xx视频已看: Int %]=> x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.luna.biz.main.main.MainActivity",
          "matches": "[text^=\"抖音看过\"][visibleToUser=true] <2 LinearLayout + TextView[text=\"\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/28436303",
          "exampleUrls": "https://e.gkd.li/43510c30-15f5-4368-a7e6-f7e57587b51d"
        }
      ]
    }
  ]
});
