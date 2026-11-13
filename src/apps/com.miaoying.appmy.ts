// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miaoying.appmy",
  "name": "天空影视",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.huawei.android.launcher.unihome.UniHomeLauncher",
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12846524"
        }
      ]
    }
  ]
});
