// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.antutu.ABenchMark",
  "name": "安兔兔评测",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "activityIds": "com.android.module.app.ui.test.activity.ActivityTestResult",
      "snapshotUrls": "https://i.gkd.li/i/13234012",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.android.module.app.ui.test.activity.ActivityTestResult",
          "matches": "[text=\"广告\"] +2 View > @TextView[childCount=0][index=1][clickable=true][visibleToUser=true] <<n [vid=\"ksad_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13234012"
        },
        {
          "matches": "[text=\"广告\"] + TextView + View > TextView",
          "activityIds": "com.android.module.app.ui.test.activity.ActivityTestResult"
        }
      ]
    }
  ]
});
