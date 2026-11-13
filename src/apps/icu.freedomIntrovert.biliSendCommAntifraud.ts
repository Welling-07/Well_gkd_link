// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "icu.freedomIntrovert.biliSendCommAntifraud",
  "name": "哔哩发评反诈",
  "groups": [
    {
      "key": 0,
      "name": "功能类-检查评论自动点击后台等待",
      "rules": [
        {
          "fastQuery": true,
          "actionDelay": 400,
          "activityIds": ".ByXposedLaunchedActivity",
          "matches": "Button[text=\"后台等待\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25240613",
            "https://i.gkd.li/i/25320069"
          ]
        }
      ]
    }
  ]
});
