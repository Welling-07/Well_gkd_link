// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tima.carnet.m.main",
  "name": "钛马星",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-每日弹窗广告",
      "activityIds": [
        ".lib.common.dialog.TimaLoadingDialog",
        ".app.main.NoticeActivity",
        ".app.main.MainActivity",
        ".LaunchActivity"
      ],
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text=\"今天内不显示\"][checked=false]",
          "exampleUrls": "https://e.gkd.li/66af6710-ec2e-472b-a589-cac40ac6ea6d",
          "snapshotUrls": [
            "https://i.gkd.li/i/12654432",
            "https://i.gkd.li/i/13507746",
            "https://i.gkd.li/i/13508074",
            "https://i.gkd.li/i/13508041"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".lib.common.dialog.TimaLoadingDialog",
            ".app.main.NoticeActivity",
            ".app.main.MainActivity",
            ".LaunchActivity"
          ]
        },
        {
          "preKeys": 0,
          "matches": "@ImageButton[clickable=true] - [text=\"今天内不显示\"]",
          "exampleUrls": "https://e.gkd.li/66af6710-ec2e-472b-a589-cac40ac6ea6d",
          "snapshotUrls": [
            "https://i.gkd.li/i/12654432",
            "https://i.gkd.li/i/13507746",
            "https://i.gkd.li/i/13508074",
            "https://i.gkd.li/i/13508041"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".lib.common.dialog.TimaLoadingDialog",
            ".app.main.NoticeActivity",
            ".app.main.MainActivity",
            ".LaunchActivity"
          ]
        },
        {
          "matches": [
            "CheckBox[id$=\"today_will_not_shown\"] + ImageButton[clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12654432",
            "https://i.gkd.li/i/13507746",
            "https://i.gkd.li/i/13508074",
            "https://i.gkd.li/i/13508041"
          ],
          "activityIds": [
            "com.tima.carnet.m.main.lib.common.dialog.TimaLoadingDialog",
            "com.tima.carnet.m.main.app.main.NoticeActivity",
            "com.tima.carnet.m.main.app.main.MainActivity",
            "com.tima.carnet.m.main.LaunchActivity"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-设备界面顶部广告",
      "activityIds": ".app.main.MainActivity",
      "rules": [
        {
          "matches": "@Image[childCount=0][visibleToUser=true] < View[childCount=1] + View >2 [visibleToUser=true][text=\"广告\"] <<n [vid=\"fl_ad_banner\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13508030",
            "https://i.gkd.li/i/13508115"
          ],
          "activityIds": ".app.main.MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13508102",
          "activityIds": ".app.main.MainActivity"
        },
        {
          "preKeys": 0,
          "action": "back",
          "matches": "ListView[id=\"com.byted.pangle:id/tt_filer_words_lv\"][childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/13508072",
          "activityIds": ".app.main.MainActivity"
        },
        {
          "matches": "[id=\"com.tima.carnet.m.main:id/fl_ad_banner\"] >n Image[text!=null&&text!=\"\"] < View +n View > Image",
          "snapshotUrls": [
            "https://i.gkd.li/i/13508030"
          ],
          "activityIds": [
            "com.tima.carnet.m.main.app.main.MainActivity"
          ]
        },
        {
          "matches": "[id=\"com.tima.carnet.m.main:id/fl_ad_banner\"] >n Image[text!=null&&text!=\"\"] + View > Image",
          "snapshotUrls": [
            "https://i.gkd.li/i/13508115"
          ],
          "activityIds": [
            "com.tima.carnet.m.main.app.main.MainActivity"
          ]
        },
        {
          "preKeys": [
            3,
            4
          ],
          "matches": "[text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13508102"
          ],
          "activityIds": [
            "com.tima.carnet.m.main.app.main.MainActivity"
          ]
        },
        {
          "preKeys": [
            3,
            4
          ],
          "action": "back",
          "matches": "ListView[childCount=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13508072"
          ],
          "activityIds": [
            "com.tima.carnet.m.main.app.main.MainActivity"
          ]
        }
      ]
    }
  ]
});
