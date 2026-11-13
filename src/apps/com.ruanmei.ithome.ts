// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ruanmei.ithome",
  "name": "IT之家",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "excludeMatches": "[vid=\"iv_search_back\"][visibleToUser=true]",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/49015bf7-6513-40b2-a436-d3c386ef1891",
          "snapshotUrls": [
            "https://i.gkd.li/i/16401878",
            "https://i.gkd.li/i/16401899"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "excludeMatches": "[vid=\"iv_search_back\"][visibleToUser=true]",
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/49015bf7-6513-40b2-a436-d3c386ef1891",
          "snapshotUrls": [
            "https://i.gkd.li/i/16401878",
            "https://i.gkd.li/i/16401899"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "fastQuery": true,
      "rules": [
        {
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".ui.MainActivity",
          "matches": "@[visibleToUser=true][text=\"关闭\"] <<n [vid=\"ll_web\"][visibleToUser=true] + [vid=\"shadowLayout\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15413491",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15603266",
            "https://i.gkd.li/i/17516358"
          ],
          "fastQuery": true
        },
        {
          "activityIds": ".ui.NewsInfoV8Activity",
          "matches": "[vid=\"iv_dislike\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/16972394",
          "fastQuery": true
        },
        {
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ruanmei.ithome.ui.MainActivity",
          "matches": "@[visibleToUser=true][text=\"关闭\"] <<n [vid=\"ll_web\"][visibleToUser=true] + [vid=\"shadowLayout\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15413491",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15603266",
            "https://i.gkd.li/i/17516358"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.ruanmei.ithome.ui.NewsInfoV8Activity",
          "matches": "[vid=\"iv_dislike\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/16972394",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-信息流广告",
      "desc": "长按广告-点击[屏蔽]-点击[不喜欢此条]",
      "fastQuery": true,
      "activityIds": ".ui.MainActivity",
      "rules": [
        {
          "action": "longClick",
          "matches": "@[longClickable=true] >4 [text=\"广告 \"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14734964",
          "excludeSnapshotUrls": "https://i.gkd.li/i/19340823",
          "fastQuery": true,
          "activityIds": ".ui.MainActivity"
        },
        {
          "preKeys": 0,
          "anyMatches": [
            "[text*=\"屏蔽\"][clickable=true]",
            "@[clickable=true] > [text*=\"屏蔽\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14734962",
            "https://i.gkd.li/i/33722870"
          ],
          "fastQuery": true,
          "activityIds": ".ui.MainActivity"
        },
        {
          "preKeys": 1,
          "matches": "[vid=\"rl_dislike\"]",
          "snapshotUrls": "https://i.gkd.li/i/14734987",
          "fastQuery": true,
          "activityIds": ".ui.MainActivity"
        },
        {
          "action": "longClick",
          "matches": "@[longClickable=true] >4 [text=\"广告 \"]",
          "snapshotUrls": "https://i.gkd.li/i/14734964",
          "fastQuery": true,
          "activityIds": "com.ruanmei.ithome.ui.MainActivity"
        },
        {
          "preKeys": 3,
          "matches": "[text*=\"屏蔽\"]",
          "snapshotUrls": "https://i.gkd.li/i/14734962",
          "fastQuery": true,
          "activityIds": "com.ruanmei.ithome.ui.MainActivity"
        },
        {
          "preKeys": 4,
          "matches": "[vid=\"rl_dislike\"]",
          "snapshotUrls": "https://i.gkd.li/i/14734987",
          "fastQuery": true,
          "activityIds": "com.ruanmei.ithome.ui.MainActivity"
        },
        {
          "action": "longClick",
          "matches": "@[longClickable=true] >4 [text*=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14734964",
          "fastQuery": true,
          "activityIds": "com.ruanmei.ithome.ui.MainActivity"
        },
        {
          "preKeys": 6,
          "matches": "[text*=\"屏蔽\"]",
          "snapshotUrls": "https://i.gkd.li/i/14734962",
          "fastQuery": true,
          "activityIds": "com.ruanmei.ithome.ui.MainActivity"
        },
        {
          "preKeys": 7,
          "matches": "[vid=\"rl_dislike\"]",
          "snapshotUrls": "https://i.gkd.li/i/14734987",
          "fastQuery": true,
          "activityIds": "com.ruanmei.ithome.ui.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.MainActivity",
          "matches": "[vid=\"btn_dialog_upgrade_ignore\"]",
          "snapshotUrls": "https://i.gkd.li/i/15413494",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.ruanmei.ithome.ui.MainActivity",
          "matches": "[vid=\"btn_dialog_upgrade_ignore\"]",
          "snapshotUrls": "https://i.gkd.li/i/15413494",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-资讯页-信息流广告",
      "enable": false,
      "activityIds": "com.ruanmei.ithome.ui.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13167193",
      "rules": [
        {
          "matches": "[id=\"hongbaotips\"] +n @View > [text=\"关闭\"]",
          "activityIds": "com.ruanmei.ithome.ui.MainActivity"
        }
      ]
    }
  ]
});
