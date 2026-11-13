// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.duitang.main",
  "name": "堆糖",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-信息流广告",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".business.",
            ".activity."
          ],
          "matches": "[vid=\"adOptionEntry\" || vid=\"adClose\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14232228",
            "https://i.gkd.li/i/14232332",
            "https://i.gkd.li/i/14232347",
            "https://i.gkd.li/i/14232348",
            "https://i.gkd.li/i/14232368",
            "https://i.gkd.li/i/14232218",
            "https://i.gkd.li/i/14232352"
          ],
          "fastQuery": true
        },
        {
          "activityIds": [
            "com.duitang.main.business.",
            "com.duitang.main.activity."
          ],
          "fastQuery": true,
          "matches": "[vid=\"adOptionEntry\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14232228",
            "https://i.gkd.li/i/14232332",
            "https://i.gkd.li/i/14232347",
            "https://i.gkd.li/i/14232348",
            "https://i.gkd.li/i/14232368"
          ]
        },
        {
          "activityIds": "com.duitang.main.business.",
          "fastQuery": true,
          "matches": "[vid=\"adClose\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14232218",
            "https://i.gkd.li/i/14232352"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "评价提示",
      "desc": "点击[下次再说]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".business.main.NAMainActivity",
          "matches": "[vid=\"scoreDuitangCancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14273094",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[vid=\"scoreDuitangCancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14273094",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-图片页弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".business.display.ImageActivity",
            ".business.main.NAMainActivity"
          ],
          "matches": "[vid=\"popUpbtnClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13997011",
            "https://i.gkd.li/i/14332109"
          ]
        },
        {
          "activityIds": [
            "com.duitang.main.business.display.ImageActivity",
            "com.duitang.main.business.main.NAMainActivity"
          ],
          "matches": "[id=\"com.duitang.main:id/popUpbtnClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13997011",
            "https://i.gkd.li/i/14332109"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14273121",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".business.main.NAMainActivity",
          "matches": "@[vid=\"dialogNegative\"] +2 [text=\"打开通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/14273121",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[vid=\"dialogNegative\"] +2 [text=\"打开通知\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 4,
      "name": "青少年模式",
      "desc": "关闭青少年模式提醒弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[id=\"com.duitang.main:id/teenGuideKnown\"]",
          "snapshotUrls": "https://i.gkd.li/i/13202230",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "未分类-首页-推荐浏览广告",
      "desc": "关闭推荐浏览页面广告",
      "enable": false,
      "activityIds": [
        "com.duitang.main.business.main.NAMainActivity"
      ],
      "fastQuery": true,
      "rules": [
        {
          "matches": "[id=\"com.duitang.main:id/adOptionEntry\"]",
          "snapshotUrls": "https://i.gkd.li/i/13202725",
          "activityIds": [
            "com.duitang.main.business.main.NAMainActivity"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 6,
      "name": "通知提示-请求开启通知弹窗",
      "desc": "点击[x]",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14273121",
      "rules": [
        {
          "matches": "@[vid=\"dialogNegative\"] +2 [text=\"打开通知\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 7,
      "name": "全屏广告-图片页广告弹窗",
      "desc": "点击X",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.duitang.main.business.display.ImageActivity",
          "matches": "[id=\"com.duitang.main:id/popUpbtnClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/13997011",
          "fastQuery": true
        }
      ]
    }
  ]
});
