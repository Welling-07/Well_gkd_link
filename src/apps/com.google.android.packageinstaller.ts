// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.google.android.packageinstaller",
  "name": "软件包安装程序",
  "groups": [
    {
      "key": 2,
      "name": "其他-安全警告弹窗",
      "desc": "点击取消",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.android.packageinstaller.PackageInstallerActivity",
          "matches": [
            "[text^=\"出于安全考虑\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://e.gkd.li/e501f0cf-c531-40eb-a747-31377d35c971",
          "snapshotUrls": "https://i.gkd.li/i/16406317"
        }
      ]
    }
  ]
});
