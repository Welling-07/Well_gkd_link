// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.huabenapp",
  "name": "话本小说",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "enable": false,
      "resetMatch": "app",
      "actionMaximum": 1,
      "activityIds": "com.huabenapp.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/14072723",
      "rules": [
        {
          "matches": "[text=\"发现新版本\"] <n ViewGroup < ScrollView +n ViewGroup[clickable=true]",
          "resetMatch": "app",
          "actionMaximum": 1,
          "activityIds": "com.huabenapp.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-阅读界面-底部社区问答",
      "enable": false,
      "activityIds": "com.huabenapp.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/14076166",
      "rules": [
        {
          "matches": "[text*=\"社区问答\"] +2 ViewGroup",
          "activityIds": "com.huabenapp.MainActivity"
        }
      ]
    }
  ]
});
