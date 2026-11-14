// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.samsung.android.packageinstaller",
  "name": "(三星)软件包安装程序",
  "groups": [
    {
      "key": 0,
      "name": "局部广告",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.android.packageinstaller.PackageInstallerActivity",
          "matches": "@[clickable=true][id$=\"close\"] - [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/32292609",
          "exampleUrls": "https://e.gkd.li/03f085e3-c1ca-4d0a-9b54-8dfadcbf2c8e"
        }
      ]
    }
  ]
});
