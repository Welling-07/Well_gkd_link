// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.whpe.qrcode.hunan_xiangtan",
  "name": "湘潭出行",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "name": "快手广告",
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"interact_ad_root\"] > [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13476265"
        },
        {
          "name": "快手广告 (2)",
          "activityIds": "com.whpe.qrcode.hunan_xiangtan.MainActivity",
          "fastQuery": true,
          "matches": "@[id=\"com.whpe.qrcode.hunan_xiangtan:id/iv_close\"] +n * >n [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13476265"
        }
      ]
    }
  ]
});
