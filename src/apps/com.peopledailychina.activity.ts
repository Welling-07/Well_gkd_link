// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.peopledailychina.activity",
  "name": "人民日报",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"advert_iv_del\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/53c28fe8-9db9-45d8-82b3-7034aa10d2ed",
          "snapshotUrls": "https://i.gkd.li/i/15175151"
        },
        {
          "fastQuery": true,
          "activityIds": "com.peopledailychina.activity.activity.MainActivity",
          "matches": "[vid=\"advert_iv_del\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/53c28fe8-9db9-45d8-82b3-7034aa10d2ed",
          "snapshotUrls": "https://i.gkd.li/i/15175151"
        }
      ]
    }
  ]
});
