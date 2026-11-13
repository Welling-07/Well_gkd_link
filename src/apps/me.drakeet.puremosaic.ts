// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "me.drakeet.puremosaic",
  "name": "纯纯打码",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-解锁高级功能",
      "desc": "点击[不]",
      "fastQuery": true,
      "activityIds": [
        ".MainActivity",
        "me.iwf.photopicker.PhotoPickerActivity"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".MainActivity",
            "me.iwf.photopicker.PhotoPickerActivity"
          ],
          "matches": [
            "[text=\"解锁高级功能\"]",
            "[text=\"不\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16761630",
            "https://i.gkd.li/i/16761818"
          ]
        },
        {
          "matches": [
            "[text=\"解锁高级功能\"]",
            "[text=\"不\"]"
          ],
          "action": "clickNode",
          "snapshotUrls": [
            "https://i.gkd.li/i/16761630",
            "https://i.gkd.li/i/16761818"
          ],
          "fastQuery": true,
          "activityIds": [
            ".MainActivity",
            "me.iwf.photopicker.PhotoPickerActivity"
          ]
        }
      ]
    }
  ]
});
