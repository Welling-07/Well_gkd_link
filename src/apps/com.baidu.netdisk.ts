// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.netdisk",
  "name": "百度网盘",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".business.guide.dialog.lifeproduct.",
            ".ui.MainActivity",
            ".ui.Navigate"
          ],
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642505",
            "https://i.gkd.li/i/12783106",
            "https://i.gkd.li/i/12923937",
            "https://i.gkd.li/i/13806852",
            "https://i.gkd.li/i/14730106",
            "https://i.gkd.li/i/14822799"
          ],
          "fastQuery": true
        },
        {
          "activityIds": [
            "com.baidu.netdisk.business.guide.dialog.lifeproduct.",
            "com.baidu.netdisk.ui.MainActivity",
            "com.baidu.netdisk.ui.Navigate"
          ],
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642505",
            "https://i.gkd.li/i/12783106",
            "https://i.gkd.li/i/12923937",
            "https://i.gkd.li/i/13806852",
            "https://i.gkd.li/i/14730106",
            "https://i.gkd.li/i/14822799"
          ],
          "fastQuery": true
        },
        {
          "name": "相册页面激活无限空间弹窗",
          "activityIds": "com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog",
          "matches": "@ImageView[id=\"com.baidu.netdisk:id/close_btn\"] + ImageView[id=\"com.baidu.netdisk:id/bg_image\"]",
          "snapshotUrls": "https://i.gkd.li/i/12648987",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".video.VideoPlayerActivity",
          "matches": "[vid=\"rl_ad_root\"] > [vid=\"iv_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/5e0625e3-ef3b-4a71-a222-54728c2274b0",
          "snapshotUrls": "https://i.gkd.li/i/20414230"
        },
        {
          "name": "首页特惠广告",
          "fastQuery": true,
          "matches": "[id=\"com.baidu.netdisk:id/banner_item_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706544",
          "activityIds": "com.baidu.netdisk.ui.MainActivity"
        },
        {
          "name": "首页热门广告",
          "fastQuery": true,
          "matches": "[id=\"com.baidu.netdisk:id/vf_content\"] + [id=\"com.baidu.netdisk:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706544",
          "activityIds": "com.baidu.netdisk.ui.MainActivity"
        },
        {
          "name": "[我的]页面限时福利",
          "matches": "@TextView + [text=\"专属福利\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706549",
          "activityIds": "com.baidu.netdisk.ui.MainActivity"
        },
        {
          "name": "续费横幅提示",
          "matches": "View[desc=\"续费\"] + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12924036",
          "activityIds": "com.baidu.netdisk.ui.MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/16118181",
      "rules": [
        {
          "activityIds": [
            ".ui.MainActivity",
            ".ui.cloudp2p.RichMediaActivity",
            ".module.sharelink.ChainVerifyActivity"
          ],
          "matches": "[text=\"立即更新\"] -(1,2) [text=\"下次再说\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16118181",
            "https://i.gkd.li/i/24834209",
            "https://i.gkd.li/i/26574534",
            "https://i.gkd.li/i/33673328"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"立即更新\"] -2 [text=\"下次再说\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12923936",
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": [
            "[text=\"开启推送提醒\"]",
            "[text=\"暂不开启\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/25904597",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageView[id=\"com.baidu.netdisk:id/dialog_cancel\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "评价提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/14317054",
      "activityIds": ".ui.MainActivity",
      "rules": [
        {
          "matches": "[vid=\"view_score_style\"] > [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/14317054",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".ui.MainActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": "[vid=\"float_btn_close\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/470eec82-ed99-4f50-beba-2587e525cfdf",
          "snapshotUrls": "https://i.gkd.li/i/14278618"
        },
        {
          "activityIds": "com.baidu.netdisk.ui.MainActivity",
          "matches": "[vid=\"float_btn_close\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/470eec82-ed99-4f50-beba-2587e525cfdf",
          "snapshotUrls": "https://i.gkd.li/i/14278618"
        }
      ]
    },
    {
      "key": 6,
      "name": "分段广告-暂不开启自动备份",
      "fastQuery": true,
      "activityIds": [
        ".ui.NewQuickSettingsActivity",
        ".ui.RepeatedNewQuickSettingsActivity"
      ],
      "rules": [
        {
          "matches": [
            "[text=\"开启安全备份\"][visibleToUser=true]",
            "[text=\"暂不开启\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/e227fa57-f728-4ba4-8fff-493751bc5035",
          "snapshotUrls": [
            "https://i.gkd.li/i/22401064",
            "https://i.gkd.li/i/25903980"
          ],
          "fastQuery": true,
          "activityIds": [
            ".ui.NewQuickSettingsActivity",
            ".ui.RepeatedNewQuickSettingsActivity"
          ]
        },
        {
          "preKeys": 0,
          "matches": "[text=\"立即开启\"] - [text=\"暂不开启\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/aa9782d4-304f-401b-89f6-4fae703b8280",
          "snapshotUrls": [
            "https://i.gkd.li/i/22401070",
            "https://i.gkd.li/i/25903983"
          ],
          "fastQuery": true,
          "activityIds": [
            ".ui.NewQuickSettingsActivity",
            ".ui.RepeatedNewQuickSettingsActivity"
          ]
        }
      ]
    }
  ]
});
