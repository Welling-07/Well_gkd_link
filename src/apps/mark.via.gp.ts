// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "mark.via.gp",
  "name": "Via(谷歌版)",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动[确认]下载",
      "desc": "自动点击下载弹窗中的[确定]按钮",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "mark.via.Shell",
          "matches": "@[text=\"确定\" || text=\"確定\" || text=\"OK\"] -n [text*=\"下载\" || text*=\"下載\" || text*=\"download\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/34131392",
          "exampleUrls": "https://e.gkd.li/5728704f-d52e-4267-b0b2-1f66fda88909"
        }
      ]
    }
  ]
});
