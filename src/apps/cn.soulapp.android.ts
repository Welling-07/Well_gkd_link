// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.soulapp.android",
  "name": "Soul",
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
          "fastQuery": true,
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/20139575",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/20139739",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "fastQuery": true
        },
        {
          "action": "clickCenter",
          "matches": "[id=\"cn.soulapp.android:id/c_ad_skip_view_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12833280",
            "https://i.gkd.li/i/12850094"
          ],
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
      "name": "局部广告-广场页卡片广告",
      "fastQuery": true,
      "activityIds": "cn.soulapp.android.component.startup.main.MainActivity",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".component.startup.main.MainActivity",
          "matches": "[vid=\"sl_ad_root\"] >n [vid=\"fl_tag_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/12838000"
        },
        {
          "matches": "[id=\"cn.soulapp.android:id/sl_ad_root\"] >n [id=\"cn.soulapp.android:id/fl_tag_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/12838000",
          "fastQuery": true,
          "activityIds": "cn.soulapp.android.component.startup.main.MainActivity"
        },
        {
          "matches": "[id=\"cn.soulapp.android:id/sl_ad_root\"] >n [id=\"cn.soulapp.android:id/fl_tag_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/12838000",
          "fastQuery": true,
          "activityIds": [
            "cn.soulapp.android.component.startup.main.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "评价提示-app评分",
      "fastQuery": true,
      "activityIds": [
        "cn.soulapp.android.component.chat.ConversationActivity"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".component.chat.ConversationActivity",
            ".component.startup.main.MainActivity"
          ],
          "matches": [
            "[vid=\"score_message\"][visibleToUser=true]",
            "[vid=\"cancel\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/4f67640e-836c-4b17-9870-5bb8b8547462",
          "snapshotUrls": [
            "https://i.gkd.li/i/13425057",
            "https://i.gkd.li/i/18423888"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"cn.soulapp.android:id/score_message\"] +3 [id=\"cn.soulapp.android:id/cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425057",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": [
            "cn.soulapp.android.component.chat.ConversationActivity"
          ]
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
      "actionMaximumKey": 0,
      "activityIds": [
        ".component.startup.main.MainActivity",
        ".component.chat.ConversationActivity"
      ],
      "rules": [
        {
          "matches": "@[vid=\"img_close\"] -2 RelativeLayout > [text=\"升级到最新版本\"]",
          "exampleUrls": "https://e.gkd.li/b8aedb39-1ef1-4b41-80da-0948614d9c7f",
          "snapshotUrls": [
            "https://i.gkd.li/i/13693361",
            "https://i.gkd.li/i/18096443"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".component.startup.main.MainActivity",
            ".component.chat.ConversationActivity"
          ]
        },
        {
          "matches": "[text=\"升级体验\"] - [text=\"关闭\"]",
          "exampleUrls": "https://e.gkd.li/8980a9a6-5ea3-4d61-afdb-e22ffbf1cbde",
          "snapshotUrls": "https://i.gkd.li/i/15034131",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "activityIds": [
            ".component.startup.main.MainActivity",
            ".component.chat.ConversationActivity"
          ]
        },
        {
          "matches": "@[id=\"cn.soulapp.android:id/img_close\"] -2 RelativeLayout > [text=\"升级到最新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/13693361",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "activityIds": [
            ".component.startup.main.MainActivity",
            ".component.chat.ConversationActivity"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/14332334",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".component.startup.main.MainActivity",
          "matches": "[text=\"消息通知显示消息内容\"] +3 [vid=\"img_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14332334",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"消息通知显示消息内容\"] +3 [vid=\"img_close\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-帖子详情页卡片广告",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".component.square.post.base.detail.PostDetailActivity",
          "matches": "@ImageView[visibleToUser=true] <2 * < [vid=\"tvAdClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/14332294",
          "fastQuery": true
        },
        {
          "activityIds": ".component.square.post.base.detail.PostDetailActivity",
          "matches": "@[clickable=true][visibleToUser=true] >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14359616",
          "fastQuery": true
        },
        {
          "activityIds": "cn.soulapp.android.component.square.post.base.detail.PostDetailActivity",
          "matches": "@ImageView[visibleToUser=true] <2 * < [vid=\"tvAdClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/14332294",
          "fastQuery": true
        },
        {
          "activityIds": "cn.soulapp.android.component.square.post.base.detail.PostDetailActivity",
          "matches": "@[clickable=true][visibleToUser=true] >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14359616",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 6,
      "name": "全屏广告-送礼开聊会话",
      "desc": "自动点击先不聊了",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": ".component.chat.ConversationActivity",
          "matches": "[vid=\"cl_gift_normal\"] > TextView[vid=\"tv_btn_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/19448971",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 7,
      "name": "全屏广告-推荐页领金币",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": ".component.startup.main.MainActivity",
          "matches": "[vid=\"tslAdLayout\"] [vid=\"tv_cancel\"]",
          "exampleUrls": "https://e.gkd.li/f721ac73-f66c-45ca-8660-0c3e57845fd9",
          "snapshotUrls": "https://i.gkd.li/i/21900487",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 8,
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "TextView[text=\"查看青少年模式\"] + TextView[text$=\"知道了\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12834093",
            "https://i.gkd.li/i/16445117"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 9,
      "name": "未分类-版本更新",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "cn.soulapp.android.component.startup.main.MainActivity"
      ],
      "rules": [
        {
          "matches": "@[id=\"cn.soulapp.android:id/img_close\"] -2 RelativeLayout > [text=\"升级到最新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/13693361",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "cn.soulapp.android.component.startup.main.MainActivity"
          ]
        }
      ]
    }
  ]
});
