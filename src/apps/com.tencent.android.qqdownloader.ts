// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.android.qqdownloader",
  "name": "应用宝",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-签到弹窗",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matches": "@ImageView[width<78 && height<78] - FrameLayout - ImageView[width=getPrev(6).width] < FrameLayout[childCount>4][visibleToUser=true] < * < * < * < * < * < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/32254247",
          "exampleUrls": "https://e.gkd.li/32251ef1-ea42-428d-8814-2b75cce47d57"
        }
      ]
    }
  ]
});
