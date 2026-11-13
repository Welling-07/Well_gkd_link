// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.netease.mobimail",
  "name": "网易邮箱",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<=10][!(vid=\"ad_skip\")]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12686132",
            "https://i.gkd.li/i/13328441",
            "https://i.gkd.li/i/13800060"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12686093",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "[vid=\"ad_skip\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12667519",
            "https://i.gkd.li/i/13328425"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<=10][id!=\"com.netease.mobimail:id/ad_skip\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12686132",
            "https://i.gkd.li/i/13328441",
            "https://i.gkd.li/i/13800060"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/12686093",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 3,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "[id=\"com.netease.mobimail:id/ad_skip\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12667519",
            "https://i.gkd.li/i/13328425"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 3,
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_splash_skip_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/12686093",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"com.netease.mobimail:id/ad_skip\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12667519",
            "https://i.gkd.li/i/13328425"
          ],
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
      "name": "局部广告-邮件列表页面广告条目",
      "rules": [
        {
          "activityIds": "com.netease.mail.biz.main.MainITabActivity",
          "matches": "[vid=\"ad_vip\" || vid=\"ll_delete\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12683488",
            "https://i.gkd.li/i/12683511"
          ]
        },
        {
          "activityIds": "com.netease.mail.biz.main.MainITabActivity",
          "matches": "[id=\"com.netease.mobimail:id/ad_vip\"]",
          "snapshotUrls": "https://i.gkd.li/i/12683488"
        },
        {
          "activityIds": "com.netease.mail.biz.main.MainITabActivity",
          "matches": "[id=\"com.netease.mobimail:id/ll_delete\"]",
          "snapshotUrls": "https://i.gkd.li/i/12683511"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-切回时的开屏广告",
      "enable": false,
      "activityIds": "com.netease.mail.biz.main.MainITabActivity",
      "snapshotUrls": "https://i.gkd.li/i/12685745",
      "rules": [
        {
          "matches": "@LinearLayout > TextView[text^=\"跳过\"]",
          "activityIds": "com.netease.mail.biz.main.MainITabActivity"
        }
      ]
    }
  ]
});
