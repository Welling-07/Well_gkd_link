// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.google.android.googlequicksearchbox",
  "name": "Google",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-Gemini-个性化Tip",
      "desc": "试用新功能举例对话(浪费Token)",
      "fastQuery": true,
      "matchTime": 16000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.google.android.apps.search.assistant.surfaces.voice.robin.main.MainActivity",
          "matches": "[text^=\"Gemini 现在可以根据\"] <<4 [vid*=\"main_scroll_view\"] + [vid*=\"_bottom_buttons_container\"] > [text=\"关闭\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/71341a5d-d722-47a0-a6d9-5fa65d550791",
          "snapshotUrls": "https://i.gkd.li/i/25823279",
          "fastQuery": true,
          "matchTime": 16000,
          "actionMaximum": 2,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-Gemini-试用新功能",
      "desc": "横幅tip-x掉",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.google.android.apps.search.assistant.surfaces.voice.robin.main.MainActivity",
          "matches": "[vid=\"assistant_server_driven_discovery_banner\"] >2 @[vid*=\"_dimiss_button\"][clickable=true][visibleToUser=true] +2 [text=\"立即试用\"]",
          "exampleUrls": "https://e.gkd.li/fa3826c9-9c92-41a4-9060-0bc80dd72867",
          "snapshotUrls": "https://i.gkd.li/i/25823465",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-Gemini-个性化Tip",
      "desc": "试用新功能举例对话(浪费Token)",
      "matchTime": 16000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.google.android.apps.search.assistant.surfaces.voice.robin.main.MainActivity",
          "matches": "[desc=\"关闭\"] < @View[clickable=true] - * -> [text$=\"体验个性化智能服务\"][visibleToUser=true] < ScrollView <<(6-n) [vid=\"assistant_robin_zero_state_default_assistant_upsell_banner_container\"]",
          "exampleUrls": "https://e.gkd.li/f2520556-dbf0-44ff-97f5-dd0978f7880d",
          "snapshotUrls": "https://i.gkd.li/i/29405181",
          "matchTime": 16000,
          "actionMaximum": 2,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
