// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.VideoPlayer",
  "name": "i 视频",
  "groups": [
    {
      "key": 0,
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13849807",
      "rules": [
        {
          "matches": "[vid=\"child_mode_cancel_button\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
