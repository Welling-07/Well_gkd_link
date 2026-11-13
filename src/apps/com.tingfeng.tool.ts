// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tingfeng.tool",
  "name": "囧次元",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.windmill.sdk.widget.InterstitialView",
            "app.video.guoguo.MainActivity"
          ],
          "matches": "[vid=\"tobid_interstitial_skip_ll\" || vid=\"tobid_splash_skip_ll\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/64670315-c171-42f9-a55a-5bedf29f24c3",
          "snapshotUrls": [
            "https://i.gkd.li/i/21278557",
            "https://i.gkd.li/i/21282765"
          ]
        }
      ]
    }
  ]
});
