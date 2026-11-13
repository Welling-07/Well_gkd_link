// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.romielf.mrsc",
  "name": "每日赛车",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-新闻页面摇一摇广告",
      "desc": "点击准确率灵敏度不太高",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "matches": "@Image < View -n View >2 View[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12667539",
          "activityIds": ".MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12667549",
          "activityIds": ".MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-新闻页面摇一摇广告",
      "desc": "点击准确率灵敏度不太高",
      "enable": false,
      "activityIds": "com.romielf.mrsc.MainActivity",
      "rules": [
        {
          "matches": "@Image < View -n View >2 View[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12667539",
          "activityIds": "com.romielf.mrsc.MainActivity"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12667549",
          "activityIds": "com.romielf.mrsc.MainActivity"
        }
      ]
    }
  ]
});
