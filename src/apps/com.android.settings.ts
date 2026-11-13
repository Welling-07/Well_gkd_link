// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.settings",
  "name": "设置",
  "groups": [
    {
      "key": 0,
      "name": "功能类-选默认USB连接方式",
      "desc": "(小米华为📱)点击[取消]",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "matches": [
            "[text=\"USB 用于\" || text=\"USB 连接方式\"][visibleToUser=true]",
            "[text=\"取消\"][clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/23428639",
            "https://i.gkd.li/i/23696166",
            "https://i.gkd.li/i/25351690",
            "https://i.gkd.li/i/25351689"
          ],
          "exampleUrls": "https://e.gkd.li/1ab102bd-99dd-471a-8841-33a7aaf2790a"
        }
      ]
    }
  ]
});
