// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miui.cleanmaster",
  "name": "垃圾清理",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-添加桌面图标提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.miui.optimizecenter.MainActivity",
          "matches": [
            "[text^=\"开启桌面图标\"]",
            "[text=\"不需要\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/30698886"
        }
      ]
    }
  ]
});
