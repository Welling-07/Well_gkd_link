// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.android.pushagent",
  "name": "荣耀推送服务",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动[禁止]发送通知",
      "desc": "弹窗:是否允许xxx发送通知? 点击[禁止]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.NotificationDialogForOverMagic6Activity",
          "matches": [
            "[text$=\"发送通知？\"]",
            "[text=\"禁止\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/26328029"
        }
      ]
    }
  ]
});
