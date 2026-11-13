// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.netease.mail",
  "name": "网易邮箱大师",
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
          "excludeMatches": "[vid=\"ad_skip\"][clickable=false]",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13195662",
            "https://i.gkd.li/i/16883928",
            "https://i.gkd.li/i/14900326"
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
          "snapshotUrls": "https://i.gkd.li/i/14046124",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.9016",
            "top": "width * 0.1557"
          },
          "matches": "[vid=\"animation_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13207736",
            "https://i.gkd.li/i/14900326",
            "https://i.gkd.li/i/16892947"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "excludeMatches": "[vid=\"ad_skip\"][clickable=false]",
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13195662",
            "https://i.gkd.li/i/16883928",
            "https://i.gkd.li/i/14900326"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/14046124",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 3,
          "priorityTime": 10000,
          "fastQuery": true
        },
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.9016",
            "top": "width * 0.1557"
          },
          "matches": "[id=\"com.netease.mail:id/animation_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13207736",
            "https://i.gkd.li/i/14900326",
            "https://i.gkd.li/i/16892947"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 3,
          "priorityTime": 10000
        },
        {
          "excludeMatches": "[id=\"com.netease.mail:id/ad_skip\"][clickable=false]",
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12893573",
            "https://i.gkd.li/i/12923776",
            "https://i.gkd.li/i/13195662",
            "https://i.gkd.li/i/12818335",
            "https://i.gkd.li/i/13206298"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/14046124",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 6,
          "priorityTime": 10000
        },
        {
          "position": {
            "left": "width * 0.9016",
            "top": "width * 0.1557"
          },
          "excludeMatches": "[text*=\"跳过\"][text.length<=10]",
          "matches": "[id=\"com.netease.mail:id/ad_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13207736",
            "https://i.gkd.li/i/14900326"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 6,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-邮件列表广告",
      "activityIds": ".biz.main.MainITabActivity",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12664070",
      "rules": [
        {
          "matches": "[vid=\"ad_vip\"]",
          "snapshotUrls": "https://i.gkd.li/i/12999833",
          "activityIds": ".biz.main.MainITabActivity",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "matches": "[vid=\"ll_delete\"]",
          "snapshotUrls": "https://i.gkd.li/i/12999841",
          "activityIds": ".biz.main.MainITabActivity",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.netease.mail:id/ad_vip\"]",
          "snapshotUrls": "https://i.gkd.li/i/12999833",
          "activityIds": [
            "com.netease.mail.biz.main.MainITabActivity"
          ],
          "fastQuery": true
        },
        {
          "preKeys": 2,
          "matches": "[id=\"com.netease.mail:id/ll_delete\"]",
          "snapshotUrls": "https://i.gkd.li/i/12999841",
          "activityIds": [
            "com.netease.mail.biz.main.MainITabActivity"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "其他-获得成就弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13876817",
      "rules": [
        {
          "fastQuery": true,
          "matches": "TextView[text=\"恭喜您获得以下成就\"] - @TextView[clickable=true][text=\"\"] <<n [vid=\"browser_fragment_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13876817",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "TextView[text=\"恭喜您获得以下成就\"] - TextView[text=\"\"][clickable=true]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12664070",
      "rules": [
        {
          "matches": "[id=\"com.netease.mail:id/tv_ignore_this_version\"][text=\"暂不更新\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
