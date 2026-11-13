// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.net.dascom.xrbridge",
  "name": "新睿桥牌",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.MainTabsActivity",
          "matches": "[vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/27314278",
            "https://i.gkd.li/i/27316178"
          ]
        }
      ]
    }
  ]
});
