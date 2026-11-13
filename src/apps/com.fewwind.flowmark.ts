// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fewwind.flowmark",
  "name": "FlowMark",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": [
            "[text^=\"发现新版本\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/ab46d163-83f6-4c50-a6f4-e37186928fba",
          "snapshotUrls": "https://i.gkd.li/i/20737817"
        }
      ]
    }
  ]
});
