// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.onelap.bls.dear",
  "name": "顽鹿运动",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "desc": "延迟1s点击跳过,避免太早点击被误判异常互动而锁满 5s",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "actionDelay": 1000,
          "matches": "[vid=\"ll_skip_advertisement_splash\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/34618778"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
