// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.feeyo.vz.pro.cdm",
  "name": "飞常准业内版",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "desc": "点击跳过",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/13926823",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "fastQuery": true
        },
        {
          "matches": "@View <3 FrameLayout[childCount=4] <2 FrameLayout[childCount=2] < FrameLayout < [vid=\"splashAdContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/13926823",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "priorityTime": 10000
        }
      ]
    }
  ]
});
