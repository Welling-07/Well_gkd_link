// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.uanmi.miaojiaccount",
  "name": "熊猫记账",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchTime": 10000,
      "actionCdKey": 0,
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "exampleUrls": "https://m.gkd.li/57941037/d0f2f014-49e7-4f00-b207-c90e870693ea",
          "snapshotUrls": "https://i.gkd.li/i/14511621",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000,
          "actionCdKey": 0,
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[childCount=0][visibleToUser=true][(text.length<10 && (text*=\"跳过\" || text*=\"跳過\" || text*=\"skip\" || text*=\"Skip\")) || id$=\"tt_splash_skip_btn\" || vid*=\"skip\" || vid*=\"Skip\" || desc*=\"跳过\" || desc*=\"skip\" || (vid*=\"count\" && vid*=\"down\" && vid!*=\"countdown\" && vid!*=\"load\" && vid!*=\"add\" && vid!*=\"ead\" && vid!*=\"time\")]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000,
          "actionCdKey": 1,
          "actionMaximumKey": 1,
          "priorityTime": 10000
        },
        {
          "matches": "[vid=\"rl_splash\"] >3 View[clickable=true]",
          "exampleUrls": "https://m.gkd.li/101449500/9c0991ab-cb0e-4174-b822-504cf43f55a2",
          "snapshotUrls": "https://i.gkd.li/i/14537398",
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000,
          "actionCdKey": 1,
          "actionMaximumKey": 1,
          "priorityTime": 10000
        }
      ]
    }
  ]
});
