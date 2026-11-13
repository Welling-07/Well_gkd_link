// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cmcc.cmvideo",
  "name": "咪咕视频",
  "groups": [
    {
      "key": 0,
      "name": "局部广告",
      "desc": "点击x掉",
      "fastQuery": true,
      "activityIds": "com.cmvideo.capability.mglivependant.palyerdetail.service.SingleTaskActivity",
      "rules": [
        {
          "activityIds": ".main.application.CompatibleMainActivity",
          "matches": "[vid=\"iv_right_bottom_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12498315",
          "fastQuery": true
        },
        {
          "name": "首页",
          "activityIds": ".main.application.CompatibleMainActivity",
          "matches": "@ImageView[clickable=true][width<114 && height<114] - RecyclerView[width<500 && height<500] <<(1,2) FrameLayout - [vid=\"root_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/27367393",
            "https://i.gkd.li/i/27382399"
          ],
          "fastQuery": true
        },
        {
          "name": "直播预约",
          "activityIds": ".main.application.CompatibleMainActivity",
          "matches": "ImageView <(1,2) @[clickable=true][width<75 && height<75][childCount=2] - [vid=\"h5_content_container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/27367465",
            "https://i.gkd.li/i/27375928"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.cmvideo.capability.vod.VodActivity",
          "matches": "[vid=\"iv_close\" || text=\"广告\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/27367662",
          "fastQuery": true
        },
        {
          "name": "横屏播放页",
          "matches": "@ImageView[clickable=true][width<114 && height<114] <(2,3) FrameLayout <<(1,2) [vid=\"fl_container\"][width<500 && height<500]",
          "snapshotUrls": [
            "https://i.gkd.li/i/27330895",
            "https://i.gkd.li/i/27382514"
          ],
          "fastQuery": true,
          "activityIds": "com.cmvideo.capability.mglivependant.palyerdetail.service.SingleTaskActivity"
        },
        {
          "name": "横屏播放页 (2)",
          "matches": "[vid=\"lv_ad_mark\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/27382514",
          "fastQuery": true,
          "activityIds": "com.cmvideo.capability.mglivependant.palyerdetail.service.SingleTaskActivity"
        },
        {
          "name": "直播间",
          "matches": "[vid=\"gift_pop_close\"][desc*=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/27368007",
          "fastQuery": true,
          "activityIds": "com.cmvideo.capability.mglivependant.palyerdetail.service.SingleTaskActivity"
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
      "snapshotUrls": "https://i.gkd.li/i/13276116",
      "rules": [
        {
          "matches": "[vid=\"btn_update_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13276116",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.cmcc.cmvideo:id/btn_update_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13276127",
      "rules": [
        {
          "matches": "[text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13276127",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.cmcc.cmvideo:id/base_dialog_left_btn\"][text=\"以后再说\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-首页",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matchRoot": true,
          "activityIds": ".main.application.CompatibleMainActivity",
          "matches": "[vid=\"iv_big_close\" || vid=\"close_bg_single\"]",
          "exampleUrls": [
            "https://e.gkd.li/ece7eb54-9b9b-40e2-9402-fc350f4734bb",
            "https://e.gkd.li/5a577aa5-7d8a-4f7b-8a4a-230263775fbc"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16503612",
            "https://i.gkd.li/i/27368845"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "评价提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.cmvideo.capability.vod.VodActivity",
          "matches": "@[vid=\"rating_Bar\"][childCount=5] <4 [vid=\"mg_share_dialog_root\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/27368603",
          "exampleUrls": "https://e.gkd.li/aff1fce9-4295-406f-9a56-c26090b57abb",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12498307",
      "rules": [
        {
          "matches": "[id=\"com.cmcc.cmvideo:id/btn_cancle\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告-右下角小广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.cmcc.cmvideo.main.application.CompatibleMainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12498315",
      "rules": [
        {
          "matches": "[id=\"com.cmcc.cmvideo:id/iv_right_bottom_close\"]",
          "fastQuery": true,
          "activityIds": "com.cmcc.cmvideo.main.application.CompatibleMainActivity"
        }
      ]
    },
    {
      "key": 7,
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "matchRoot": true,
          "activityIds": "com.cmcc.cmvideo.main.application.CompatibleMainActivity",
          "matches": "[vid=\"iv_big_close\"]",
          "exampleUrls": "https://e.gkd.li/ece7eb54-9b9b-40e2-9402-fc350f4734bb",
          "snapshotUrls": "https://i.gkd.li/i/16503612"
        }
      ]
    }
  ]
});
