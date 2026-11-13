// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.uzero.baimiao",
  "name": "白描",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动点击截取全屏",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.screen.ScreenCaptureActivity",
          "matches": "[text=\"截取全屏\"]",
          "snapshotUrls": "https://i.gkd.li/i/23054772"
        }
      ]
    }
  ]
});
