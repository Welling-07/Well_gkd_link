// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.suishenji.cdscc.hjapp",
  "name": "大师兄影视",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.meishu.sdk.activity.SdkInterstitialActivity",
          "matches": "[vid=\"ms_activity_sdk_interstitial_cacel\"]",
          "snapshotUrls": "https://i.gkd.li/i/26344634"
        }
      ]
    }
  ]
});
