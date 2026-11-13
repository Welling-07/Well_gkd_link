// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cloudpower.netsale.activity",
  "name": "中国人保",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "desc": "点击下次再说",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.picc.aasipods.module.versionupdate.controller.VersionUpdateActivity",
          "matches": "[vid=\"tvw_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14005533",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.cloudpower.netsale.activity:id/tvw_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14005533",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
