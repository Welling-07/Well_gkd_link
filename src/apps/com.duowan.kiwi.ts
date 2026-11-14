// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.duowan.kiwi",
  "name": "虎牙直播",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "desc": "广告画面先出现,但节点最后才加载,故触发慢实属正常",
      "order": -10,
      "fastQuery": true,
      "forcedTime": 10000,
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30792623",
            "https://i.gkd.li/i/30792625"
          ],
          "fastQuery": true,
          "forcedTime": 10000,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[visibleToUser=true][text*=\"跳过\"][text.length<10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30793734",
            "https://i.gkd.li/i/30794399"
          ],
          "fastQuery": true,
          "forcedTime": 10000,
          "matchTime": 10000,
          "actionMaximum": 1,
          "actionMaximumKey": 0,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-直播间悬浮广告",
      "activityIds": ".liveroom.ChannelPage",
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"ad_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12901045",
            "https://i.gkd.li/i/12901044"
          ],
          "activityIds": ".liveroom.ChannelPage"
        },
        {
          "fastQuery": true,
          "matches": "[vid=\"game_header_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13395604",
            "https://i.gkd.li/i/13395606"
          ],
          "activityIds": ".liveroom.ChannelPage"
        },
        {
          "fastQuery": true,
          "matches": "[vid=\"popup_banner\"] >2 [vid=\"ui_count_down\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13417245"
          ],
          "activityIds": ".liveroom.ChannelPage"
        },
        {
          "fastQuery": true,
          "matches": "@ViewGroup[clickable=true][visibleToUser=true] <2 ViewGroup < FrameLayout <2 FrameLayout < [vid=\"miniapp_content_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13401266",
          "activityIds": ".liveroom.ChannelPage"
        },
        {
          "fastQuery": true,
          "matches": "[id=\"com.duowan.kiwi:id/ad_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12901045",
            "https://i.gkd.li/i/12901044"
          ],
          "activityIds": "com.duowan.kiwi.liveroom.ChannelPage"
        },
        {
          "fastQuery": true,
          "matches": "[id=\"com.duowan.kiwi:id/game_header_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13395604",
            "https://i.gkd.li/i/13395606"
          ],
          "activityIds": "com.duowan.kiwi.liveroom.ChannelPage"
        },
        {
          "matches": "[id=\"com.duowan.kiwi:id/popup_banner\"] >2 [id=\"com.duowan.kiwi:id/ui_count_down\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13417245"
          ],
          "activityIds": "com.duowan.kiwi.liveroom.ChannelPage"
        },
        {
          "matches": "[id=\"com.duowan.kiwi:id/miniapp_content_container\"] FrameLayout > ViewGroup[childCount=2] > @ViewGroup[clickable=true] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13401266",
          "activityIds": "com.duowan.kiwi.liveroom.ChannelPage"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "order": -9,
      "activityIds": "com.duowan.kiwi.homepage.Homepage",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".homepage.Homepage",
          "matches": "@ImageView[vid=\"upgrade_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440833",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView[id=\"com.duowan.kiwi:id/upgrade_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440833",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.duowan.kiwi.homepage.Homepage"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".homepage.Homepage",
          "matches": "[vid=\"animation_view\"] + [vid=\"v_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13625453",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.duowan.kiwi.homepage.Homepage",
          "matches": "[id=\"com.duowan.kiwi:id/animation_view\"] + [id=\"com.duowan.kiwi:id/v_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13625453",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "其他-root提示",
      "desc": "点击确认",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".homepage.Homepage",
          "matches": "[text^=\"您的设备已经被ROOT\"] + LinearLayout [text=\"确认\"]",
          "snapshotUrls": "https://i.gkd.li/i/13536744",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "snapshotUrls": [
        "https://i.gkd.li/i/12908790",
        "https://i.gkd.li/i/15025239"
      ],
      "rules": [
        {
          "matches": "[text*=\"青少年模式\"] + * > [text=\"我知道了\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1
        }
      ]
    }
  ]
});
