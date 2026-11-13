// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "li.songe.gkd",
  "name": "GKD",
  "groups": [
    {
      "key": 0,
      "name": "功能类-删除快照二次提示",
      "desc": "二次确认?-确定",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[clickable=true] -3 [text=\"删除快照\"] <<6 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/25569635"
        }
      ]
    }
  ]
});
