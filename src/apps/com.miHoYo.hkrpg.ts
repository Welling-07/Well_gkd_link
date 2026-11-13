// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miHoYo.hkrpg",
  "name": "崩坏：星穹铁道",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告-用户协议",
      "desc": "不接受怎么玩?",
      "order": -10,
      "fastQuery": true,
      "matchTime": 16000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 16000,
      "rules": [
        {
          "activityIds": "com.combosdk.module.ua.ProtocolActivity",
          "matches": "[text^=\"用户协议\"] +2 LinearLayout > [text=\"拒绝\"] + [text=\"接受\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/c5ce0381-bef9-4b0b-90e4-786166d3afc0",
          "snapshotUrls": "https://i.gkd.li/i/25823587",
          "fastQuery": true,
          "matchTime": 16000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 16000
        }
      ]
    }
  ]
});
