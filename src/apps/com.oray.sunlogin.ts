// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.oray.sunlogin",
  "name": "向日葵远程控制",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "actionMaximumKey": 0,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"tobid_splash_skip_text\" || vid=\"ms_skipView\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/f41b0367-9161-4329-987d-b2d0ad9ec233",
          "snapshotUrls": [
            "https://i.gkd.li/i/17004919",
            "https://i.gkd.li/i/22056539"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/22861457",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] +(2,3) LinearLayout >2 [vid=\"sig_ad_privacy_ll\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22863334",
            "https://i.gkd.li/i/25626004"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "[vid=\"tobid_splash_skip_text\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/f41b0367-9161-4329-987d-b2d0ad9ec233",
          "snapshotUrls": "https://i.gkd.li/i/17004919",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-瓜子会员弹窗",
      "desc": "点击右上角[关闭]",
      "fastQuery": true,
      "activityIds": "com.oray.sunlogin.application.Main",
      "snapshotUrls": [
        "https://i.gkd.li/i/13195950",
        "https://i.gkd.li/i/12910411",
        "https://i.gkd.li/i/13197454"
      ],
      "exampleUrls": "https://github.com/gkd-kit/inspect/assets/38517192/61d335f0-a85a-4e26-80fe-6bc0d1742bc0",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".application.Main",
            ".dialog.ShareDialog"
          ],
          "matches": "[vid=\"close\"][text=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13195950",
            "https://i.gkd.li/i/12910411",
            "https://i.gkd.li/i/13197454"
          ]
        },
        {
          "matches": "[id=\"com.oray.sunlogin:id/close\"][text=\"关闭\"]",
          "fastQuery": true,
          "activityIds": "com.oray.sunlogin.application.Main"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示-版本更新",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".application.Main",
          "matches": "[text=\"立即更新\"] <2 * > [vid=\"button_cancel\"][text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13195560",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"立即更新\"] <2 * > [id=\"com.oray.sunlogin:id/button_cancel\"][text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13195560",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "分段广告-卡片广告",
      "fastQuery": true,
      "activityIds": ".application.Main",
      "rules": [
        {
          "action": "clickCenter",
          "matches": "[vid=\"fl_close_advertise\" || vid=\"iv_dislike\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/2cad526b-1691-45e9-826b-eb92299cb8ee",
          "snapshotUrls": [
            "https://i.gkd.li/i/13207785",
            "https://i.gkd.li/i/17159821"
          ],
          "fastQuery": true,
          "activityIds": ".application.Main"
        },
        {
          "preKeys": 0,
          "anyMatches": [
            "@[clickable=true] > [text=\"不感兴趣\"][clickable=false][visibleToUser=true]",
            "[text=\"不感兴趣\"][clickable=true][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/55f927c7-edb5-4324-a73a-ad6dfa090eb6",
          "snapshotUrls": [
            "https://i.gkd.li/i/22865433",
            "https://i.gkd.li/i/22941348"
          ],
          "fastQuery": true,
          "activityIds": ".application.Main"
        }
      ]
    },
    {
      "key": 5,
      "name": "全屏广告-远程控制结束后的广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".application.Main",
          "matches": "@[vid=\"close\"][visibleToUser=true] - [vid=\"ll_remote_end\"]",
          "exampleUrls": "https://e.gkd.li/104ba188-b4cd-4922-b27e-f654085eb163",
          "snapshotUrls": "https://i.gkd.li/i/17782893"
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告-卡片广告",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.oray.sunlogin.application.Main",
          "matches": "[id=\"com.oray.sunlogin:id/fl_close_advertise\" || vid=\"iv_dislike\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/2cad526b-1691-45e9-826b-eb92299cb8ee",
          "snapshotUrls": [
            "https://i.gkd.li/i/13207785",
            "https://i.gkd.li/i/17159821"
          ],
          "fastQuery": true
        }
      ]
    }
  ]
});
