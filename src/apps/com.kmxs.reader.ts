// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.kmxs.reader",
  "name": "七猫免费小说",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-阅读页面广告",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "org.geometerplus.android.fbreader.FBReader",
          "matches": "[vid=\"ad_direct_close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/17355000",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "activityIds": "org.geometerplus.android.fbreader.FBReader",
          "matches": "[text=\"直接关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/17354753",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-阅读结束后显示的广告",
      "fastQuery": true,
      "activityIds": "org.geometerplus.android.fbreader.FBReader",
      "rules": [
        {
          "matches": "[vid=\"ad_direct_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12640303",
            "https://i.gkd.li/i/13362269",
            "https://i.gkd.li/i/13362272"
          ],
          "fastQuery": true,
          "activityIds": "org.geometerplus.android.fbreader.FBReader"
        },
        {
          "matches": [
            "[text$=\"广告\"]",
            "[id=\"com.kmxs.reader:id/ad_direct_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12640303",
            "https://i.gkd.li/i/13362269",
            "https://i.gkd.li/i/13362272"
          ],
          "fastQuery": true,
          "activityIds": "org.geometerplus.android.fbreader.FBReader"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-签到弹窗",
      "activityIds": "org.geometerplus.android.fbreader.FBReader",
      "snapshotUrls": [
        "https://i.gkd.li/i/12640320"
      ],
      "rules": [
        {
          "matches": "@TextView[id=null] < View +(2) TextView[text^=\"已连签\"&&text*=\"天\"]",
          "activityIds": "org.geometerplus.android.fbreader.FBReader"
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-右侧悬浮红包",
      "activityIds": ".home.ui.HomeActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12640287"
      ],
      "rules": [
        {
          "matches": "[vid=\"red_packet_img\"] + [vid=\"close_red_packet\"]",
          "action": "clickCenter",
          "activityIds": ".home.ui.HomeActivity"
        },
        {
          "matches": "[id=\"com.kmxs.reader:id/red_packet_img\"] + [id=\"com.kmxs.reader:id/close_red_packet\"]",
          "action": "clickCenter",
          "activityIds": "com.kmxs.reader.home.ui.HomeActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-字节视频广告",
      "desc": "点击关闭",
      "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
      "actionDelay": 300,
      "rules": [
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13459157",
            "https://i.gkd.li/i/13459172",
            "https://i.gkd.li/i/13459174"
          ],
          "actionDelay": 300
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "matches": "[id=\"com.byted.pangle:id/tt_reward_full_count_down_after_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13459182",
          "actionDelay": 300
        },
        {
          "fastQuery": true,
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 RelativeLayout[childCount=4] < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13472957",
          "actionDelay": 300
        },
        {
          "fastQuery": true,
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "matches": "@ImageView[visibleToUser=true][childCount=0] < FrameLayout[childCount=1] < FrameLayout[childCount=1] + FrameLayout >3 [text^=\"摇动或点击\"]",
          "snapshotUrls": "https://i.gkd.li/i/13472955",
          "actionDelay": 300
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".home.ui.HomeActivity",
          "matches": "[vid=\"bookshelf_book_item_direct_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13489942"
        },
        {
          "fastQuery": true,
          "activityIds": "org.geometerplus.android.fbreader.FBReader",
          "matches": "[vid=\"iv_ad_direct_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/9217fd14-1ca6-49b8-8f8b-bff7a98745dd",
          "snapshotUrls": "https://i.gkd.li/i/17574170"
        }
      ]
    },
    {
      "key": 6,
      "name": "全屏广告-今日专属推荐弹窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13941276",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.kmxs.reader:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13941276",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 7,
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12641338",
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/tv_update_cancel\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 8,
      "name": "局部广告-书架顶部广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.kmxs.reader.home.ui.HomeActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/13489942"
      ],
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/bookshelf_book_item_direct_close\"]",
          "fastQuery": true,
          "activityIds": "com.kmxs.reader.home.ui.HomeActivity"
        }
      ]
    },
    {
      "key": 9,
      "name": "全屏广告-百度",
      "desc": "此规则有概率误触或失效，请谨慎选择开启。",
      "enable": false,
      "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
      "rules": [
        {
          "name": "点击\"x\"",
          "matches": "RelativeLayout > RelativeLayout + ImageView + ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13472957",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity"
        }
      ]
    },
    {
      "key": 10,
      "name": "全屏广告-腾讯",
      "desc": "此规则有概率误触或失效，请谨慎选择开启。",
      "enable": false,
      "activityIds": "com.qq.e.ads.PortraitADActivity",
      "rules": [
        {
          "name": "点击\"x\"",
          "matches": "FrameLayout[childCount=10] > FrameLayout[index=3] > FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13472955",
          "activityIds": "com.qq.e.ads.PortraitADActivity"
        }
      ]
    },
    {
      "key": 11,
      "name": "未分类-阅读页面底部广告",
      "enable": false,
      "activityIds": "org.geometerplus.android.fbreader.FBReader",
      "snapshotUrls": [
        "https://i.gkd.li/i/12640296"
      ],
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/ll_ad_native_banner\"] > [id=\"com.kmxs.reader:id/iv_ad_direct_close\"]",
          "activityIds": "org.geometerplus.android.fbreader.FBReader"
        }
      ]
    },
    {
      "key": 12,
      "name": "未分类-【字节】视频广告",
      "desc": "此规则有概率误触或失效，请谨慎选择开启。",
      "enable": false,
      "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
      "rules": [
        {
          "name": "点击跳过",
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13459157",
            "https://i.gkd.li/i/13459172",
            "https://i.gkd.li/i/13459174"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
        },
        {
          "name": "点击【x】",
          "fastQuery": true,
          "matches": "[id=\"com.byted.pangle:id/tt_reward_full_count_down_after_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13459182",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
        }
      ]
    }
  ]
});
