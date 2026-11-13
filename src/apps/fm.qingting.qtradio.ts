// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "fm.qingting.qtradio",
  "name": "蜻蜓FM",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-播放界面的广告",
      "activityIds": [
        "fm.qingting.qtradio.QTRadioActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12640438",
        "https://i.gkd.li/i/12640981"
      ],
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".QTRadioActivity",
          "matches": "[vid=\"view_ad_close\"]",
          "exampleUrls": "https://e.gkd.li/bef1954c-a0c8-441e-ab77-6967089e906c",
          "snapshotUrls": "https://i.gkd.li/i/12640438",
          "fastQuery": true
        },
        {
          "activityIds": ".QTRadioActivity",
          "matches": "@[vid=\"iv_close\"] + RelativeLayout >2 [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/1562b618-074d-4f10-a1ae-c62c5390fd1a",
          "snapshotUrls": "https://i.gkd.li/i/12640981",
          "fastQuery": true
        },
        {
          "matches": "[id=\"fm.qingting.qtradio:id/view_ad_close\"]",
          "activityIds": [
            "fm.qingting.qtradio.QTRadioActivity"
          ],
          "fastQuery": true
        },
        {
          "matches": "@[id=\"fm.qingting.qtradio:id/iv_close\"] + RelativeLayout > LinearLayout > TextView[text=\"广告\"]",
          "activityIds": [
            "fm.qingting.qtradio.QTRadioActivity"
          ],
          "fastQuery": true
        }
      ]
    }
  ]
});
