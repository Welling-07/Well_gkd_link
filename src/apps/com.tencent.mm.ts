// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.mm",
  "name": "微信",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-朋友圈广告",
      "desc": "警告⚠️：该规则有可能会误触，请谨慎开启",
      "activityIds": [
        ".plugin.sns.ui.SnsTimeLineUI",
        ".plugin.sns.ui.improve.ImproveSnsTimelineUI",
        ".plugin.profile.ui.ContactInfoUI"
      ],
      "exampleUrls": "https://github.com/gkd-kit/subscription/assets/38517192/c9ae4bba-a748-4755-b5e4-c7ad3d489a79",
      "rules": [
        {
          "name": "①点击[广告]",
          "fastQuery": true,
          "matches": "@LinearLayout[clickable=true] > [text=\"广告\" || text=\"廣告\" || text=\"Sponsored\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13000395",
            "https://i.gkd.li/i/12905837",
            "https://i.gkd.li/i/13791200",
            "https://i.gkd.li/i/16568338"
          ],
          "activityIds": [
            ".plugin.sns.ui.SnsTimeLineUI",
            ".plugin.sns.ui.improve.ImproveSnsTimelineUI",
            ".plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "name": "①坐标点击[广告]",
          "fastQuery": true,
          "actionDelay": 300,
          "position": {
            "left": "width * 0.9223",
            "top": "height * 0.5"
          },
          "anyMatches": [
            "@LinearLayout >2 [text=\"广告\"][visibleToUser=false]",
            "[index=parent.childCount.minus(1)] >5 [getChild(0).desc$=\"的头像\"] >2 LinearLayout[childCount=2][getChild(0).getChild(0).text!=null][getChild(1).visibleToUser=false]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14783802",
            "https://i.gkd.li/i/15531539",
            "https://i.gkd.li/i/19665911"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/19717709",
            "https://i.gkd.li/i/27969204"
          ],
          "activityIds": [
            ".plugin.sns.ui.SnsTimeLineUI",
            ".plugin.sns.ui.improve.ImproveSnsTimelineUI",
            ".plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "name": "①单击[广告]",
          "matches": "[getChild(0).desc$=\"的头像\"] >2 [childCount=2] > LinearLayout[text=null][clickable=true][childCount=0][index=1]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14647413",
            "https://i.gkd.li/i/19633571"
          ],
          "activityIds": [
            ".plugin.sns.ui.SnsTimeLineUI",
            ".plugin.sns.ui.improve.ImproveSnsTimelineUI",
            ".plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "preKeys": [
            0,
            1,
            2
          ],
          "name": "②点击[关闭]",
          "fastQuery": true,
          "anyMatches": [
            "[text^=\"关闭\" || text*=\"Close\" || text=\"關閉此廣告\"][clickable=true][visibleToUser=true]",
            "@LinearLayout[clickable=true] > [text=\"关闭该广告\" || text*=\"Close\"][visibleToUser=true]",
            "@LinearLayout[index=1][clickable=true] <2 * < * - [text*=\"广告\"]",
            "@[text=\"关闭该广告\"] -2 [text^=\"对这条广告不感兴趣\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13926578",
            "https://i.gkd.li/i/15531274",
            "https://i.gkd.li/i/14207480",
            "https://i.gkd.li/i/15137016",
            "https://i.gkd.li/i/13791202",
            "https://i.gkd.li/i/14783820",
            "https://i.gkd.li/i/15284966",
            "https://i.gkd.li/i/14647839",
            "https://i.gkd.li/i/19666176",
            "https://i.gkd.li/i/19633486"
          ],
          "activityIds": [
            ".plugin.sns.ui.SnsTimeLineUI",
            ".plugin.sns.ui.improve.ImproveSnsTimelineUI",
            ".plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "preKeys": 3,
          "name": "③点击[关闭]",
          "matches": "[text=\"直接关闭\" || text=\"Close\" || text=\"关闭广告\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12663984",
            "https://i.gkd.li/i/12905846",
            "https://i.gkd.li/i/14647940",
            "https://i.gkd.li/i/14783534"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/28927197",
          "activityIds": [
            ".plugin.sns.ui.SnsTimeLineUI",
            ".plugin.sns.ui.improve.ImproveSnsTimelineUI",
            ".plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "preKeys": 4,
          "name": "④点击[确认]",
          "fastQuery": true,
          "matches": "@[text=\"确认\"][visibleToUser=true] -2 [text=\"不感兴趣原因\"]",
          "snapshotUrls": "https://i.gkd.li/i/14647940",
          "activityIds": [
            ".plugin.sns.ui.SnsTimeLineUI",
            ".plugin.sns.ui.improve.ImproveSnsTimelineUI",
            ".plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "preKeys": 1,
          "name": "⑤误触后-按[返回键]",
          "action": "back",
          "fastQuery": true,
          "matchRoot": true,
          "actionDelay": 50,
          "excludeActivityIds": [
            ".plugin.sns.ui.SnsTimeLineUI",
            ".plugin.sns.ui.improve.ImproveSnsTimelineUI",
            ".plugin.profile.ui.ContactInfoUI"
          ],
          "activityIds": [],
          "matches": "[parent=null]"
        },
        {
          "preKeys": 1,
          "name": "⑤误触右上角-点击[取消]",
          "fastQuery": true,
          "matches": "@LinearLayout[clickable=true] > [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/27366025",
          "activityIds": [
            ".plugin.sns.ui.SnsTimeLineUI",
            ".plugin.sns.ui.improve.ImproveSnsTimelineUI",
            ".plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "fastQuery": true,
          "matches": "@LinearLayout[clickable=true] > [text=\"广告\" || text=\"廣告\" || text=\"Sponsored\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/d1941064-d4e9-4bb2-99ab-ba30e0ce8126",
          "snapshotUrls": [
            "https://i.gkd.li/i/13000395",
            "https://i.gkd.li/i/12905837",
            "https://i.gkd.li/i/13791200",
            "https://i.gkd.li/i/16568338"
          ],
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI",
            "com.tencent.mm.plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "matches": "RelativeLayout >5 LinearLayout[childCount=2] > TextView[text!=null] + LinearLayout[visibleToUser=true][clickable=true][childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/14647413",
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI",
            "com.tencent.mm.plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.9223",
            "top": "width * 0.0349"
          },
          "matches": "@LinearLayout >2 [text=\"广告\"][visibleToUser=false]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14783802",
            "https://i.gkd.li/i/15531539"
          ],
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI",
            "com.tencent.mm.plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "preKeys": [
            8,
            9,
            10
          ],
          "name": "点击[关闭]",
          "fastQuery": true,
          "matches": "[text^=\"关闭\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907642",
            "https://i.gkd.li/i/13926578",
            "https://i.gkd.li/i/15531274"
          ],
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI",
            "com.tencent.mm.plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "preKeys": [
            8,
            9
          ],
          "name": "点击[Close]",
          "fastQuery": true,
          "matches": "[text*=\"Close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14207480",
            "https://i.gkd.li/i/15137016"
          ],
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI",
            "com.tencent.mm.plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "preKeys": [
            8,
            9
          ],
          "name": "点击[關閉此廣告]",
          "fastQuery": true,
          "matches": "[text=\"關閉此廣告\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13791202",
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI",
            "com.tencent.mm.plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "preKeys": [
            8,
            9,
            10
          ],
          "name": "点击[关闭该广告]",
          "fastQuery": true,
          "matches": "@LinearLayout[index=1][clickable=true] <2 * < * - [text*=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642584",
            "https://i.gkd.li/i/14647839",
            "https://i.gkd.li/i/14783820"
          ],
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI",
            "com.tencent.mm.plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "preKeys": [
            8,
            9
          ],
          "name": "点击[Close the ad]",
          "fastQuery": true,
          "matches": "@LinearLayout[clickable=true] > [text*=\"Close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12905838",
            "https://i.gkd.li/i/15284966"
          ],
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI",
            "com.tencent.mm.plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "preKeys": 14,
          "name": "点击[关闭] (2)",
          "matches": "[text*=\"关闭\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12663984",
            "https://i.gkd.li/i/14647940",
            "https://i.gkd.li/i/14783534"
          ],
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI",
            "com.tencent.mm.plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "preKeys": 15,
          "name": "点击\"Close\"",
          "matches": "[text=\"Close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12905846",
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI",
            "com.tencent.mm.plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "preKeys": 16,
          "name": "点击[确认]",
          "matches": "[text=\"确认\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14647940",
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI",
            "com.tencent.mm.plugin.profile.ui.ContactInfoUI"
          ]
        },
        {
          "name": "点击广告卡片右上角",
          "matches": "RelativeLayout >5 LinearLayout[childCount=2] > TextView[text!=null] + LinearLayout[visibleToUser=true][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13000395",
            "https://i.gkd.li/i/12905837",
            "https://i.gkd.li/i/13791200",
            "https://i.gkd.li/i/14647413"
          ],
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI"
          ]
        },
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.9223",
            "top": "width * 0.0349"
          },
          "excludeMatches": "RelativeLayout >5 LinearLayout[childCount=2] > TextView[text!=null] + LinearLayout[visibleToUser=true][clickable=true]",
          "matches": "@LinearLayout >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14783802",
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI"
          ]
        },
        {
          "preKeys": 19,
          "name": "点击[关闭] (3)",
          "fastQuery": true,
          "matches": "[text^=\"关闭\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907642",
            "https://i.gkd.li/i/13926578"
          ],
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI"
          ]
        },
        {
          "preKeys": 19,
          "name": "点击[Close] (2)",
          "fastQuery": true,
          "matches": "[text*=\"Close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14207480",
            "https://i.gkd.li/i/15137016"
          ],
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI"
          ]
        },
        {
          "preKeys": 19,
          "name": "点击[關閉此廣告] (2)",
          "fastQuery": true,
          "matches": "[text=\"關閉此廣告\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13791202",
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI"
          ]
        },
        {
          "preKeys": [
            19,
            20
          ],
          "name": "点击[关闭该广告] (2)",
          "fastQuery": true,
          "matches": "@LinearLayout[index=1][clickable=true] <2 * < * - [text*=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642584",
            "https://i.gkd.li/i/14647839",
            "https://i.gkd.li/i/14783820"
          ],
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI"
          ]
        },
        {
          "preKeys": 19,
          "name": "点击[Close the ad] (2)",
          "fastQuery": true,
          "matches": "@LinearLayout[clickable=true] > [text*=\"Close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12905838",
            "https://i.gkd.li/i/15284966"
          ],
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI"
          ]
        },
        {
          "preKeys": 24,
          "name": "点击[关闭] (4)",
          "matches": "[text*=\"关闭\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12663984",
            "https://i.gkd.li/i/14647940",
            "https://i.gkd.li/i/14783534"
          ],
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI"
          ]
        },
        {
          "preKeys": 25,
          "name": "点击\"Close\" (2)",
          "matches": "[text=\"Close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12905846",
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI"
          ]
        },
        {
          "preKeys": 26,
          "name": "点击[确认] (2)",
          "matches": "[text=\"确认\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14647940",
          "activityIds": [
            "com.tencent.mm.plugin.sns.ui.SnsTimeLineUI",
            "com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI"
          ]
        }
      ]
    },
    {
      "key": 8,
      "name": "开屏广告-微信小程序",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "activityIds": [
        ".plugin.appbrand.ui.AppBrandUI",
        ".plugin.appbrand.launching.AppBrandLaunchProxyUI",
        ".plugin.appbrand.ui.AppBrandPluginUI"
      ],
      "forcedTime": 10000,
      "priorityTime": 10000,
      "rules": [
        {
          "actionDelay": 800,
          "matches": [
            "[text=\"广告\" || text=\"廣告\"][visibleToUser=true]",
            "[text=\"跳过\" || text=\"跳過\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12785183",
            "https://i.gkd.li/i/13306883",
            "https://i.gkd.li/i/13407275",
            "https://i.gkd.li/i/15108441",
            "https://i.gkd.li/i/32969391"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "forcedTime": 10000,
          "priorityTime": 10000,
          "activityIds": [
            ".plugin.appbrand.ui.AppBrandUI",
            ".plugin.appbrand.launching.AppBrandLaunchProxyUI",
            ".plugin.appbrand.ui.AppBrandPluginUI"
          ]
        },
        {
          "matchRoot": true,
          "actionCd": 500,
          "matches": "@TextView[text*=\"跳过\"][text.length<10][height<150] <<(25-n) FrameLayout[childCount=2] <(1,2) * < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/26677309",
            "https://i.gkd.li/i/26747393"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "forcedTime": 10000,
          "priorityTime": 10000,
          "activityIds": [
            ".plugin.appbrand.ui.AppBrandUI",
            ".plugin.appbrand.launching.AppBrandLaunchProxyUI",
            ".plugin.appbrand.ui.AppBrandPluginUI"
          ]
        },
        {
          "actionDelay": 800,
          "matches": [
            "[text=\"广告\"][visibleToUser=true]",
            "[text=\"跳过\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12785183",
            "https://i.gkd.li/i/13306883",
            "https://i.gkd.li/i/13407275",
            "https://i.gkd.li/i/15108441"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "forcedTime": 10000,
          "priorityTime": 10000,
          "activityIds": [
            "com.tencent.mm.plugin.appbrand.ui.AppBrandUI",
            "com.tencent.mm.plugin.appbrand.launching.AppBrandLaunchProxyUI"
          ]
        }
      ]
    },
    {
      "key": 10,
      "name": "青少年模式",
      "order": -8,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchTime": 20000,
      "activityIds": [
        ".plugin.finder.",
        ".ui.LauncherUI"
      ],
      "rules": [
        {
          "matches": "@[text=\"我知道了\"][index=parent.childCount.minus(1)] <n LinearLayout > [text^=\"为呵护未成年人健康成长\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13538145",
            "https://i.gkd.li/i/13575195",
            "https://i.gkd.li/i/14735456",
            "https://i.gkd.li/i/14896723",
            "https://i.gkd.li/i/18135103",
            "https://i.gkd.li/i/19683937"
          ],
          "fastQuery": true,
          "matchTime": 20000,
          "actionMaximum": 1,
          "activityIds": [
            ".plugin.finder.",
            ".ui.LauncherUI"
          ],
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"不再提醒\"][clickable=true] <2 [index=parent.childCount.minus(1)] -n [text^=\"为呵护未成年人健康成长\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24796791",
          "fastQuery": true,
          "matchTime": 20000,
          "actionMaximum": 1,
          "activityIds": [
            ".plugin.finder.",
            ".ui.LauncherUI"
          ],
          "resetMatch": "app"
        },
        {
          "activityIds": [
            "com.tencent.mm.plugin.finder.ui.",
            "com.tencent.mm.ui.LauncherUI"
          ],
          "matches": [
            "[text*=\"青少年模式\"]",
            "[text=\"我知道了\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13538145",
            "https://i.gkd.li/i/13575195",
            "https://i.gkd.li/i/14735456",
            "https://i.gkd.li/i/14896723"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 20000
        }
      ]
    },
    {
      "key": 14,
      "name": "局部广告-订阅号消息-推荐文章",
      "desc": "点击关闭",
      "activityIds": "com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity",
      "snapshotUrls": "https://i.gkd.li/i/14392392",
      "rules": [
        {
          "activityIds": ".plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity",
          "matches": "View[childCount=2] > View[desc$=\"推​荐​\" || desc$=\"推​薦​\"][childCount=3] > ImageView[index=2][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14392392"
        },
        {
          "matches": "View[childCount=2] > View[desc$=\"推​荐​\"][childCount=3] > ImageView[index=2][clickable=true][visibleToUser=true]",
          "activityIds": "com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        }
      ]
    },
    {
      "key": 17,
      "name": "分段广告-订阅号消息-视频推荐",
      "desc": "点击[X]-点击[不喜欢此类视频]-点击[确定]",
      "activityIds": ".plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity",
      "rules": [
        {
          "name": "点击[X]",
          "matches": "[desc=\"订阅号消息\"] +3 View >2 [visibleToUser=true] - View >3 ImageView[index=2][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/b777c0b1-f8ed-4712-afd6-2e1a72243475",
          "snapshotUrls": "https://i.gkd.li/i/14436176",
          "activityIds": ".plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        },
        {
          "preKeys": 0,
          "name": "点击[不喜欢此类视频]",
          "matches": "[desc=\"不喜欢此类视频\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/39e8b378-9b55-4838-92af-b28f04402ca4",
          "snapshotUrls": "https://i.gkd.li/i/14444654",
          "activityIds": ".plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        },
        {
          "preKeys": 1,
          "name": "点击[确定]",
          "matches": "[desc=\"确定\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/590eb619-9987-4edf-98a8-17146ffeda10",
          "snapshotUrls": "https://i.gkd.li/i/14436190",
          "activityIds": ".plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        },
        {
          "name": "点击[X] (2)",
          "matches": "[desc=\"订阅号消息\"] +3 View >2 [visibleToUser=true] - View >3 ImageView[index=2][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/b777c0b1-f8ed-4712-afd6-2e1a72243475",
          "snapshotUrls": "https://i.gkd.li/i/14436176",
          "activityIds": "com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        },
        {
          "preKeys": 3,
          "name": "点击[不喜欢此类视频] (2)",
          "matches": "[desc=\"不喜欢此类视频\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/39e8b378-9b55-4838-92af-b28f04402ca4",
          "snapshotUrls": "https://i.gkd.li/i/14444654",
          "activityIds": "com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        },
        {
          "preKeys": 4,
          "name": "点击[确定] (2)",
          "matches": "[desc=\"确定\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/590eb619-9987-4edf-98a8-17146ffeda10",
          "snapshotUrls": "https://i.gkd.li/i/14436190",
          "activityIds": "com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        }
      ]
    },
    {
      "key": 19,
      "name": "全屏广告-文档页面-腾讯文档APP弹窗",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".plugin.webview.ui.tools.MMWebViewUI",
          "matches": "@TextView[clickable=true] + * > [visibleToUser=true][text^=\"使用 APP\"] <<n [id=\"android:id/content\"]",
          "exampleUrls": "https://m.gkd.li/57941037/2228f99e-e0a1-4915-864f-d60e3d8580a6",
          "snapshotUrls": "https://i.gkd.li/i/14533286"
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI",
          "matches": "@TextView[clickable=true] + * > [visibleToUser=true][text^=\"使用 APP\"] <<n [id=\"android:id/content\"]",
          "exampleUrls": "https://m.gkd.li/57941037/2228f99e-e0a1-4915-864f-d60e3d8580a6",
          "snapshotUrls": "https://i.gkd.li/i/14533286"
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI",
          "matches": "@TextView[clickable=true] + * > [text^=\"使用 APP\"] <<n [id=\"android:id/content\"]",
          "exampleUrls": "https://m.gkd.li/57941037/2228f99e-e0a1-4915-864f-d60e3d8580a6",
          "snapshotUrls": "https://i.gkd.li/i/14533286"
        }
      ]
    },
    {
      "key": 20,
      "name": "分段广告-订阅号消息-推荐阅读",
      "desc": "点击关闭",
      "activityIds": ".plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity",
      "rules": [
        {
          "matches": "View > Button > View[desc$=\"推​荐​\"] > ImageView[index=1][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/101449500/5b815528-1ca2-4016-930e-a3cfb4e5e7ea",
          "snapshotUrls": "https://i.gkd.li/i/14548701",
          "activityIds": ".plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        },
        {
          "preKeys": 0,
          "matches": "[desc=\"不看此类内容\"]",
          "snapshotUrls": "https://i.gkd.li/i/14549566",
          "activityIds": ".plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        },
        {
          "preKeys": 1,
          "matches": "[desc=\"确定\"]",
          "snapshotUrls": "https://i.gkd.li/i/14549567",
          "activityIds": ".plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        },
        {
          "matches": "View > Button > View[desc$=\"推​荐​\"] > ImageView[index=1][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/101449500/5b815528-1ca2-4016-930e-a3cfb4e5e7ea",
          "snapshotUrls": "https://i.gkd.li/i/14548701",
          "activityIds": "com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        },
        {
          "preKeys": 3,
          "matches": "[desc=\"不看此类内容\"]",
          "snapshotUrls": "https://i.gkd.li/i/14549566",
          "activityIds": "com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        },
        {
          "preKeys": 4,
          "matches": "[desc=\"确定\"]",
          "snapshotUrls": "https://i.gkd.li/i/14549567",
          "activityIds": "com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        }
      ]
    },
    {
      "key": 21,
      "name": "权限提示-权限申请弹窗",
      "desc": "点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".pluginsdk.permission.PermissionActivity",
          "matches": [
            "[text=\"权限申请\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/43632b72-d389-4fe7-9708-dac78e900679",
          "snapshotUrls": "https://i.gkd.li/i/14645385",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.mm.pluginsdk.permission.PermissionActivity",
          "matches": [
            "[text=\"权限申请\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/43632b72-d389-4fe7-9708-dac78e900679",
          "snapshotUrls": "https://i.gkd.li/i/14645385",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 23,
      "name": "分段广告-公众号文章内广告",
      "desc": "注意⚠️：该规则有概率误触，请谨慎开启",
      "activityIds": [
        ".plugin.brandservice.ui.timeline.preload.ui.TmplWebView",
        ".plugin.webview.ui.tools.fts.MMSosWebViewUI",
        ".plugin.webview.ui.tools.MMWebViewUI"
      ],
      "rules": [
        {
          "excludeMatches": [
            "[text=\"不感兴趣\" || text=\"与我无关\" || text=\"感谢你的反馈\"][visibleToUser=true]"
          ],
          "matches": "@View[childCount<5][bottom<2000] > [text^=\"广告\"][text.length<4][visibleToUser=true]",
          "exampleUrls": [
            "https://e.gkd.li/e73bb653-cc79-455c-958b-38aff6687c37",
            "https://e.gkd.li/5915f80b-66b9-4441-9d36-3caa3fe1be58"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12642232",
            "https://i.gkd.li/i/13199281",
            "https://i.gkd.li/i/14006180",
            "https://i.gkd.li/i/17093010",
            "https://i.gkd.li/i/16796663",
            "https://i.gkd.li/i/16796725",
            "https://i.gkd.li/i/16798663",
            "https://i.gkd.li/i/15198455",
            "https://i.gkd.li/i/17276697"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15198464"
          ],
          "activityIds": [
            ".plugin.brandservice.ui.timeline.preload.ui.TmplWebView",
            ".plugin.webview.ui.tools.fts.MMSosWebViewUI",
            ".plugin.webview.ui.tools.MMWebViewUI"
          ]
        },
        {
          "preKeys": 0,
          "matches": "[text=\"关闭此广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16796729",
            "https://i.gkd.li/i/17113565"
          ],
          "activityIds": [
            ".plugin.brandservice.ui.timeline.preload.ui.TmplWebView",
            ".plugin.webview.ui.tools.fts.MMSosWebViewUI",
            ".plugin.webview.ui.tools.MMWebViewUI"
          ]
        },
        {
          "preKeys": 0,
          "excludeMatches": [
            "[text=\"感谢你的反馈\"][visibleToUser=true]",
            "[text=\"关闭此广告\"][visibleToUser=true]"
          ],
          "matches": "[text=\"不感兴趣\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16796666",
            "https://i.gkd.li/i/16798661",
            "https://i.gkd.li/i/15198459"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15061424",
            "https://i.gkd.li/i/16796729"
          ],
          "activityIds": [
            ".plugin.brandservice.ui.timeline.preload.ui.TmplWebView",
            ".plugin.webview.ui.tools.fts.MMSosWebViewUI",
            ".plugin.webview.ui.tools.MMWebViewUI"
          ]
        },
        {
          "preKeys": 2,
          "matches": "[text=\"与我无关\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16796674",
            "https://i.gkd.li/i/16796732",
            "https://i.gkd.li/i/16798658",
            "https://i.gkd.li/i/15198461"
          ],
          "activityIds": [
            ".plugin.brandservice.ui.timeline.preload.ui.TmplWebView",
            ".plugin.webview.ui.tools.fts.MMSosWebViewUI",
            ".plugin.webview.ui.tools.MMWebViewUI"
          ]
        }
      ]
    },
    {
      "key": 25,
      "name": "全屏广告-小程序弹窗广告",
      "desc": "点击关闭",
      "matchTime": 20000,
      "actionCd": 300,
      "actionDelay": 300,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".plugin.appbrand.ui.AppBrandUI",
          "excludeMatches": "[text=\"跳过\" || text=\"跳過\"][visibleToUser=true]",
          "matches": "@ImageView[visibleToUser=true][childCount=0][text=null] < FrameLayout[childCount=1] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] - FrameLayout >4 [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/d2b12af6-c204-4da7-8553-4765ef8b8c31",
          "snapshotUrls": [
            "https://i.gkd.li/i/13459614",
            "https://i.gkd.li/i/16943989",
            "https://i.gkd.li/i/16920797"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/16958795",
          "matchTime": 20000,
          "actionCd": 300,
          "actionDelay": 300
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.mm.plugin.appbrand.ui.AppBrandUI",
          "excludeMatches": "[text=\"跳过\"][visibleToUser=true]",
          "matches": "@ImageView[visibleToUser=true][childCount=0][text=null] < FrameLayout[childCount=1] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] - FrameLayout >4 [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/d2b12af6-c204-4da7-8553-4765ef8b8c31",
          "snapshotUrls": [
            "https://i.gkd.li/i/13459614",
            "https://i.gkd.li/i/16943989",
            "https://i.gkd.li/i/16920797"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/16958795",
          "matchTime": 20000,
          "actionCd": 300,
          "actionDelay": 300
        }
      ]
    },
    {
      "key": 40,
      "name": "通知提示-其他应用打开使用功能须知",
      "desc": "直接确认不墨迹",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.chatting.AppAttachNewDownloadUI",
          "matches": "@[text=\"确认\" || text=\"確定\" || text=\"OK\"] <2 [childCount=2] - ScrollView >2 [visibleToUser=true][text*=\"《其他应用打开\"] - [text=\"功能使用须知\"]",
          "snapshotUrls": "https://i.gkd.li/i/28420481",
          "exampleUrls": "https://e.gkd.li/ad334a60-8a62-41f2-b123-e4a137daa89e"
        }
      ]
    },
    {
      "key": 41,
      "name": "通知提示-暂不开启指纹支付",
      "desc": "支付后出现全屏弹窗=> 点击[暂不开启]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".plugin.lite.ui.WxaLiteAppTransparentLiteUI",
          "matches": "@Button[desc=\"暂不开启\"][visibleToUser=true] - * -> [desc=\"开启指纹支付\"] <<2 * <n [childCount>3] <<6 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/28420693",
          "exampleUrls": "https://e.gkd.li/95edbe33-86d4-4075-99e1-cec1a6609595"
        }
      ]
    },
    {
      "key": 43,
      "name": "其他-支付前[取消]开通免密支付",
      "desc": "支付前,[关掉]默认开通免密支付的开关",
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.tencent.mm.plugin.lite.ui.WxaLiteAppTransparentLiteUI",
          "matches": "@Button[desc^=\"开通\"][desc*=\"免密支付\"][desc$=\"打开\"] <2 View[childCount=8] <<7 FrameLayout <<3 [id=\"android:id/content\"]",
          "position": {
            "right": "width * 0.1",
            "top": "height/2"
          },
          "snapshotUrls": "https://i.gkd.li/i/29682457",
          "excludeSnapshotUrls": "https://i.gkd.li/i/29682465",
          "exampleUrls": "https://e.gkd.li/59fb8537-9721-459a-992d-1d1e58d9c29f",
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 49,
      "name": "分段广告-订阅号消息内容-广告",
      "desc": "点击下拉框-[关闭此广告]/[不感兴趣]-[与我无关]",
      "enable": false,
      "activityIds": [
        ".plugin.brandservice.ui.timeline.preload.ui.TmplWebView",
        ".plugin.webview.ui.tools.fts.MMSosWebViewUI",
        ".plugin.webview.ui.tools.MMWebViewUI"
      ],
      "rules": [
        {
          "excludeMatches": [
            "[text=\"不感兴趣\" || text=\"与我无关\" || text=\"感谢你的反馈\"][visibleToUser=true]"
          ],
          "matches": "@[clickable=true][visibleToUser=true] > TextView[text^=\"广告\"][visibleToUser=true]",
          "exampleUrls": [
            "https://e.gkd.li/e73bb653-cc79-455c-958b-38aff6687c37",
            "https://e.gkd.li/5915f80b-66b9-4441-9d36-3caa3fe1be58"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12642232",
            "https://i.gkd.li/i/13199281",
            "https://i.gkd.li/i/14006180",
            "https://i.gkd.li/i/17093010",
            "https://i.gkd.li/i/16796663",
            "https://i.gkd.li/i/16796725",
            "https://i.gkd.li/i/16798663",
            "https://i.gkd.li/i/15198455",
            "https://i.gkd.li/i/17276697"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15198464"
          ],
          "activityIds": [
            ".plugin.brandservice.ui.timeline.preload.ui.TmplWebView",
            ".plugin.webview.ui.tools.fts.MMSosWebViewUI",
            ".plugin.webview.ui.tools.MMWebViewUI"
          ]
        },
        {
          "preKeys": 0,
          "matches": "[text=\"关闭此广告\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16796729",
            "https://i.gkd.li/i/17113565"
          ],
          "activityIds": [
            ".plugin.brandservice.ui.timeline.preload.ui.TmplWebView",
            ".plugin.webview.ui.tools.fts.MMSosWebViewUI",
            ".plugin.webview.ui.tools.MMWebViewUI"
          ]
        },
        {
          "preKeys": 0,
          "excludeMatches": [
            "[text=\"感谢你的反馈\"][visibleToUser=true]",
            "[text=\"关闭此广告\"][clickable=true][visibleToUser=true]"
          ],
          "matches": "[text=\"不感兴趣\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16796666",
            "https://i.gkd.li/i/16798661",
            "https://i.gkd.li/i/15198459"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15061424",
            "https://i.gkd.li/i/16796729"
          ],
          "activityIds": [
            ".plugin.brandservice.ui.timeline.preload.ui.TmplWebView",
            ".plugin.webview.ui.tools.fts.MMSosWebViewUI",
            ".plugin.webview.ui.tools.MMWebViewUI"
          ]
        },
        {
          "preKeys": 2,
          "matches": "[text=\"与我无关\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16796674",
            "https://i.gkd.li/i/16796732",
            "https://i.gkd.li/i/16798658",
            "https://i.gkd.li/i/15198461"
          ],
          "activityIds": [
            ".plugin.brandservice.ui.timeline.preload.ui.TmplWebView",
            ".plugin.webview.ui.tools.fts.MMSosWebViewUI",
            ".plugin.webview.ui.tools.MMWebViewUI"
          ]
        }
      ]
    },
    {
      "key": 50,
      "name": "分段广告-订阅号消息页面-推荐阅读",
      "enable": false,
      "activityIds": "com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity",
      "rules": [
        {
          "matches": "View > Button > View[desc$=\"推​荐​\"] > ImageView[index=1][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/101449500/5b815528-1ca2-4016-930e-a3cfb4e5e7ea",
          "snapshotUrls": "https://i.gkd.li/i/14548701",
          "activityIds": "com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        },
        {
          "preKeys": 0,
          "matches": "[desc=\"不看此类内容\"]",
          "snapshotUrls": "https://i.gkd.li/i/14549566",
          "activityIds": "com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        },
        {
          "preKeys": 1,
          "matches": "[desc=\"确定\"]",
          "snapshotUrls": "https://i.gkd.li/i/14549567",
          "activityIds": "com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity"
        }
      ]
    },
    {
      "key": 51,
      "name": "全屏广告-小程序-弹窗广告",
      "desc": "点击右上角x",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.tencent.mm.plugin.appbrand.ui.AppBrandUI",
          "matches": "[text!=\"\" || text!=null] <<n FrameLayout[childCount<=5] > FrameLayout[childCount>=3 && childCount<=6] + FrameLayout[childCount=2] > TextView + FrameLayout > @FrameLayout[childCount=1] > ImageView",
          "exampleUrls": "https://m.gkd.li/101449500/1c7e1778-c5a2-426b-8beb-1b76893b6397",
          "snapshotUrls": [
            "https://i.gkd.li/i/14111422",
            "https://i.gkd.li/i/14111432",
            "https://i.gkd.li/i/13459614"
          ]
        }
      ]
    },
    {
      "key": 52,
      "name": "分段广告-小程序-内部广告",
      "enable": false,
      "activityIds": "com.tencent.mm.plugin.appbrand.ui.AppBrandUI",
      "rules": [
        {
          "name": "【广告】0",
          "fastQuery": true,
          "matches": "FrameLayout[childCount=3] >n FrameLayout > FrameLayout > [text=\"广告\"][visibleToUser=true]",
          "excludeMatches": "FrameLayout > TextView + FrameLayout > TextView[text=\"跳过\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13199282",
            "https://i.gkd.li/i/13407275"
          ],
          "activityIds": "com.tencent.mm.plugin.appbrand.ui.AppBrandUI"
        },
        {
          "name": "【广告】1",
          "matches": "View > * - [text=\"广告\"]",
          "excludeMatches": "[text=\"接龙管家\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13378208",
            "https://i.gkd.li/i/14123141",
            "https://i.gkd.li/i/14385715"
          ],
          "activityIds": "com.tencent.mm.plugin.appbrand.ui.AppBrandUI"
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "点击原因【不感兴趣】",
          "matches": "[text=\"不感兴趣\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13200044",
          "activityIds": "com.tencent.mm.plugin.appbrand.ui.AppBrandUI"
        },
        {
          "preKeys": 2,
          "name": "点击原因【与我无关】",
          "matches": "[text=\"与我无关\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13200048",
          "activityIds": "com.tencent.mm.plugin.appbrand.ui.AppBrandUI"
        }
      ]
    },
    {
      "key": 53,
      "name": "分段广告-视频号-评论区广告",
      "desc": "GKD1.7.0可用",
      "enable": false,
      "activityIds": "com.tencent.mm.plugin.finder.ui.FinderHomeAffinityUI",
      "fastQuery": true,
      "rules": [
        {
          "matches": "@FrameLayout >2 [text=\"广告\"]",
          "exampleUrls": "https://m.gkd.li/101449500/341ffb52-0aeb-4c35-aa72-8c96930e6d23",
          "snapshotUrls": "https://i.gkd.li/i/14549072",
          "activityIds": "com.tencent.mm.plugin.finder.ui.FinderHomeAffinityUI",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "position": {
            "left": "width*0.8125",
            "top": "width*0.1875"
          },
          "matches": "@ViewGroup >3 [text=\"广告\"]",
          "exampleUrls": "https://m.gkd.li/101449500/f2dcd634-96e3-4532-9b24-7c750ffd0263",
          "snapshotUrls": "https://i.gkd.li/i/14549071",
          "activityIds": "com.tencent.mm.plugin.finder.ui.FinderHomeAffinityUI",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 54,
      "name": "青少年模式-视频号-青少年模式弹窗",
      "order": -8,
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.tencent.mm.plugin.finder.ui.FinderMultiTaskRouterUI",
      "snapshotUrls": "https://i.gkd.li/i/14735456",
      "rules": [
        {
          "matches": "[text*=\"青少年模式\"] +3 [text=\"我知道了\"]",
          "fastQuery": true,
          "activityIds": "com.tencent.mm.plugin.finder.ui.FinderMultiTaskRouterUI"
        }
      ]
    }
  ]
});
