// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "me.piebridge.brevent",
  "name": "黑阈",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-权限不足弹窗",
      "desc": "点击取消",
      "activityIds": [
        "me.piebridge.brevent.ui.BreventActivity"
      ],
      "actionMaximum": 1,
      "fastQuery": true,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.BreventActivity",
          "matches": [
            "[text^=\"黑阈服务权限不足\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13218439",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[id=\"android:id/message\"][text^=\"黑阈服务权限不足\"]",
            "[text=\"取消\"][id^=\"android:id/button\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13218439",
          "activityIds": [
            "me.piebridge.brevent.ui.BreventActivity"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[id=\"android:id/message\"][text^=\"黑阈服务权限不足\"]",
            "[text=\"取消\"][id^=\"android:id/button\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13218439",
          "activityIds": "me.piebridge.brevent.ui.BreventActivity",
          "actionMaximum": 1,
          "fastQuery": true,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-已黑阈无法打开app",
      "desc": "每次打开弹窗-取消",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.BreventActivity",
          "matches": "LinearLayout[childCount=3] >2 *[childCount=2] > [text=\"取消\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/26143603",
          "exampleUrls": "https://e.gkd.li/9a61e111-6285-41bd-b5fd-ec64a0e2675e"
        }
      ]
    }
  ]
});
