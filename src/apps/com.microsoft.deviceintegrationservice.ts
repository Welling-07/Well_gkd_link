// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.microsoft.deviceintegrationservice",
  "name": "Device Integration Service",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动[允许]连接至Windows",
      "desc": "点击[允许]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.microsoft.deviceExperiences.permission.MediaProjectionPermissionActivity",
          "matches": "[text*=\"连接至 Windows\"] +(1,2) [visibleToUser=true] > [text=\"允许\"]",
          "snapshotUrls": "https://i.gkd.li/i/33084704",
          "exampleUrls": "https://e.gkd.li/8a8e5daa-4d6c-4fe3-aba8-90364624a5e6"
        }
      ]
    }
  ]
});
