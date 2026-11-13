// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.github.metacubex.clash.meta",
  "name": "Clash Meta for Android",
  "groups": [
    {
      "key": 0,
      "name": "功能类-代理页面自动点击延迟测试",
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.github.kr328.clash.ProxyActivity",
          "matches": "[vid=\"url_test_view\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/490f4572-a1af-4345-8f6e-3b0081929628",
          "snapshotUrls": "https://i.gkd.li/i/20926416",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20926355",
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-自动[启动]后返回",
      "desc": "进app后 ①点击[启动] ②返回键",
      "fastQuery": true,
      "activityIds": "com.github.kr328.clash.",
      "matchTime": 1200,
      "resetMatch": "app",
      "rules": [
        {
          "name": "①点击[启动]",
          "matches": "@[clickable=true] >3 [text$=\"启动\"]",
          "snapshotUrls": "https://i.gkd.li/i/25926380",
          "exampleUrls": "https://e.gkd.li/7243edfc-00ac-4551-bf87-92ac0cdaba6f",
          "fastQuery": true,
          "activityIds": "com.github.kr328.clash.",
          "matchTime": 1200,
          "resetMatch": "app"
        },
        {
          "name": "②返回键",
          "action": "back",
          "actionDelay": 120,
          "matches": "[parent=null]",
          "fastQuery": true,
          "activityIds": "com.github.kr328.clash.",
          "matchTime": 1200,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
