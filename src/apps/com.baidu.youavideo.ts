// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.youavideo",
  "name": "一刻相册",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "excludeMatches": "[text=\"开启安全备份\"][visibleToUser=true]",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/23549481",
          "excludeSnapshotUrls": "https://i.gkd.li/i/23567868",
          "exampleUrls": "https://e.gkd.li/5185bf9d-70f7-4841-991e-55b1b6768e97",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@[text*=\"跳过\"] + [visibleToUser=true] >(1,3) [text*=\"摇一摇\" || text*=\"摇动\" || text*=\"点击\"]",
          "snapshotUrls": "https://i.gkd.li/i/23549490",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "actionMaximumKey": 0,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[vid=\"flash_fragment\"] >n [vid=\"ms_skipView\"]",
          "snapshotUrls": "https://i.gkd.li/i/30690903",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "actionMaximumKey": 0,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23549504",
            "https://i.gkd.li/i/23549553"
          ],
          "fastQuery": true,
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
      "name": "更新提示-软件升级提醒",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".home.view.HomeActivity",
          "matches": "[vid=\"tv_upgrade\"] < LinearLayout +2 [vid=\"img_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12597916"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/tv_upgrade\"] < LinearLayout +2 [id=\"com.baidu.youavideo:id/img_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12597916"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-悬浮窗广告",
      "desc": "关闭广告悬浮窗",
      "activityIds": [
        "com.baidu.youavideo.home.view.HomeActivity"
      ],
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".home.view.HomeActivity",
          "matches": "[vid=\"img_operation_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12970088"
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/img_operation_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12970088"
          ],
          "activityIds": [
            "com.baidu.youavideo.home.view.HomeActivity"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "评价提示",
      "desc": "点击下次再说",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".home.view.HomeActivity",
          "matches": "[vid=\"tv_next_time\"]",
          "snapshotUrls": "https://i.gkd.li/i/12970094",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/tv_next_time\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12970094"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-会员弹窗",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".vip.ui.VipPayWebDialogActivity",
          "matches": "[text^=\"恭喜获得会员\"] - View[text=\"\"] > @Image[text!=null][visibleToUser=true] <<n [vid=\"fl_web_view\"]",
          "exampleUrls": "https://e.gkd.li/c149b068-7f00-4173-9000-a41fa1603ba7",
          "snapshotUrls": "https://i.gkd.li/i/17576805"
        }
      ]
    },
    {
      "key": 5,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": [
        "com.baidu.youavideo.home.view.HomeActivity",
        "com.baidu.youavideo.preview.ui.hometimeline.TimelinePreviewActivity",
        "com.baidu.youavideo.preview.ui.search.SearchPreviewActivity"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".preview.ui.search.SearchPreviewActivity",
            ".preview.ui.hometimeline.TimelinePreviewActivity",
            ".preview.ui.album.AlbumPreviewActivity"
          ],
          "matches": "[vid=\"fl_ad\"] - [vid=\"iv_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/6b628b65-214f-4dc0-b0b8-805ea566464b",
          "snapshotUrls": [
            "https://i.gkd.li/i/14133595",
            "https://i.gkd.li/i/14217352",
            "https://i.gkd.li/i/17580816"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/15750684"
        },
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".home.view.HomeActivity",
          "matches": "[vid=\"dialog_home_pop_close_button\"]",
          "exampleUrls": "https://e.gkd.li/c83b5006-1b0d-478e-ab0a-d2f3f4957162",
          "snapshotUrls": "https://i.gkd.li/i/17732139"
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/dialog_home_pop_close_button\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13048700"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.baidu.youavideo.home.view.HomeActivity",
            "com.baidu.youavideo.preview.ui.hometimeline.TimelinePreviewActivity",
            "com.baidu.youavideo.preview.ui.search.SearchPreviewActivity"
          ]
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/iv_close\"]",
          "excludeMatches": "[vid=\"tv_title\"][text$=\"权限\"]",
          "exampleUrls": "https://m.gkd.li/57941037/3aa0e107-e31f-4e5a-8969-1fcd8310281d",
          "snapshotUrls": [
            "https://i.gkd.li/i/14133595",
            "https://i.gkd.li/i/14217352",
            "https://i.gkd.li/i/15750684"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.baidu.youavideo.home.view.HomeActivity",
            "com.baidu.youavideo.preview.ui.hometimeline.TimelinePreviewActivity",
            "com.baidu.youavideo.preview.ui.search.SearchPreviewActivity"
          ]
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/dialog_home_pop_close_button\"] ",
          "snapshotUrls": [
            "https://i.gkd.li/i/13048700"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.baidu.youavideo.home.view.HomeActivity",
            "com.baidu.youavideo.preview.ui.hometimeline.TimelinePreviewActivity",
            "com.baidu.youavideo.preview.ui.search.SearchPreviewActivity"
          ]
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/iv_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/3aa0e107-e31f-4e5a-8969-1fcd8310281d",
          "snapshotUrls": [
            "https://i.gkd.li/i/14133595",
            "https://i.gkd.li/i/14217352"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.baidu.youavideo.home.view.HomeActivity",
            "com.baidu.youavideo.preview.ui.hometimeline.TimelinePreviewActivity",
            "com.baidu.youavideo.preview.ui.search.SearchPreviewActivity"
          ]
        }
      ]
    },
    {
      "key": 6,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13413819",
      "rules": [
        {
          "activityIds": ".app.ui.HomeActivity",
          "matches": "[vid=\"dialog_open_guide_notification_root\"] > [vid=\"img_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13413819",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/dialog_open_guide_notification_root\"] > [id=\"com.baidu.youavideo:id/img_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 7,
      "name": "局部广告-照片页底部浮窗广告",
      "activityIds": "com.baidu.youavideo.home.view.HomeActivity",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13711475",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".home.view.HomeActivity",
          "matches": "[vid=\"cl_root\"] + [vid=\"img_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13711475"
        },
        {
          "matches": "[id=\"com.baidu.youavideo:id/cl_root\"] + [id=\"com.baidu.youavideo:id/img_close\"]",
          "activityIds": "com.baidu.youavideo.home.view.HomeActivity",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 8,
      "name": "局部广告-卡片广告",
      "fastQuery": true,
      "snapshotUrls": [
        "https://i.gkd.li/i/13874124",
        "https://i.gkd.li/i/15220559"
      ],
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"riv_banner\"] + [vid=\"iv_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13874124",
            "https://i.gkd.li/i/15220559"
          ]
        },
        {
          "matches": "[vid=\"riv_banner\"] < * > [vid=\"iv_close\"][visibleToUser=true]",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 9,
      "name": "全屏广告-会员充值提示",
      "desc": "点击x关闭充值提示",
      "enable": false,
      "activityIds": [
        "com.baidu.youavideo.home.view.HomeActivity"
      ],
      "fastQuery": true,
      "rules": [
        {
          "matches": "[id=\"com.baidu.youavideo:id/tv_confirm_pay\"] -5 [id=\"com.baidu.youavideo:id/img_close_dialog\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12970094"
          ],
          "activityIds": [
            "com.baidu.youavideo.home.view.HomeActivity"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 10,
      "name": "权限提示-忽略电池优化",
      "desc": "点击【取消】",
      "enable": false,
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14065510",
      "rules": [
        {
          "matches": "[text*=\"电池优化权限\"] < * +n [vid=\"bottom_two_button_layout\"] >n [vid=\"cancel\"]",
          "fastQuery": true
        }
      ]
    }
  ]
});
