// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.skyworthdigital.picamera",
  "name": "创维智慧云",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "resetMatch": "app",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionCdKey": 0,
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "exampleUrls": "https://m.gkd.li/57941037/07c9f980-aa0f-4044-a58d-299a2a358857",
          "snapshotUrls": "https://i.gkd.li/i/13497656",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "exampleUrls": "https://m.gkd.li/57941037/3b5cba55-7024-4d3e-a21c-7b1d540515bc",
          "snapshotUrls": "https://i.gkd.li/i/14511463",
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
          "resetMatch": "app",
          "matchTime": 10000,
          "actionMaximum": 1,
          "actionCdKey": 0,
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[childCount=0][visibleToUser=true][(text.length<10 && (text*=\"跳过\" || text*=\"跳過\" || text*=\"skip\" || text*=\"Skip\")) || id$=\"tt_splash_skip_btn\" || vid*=\"skip\" || vid*=\"Skip\" || desc*=\"跳过\" || desc*=\"skip\" || (vid*=\"count\" && vid*=\"down\" && vid!*=\"countdown\" && vid!*=\"load\" && vid!*=\"add\" && vid!*=\"ead\" && vid!*=\"time\")]",
          "resetMatch": "app",
          "matchTime": 10000,
          "actionMaximum": 1,
          "actionCdKey": 2,
          "actionMaximumKey": 2,
          "priorityTime": 10000
        },
        {
          "matches": "[vid=\"splash_container\"] >4 View[clickable=true]",
          "exampleUrls": "https://m.gkd.li/101449500/576447d9-56ce-476d-9d2f-4de479c82f96",
          "snapshotUrls": "https://i.gkd.li/i/14537292",
          "resetMatch": "app",
          "matchTime": 10000,
          "actionMaximum": 1,
          "actionCdKey": 2,
          "actionMaximumKey": 2,
          "priorityTime": 10000
        }
      ]
    }
  ]
});
