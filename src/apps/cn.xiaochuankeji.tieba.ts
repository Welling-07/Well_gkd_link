// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.xiaochuankeji.tieba",
  "name": "最右",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15858014",
            "https://i.gkd.li/i/15858024"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/15858023",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "position": {
            "left": "width * 0.8903",
            "top": "width * 0.1342"
          },
          "matches": "[vid=\"contentView\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15856190",
            "https://i.gkd.li/i/15858008"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "activityIds": ".media.browse.MediaActivity",
          "matches": "RelativeLayout[childCount=7] > @[vid=\"ms_skipView\"][visibleToUser=true] + LinearLayout[vid=\"ms_shakeRoot\"] > [text*=\"点击按钮\"] ",
          "exampleUrls": "https://e.gkd.li/4958c49b-32d2-4b99-865a-e39fb7183b98",
          "snapshotUrls": "https://i.gkd.li/i/25619083",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15858014",
            "https://i.gkd.li/i/15858024"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/15858023",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 4,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "order": -9,
      "activityIds": "cn.xiaochuankeji.tieba.ui.home.setting.SettingActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.home.setting.SettingActivity",
          "matches": "[vid=\"btn_ok\"][text^=\"马上升级\"] + [vid=\"btn_cancel\"][text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/12660882",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/btn_ok\"][text^=\"马上升级\"] + [id=\"cn.xiaochuankeji.tieba:id/btn_cancel\"][text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/12660882",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "cn.xiaochuankeji.tieba.ui.home.setting.SettingActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-评论区卡片广告",
      "activityIds": ".ui.post.postdetail.PostDetailActivity",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[vid=\"adLabelView\"] + [vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/24209546",
            "https://i.gkd.li/i/24380002"
          ],
          "fastQuery": true,
          "activityIds": ".ui.post.postdetail.PostDetailActivity"
        },
        {
          "matches": "@[clickable=true] >2 [text=\"不感兴趣\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/21334232",
          "fastQuery": true,
          "activityIds": ".ui.post.postdetail.PostDetailActivity"
        },
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/hh_hermes_ad_tag\"] + [id=\"cn.xiaochuankeji.tieba:id/iv_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12661011",
          "activityIds": "cn.xiaochuankeji.tieba.ui.post.postdetail.PostDetailActivity",
          "fastQuery": true
        },
        {
          "preKeys": 2,
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/iv_dislike_reason\"] + LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12661028",
          "activityIds": "cn.xiaochuankeji.tieba.ui.post.postdetail.PostDetailActivity",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "desc": "系统通知弹窗，点击暂不开启",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".ui.home.page.PageMainActivity",
      "rules": [
        {
          "matches": "[vid=\"confirm\"][text=\"打开通知\"] + [vid=\"cancel\"][text=\"暂不开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/12660823",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".ui.home.page.PageMainActivity"
        },
        {
          "matches": "[text^=\"开启通知\"] +2 [vid=\"tips_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12660851",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".ui.home.page.PageMainActivity"
        },
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/confirm\"][text=\"打开通知\"] + [id=\"cn.xiaochuankeji.tieba:id/cancel\"][text=\"暂不开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/12660823",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".ui.home.page.PageMainActivity"
        },
        {
          "matches": "[text^=\"开启通知\"] +(2) [id=\"cn.xiaochuankeji.tieba:id/tips_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12660851",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".ui.home.page.PageMainActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "青少年模式",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text$=\"青少年模式\"] + [text$=\"知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/12660929",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "未分类-评论区广告卡片",
      "enable": false,
      "activityIds": "cn.xiaochuankeji.tieba.ui.post.postdetail.PostDetailActivity",
      "rules": [
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/hh_hermes_ad_tag\"] + [id=\"cn.xiaochuankeji.tieba:id/iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12661011"
          ],
          "activityIds": "cn.xiaochuankeji.tieba.ui.post.postdetail.PostDetailActivity"
        },
        {
          "preKeys": 0,
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/iv_dislike_reason\"] + LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12661028"
          ],
          "activityIds": "cn.xiaochuankeji.tieba.ui.post.postdetail.PostDetailActivity"
        }
      ]
    },
    {
      "key": 6,
      "name": "未分类-系统通知弹窗",
      "desc": "系统通知弹窗，点击暂不开启",
      "enable": false,
      "activityIds": "cn.xiaochuankeji.tieba.ui.home.page.PageMainActivity",
      "rules": [
        {
          "matches": "[id=\"cn.xiaochuankeji.tieba:id/confirm\"][text=\"打开通知\"] + [id=\"cn.xiaochuankeji.tieba:id/cancel\"][text=\"暂不开启\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12660823"
          ],
          "activityIds": "cn.xiaochuankeji.tieba.ui.home.page.PageMainActivity"
        }
      ]
    },
    {
      "key": 7,
      "name": "未分类-系统通知提示信息",
      "desc": "系统通知提示信息，点击x按钮",
      "enable": false,
      "activityIds": "cn.xiaochuankeji.tieba.ui.home.page.PageMainActivity",
      "rules": [
        {
          "matches": "[text^=\"开启通知\"] +(2) [id=\"cn.xiaochuankeji.tieba:id/tips_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12660851"
          ],
          "activityIds": "cn.xiaochuankeji.tieba.ui.home.page.PageMainActivity"
        }
      ]
    }
  ]
});
