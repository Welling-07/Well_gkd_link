// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cib.xyk",
  "name": "兴业生活",
  "groups": [
    {
      "key": 0,
      "name": "通知提示",
      "desc": "概率误触，谨慎开启",
      "enable": false,
      "activityIds": "com.cib.fintech.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/14122970",
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >2 RelativeLayout[childCount=2] > RelativeLayout + ImageView[clickable=true]",
          "activityIds": "com.cib.fintech.activity.MainActivity"
        }
      ]
    }
  ]
});
