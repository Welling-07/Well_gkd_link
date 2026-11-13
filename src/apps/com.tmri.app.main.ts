// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tmri.app.main",
  "name": "交管12123",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/6bbf28ed-9e78-4006-9225-49c07954ee45",
          "snapshotUrls": "https://i.gkd.li/i/25207240",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            "com.tmri.app.ui.activity.main.MainTabHostNewActivity",
            "com.tmri.app.ui.activity.main.TmriNewActivity"
          ],
          "matches": "ImageButton[vid=\"btn_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13315944",
            "https://i.gkd.li/i/13779215"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageButton[id=\"com.tmri.app.main:id/btn_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13315944",
            "https://i.gkd.li/i/13779215"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-确认退出",
      "desc": "点击[确认]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.tmri.app.ui.activity.main.MainTabHostNewActivity",
          "matches": [
            "[text=\"是否确认退出?\"]",
            "[text=\"确认\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/15597285"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.tmri.app.ui.activity.main.MainTabHostNewActivity",
          "matches": [
            "[text=\"立即更新\"]",
            "[text=\"以后再说\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/15751656",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text=\"立即更新\"]",
            "[text=\"以后再说\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/15751656",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-消息通知",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": [
            "com.tmri.app.ui.activity.main.MainTabHostNewActivity",
            "com.tmri.app.ui.activity.main.TmriNewActivity"
          ],
          "matches": "ImageButton[id=\"com.tmri.app.main:id/btn_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13315944",
            "https://i.gkd.li/i/13779215"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    }
  ]
});
