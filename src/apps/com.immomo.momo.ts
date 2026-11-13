// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.immomo.momo",
  "name": "MOMO陌陌",
  "groups": [
    {
      "key": 0,
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/14395028",
      "rules": [
        {
          "matches": "[text$=\"青少年模式\"] + [text=\"知道了\"]",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
