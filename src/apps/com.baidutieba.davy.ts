// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidutieba.davy",
  "name": "贴吧一键签到大师",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-内部弹窗广告",
      "activityIds": "com.davy.commonlibrary.utils.DialogUtil",
      "rules": [
        {
          "matches": "[vid=\"exit\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504289",
          "activityIds": "com.davy.commonlibrary.utils.DialogUtil"
        },
        {
          "matches": "[vid=\"mimo_interstitial_close_img\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504291",
          "activityIds": "com.davy.commonlibrary.utils.DialogUtil"
        },
        {
          "matches": "[id=\"com.baidutieba.davy:id/exit\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504289",
          "activityIds": "com.davy.commonlibrary.utils.DialogUtil"
        },
        {
          "matches": "[id=\"com.baidutieba.davy:id/mimo_interstitial_close_img\"]",
          "snapshotUrls": "https://i.gkd.li/i/12504291",
          "activityIds": "com.davy.commonlibrary.utils.DialogUtil"
        }
      ]
    }
  ]
});
