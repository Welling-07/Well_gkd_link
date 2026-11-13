// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.gamehelper.pg",
  "name": "和平营地",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "desc": "①选中[不再提示] ②点击[x]掉",
      "fastQuery": true,
      "activityIds": "com.tencent.gamehelper.ui.main.MainActivity",
      "rules": [
        {
          "name": "①选中[不再提示]",
          "matches": "@CheckBox[checked=false] + [text=\"不再提示\"]",
          "snapshotUrls": "https://i.gkd.li/i/26953259",
          "exampleUrls": "https://e.gkd.li/f5d3e4e4-2cb8-4c01-bf14-604788ae8ab3",
          "fastQuery": true,
          "activityIds": "com.tencent.gamehelper.ui.main.MainActivity"
        },
        {
          "name": "②点击[x]掉",
          "matches": "[vid=\"closebtn\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/26953259",
          "fastQuery": true,
          "activityIds": "com.tencent.gamehelper.ui.main.MainActivity"
        }
      ]
    }
  ]
});
