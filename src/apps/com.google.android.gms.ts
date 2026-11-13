// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.google.android.gms",
  "name": "Google Play 服务",
  "groups": [
    {
      "key": 0,
      "name": "功能类-谷歌填充密码自动授权",
      "desc": "勾选[不再显示]-点击[使用]",
      "fastQuery": true,
      "activityIds": ".autofill.ui.AutofillDialogActivity",
      "rules": [
        {
          "matches": "[text=\"不再显示\"][checked=false]",
          "exampleUrls": "https://m.gkd.li/57941037/26d02bb7-efb2-4b8c-b27a-32a878ac89b1",
          "snapshotUrls": "https://i.gkd.li/i/14479073",
          "fastQuery": true,
          "activityIds": ".autofill.ui.AutofillDialogActivity"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"使用\"]",
          "exampleUrls": "https://m.gkd.li/57941037/b05ef245-7e2e-4516-80e5-12832296ec8f",
          "snapshotUrls": "https://i.gkd.li/i/14479128",
          "fastQuery": true,
          "activityIds": ".autofill.ui.AutofillDialogActivity"
        },
        {
          "matches": "[text=\"不再显示\"][checked=false]",
          "exampleUrls": "https://m.gkd.li/57941037/26d02bb7-efb2-4b8c-b27a-32a878ac89b1",
          "snapshotUrls": "https://i.gkd.li/i/14479073",
          "fastQuery": true,
          "activityIds": "com.google.android.gms.autofill.ui.AutofillDialogActivity"
        },
        {
          "preKeys": 2,
          "matches": "[text=\"使用\"]",
          "exampleUrls": "https://m.gkd.li/57941037/b05ef245-7e2e-4516-80e5-12832296ec8f",
          "snapshotUrls": "https://i.gkd.li/i/14479128",
          "fastQuery": true,
          "activityIds": "com.google.android.gms.autofill.ui.AutofillDialogActivity"
        }
      ]
    }
  ]
});
