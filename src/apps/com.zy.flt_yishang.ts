// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zy.flt_yishang",
  "name": "飞猫管家",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[desc*=\"跳过\"][desc.length<10][width<500 && height<200][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/882f36c1-d172-436f-a43e-194d75940886",
          "snapshotUrls": "https://i.gkd.li/i/24097095",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
