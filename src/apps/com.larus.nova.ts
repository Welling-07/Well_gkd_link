// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.larus.nova",
  "name": "豆包",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动创建新对话",
      "desc": "每次进入豆包自动创建新对话",
      "fastQuery": true,
      "activityIds": "com.larus.home.impl.MainActivity",
      "actionMaximum": 1,
      "matchTime": 5000,
      "resetMatch": "app",
      "rules": [
        {
          "name": "①直接[创建新对话]",
          "matches": "[vid=\"larus_chat_top_left_create_new_cvs\"][desc=\"创建新对话\"]",
          "snapshotUrls": "https://i.gkd.li/i/32434802",
          "fastQuery": true,
          "activityIds": "com.larus.home.impl.MainActivity",
          "actionMaximum": 1,
          "matchTime": 5000,
          "resetMatch": "app"
        },
        {
          "name": "①展开[对话列表]",
          "matches": "[!(desc=\"创建新对话\")] - [vid=\"back_icon\"][desc=\"对话列表\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/26175174",
          "excludeSnapshotUrls": "https://i.gkd.li/i/32434802",
          "fastQuery": true,
          "activityIds": "com.larus.home.impl.MainActivity",
          "actionMaximum": 1,
          "matchTime": 5000,
          "resetMatch": "app"
        },
        {
          "name": "②点击[创建新对话]",
          "matches": "[vid=\"side_bar_create_conversation\"][desc=\"创建新对话\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/26175178",
          "fastQuery": true,
          "activityIds": "com.larus.home.impl.MainActivity",
          "actionMaximum": 1,
          "matchTime": 5000,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
