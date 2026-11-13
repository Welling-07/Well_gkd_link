// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.nasoft.socmark",
  "name": "手机性能排行",
  "groups": [
    {
      "key": 0,
      "name": "局部广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.SearchScoreActivity",
          "matches": "[vid=\"btn_banner_ad_clear\"]",
          "snapshotUrls": "https://i.gkd.li/i/28173008"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14332576",
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"更新\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});
