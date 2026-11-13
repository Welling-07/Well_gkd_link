// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.incallui",
  "name": "电话",
  "groups": [
    {
      "key": 0,
      "name": "功能类-接通话时自动[录音]",
      "actionMaximum": 1,
      "rules": [
        {
          "actionDelay": 500,
          "fastQuery": true,
          "activityIds": ".InCallActivity",
          "matches": [
            "[vid=\"elapsedTime\"][visibleToUser=true]",
            "[vid=\"recordButton\"][desc=\"录音\"]"
          ],
          "exampleUrls": "https://e.gkd.li/cfe191ef-3786-403c-ba88-e18d299803a8",
          "snapshotUrls": "https://i.gkd.li/i/20876897",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/20876893",
            "https://i.gkd.li/i/20877514"
          ],
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-通话时自动开[免提]",
      "desc": "适合老人用",
      "fastQuery": true,
      "actionCd": 3000,
      "rules": [
        {
          "activityIds": ".InCallActivity",
          "matches": "[vid=\"audioButton\"][clickable=true][checked=false]",
          "snapshotUrls": "https://i.gkd.li/i/25824399",
          "excludeSnapshotUrls": "https://i.gkd.li/i/25824401",
          "fastQuery": true,
          "actionCd": 3000
        },
        {
          "matches": "[vid=\"audioButton\"][checked=false] >2 [vid=\"ovalButton\"]",
          "snapshotUrls": "https://i.gkd.li/i/27233140",
          "excludeSnapshotUrls": "https://i.gkd.li/i/27233263",
          "fastQuery": true,
          "actionCd": 3000
        },
        {
          "action": "clickCenter",
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".InCallActivity",
          "matches": "[vid=\"showAudioButton\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/20877514",
            "https://i.gkd.li/i/29557697"
          ],
          "fastQuery": true,
          "actionCd": 3000
        }
      ]
    }
  ]
});
