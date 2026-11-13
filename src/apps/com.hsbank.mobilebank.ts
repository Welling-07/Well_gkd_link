// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hsbank.mobilebank",
  "name": "徽商银行",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[vid=\"tv_skip\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/31823929",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "actionMaximumKey": 0,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
