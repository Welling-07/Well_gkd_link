// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zhiliaoapp.musically",
  "name": "TikTok",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "RelativeLayout[childCount=2] > @ImageView[index=1][clickable=true] <<n [id=\"android:id/custom\"]",
          "snapshotUrls": "https://i.gkd.li/i/15144780",
          "fastQuery": true
        },
        {
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "@UIView[clickable=true] -3 FlattenUIText[text=\"Get products\"]",
          "snapshotUrls": "https://i.gkd.li/i/16190364",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "desc": "点击[暂时不要/稍后再说]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": [
            "[text*=\"通知\"][visibleToUser=true]",
            "[text=\"暂时不要\" || text=\"稍后再说\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/15944175",
            "https://i.gkd.li/i/17963945"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": [
            "[text=\"接收通知\"]",
            "[text=\"暂时不要\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/15944175",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "rules": [
        {
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "FrameLayout[childCount=1] >3 FrameLayout[childCount=3] > ImageView[clickable=true][childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/16188665"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-好友推荐弹窗",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "@ImageView[clickable=true] - [text=\"关注你的好友\"]",
          "exampleUrls": "https://e.gkd.li/32069d2d-032c-4278-9ead-a48a464ecdd0",
          "snapshotUrls": "https://i.gkd.li/i/16247893"
        },
        {
          "quickFind": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "@ImageView[clickable=true] - [text=\"关注你的好友\"]",
          "exampleUrls": "https://e.gkd.li/32069d2d-032c-4278-9ead-a48a464ecdd0",
          "snapshotUrls": "https://i.gkd.li/i/16247893"
        }
      ]
    }
  ]
});
