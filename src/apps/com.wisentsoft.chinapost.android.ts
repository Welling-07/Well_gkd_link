// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wisentsoft.chinapost.android",
  "name": "中国邮政",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/15914347",
      "rules": [
        {
          "matches": "@ImageView[clickable=true] <2 LinearLayout <3 ViewGroup < [vid=\"ll_main\"]",
          "snapshotUrls": "https://i.gkd.li/i/15914347",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
