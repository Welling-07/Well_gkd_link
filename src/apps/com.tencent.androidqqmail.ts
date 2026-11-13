// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.androidqqmail",
  "name": "QQ邮箱",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-列表卡片广告",
      "fastQuery": true,
      "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity",
      "rules": [
        {
          "name": "英文版邮箱广告-点击Ads",
          "matches": "[vid=\"advertise_view_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/12842757",
          "fastQuery": true,
          "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity"
        },
        {
          "name": "英文版邮箱广告-点击Not interested",
          "preKeys": 0,
          "matches": "@FrameLayout > TextView[text=\"Not interested\"]",
          "snapshotUrls": "https://i.gkd.li/i/12842775",
          "fastQuery": true,
          "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity"
        },
        {
          "name": "点击[广告]",
          "matches": "LinearLayout > TextView + @LinearLayout[id!=null][clickable=true] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775857",
          "fastQuery": true,
          "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity"
        },
        {
          "fastQuery": true,
          "matches": "[vid=\"btn_advertise_click_area\"]",
          "exampleUrls": "https://e.gkd.li/acce3df3-9773-4b42-b468-4724a7851efe",
          "snapshotUrls": "https://i.gkd.li/i/17908070",
          "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity"
        },
        {
          "fastQuery": true,
          "matches": "ImageView < LinearLayout[width<130 && height<100][id!=null] < @FrameLayout[clickable=true][id!=null] - [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/24559942",
          "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity"
        },
        {
          "preKeys": [
            0,
            2,
            3,
            4
          ],
          "name": "点击[不感兴趣]",
          "matches": "[text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775862",
            "https://i.gkd.li/i/15051479",
            "https://i.gkd.li/i/17908078"
          ],
          "fastQuery": true,
          "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity"
        },
        {
          "name": "英文版邮箱广告-点击Ads (2)",
          "matches": "[id=\"com.tencent.androidqqmail:id/advertise_view_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/12842757",
          "fastQuery": true,
          "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity"
        },
        {
          "name": "英文版邮箱广告-点击Not interested (2)",
          "preKeys": 6,
          "matches": "@FrameLayout > TextView[text=\"Not interested\"]",
          "snapshotUrls": "https://i.gkd.li/i/12842775",
          "fastQuery": true,
          "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity"
        },
        {
          "preKeys": [
            6,
            2
          ],
          "name": "点击[不感兴趣] (2)",
          "matches": "[text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775862",
            "https://i.gkd.li/i/15051479"
          ],
          "fastQuery": true,
          "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity"
        },
        {
          "name": "英文版邮箱广告-点击Ads (3)",
          "matches": [
            "[id=\"com.tencent.androidqqmail:id/advertise_view_ad\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12842757",
          "fastQuery": true,
          "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity"
        },
        {
          "name": "英文版邮箱广告-点击Not interested (3)",
          "preKeys": 9,
          "matches": "@FrameLayout > TextView[text=\"Not interested\"]",
          "snapshotUrls": "https://i.gkd.li/i/12842775",
          "fastQuery": true,
          "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity"
        },
        {
          "preKeys": [
            9,
            2
          ],
          "name": "点击[不感兴趣] (3)",
          "matches": "[text=\"赞助商提供的广告\"] < * < * >2 [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775862",
            "https://i.gkd.li/i/15051479"
          ],
          "fastQuery": true,
          "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.tencent.qqmail.fragment.base.MailFragmentActivity",
          "matches": "[text=\"立刻开启\"] - [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13043069",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12775855",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=3] > ImageView + @ImageView[clickable=true][visibleToUser=true] + FrameLayout[childCount>0]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
