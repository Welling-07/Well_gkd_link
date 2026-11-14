// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jiaohua_browser",
  "name": "JMComic2",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "desc": "关闭选择路线后的全屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "ViewGroup[childCount=2] > @ViewGroup[clickable=true][visibleToUser=true] > [text=\"\"]",
          "exampleUrls": "https://e.gkd.li/447bea41-2771-4a57-8436-82da37d0b3b2",
          "snapshotUrls": "https://i.gkd.li/i/20709992",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20718812",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-底部横幅广告",
      "desc": "关闭底部横幅广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "ViewGroup[getChild(0).getChild(0).getChild(0).getChild(0).getChild(1).text=\"AD\"] + @ViewGroup[clickable=false] > [text=\"\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/002589d0-660e-4658-8e20-42c1ac8710fc",
          "snapshotUrls": "https://i.gkd.li/i/20713583",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20709992"
        }
      ]
    },
    {
      "key": 4,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "snapshotUrls": [
        "https://i.gkd.li/i/14141773",
        "https://i.gkd.li/i/14142408"
      ],
      "rules": [
        {
          "matches": "@ViewGroup > [text=\"\"][visibleToUser=true]",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-首页底部广告",
      "enable": false,
      "activityIds": "com.jiaohua_browser.MainActivity",
      "rules": [
        {
          "matches": "@ViewGroup > [text=\"\"][visibleToUser=true]",
          "excludeMatches": "[text=\"搜尋紀錄\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14141810",
            "https://i.gkd.li/i/14142408",
            "https://i.gkd.li/i/14205165"
          ],
          "activityIds": "com.jiaohua_browser.MainActivity"
        }
      ]
    }
  ]
});
