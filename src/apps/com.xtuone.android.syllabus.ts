// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xtuone.android.syllabus",
  "name": "超级课程表",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-首页卡片广告",
      "activityIds": [
        "com.xtuone.android.friday.MainFragmentActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/12840733",
      "rules": [
        {
          "activityIds": "com.xtuone.android.friday.MainFragmentActivity",
          "matches": "[vid=\"treehole_banner_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12840733"
        },
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/treehole_banner_close\"]",
          "activityIds": [
            "com.xtuone.android.friday.MainFragmentActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-课程表界面广告",
      "activityIds": [
        "com.xtuone.android.friday.MainFragmentActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/12999642",
      "rules": [
        {
          "activityIds": "com.xtuone.android.friday.MainFragmentActivity",
          "matches": "[vid=\"imgv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12999642"
        },
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/imgv_close\"]",
          "activityIds": [
            "com.xtuone.android.friday.MainFragmentActivity"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "activityIds": "com.xtuone.android.friday.MainFragmentActivity",
      "snapshotUrls": "https://i.gkd.li/i/13166501",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xtuone.android.friday.MainFragmentActivity",
          "matches": "[vid=\"dialog_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13166501",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/dialog_ad_close\"]",
          "activityIds": "com.xtuone.android.friday.MainFragmentActivity",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14292875",
      "rules": [
        {
          "activityIds": "com.xtuone.android.friday.UpdateActivity",
          "matches": "@[vid=\"update_cancel\"] + [vid=\"go_to_update\"]",
          "snapshotUrls": "https://i.gkd.li/i/14292875",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[vid=\"update_cancel\"] + [vid=\"go_to_update\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});
