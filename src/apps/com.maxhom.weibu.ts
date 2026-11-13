// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.maxhom.weibu",
  "name": "暮瑟",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-交友页面底部广告",
      "activityIds": [
        ".tool.home.activity.NewMainActivity",
        ".WelcomeActivity"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".tool.home.activity.NewMainActivity",
            ".WelcomeActivity"
          ],
          "matches": [
            "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid=\"flAd\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13377607",
            "https://i.gkd.li/i/13377810",
            "https://i.gkd.li/i/13728552"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".tool.home.activity.NewMainActivity",
          "matches": "[vid=\"anythink_myoffer_banner_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13702305",
            "https://i.gkd.li/i/13702339",
            "https://i.gkd.li/i/13702345"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-漂流瓶页面提示弹窗",
      "fastQuery": true,
      "activityIds": [
        "com.maxhom.weibu.tool.home.activity.ToolBottleActivity",
        "com.maxhom.weibu.tool.home.activity.NewMainActivity"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".tool.home.activity.ToolBottleActivity",
            ".tool.home.activity.NewMainActivity"
          ],
          "matches": "[vid=\"ivClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13377649",
            "https://i.gkd.li/i/13457015"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".tool.home.activity.NewMainActivity",
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] + FrameLayout >2 [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/13377611"
        },
        {
          "matches": "[id=\"com.maxhom.weibu:id/ivClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13377649",
            "https://i.gkd.li/i/13457015"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.maxhom.weibu.tool.home.activity.ToolBottleActivity",
            "com.maxhom.weibu.tool.home.activity.NewMainActivity"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-定位权限",
      "desc": "自动点击取消",
      "fastQuery": true,
      "activityIds": [
        "com.maxhom.weibu.tool.home.activity.ToolBottleActivity",
        "com.maxhom.weibu.tool.msg.MyBottleActivity",
        "com.maxhom.weibu.tool.home.activity.NewMainActivity"
      ],
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".tool.home.activity.ToolBottleActivity",
            ".tool.msg.MyBottleActivity",
            ".tool.home.activity.NewMainActivity"
          ],
          "matches": "[text=\"去设置\"] + [text=\"取消\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13377685",
            "https://i.gkd.li/i/13457033",
            "https://i.gkd.li/i/13457038"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"去设置\"] +n [text=\"取消\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13377685",
            "https://i.gkd.li/i/13457033",
            "https://i.gkd.li/i/13457038"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.maxhom.weibu.tool.home.activity.ToolBottleActivity",
            "com.maxhom.weibu.tool.msg.MyBottleActivity",
            "com.maxhom.weibu.tool.home.activity.NewMainActivity"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "分段广告-交友页面底部广告",
      "enable": false,
      "activityIds": [
        "com.maxhom.weibu.tool.home.activity.NewMainActivity",
        "com.maxhom.weibu.WelcomeActivity"
      ],
      "rules": [
        {
          "name": "类型1-点击右侧X",
          "matches": [
            "TextView[text.length>0] < FrameLayout + FrameLayout > ImageView"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13377607",
            "https://i.gkd.li/i/13377810",
            "https://i.gkd.li/i/13728552"
          ],
          "activityIds": [
            "com.maxhom.weibu.tool.home.activity.NewMainActivity",
            "com.maxhom.weibu.WelcomeActivity"
          ]
        },
        {
          "preKeys": 0,
          "name": "类型1-点击弹出窗口的X",
          "matches": "[text.length>=2&&text.length<=6] <n FrameLayout < FrameLayout - FrameLayout > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/13377611"
          ],
          "activityIds": [
            "com.maxhom.weibu.tool.home.activity.NewMainActivity",
            "com.maxhom.weibu.WelcomeActivity"
          ]
        },
        {
          "name": "类型2-点击右侧X",
          "matches": [
            "[id=\"com.maxhom.weibu:id/anythink_myoffer_banner_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13702305",
            "https://i.gkd.li/i/13702339",
            "https://i.gkd.li/i/13702345"
          ],
          "activityIds": [
            "com.maxhom.weibu.tool.home.activity.NewMainActivity",
            "com.maxhom.weibu.WelcomeActivity"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "综合广告-底部广告",
      "enable": false,
      "activityIds": [
        "com.maxhom.weibu.tool.home.activity.NewMainActivity",
        "com.maxhom.weibu.WelcomeActivity"
      ],
      "rules": [
        {
          "name": "类型1-点击右侧X",
          "matches": [
            "TextView[text.length>0] < FrameLayout + FrameLayout > ImageView"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13377607",
            "https://i.gkd.li/i/13377810",
            "https://i.gkd.li/i/13728552"
          ],
          "activityIds": [
            "com.maxhom.weibu.tool.home.activity.NewMainActivity",
            "com.maxhom.weibu.WelcomeActivity"
          ]
        },
        {
          "preKeys": 0,
          "name": "类型1-点击弹出窗口的X",
          "matches": "[text.length>=2&&text.length<=6] <n FrameLayout < FrameLayout - FrameLayout > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/13377611"
          ],
          "activityIds": [
            "com.maxhom.weibu.tool.home.activity.NewMainActivity",
            "com.maxhom.weibu.WelcomeActivity"
          ]
        }
      ]
    }
  ]
});
