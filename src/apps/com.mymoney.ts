// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mymoney",
  "name": "随手记",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "desc": "点击跳过",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionCdKey": 0,
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/13855760",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "fastQuery": true
        },
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13939216",
            "https://i.gkd.li/i/13939163"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000,
          "actionCdKey": 0
        },
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionCdKey": 0,
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[childCount=0][visibleToUser=true][(text.length<10 && (text*=\"跳过\" || text*=\"跳過\" || text*=\"skip\" || text*=\"Skip\")) || id$=\"tt_splash_skip_btn\" || vid*=\"skip\" || vid*=\"Skip\" || desc*=\"跳过\" || desc*=\"skip\" || (vid*=\"count\" && vid*=\"down\" && vid!*=\"countdown\" && vid!*=\"load\" && vid!*=\"add\" && vid!*=\"ead\" && vid!*=\"time\")]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionCdKey": 2,
          "actionMaximumKey": 2,
          "priorityTime": 10000
        },
        {
          "matches": "@View[clickable=true] <3 * <2 * < FrameLayout[id=\"com.mymoney:id/external_ad_content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13855760",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionCdKey": 2,
          "actionMaximumKey": 2,
          "priorityTime": 10000
        }
      ]
    }
  ]
});
