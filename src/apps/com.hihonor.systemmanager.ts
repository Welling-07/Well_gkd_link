// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.systemmanager",
  "name": "(荣耀)系统管家服务",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动禁止应用跳转",
      "desc": "点击[拒绝]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.hihonor.securitycenter.appads.AppSplashAdvertiseActivity",
          "matches": [
            "[text*=\"想要打开\"]",
            "[text=\"拒绝\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/34633109",
          "exampleUrls": "https://e.gkd.li/55fafe6d-6c33-4ef3-be49-8f6ad70ea8d2"
        }
      ]
    }
  ]
});
