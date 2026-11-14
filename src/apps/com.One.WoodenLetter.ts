// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.One.WoodenLetter",
  "name": "一个木函",
  "groups": [
    {
      "key": 0,
      "name": "局部广告",
      "desc": "x掉",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "ImageView[width>540] + View -> ImageView[width<71] - View[text=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/25547842"
        }
      ]
    },
    {
      "key": 1,
      "name": "评价提示",
      "desc": "①勾选[不再显示] ②点击x掉",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "name": "①勾选[不再显示]",
          "matches": "[text=\"不再显示\"][checked=false]",
          "snapshotUrls": "https://i.gkd.li/i/29465827",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        },
        {
          "name": "②点击x掉",
          "matches": [
            "[text*=\"好评\"]",
            "[vid=\"dialog_close_view\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/28805036",
            "https://i.gkd.li/i/29465828"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14332536",
      "matchTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@ImageView[clickable=true][width<96] - [text*=\"新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/33833127",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text^=\"新版本\"] <2 * +2 * > [text=\"忽略\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    }
  ]
});
