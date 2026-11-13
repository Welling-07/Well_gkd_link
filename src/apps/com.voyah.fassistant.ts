// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.voyah.fassistant",
  "name": "岚图汽车",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动签到",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[text=\"签到\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/80aa2e89-de9e-45aa-b2cb-5194eaac849a",
          "snapshotUrls": "https://i.gkd.li/i/20742927",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20727658"
        }
      ]
    }
  ]
});
