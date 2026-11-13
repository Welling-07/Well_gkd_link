// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vivo.remoteassistant",
  "name": "远程协助",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动同意远程协助请求",
      "desc": "发来远程协助请求，点击同意",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".InviteeActivity",
          "matches": [
            "[text=\"发来远程协助请求\"][visibleToUser=true]",
            "Button[vid=\"inviteeAgree\"][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/20768251"
        }
      ]
    }
  ]
});
