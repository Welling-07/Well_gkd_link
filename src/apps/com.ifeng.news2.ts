// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ifeng.news2",
  "name": "凤凰新闻",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-信息流广告",
      "activityIds": [
        ".activity.IfengTabMainActivity",
        ".activity.DocDetailActivity"
      ],
      "fastQuery": true,
      "rules": [
        {
          "matches": "@[vid=\"img_feedback_left_of_image\"] < LinearLayout -2 LinearLayout >2 [vid=\"adv_label\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/63216ca1-4f7c-4a95-9b9e-7ac4c894f0c0",
          "snapshotUrls": "https://i.gkd.li/i/19752573",
          "fastQuery": true,
          "activityIds": [
            ".activity.IfengTabMainActivity",
            ".activity.DocDetailActivity"
          ]
        },
        {
          "matches": "[vid=\"iv_item_del\" || vid=\"doc_detail_titleimg_ad_delete\" || vid=\"del_click\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/0a199f54-70f9-45ae-8025-896b688dc8e6",
          "snapshotUrls": [
            "https://i.gkd.li/i/19752570",
            "https://i.gkd.li/i/19752567",
            "https://i.gkd.li/i/19752561"
          ],
          "fastQuery": true,
          "activityIds": [
            ".activity.IfengTabMainActivity",
            ".activity.DocDetailActivity"
          ]
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] > [text=\"不感兴趣\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/e182591a-492d-49ec-8820-20bea10495d9",
          "snapshotUrls": [
            "https://i.gkd.li/i/19752582",
            "https://i.gkd.li/i/19752559"
          ],
          "fastQuery": true,
          "activityIds": [
            ".activity.IfengTabMainActivity",
            ".activity.DocDetailActivity"
          ]
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_label\"] + [id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705500",
          "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
          "fastQuery": true
        },
        {
          "matches": "@[id=\"com.ifeng.news2:id/img_feedback_left_of_image\"] - LinearLayout >(2) [id=\"com.ifeng.news2:id/adv_label\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705508",
          "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_icon\"] + LinearLayout[id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705511",
          "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_icon\"] + TextView + [id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705518",
          "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_label\"] + [id=\"com.ifeng.news2:id/iv_item_del\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705520",
          "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
          "fastQuery": true
        },
        {
          "preKeys": [
            3,
            4,
            5,
            6,
            7
          ],
          "matches": "@[id=\"com.ifeng.news2:id/dialog_dislike_feedback_normal_item_linearlayout\"] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705505",
          "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_label\"] + [id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705500",
          "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
          "fastQuery": true
        },
        {
          "matches": "@[id=\"com.ifeng.news2:id/img_feedback_left_of_image\"] - LinearLayout >(2) [id=\"com.ifeng.news2:id/adv_label\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705508",
          "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_icon\"] + LinearLayout[id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705511",
          "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_icon\"] + TextView + [id=\"com.ifeng.news2:id/normal_item_delete_wrap\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705518",
          "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.ifeng.news2:id/adv_label\"] + [id=\"com.ifeng.news2:id/iv_item_del\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705520",
          "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
          "fastQuery": true
        },
        {
          "preKeys": [
            9,
            10,
            11,
            12,
            13
          ],
          "matches": "@[id=\"com.ifeng.news2:id/dialog_dislike_feedback_normal_item_linearlayout\"] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705505",
          "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-定位权限",
      "desc": "点击取消",
      "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12705531",
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".activity.IfengTabMainActivity",
          "matches": "[text*=\"请求您的位置\"] + [vid=\"permission_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705531",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text*=\"请求您的位置\"] + [id=\"com.ifeng.news2:id/permission_cancel\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ifeng.news2.activity.IfengTabMainActivity",
          "matchTime": 10000
        }
      ]
    }
  ]
});
