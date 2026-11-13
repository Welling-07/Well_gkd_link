// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sina.oasis",
  "name": "绿洲",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-首页推荐广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "ImageView[vid=\"gdt_v2_banner_ad_close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13434468",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text*=\"关闭此广告\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/13498631",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageView[id=\"com.sina.oasis:id/gdt_v2_banner_ad_close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13434468",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "preKeys": 2,
          "matches": "@LinearLayout > [text*=\"关闭此广告\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/13498631",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
