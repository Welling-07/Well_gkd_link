// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dz.xmbnxj",
  "name": "小卖部逆袭记",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-底部卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.lynx.boot.LynxActivity",
          "matches": "[vid=\"mix_img_close\"]",
          "exampleUrls": "https://m.gkd.li/99116490/40d3c3c9-9443-4c71-9a98-69efa38f8bfd",
          "snapshotUrls": "https://i.gkd.li/i/13399232"
        },
        {
          "activityIds": "com.lynx.boot.LynxActivity",
          "fastQuery": true,
          "matches": "[id=\"com.dz.xmbnxj:id/mix_img_close\"]",
          "exampleUrls": "https://m.gkd.li/99116490/40d3c3c9-9443-4c71-9a98-69efa38f8bfd",
          "snapshotUrls": "https://i.gkd.li/i/13399232"
        }
      ]
    }
  ]
});
