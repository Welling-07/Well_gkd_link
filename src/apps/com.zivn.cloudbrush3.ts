// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zivn.cloudbrush3",
  "name": "书法字典大全",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-信息流广告",
      "fastQuery": true,
      "activityIds": ".app.HomeActivity",
      "rules": [
        {
          "name": "点击关闭",
          "matches": "@View[clickable=true] < FrameLayout  -2 FrameLayout [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425305",
          "fastQuery": true,
          "activityIds": ".app.HomeActivity"
        },
        {
          "preKeys": 0,
          "name": "点击[不感兴趣]",
          "matches": "@LinearLayout > [id=\"com.byted.pangle.m:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425306",
          "fastQuery": true,
          "activityIds": ".app.HomeActivity"
        },
        {
          "name": "点击\"x\"",
          "matches": "@View[clickable=true] < FrameLayout  -2 FrameLayout [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425305",
          "fastQuery": true,
          "activityIds": "com.zivn.cloudbrush3.app.HomeActivity"
        },
        {
          "preKeys": 2,
          "name": "点击\"不感兴趣\"",
          "matches": "@LinearLayout > [id=\"com.byted.pangle.m:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425306",
          "fastQuery": true,
          "activityIds": "com.zivn.cloudbrush3.app.HomeActivity"
        }
      ]
    }
  ]
});
