// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.langeasy.LangEasyLexis",
  "name": "不背单词",
  "groups": [
    {
      "key": 2,
      "name": "未分类-右下角弹窗",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": "cn.com.langeasy.LangEasyLexis.activity.MainActivity",
          "matches": "[id=\"cn.com.langeasy.LangEasyLexis:id/close_float_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13759025",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    }
  ]
});
