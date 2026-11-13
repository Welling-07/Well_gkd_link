// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mm.android.lchg",
  "name": "乐橙含光",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "desc": "点击稍后再说",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[id=\"com.mm.android.lchg:id/btn_cancel\"][text*=\"稍后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13540871",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});
