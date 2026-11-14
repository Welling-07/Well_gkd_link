// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sflep.course",
  "name": "WE Learn",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "rules": [
        {
          "fastQuery": true,
          "matches": [
            "[text^=\"最新版本\"]",
            "[text=\"以后再说\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/23452864",
            "https://i.gkd.li/i/23452891"
          ]
        }
      ]
    }
  ]
});
