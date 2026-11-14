// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ygkj.chelaile.standard",
  "name": "车来了",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "dev.xesam.chelaile.app.module.func.SplashActivity",
            "dev.xesam.chelaile.app.module.PanelHostActivity",
            "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity"
          ],
          "matches": "@[vid=\"cll_all_pic_close_1\"][visibleToUser=true] < FrameLayout +(1,2) LinearLayout[childCount=2] > [text$=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/7957cdea-6238-4a2b-94bf-8960544258bc",
          "snapshotUrls": [
            "https://i.gkd.li/i/13062991",
            "https://i.gkd.li/i/13464325",
            "https://i.gkd.li/i/16987313"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": [
            "dev.xesam.chelaile.app.module.PanelHostActivity",
            "dev.xesam.chelaile.app.module.line.TimeTableActivity",
            "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity"
          ],
          "excludeMatches": "[text=\"选择下车站\"][visibleToUser=true]",
          "matches": "[text!=\"收藏成功\"] + [vid=\"cll_line_single_ad_close\" || vid=\"cll_close\" || vid=\"cll_card_single_ad_close\"][visibleToUser=true][width<110 && height<110]",
          "exampleUrls": "https://e.gkd.li/7d7b7d94-eb64-41a5-a5c2-c8418d6371a1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625374",
            "https://i.gkd.li/i/16956570",
            "https://i.gkd.li/i/16987313",
            "https://i.gkd.li/i/16988894"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/25092999",
            "https://i.gkd.li/i/29597847"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity",
          "matches": "FrameLayout[childCount=2] > FrameLayout[childCount=2] > FrameLayout[childCount=3] > FrameLayout[childCount=1] > @ImageView[visibleToUser=true][childCount=0][text=null] <<n [vid=\"cll_line_detail_widgets_container\"]",
          "exampleUrls": "https://e.gkd.li/5442e403-7934-4fbf-b837-71d4ed8581cb",
          "snapshotUrls": "https://i.gkd.li/i/16956583"
        },
        {
          "fastQuery": true,
          "activityIds": "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity",
          "matches": "@[vid=\"close_ad_text_link_layout\"][visibleToUser=true] - LinearLayout[childCount=2] > [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/26c77ba0-8be5-4966-b806-3a566fee8413",
          "snapshotUrls": "https://i.gkd.li/i/16987313"
        },
        {
          "fastQuery": true,
          "activityIds": [
            "dev.xesam.chelaile.app.module.PanelHostActivity",
            "dev.xesam.chelaile.app.module.line.TimeTableActivity",
            "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity"
          ],
          "matches": "[vid=\"cll_line_single_ad_close\" || vid=\"cll_close\" || vid=\"cll_card_single_ad_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/7d7b7d94-eb64-41a5-a5c2-c8418d6371a1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625374",
            "https://i.gkd.li/i/16956570",
            "https://i.gkd.li/i/16987313",
            "https://i.gkd.li/i/16988894"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "matches": "[vid=\"cll_interstitial_close\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/31613a9d-202a-4359-bc99-274dddb180ce",
          "snapshotUrls": "https://i.gkd.li/i/14325666",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.ygkj.chelaile.standard:id/cll_interstitial_close\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/31613a9d-202a-4359-bc99-274dddb180ce",
          "snapshotUrls": "https://i.gkd.li/i/14325666",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity",
          "matches": "@ImageView[clickable=true][childCount=0][width<100&&height<100][visibleToUser=true] <n * >3 [text=\"反馈\"]",
          "exampleUrls": "https://e.gkd.li/4ab8665e-026f-4101-8299-0300708c91c1",
          "snapshotUrls": [
            "https://i.gkd.li/i/16812335",
            "https://i.gkd.li/i/21120116"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "snapshotUrls": "https://i.gkd.li/i/20502977"
        },
        {
          "fastQuery": true,
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "exampleUrls": "https://e.gkd.li/76d02bfa-6d04-4005-b5aa-30ecfdd3cd84",
          "snapshotUrls": "https://i.gkd.li/i/21139548"
        },
        {
          "fastQuery": true,
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "matches": "@ViewGroup[childCount=1][visibleToUser=true][width<100 && height<100] + ViewGroup > [text=\"反馈\"]",
          "exampleUrls": "https://e.gkd.li/1f1c3315-d245-404b-ad16-554583b16283",
          "snapshotUrls": "https://i.gkd.li/i/21120146"
        },
        {
          "activityIds": "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity",
          "matches": "RelativeLayout[childCount=6] > RelativeLayout[childCount=4] + ImageView[clickable=true][index=3][text=null]",
          "exampleUrls": "https://e.gkd.li/4ab8665e-026f-4101-8299-0300708c91c1",
          "snapshotUrls": "https://i.gkd.li/i/16812335"
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告-卡片式广告",
      "enable": false,
      "rules": [
        {
          "name": "腾讯SDK",
          "activityIds": [
            "dev.xesam.chelaile.app.module.func.SplashActivity",
            "dev.xesam.chelaile.app.module.PanelHostActivity",
            "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity"
          ],
          "matches": "ImageView[id^=\"com.ygkj.chelaile.standard:id/cll_all_pic_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13062991",
            "https://i.gkd.li/i/13062984",
            "https://i.gkd.li/i/13464325",
            "https://i.gkd.li/i/14065904"
          ]
        },
        {
          "activityIds": [
            "dev.xesam.chelaile.app.module.PanelHostActivity",
            "dev.xesam.chelaile.app.module.line.TimeTableActivity"
          ],
          "matches": "[id=\"com.ygkj.chelaile.standard:id/cll_line_single_ad_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625374",
            "https://i.gkd.li/i/13947849"
          ]
        }
      ]
    },
    {
      "key": 7,
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "rules": [
        {
          "name": "腾讯广告SDK",
          "activityIds": "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity",
          "matches": "FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]",
          "snapshotUrls": "https://i.gkd.li/i/13947871"
        }
      ]
    }
  ]
});
