// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.autonavi.minimap",
  "name": "高德地图",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/983cc392-1b01-4172-bc1d-2df001baeb3d",
          "snapshotUrls": "https://i.gkd.li/i/16490985",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/983cc392-1b01-4172-bc1d-2df001baeb3d",
          "snapshotUrls": "https://i.gkd.li/i/16490985",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "order": -9,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "matches": [
            "[text=\"版本升级\" || vid=\"update_viewpager\"][visibleToUser=true]",
            "[text=\"取消\" || vid=\"iv_close\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13379094",
            "https://i.gkd.li/i/13379426",
            "https://i.gkd.li/i/21981032"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "更新弹窗-1",
          "matches": "@[id=\"com.autonavi.minimap:id/iv_close\"] + * > [text^=\"立即升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13379094",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "name": "更新弹窗-2",
          "matches": "@[text=\"取消\"] + * + [text=\"去下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/13379426",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-首页上方消息提醒",
      "activityIds": "com.autonavi.map.activity.NewMapActivity",
      "snapshotUrls": "https://i.gkd.li/i/12642830",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "RelativeLayout[desc=\"弹窗\"] > [vid=\"msgbox_popup_clear\"]",
          "snapshotUrls": "https://i.gkd.li/i/12642830",
          "exampleUrls": "https://e.gkd.li/a7f72c58-0b31-4b87-9839-567d4d74350a",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.autonavi.map.activity.NewMapActivity"
        },
        {
          "fastQuery": true,
          "matches": "@ImageView[clickable=true] - [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/17426322",
          "exampleUrls": "https://e.gkd.li/ca2dae5b-10d8-458e-9d83-fe04652ff074",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.autonavi.map.activity.NewMapActivity"
        },
        {
          "matches": "RelativeLayout[desc=\"弹窗\"] > [id=\"com.autonavi.minimap:id/msgbox_popup_clear\"]",
          "snapshotUrls": "https://i.gkd.li/i/12642830",
          "exampleUrls": "https://e.gkd.li/a7f72c58-0b31-4b87-9839-567d4d74350a",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.autonavi.map.activity.NewMapActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-首页签到卡片",
      "desc": "点击\"x\"",
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.autonavi.map.activity.NewMapActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12642842",
        "https://i.gkd.li/i/12642845",
        "https://i.gkd.li/i/12818770",
        "https://i.gkd.li/i/13764540"
      ],
      "rules": [
        {
          "matches": "ImageView[visibleToUser=true][width<90][height<90] < @ViewGroup -(2) ViewGroup > ViewGroup > View[text*=\"签到\"||text*=\"成长值\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.autonavi.map.activity.NewMapActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "matches": [
            "[vid=\"btn_qrscan\"][desc=\"扫一扫\"]",
            "ViewGroup[desc.length>0] < ViewGroup + @[desc=\"关闭\"][clickable=true][visibleToUser=true] <<n [vid=\"quickservice\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/071a07d2-c760-4f15-9359-f54bf51b6205",
          "snapshotUrls": "https://i.gkd.li/i/14715295",
          "excludeSnapshotUrls": "https://i.gkd.li/i/25660170"
        },
        {
          "fastQuery": true,
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "matches": "ViewGroup[desc=\"图片\"][childCount=2] > ViewGroup[clickable=true] > @ImageView[childCount=0] <<n [vid=\"tab_container_id\"]",
          "exampleUrls": "https://e.gkd.li/132266f7-b7b8-4cac-9549-bcbe4314c893",
          "snapshotUrls": "https://i.gkd.li/i/16960367"
        },
        {
          "fastQuery": true,
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "matches": "@ImageView[childCount=0] < ViewGroup[clickable=true] -2 * > View[text^=\"高德购票\" && text$=\"优惠\"] <<n [vid=\"mapInteractiveRelativeLayout\"]",
          "exampleUrls": "https://e.gkd.li/59408741-4847-4395-ace5-b1e14ee24cec",
          "snapshotUrls": "https://i.gkd.li/i/16960157"
        },
        {
          "fastQuery": true,
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "matches": "@[clickable=true] > [visibleToUser=true][text=\"关闭\"] <<n [vid=\"ajx_view_container\"]",
          "exampleUrls": "https://e.gkd.li/018aa83b-3f0a-46b4-b084-a5e7a397ca68",
          "snapshotUrls": "https://i.gkd.li/i/18627401"
        },
        {
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "matches": "ViewGroup > ViewGroup > [desc=\"关闭\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/071a07d2-c760-4f15-9359-f54bf51b6205",
          "snapshotUrls": "https://i.gkd.li/i/14715295"
        }
      ]
    },
    {
      "key": 6,
      "name": "全屏广告",
      "desc": "点击关闭",
      "rules": [
        {
          "name": "[欢迎]弹窗",
          "fastQuery": true,
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "matches": "ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView[clickable=true] + View[text!=null] <<n [vid=\"fragment_container\"]",
          "exampleUrls": "https://m.gkd.li/57941037/660ef360-eee8-4fb8-9764-7a1822ccb6e9",
          "snapshotUrls": [
            "https://i.gkd.li/i/14800704",
            "https://i.gkd.li/i/17079025"
          ]
        },
        {
          "name": "签到弹窗",
          "fastQuery": true,
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "matches": "[vid=\"main_map_msg_dialog_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/e059109b-f4bb-4ed6-81a8-6010b51ebfd5",
          "snapshotUrls": "https://i.gkd.li/i/14809993"
        },
        {
          "fastQuery": true,
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "matches": "@ViewGroup[clickable=true] > View[visibleToUser=true][text^=\"关闭\"] <<n [vid=\"mapInteractiveRelativeLayout\"]",
          "exampleUrls": "https://e.gkd.li/0a4e847f-b1b0-4667-982a-43f313305139",
          "snapshotUrls": "https://i.gkd.li/i/22287641"
        }
      ]
    },
    {
      "key": 8,
      "name": "权限提示-授权蓝牙",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "matches": "@ImageView[clickable=true] -2 [text=\"授权蓝牙\"]",
          "exampleUrls": "https://e.gkd.li/8aef9184-d2b6-4c49-b729-82e6e76decdc",
          "snapshotUrls": "https://i.gkd.li/i/17002003",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 9,
      "name": "全屏广告-加油页面优惠券弹窗",
      "enable": false,
      "activityIds": "com.autonavi.map.activity.NewMapActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12642857"
      ],
      "rules": [
        {
          "matches": "@ImageView < [desc=\"关闭\"][clickable=true] - ViewGroup > ViewGroup > ViewGroup > View[text=\"立即领取\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity"
        }
      ]
    },
    {
      "key": 10,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "name": "[欢迎]弹窗",
          "fastQuery": true,
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "matches": "ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView + View[text!=null] <<n [vid=\"fragment_container\"]",
          "exampleUrls": "https://m.gkd.li/57941037/660ef360-eee8-4fb8-9764-7a1822ccb6e9",
          "snapshotUrls": "https://i.gkd.li/i/14800704"
        }
      ]
    }
  ]
});
