// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.documentsui",
  "name": "文件",
  "groups": [
    {
      "key": 0,
      "name": "功能类-允许第三方应用访问文件夹",
      "desc": "点击允许",
      "activityIds": "com.android.documentsui.picker.PickActivity",
      "snapshotUrls": "https://i.gkd.li/i/13801468",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".picker.PickActivity",
          "matches": [
            "[text^=\"要允许\"][visibleToUser=true]",
            "[text=\"允许\"][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13801468"
        },
        {
          "matches": "[text=\"取消\"] + [text=\"允许\"]",
          "activityIds": "com.android.documentsui.picker.PickActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-使用此文件夹",
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".picker.PickActivity",
          "matches": "[text=\"使用此文件夹\"]",
          "snapshotUrls": "https://i.gkd.li/i/13916082"
        },
        {
          "activityIds": "com.android.documentsui.picker.PickActivity",
          "matches": "[text=\"使用此文件夹\"]",
          "snapshotUrls": "https://i.gkd.li/i/13916082",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-自动选择排序方式",
      "desc": "选择[修改日期(从新到旧)]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".picker.PickActivity",
          "matches": "[text=\"修改日期（从新到旧）\"][checked=false][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/bf621eae-8268-4381-aa46-4161c7811cbe",
          "snapshotUrls": "https://i.gkd.li/i/23096908"
        }
      ]
    }
  ]
});
