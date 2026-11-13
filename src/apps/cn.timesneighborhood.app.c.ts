// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.timesneighborhood.app.c",
  "name": "邻里邦",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动签到",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.zkty.modules.engine.activity.XEngineWebActivity",
          "matches": "[text=\"立即签到\"]",
          "exampleUrls": "https://m.gkd.li/57941037/e02dac87-41dc-45eb-bf7e-8daa0b69f517",
          "snapshotUrls": "https://i.gkd.li/i/14545251",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
