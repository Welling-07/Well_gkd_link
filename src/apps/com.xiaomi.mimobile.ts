// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaomi.mimobile",
  "name": "小米移动",
  "groups": [
    {
      "key": 0,
      "name": "评价提示",
      "rules": [
        {
          "activityIds": ".activity.XiaomiMobileMainActivity",
          "matches": "@ImageView[desc=null] < [desc=\"「小米移动」使用体验调查\"]",
          "snapshotUrls": "https://i.gkd.li/i/23227230"
        }
      ]
    }
  ]
});
