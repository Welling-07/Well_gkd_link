// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.missevan",
  "name": "猫耳FM",
  "groups": [
    {
      "key": 0,
      "name": "青少年模式",
      "desc": "点击：知道了",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "matches": "[id=\"cn.missevan:id/iKnowTextView\"][text=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/12908433",
          "fastQuery": true
        }
      ]
    }
  ]
});
