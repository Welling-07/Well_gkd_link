// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vivo.upslide",
  "name": "交互池",
  "groups": [
    {
      "key": 0,
      "name": "功能类-交互池-微信扫码",
      "desc": "快速微信扫码",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.bbk.launcher2.Launcher",
          "matches": "@[clickable=true] [text=\"扫一扫\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/1a1e58f0-7251-4359-8a2b-c7f4562a0f9f",
          "snapshotUrls": "https://i.gkd.li/i/25832521"
        }
      ]
    }
  ]
});
