// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mmbox.xbrowser",
  "name": "X浏览器",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动允许打开外部App",
      "desc": "是否允许打开外部应用? -> 允许",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".BrowserActivity",
          "matches": "[vid=\"message_bar\"][childCount=2] > [text=\"是否允许打开外部应用?\"][visibleToUser=true] + [text=\"允许\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/34007323",
          "exampleUrls": "https://e.gkd.li/402beb6f-6777-423c-9db1-7f06ba46a034"
        }
      ]
    }
  ]
});
