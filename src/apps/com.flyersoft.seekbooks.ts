// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.flyersoft.seekbooks",
  "name": "搜书大师",
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
      "forcedTime": 10000,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/32143574",
          "fastQuery": true,
          "matchTime": 10000,
          "forcedTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@ImageView[width<147 && height<147] < [visibleToUser=true] < [childCount=1] +3 ViewGroup >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/32141142",
          "fastQuery": true,
          "matchTime": 10000,
          "forcedTime": 10000,
          "actionMaximum": 1,
          "actionMaximumKey": 0,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"]",
          "snapshotUrls": "https://i.gkd.li/i/32140212",
          "fastQuery": true,
          "matchTime": 10000,
          "forcedTime": 10000,
          "actionMaximum": 1,
          "actionMaximumKey": 0,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[text^=\"跳过\"][text.length<=3]",
          "snapshotUrls": "https://i.gkd.li/i/12857275",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0,
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/13797352",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 3,
          "priorityTime": 10000,
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "matches": "[id=\"com.flyersoft.seekbooks:id/splash_container1\"] >5 [text^=\"跳过\"][text.length<=3]",
          "snapshotUrls": "https://i.gkd.li/i/12857275",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000,
          "forcedTime": 10000
        },
        {
          "matches": "FrameLayout > TextView[text=null] - View[visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13797352",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000,
          "forcedTime": 10000
        }
      ]
    }
  ]
});
