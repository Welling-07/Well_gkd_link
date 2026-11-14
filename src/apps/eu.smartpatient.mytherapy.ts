// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "eu.smartpatient.mytherapy",
  "name": "MyTherapy",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "fastQuery": true,
      "rules": [
        {
          "name": "形式1",
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "matches": "@Button[clickable=true] < [index=parent.childCount.minus(1)] <n View[childCount>1] <n [id=\"mys-content\"] <<10  [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/26159508",
            "https://i.gkd.li/i/26159509",
            "https://i.gkd.li/i/26159510"
          ],
          "exampleUrls": [
            "https://e.gkd.li/012e3aca-4d19-46e4-8873-5e4b15cec187",
            "https://e.gkd.li/631c83f3-097b-43e2-a05a-b5349ef211fc"
          ],
          "fastQuery": true
        },
        {
          "name": "形式2",
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "matches": "[desc=\"Interstitial close button\"][visibleToUser=true] < @FrameLayout <2 [childCount=2] < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/26646224",
          "exampleUrls": "https://e.gkd.li/5400ee80-9f09-426e-97b8-2e0e18add6a3",
          "fastQuery": true
        }
      ]
    }
  ]
});
