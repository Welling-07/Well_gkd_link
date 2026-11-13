// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yunx.app",
  "name": "云析",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-忽略电池优化",
      "desc": "点击[暂不]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[text=\"暂不\"] < @View[clickable=true] <(3,4) View[getChild(0).text=\"保持后台下载\"] < View < View < View < ViewGroup < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/32522962",
            "https://i.gkd.li/i/32700890"
          ],
          "exampleUrls": "https://e.gkd.li/6fc05152-c83a-488b-b74d-2a4fe247ee58"
        }
      ]
    }
  ]
});
