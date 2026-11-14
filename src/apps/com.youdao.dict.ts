// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.youdao.dict",
  "name": "网易有道词典",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-单词页面卡片广告",
      "fastQuery": true,
      "activityIds": [
        ".activity.MainActivity",
        ".activity.DictQueryActivity"
      ],
      "rules": [
        {
          "matches": [
            "[text=\"广告\"]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13800055",
            "https://i.gkd.li/i/16278151",
            "https://i.gkd.li/i/17963902"
          ],
          "fastQuery": true,
          "activityIds": [
            ".activity.MainActivity",
            ".activity.DictQueryActivity"
          ]
        },
        {
          "preKeys": 0,
          "matches": "[vid=\"close_pop\"][text=\"收起广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13800056",
            "https://i.gkd.li/i/16278150",
            "https://i.gkd.li/i/17963904"
          ],
          "fastQuery": true,
          "activityIds": [
            ".activity.MainActivity",
            ".activity.DictQueryActivity"
          ]
        },
        {
          "matches": "[text=\"广告\"] - [vid=\"close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13800055",
            "https://i.gkd.li/i/16278151"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.youdao.dict.activity.MainActivity",
            ".activity.DictQueryActivity"
          ]
        },
        {
          "preKeys": 2,
          "matches": "[vid=\"close_pop\"][text=\"收起广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13800056",
            "https://i.gkd.li/i/16278150"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.youdao.dict.activity.MainActivity",
            ".activity.DictQueryActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "name": "首页-弹窗广告",
          "fastQuery": true,
          "activityIds": [
            ".activity.MainActivity",
            ".activity.DictSplashActivity"
          ],
          "matches": "@ImageView[vid=\"iv_close_bt\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12893419",
            "https://i.gkd.li/i/13263801"
          ]
        },
        {
          "name": "学习页面-弹窗广告",
          "fastQuery": true,
          "activityIds": [
            ".edu.main.MainPopDialog",
            ".activity.MainActivity",
            ".activity.DictQueryActivity"
          ],
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12893450",
            "https://i.gkd.li/i/16859556",
            "https://i.gkd.li/i/20602998"
          ]
        },
        {
          "name": "抽奖机会-弹窗广告",
          "fastQuery": true,
          "activityIds": [
            ".activity.DictSplashActivity",
            ".activity.DictHotBootSplashActivity"
          ],
          "matches": "[vid=\"skip_bottom_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13931202",
            "https://i.gkd.li/i/14064647"
          ]
        },
        {
          "fastQuery": true,
          "name": "首页-礼包弹窗",
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"image\"] + [vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14296482"
        },
        {
          "activityIds": ".activity.DictQueryActivity",
          "matches": "@[vid=\"iv_cancel\"][visibleToUser=true] - [vid=\"fl_video_container\"]",
          "exampleUrls": "https://e.gkd.li/342a587e-bf0d-42e9-8c16-3c0b53240e5a",
          "snapshotUrls": "https://i.gkd.li/i/18051512"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-VIP弹窗",
      "fastQuery": true,
      "activityIds": [
        "com.youdao.dict.vip.activity.RecallSevenDayVipActivity",
        "com.youdao.dict.vip.activity.SecondShowNewUserSevenDayVipActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13263706",
        "https://i.gkd.li/i/14381735"
      ],
      "rules": [
        {
          "activityIds": [
            ".vip.activity.RecallSevenDayVipActivity",
            ".vip.activity.SecondShowNewUserSevenDayVipActivity",
            ".activity.DictQueryActivity",
            ".vip.activity.FirstShowNewUserSevenDayVipActivity",
            ".activity.MainActivity"
          ],
          "matches": "ImageView[vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13263706",
            "https://i.gkd.li/i/14381735",
            "https://i.gkd.li/i/16929322",
            "https://i.gkd.li/i/22275220",
            "https://i.gkd.li/i/30662836"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.youdao.feature_ai.AiMainActivity",
          "matches": "[vid=\"aiv_guide_cancel\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/7bfd334a-38a0-4251-966c-1df55c168425",
          "snapshotUrls": "https://i.gkd.li/i/16426631",
          "fastQuery": true
        },
        {
          "activityIds": [
            "com.youdao.dict.vip.activity.RecallSevenDayVipActivity",
            "com.youdao.dict.vip.activity.SecondShowNewUserSevenDayVipActivity",
            ".activity.DictQueryActivity"
          ],
          "matches": "ImageView[vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13263706",
            "https://i.gkd.li/i/14381735",
            "https://i.gkd.li/i/16929322"
          ],
          "fastQuery": true
        },
        {
          "matches": "ImageView[id=\"com.youdao.dict:id/iv_close\"][clickable=true]",
          "fastQuery": true,
          "activityIds": [
            "com.youdao.dict.vip.activity.RecallSevenDayVipActivity",
            "com.youdao.dict.vip.activity.SecondShowNewUserSevenDayVipActivity"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "评价提示",
      "activityIds": "com.youdao.dict.activity.MainActivity",
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "matchDelay": 10000,
      "snapshotUrls": [
        "https://i.gkd.li/i/13540941",
        "https://i.gkd.li/i/14256301"
      ],
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": [
            ".activity.MainActivity",
            ".activity.DictQueryActivity"
          ],
          "matches": "[vid=\"btn_never\"][text*=\"不再提醒\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13540941",
            "https://i.gkd.li/i/14256301"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchDelay": 10000
        },
        {
          "matches": "[id=\"com.youdao.dict:id/btn_never\"][text*=\"不再提醒\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "matchDelay": 10000
        }
      ]
    },
    {
      "key": 4,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13627912",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"tv_version\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13627912",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.youdao.dict:id/tv_version\"] + [id=\"com.youdao.dict:id/iv_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".activity.MainActivity",
            ".activity.DictQueryActivity"
          ],
          "matches": "[vid=\"aivClose\" || vid=\"course_one_course_close\" || vid=\"home_ad_close\" || vid=\"course_four_course_close\" || vid=\"promotion_close_zone\" || vid=\"ivClose\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/df92c524-c732-4c16-9266-326056c9acf8",
          "snapshotUrls": [
            "https://i.gkd.li/i/14468564",
            "https://i.gkd.li/i/14567234",
            "https://i.gkd.li/i/14895765",
            "https://i.gkd.li/i/14009705",
            "https://i.gkd.li/i/14559287",
            "https://i.gkd.li/i/17082441",
            "https://i.gkd.li/i/17115693",
            "https://i.gkd.li/i/34186897"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/14468628",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 8,
      "name": "全屏广告-开学福利弹窗",
      "desc": "点击[不要再提醒我]-点击关闭",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".activity.MainActivity",
      "rules": [
        {
          "matches": "[text=\"不要再提醒我\"][checked=false]",
          "exampleUrls": "https://m.gkd.li/57941037/f665b390-2ef6-47be-8246-99632b24c5de",
          "snapshotUrls": "https://i.gkd.li/i/14586448",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "[vid=\"dialog_close_btn\"]",
          "exampleUrls": "https://m.gkd.li/57941037/f665b390-2ef6-47be-8246-99632b24c5de",
          "snapshotUrls": "https://i.gkd.li/i/14586448",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.MainActivity"
        },
        {
          "matches": "[text=\"不要再提醒我\"][checked=false]",
          "exampleUrls": "https://m.gkd.li/57941037/f665b390-2ef6-47be-8246-99632b24c5de",
          "snapshotUrls": "https://i.gkd.li/i/14586448",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.youdao.dict.activity.MainActivity"
        },
        {
          "preKeys": 2,
          "matches": "[vid=\"dialog_close_btn\"]",
          "exampleUrls": "https://m.gkd.li/57941037/f665b390-2ef6-47be-8246-99632b24c5de",
          "snapshotUrls": "https://i.gkd.li/i/14586448",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.youdao.dict.activity.MainActivity"
        }
      ]
    },
    {
      "key": 9,
      "name": "全屏广告",
      "enable": false,
      "rules": [
        {
          "name": "首页-弹窗广告",
          "fastQuery": true,
          "activityIds": [
            "com.youdao.dict.activity.MainActivity",
            "com.youdao.dict.activity.DictSplashActivity"
          ],
          "matches": "@ImageView[id=\"com.youdao.dict:id/iv_close_bt\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12893419",
            "https://i.gkd.li/i/13263801"
          ]
        },
        {
          "name": "学习页面-弹窗广告",
          "fastQuery": true,
          "activityIds": [
            "com.youdao.dict.edu.main.MainPopDialog",
            "com.youdao.dict.activity.MainActivity"
          ],
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12893450",
            "https://i.gkd.li/i/16859556"
          ]
        },
        {
          "name": "抽奖机会-弹窗广告",
          "fastQuery": true,
          "activityIds": [
            "com.youdao.dict.activity.DictSplashActivity",
            "com.youdao.dict.activity.DictHotBootSplashActivity"
          ],
          "matches": "[vid=\"skip_bottom_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13931202",
            "https://i.gkd.li/i/14064647"
          ]
        },
        {
          "fastQuery": true,
          "name": "首页-礼包弹窗",
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "matches": "[vid=\"image\"] + [vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14296482"
        },
        {
          "name": "学习页面-弹窗广告 (2)",
          "activityIds": [
            "com.youdao.dict.edu.main.MainPopDialog",
            "com.youdao.dict.activity.MainActivity"
          ],
          "fastQuery": true,
          "matches": "@ImageView[id=\"com.youdao.dict:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12893450"
        },
        {
          "name": "抽奖机会-弹窗广告 (2)",
          "activityIds": "com.youdao.dict.activity.DictSplashActivity",
          "fastQuery": true,
          "matches": "[vid=\"skip_bottom_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/13931202"
        }
      ]
    },
    {
      "key": 10,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            "com.youdao.dict.activity.MainActivity",
            "com.youdao.dict.activity.DictQueryActivity"
          ],
          "matches": "[vid=\"aivClose\" || vid=\"course_one_course_close\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/e365b983-15c7-4ac7-acd7-9d7be4c45160",
          "snapshotUrls": [
            "https://i.gkd.li/i/14468564",
            "https://i.gkd.li/i/14468628",
            "https://i.gkd.li/i/14567234",
            "https://i.gkd.li/i/14895765",
            "https://i.gkd.li/i/17082441"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "matches": "[vid=\"home_ad_close\" || vid=\"course_four_course_close\" || vid=\"promotion_close_zone\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14009705",
            "https://i.gkd.li/i/14559287",
            "https://i.gkd.li/i/17115693"
          ],
          "fastQuery": true
        },
        {
          "name": "右下角悬浮卡片",
          "fastQuery": true,
          "activityIds": [
            "com.youdao.dict.activity.MainActivity",
            "com.youdao.dict.activity.DictQueryActivity"
          ],
          "matches": "[vid=\"aivClose\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/e365b983-15c7-4ac7-acd7-9d7be4c45160",
          "snapshotUrls": [
            "https://i.gkd.li/i/14468564",
            "https://i.gkd.li/i/14468628",
            "https://i.gkd.li/i/14567234"
          ]
        },
        {
          "name": "主页卡片广告",
          "fastQuery": true,
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "matches": "[vid=\"home_ad_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14009705"
        },
        {
          "name": "单词页面下方广告",
          "fastQuery": true,
          "activityIds": [
            "com.youdao.dict.activity.MainActivity",
            ".activity.DictQueryActivity"
          ],
          "matches": "[vid=\"course_four_course_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/4045988d-93bb-4aad-80dd-f14da296a214",
          "snapshotUrls": [
            "https://i.gkd.li/i/14559287",
            "https://i.gkd.li/i/17268301"
          ]
        },
        {
          "name": "单词页面下方学习技巧",
          "fastQuery": true,
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "matches": "[vid=\"course_one_course_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/0c033574-4bae-4bcc-bcf9-901ce8b5061b",
          "snapshotUrls": "https://i.gkd.li/i/14895765"
        }
      ]
    },
    {
      "key": 11,
      "name": "分段广告-单词页面卡片式广告",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "fastQuery": true,
          "matches": "[text=\"广告\"] - [vid=\"close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12668574",
            "https://i.gkd.li/i/13800055"
          ]
        },
        {
          "preKeys": 0,
          "activityIds": "com.youdao.dict.activity.MainActivity",
          "fastQuery": true,
          "matches": "[vid=\"close_pop\"][text=\"收起广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12668583",
            "https://i.gkd.li/i/13800056"
          ]
        }
      ]
    },
    {
      "key": 12,
      "name": "局部广告-首页-视频广告",
      "enable": false,
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14037717",
      "rules": [
        {
          "matches": "[vid=\"home_ad_close\"]",
          "fastQuery": true
        }
      ]
    }
  ]
});
