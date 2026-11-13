// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "enfc.metro",
  "name": "亿通行",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-出站后摇一摇广告",
      "desc": "点击跳过",
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".session.web.rn.RPReactActivity",
          "matches": "@View[clickable=true] - * [text=\"扭动手机\"]",
          "snapshotUrls": "https://i.gkd.li/i/13988597"
        },
        {
          "activityIds": "enfc.metro.session.web.rn.RPReactActivity",
          "matches": "@View[clickable=true] - * [text=\"扭动手机\"]",
          "snapshotUrls": "https://i.gkd.li/i/13988597",
          "fastQuery": true
        }
      ]
    }
  ]
});
