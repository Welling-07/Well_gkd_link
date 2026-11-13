// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "net.duohuo.cyc",
  "name": "次元城动画",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "top.cycdm.cycapp.MainActivity",
          "matches": "@ViewGroup[clickable=true][childCount=1] < ViewGroup +2 ViewGroup[childCount=2] > [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13972796",
            "https://i.gkd.li/i/14358701",
            "https://i.gkd.li/i/14358706"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "top.cycdm.cycapp.MainActivity",
          "matches": "@[clickable=true] > [text=\"跳过\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13972792",
            "https://i.gkd.li/i/14358630"
          ]
        }
      ]
    }
  ]
});
