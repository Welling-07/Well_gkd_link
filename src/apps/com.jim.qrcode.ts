// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jim.qrcode",
  "name": "随便扫",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-顶部卡片广告",
      "desc": "点击卡片右上角关闭按钮",
      "activityIds": [
        ".MainActivity",
        "com.miui.home.launcher.Launcher"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12606861",
        "https://i.gkd.li/i/12606862"
      ],
      "rules": [
        {
          "matches": "TextView[text.length>0] < FrameLayout + FrameLayout > ImageView",
          "activityIds": [
            ".MainActivity",
            "com.miui.home.launcher.Launcher"
          ]
        },
        {
          "matches": "TextView[text.length>0] < FrameLayout + FrameLayout > ImageView",
          "activityIds": [
            "com.jim.qrcode.MainActivity",
            "com.miui.home.launcher.Launcher"
          ]
        }
      ]
    }
  ]
});
