// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.videogo",
  "name": "萤石云视频",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-主页广告",
      "fastQuery": true,
      "activityIds": ".main.MainTabActivity",
      "rules": [
        {
          "matches": "[vid=\"ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255684",
          "fastQuery": true,
          "activityIds": ".main.MainTabActivity"
        },
        {
          "preKeys": 0,
          "matches": "[vid=\"ad_closead_nointerest\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255697",
          "fastQuery": true,
          "activityIds": ".main.MainTabActivity"
        },
        {
          "matches": "[id=\"com.videogo:id/ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255684",
          "fastQuery": true,
          "activityIds": "com.videogo.main.MainTabActivity"
        },
        {
          "preKeys": 2,
          "matches": "[id=\"com.videogo:id/ad_closead_nointerest\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255697",
          "fastQuery": true,
          "activityIds": "com.videogo.main.MainTabActivity"
        },
        {
          "matches": "[id=\"com.videogo:id/ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255684",
          "fastQuery": true,
          "activityIds": [
            "com.videogo.main.MainTabActivity"
          ]
        },
        {
          "preKeys": 4,
          "matches": "[id=\"com.videogo:id/ad_closead_nointerest\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255697",
          "fastQuery": true,
          "activityIds": [
            "com.videogo.main.MainTabActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": [
        ".main.MainTabActivity",
        ".login.LoadingActivity"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "action": "back",
          "matches": "TextView[text=\"了解并试用服务\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15338834",
          "fastQuery": true,
          "activityIds": [
            ".main.MainTabActivity",
            ".login.LoadingActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "action": "back",
          "matches": "[text=\"新机礼包专享\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/b9045305-ce34-43f7-ab86-b48a672281cb",
          "snapshotUrls": [
            "https://i.gkd.li/i/18843418",
            "https://i.gkd.li/i/20139706"
          ],
          "fastQuery": true,
          "activityIds": [
            ".main.MainTabActivity",
            ".login.LoadingActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-在线值守广告",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "matchTime": 10000,
      "resetMatch": "app",
      "rules": [
        {
          "action": "back",
          "matches": "TextView[text=\"了解并试用服务\"]",
          "snapshotUrls": "https://i.gkd.li/i/15338834",
          "fastQuery": true,
          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "actionCdKey": 0,
      "actionMaximumKey": 0,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1
        },
        {
          "matches": "[childCount=0][visibleToUser=true][(text.length<10 && (text*=\"跳过\" || text*=\"跳過\" || text*=\"skip\" || text*=\"Skip\")) || id$=\"tt_splash_skip_btn\" || vid*=\"skip\" || vid*=\"Skip\" || desc*=\"跳过\" || desc*=\"skip\" || (vid*=\"count\" && vid*=\"down\" && vid!*=\"countdown\" && vid!*=\"load\" && vid!*=\"add\" && vid!*=\"ead\" && vid!*=\"time\")]",
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1,
          "actionCdKey": 0,
          "actionMaximumKey": 0
        },
        {
          "name": "穿山甲SDK",
          "matches": "[vid=\"ad_content\"] >n View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14076262",
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1,
          "actionCdKey": 0,
          "actionMaximumKey": 0
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-在线值守试用弹窗",
      "desc": "点击x",
      "enable": false,
      "activityIds": "com.videogo.main.MainTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/14065785",
      "rules": [
        {
          "matches": "[text=\"了解并试用服务\"] <<n ViewGroup[index=0][childCount=2] > ViewGroup[clickable=true]",
          "activityIds": "com.videogo.main.MainTabActivity"
        }
      ]
    }
  ]
});
