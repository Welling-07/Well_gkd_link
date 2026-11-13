// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "org.zwanoo.android.speedtest",
  "name": "SpeedTest",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-测速后广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ookla.mobile4.screens.main.MainViewActivity",
          "matches": "[vid=\"suite_completed_close_ad_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/12893175"
        },
        {
          "activityIds": "com.ookla.mobile4.screens.main.MainViewActivity",
          "fastQuery": true,
          "matches": "[id=\"org.zwanoo.android.speedtest:id/suite_completed_close_ad_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/12893175"
        }
      ]
    }
  ]
});
