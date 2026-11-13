// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.weico.international",
  "name": "微博轻享版",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 3,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "actionCd": 500,
      "rules": [
        {
          "order": -1,
          "anyMatches": [
            "@[clickable=true][visibleToUser=true] + ViewGroup > [text=\"跳过\"]",
            "@[clickable=true] - [text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14549281",
            "https://i.gkd.li/i/14549328",
            "https://i.gkd.li/i/18792649",
            "https://i.gkd.li/i/20990401"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionCd": 500,
          "actionMaximum": 3,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "excludeMatches": [
            "@[clickable=true] - [text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
            "@[clickable=true][visibleToUser=true] + ViewGroup > [text=\"跳过\"]"
          ],
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14661654",
            "https://i.gkd.li/i/14661622"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionCd": 500,
          "actionMaximum": 3,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "order": -1,
          "matches": "@[clickable=true] + * > [text=\"跳过\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14549281",
            "https://i.gkd.li/i/14549328"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0,
          "actionCd": 500
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14661654",
            "https://i.gkd.li/i/14661622"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 2,
          "priorityTime": 10000,
          "actionCd": 500
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-信息流广告",
      "desc": "出现在主页,搜索页",
      "fastQuery": true,
      "activityIds": [
        "com.google.android.material.bottomsheet.BottomSheetDialog",
        ".activity.MainFragmentActivity",
        ".ui.search.SearchActivity",
        ".ui.detail.StatusDetailV3Activity"
      ],
      "matchRoot": true,
      "forcedTime": 10000,
      "rules": [
        {
          "name": "点击卡片广告右上角[x]",
          "matches": "[vid=\"item_timeline_ad_action\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12857202",
            "https://i.gkd.li/i/14444744",
            "https://i.gkd.li/i/16667201"
          ],
          "fastQuery": true,
          "matchRoot": true,
          "forcedTime": 10000,
          "activityIds": [
            "com.google.android.material.bottomsheet.BottomSheetDialog",
            ".activity.MainFragmentActivity",
            ".ui.search.SearchActivity",
            ".ui.detail.StatusDetailV3Activity"
          ]
        },
        {
          "preKeys": 0,
          "name": "点击不感兴趣",
          "matches": "@View[clickable=true] > [visibleToUser=true][text=\"不感兴趣\"] <<n [vid=\"design_bottom_sheet\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12505755",
            "https://i.gkd.li/i/12505764",
            "https://i.gkd.li/i/14798365",
            "https://i.gkd.li/i/16667202"
          ],
          "fastQuery": true,
          "matchRoot": true,
          "forcedTime": 10000,
          "activityIds": [
            "com.google.android.material.bottomsheet.BottomSheetDialog",
            ".activity.MainFragmentActivity",
            ".ui.search.SearchActivity",
            ".ui.detail.StatusDetailV3Activity"
          ]
        },
        {
          "name": "点击卡片广告右上角[x] (2)",
          "matches": "[vid=\"item_timeline_ad_action\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12857202",
            "https://i.gkd.li/i/14444744",
            "https://i.gkd.li/i/16667201"
          ],
          "fastQuery": true,
          "matchRoot": true,
          "forcedTime": 10000,
          "activityIds": [
            "com.google.android.material.bottomsheet.BottomSheetDialog",
            "com.weico.international.activity.MainFragmentActivity",
            "com.weico.international.ui.search.SearchActivity",
            "com.weico.international.ui.detail.StatusDetailV3Activity"
          ]
        },
        {
          "preKeys": 2,
          "name": "点击不感兴趣 (2)",
          "matches": "@View[clickable=true] > [visibleToUser=true][text=\"不感兴趣\"] <<n [vid=\"design_bottom_sheet\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12505755",
            "https://i.gkd.li/i/12505764",
            "https://i.gkd.li/i/14798365",
            "https://i.gkd.li/i/16667202"
          ],
          "fastQuery": true,
          "matchRoot": true,
          "forcedTime": 10000,
          "activityIds": [
            "com.google.android.material.bottomsheet.BottomSheetDialog",
            "com.weico.international.activity.MainFragmentActivity",
            "com.weico.international.ui.search.SearchActivity",
            "com.weico.international.ui.detail.StatusDetailV3Activity"
          ]
        },
        {
          "name": "点击广告卡片右上角[x]",
          "matches": "[vid=\"item_timeline_ad_action\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12857202",
            "https://i.gkd.li/i/14444744"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.google.android.material.bottomsheet.BottomSheetDialog",
            "com.weico.international.activity.MainFragmentActivity",
            "com.weico.international.ui.search.SearchActivity"
          ],
          "matchRoot": true,
          "forcedTime": 10000
        },
        {
          "preKeys": 4,
          "name": "点击不感兴趣 (3)",
          "matches": "@View[clickable=true] > [text=\"不感兴趣\"] <<n [vid=\"design_bottom_sheet\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12505755",
            "https://i.gkd.li/i/12505764",
            "https://i.gkd.li/i/14798365"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.google.android.material.bottomsheet.BottomSheetDialog",
            "com.weico.international.activity.MainFragmentActivity",
            "com.weico.international.ui.search.SearchActivity"
          ],
          "matchRoot": true,
          "forcedTime": 10000
        }
      ]
    }
  ]
});
