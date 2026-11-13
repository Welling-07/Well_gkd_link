// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.douban.frodo",
  "name": "豆瓣",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "desc": "⚠️[跳过]广告前可能有多次无效点击,属于正常现象",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "fastQuery": true,
      "matchRoot": true,
      "rules": [
        {
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15981630",
          "fastQuery": true,
          "matchRoot": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@[clickable=true] >2 [text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/26608409",
          "fastQuery": true,
          "matchRoot": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "excludeMatches": "[text=\"去绑定邮箱\" || text=\"历史\"][visibleToUser=true]",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/17687115",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/23283375",
            "https://i.gkd.li/i/29175754"
          ],
          "fastQuery": true,
          "matchRoot": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "matches": "@View[width<170 && height<170] <3 FrameLayout <2 FrameLayout < [vid=\"sdk_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/29440951",
            "https://i.gkd.li/i/34211578"
          ],
          "fastQuery": true,
          "matchRoot": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "matches": "@View[width<170 && height<170] <3 FrameLayout[childCount=3] < [vid=\"sdk_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/34494192",
            "https://i.gkd.li/i/34514159"
          ],
          "fastQuery": true,
          "matchRoot": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "name": "点击坐标①",
          "position": {
            "left": "width * 0.875",
            "top": "width * 0.10"
          },
          "anyMatches": [
            "[vid=\"ad_view\"][visibleToUser=true][width>=720][childCount!=0]",
            "[vid=\"sdk_view\"] >n [vid=\"animation_view\"][visibleToUser=true][width>=720]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23283060",
          "excludeSnapshotUrls": "https://i.gkd.li/i/29440952",
          "fastQuery": true,
          "matchRoot": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "preKeys": 5,
          "name": "点击坐标②",
          "position": {
            "left": "width * 0.875",
            "top": "width * 0.135"
          },
          "anyMatches": [
            "[vid=\"ad_view\"][visibleToUser=true][width>=720][childCount!=0]",
            "[vid=\"sdk_view\"] >n [vid=\"animation_view\"][visibleToUser=true][width>=720]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13575257",
            "https://i.gkd.li/i/18423724",
            "https://i.gkd.li/i/23982586",
            "https://i.gkd.li/i/23382528"
          ],
          "fastQuery": true,
          "matchRoot": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "preKeys": 6,
          "name": "点击坐标③",
          "position": {
            "left": "width * 0.875",
            "top": "width * 0.17"
          },
          "anyMatches": [
            "[vid=\"ad_view\"][visibleToUser=true][width>=720][childCount!=0]",
            "[vid=\"sdk_view\"] >n [vid=\"animation_view\"][visibleToUser=true][width>=720]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13601755",
            "https://i.gkd.li/i/23324118",
            "https://i.gkd.li/i/23324139",
            "https://i.gkd.li/i/23652259",
            "https://i.gkd.li/i/24191638",
            "https://i.gkd.li/i/24362806"
          ],
          "fastQuery": true,
          "matchRoot": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "preKeys": 7,
          "name": "点击坐标④",
          "position": {
            "left": "width * 0.875",
            "top": "width * 0.20"
          },
          "anyMatches": [
            "[vid=\"ad_view\"][visibleToUser=true][width>=720][childCount!=0]",
            "[vid=\"sdk_view\"] >n [vid=\"animation_view\"][visibleToUser=true][width>=720]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/16054268",
          "fastQuery": true,
          "matchRoot": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/15981630",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0,
          "fastQuery": true,
          "matchRoot": true
        },
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.8833",
            "top": "width * 0.1388"
          },
          "excludeMatches": "[id=\"com.douban.frodo:id/_ad_image_\"][width=1200]",
          "matches": "[id=\"com.douban.frodo:id/_ad_image_\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13575257",
            "https://i.gkd.li/i/13575547"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 9,
          "priorityTime": 10000,
          "matchRoot": true
        },
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.8666",
            "top": "width * 0.1625"
          },
          "matches": "[id=\"com.douban.frodo:id/_ad_image_\"][width=1200]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13601755",
            "https://i.gkd.li/i/16054268"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 9,
          "priorityTime": 10000,
          "matchRoot": true
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告",
      "desc": "①点击[关闭] ②点击[不感兴趣]",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".activity.SplashActivity",
            ".subject.structure.activity.MovieActivity",
            ".group.activity.GroupTopicActivity",
            ".fangorns.topic.TopicsActivity",
            ".subject.struct2.MovieActivity2"
          ],
          "matches": "[vid=\"ad_header_new\"] > [vid=\"menu_item\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/18424402",
            "https://i.gkd.li/i/18424418",
            "https://i.gkd.li/i/18424924",
            "https://i.gkd.li/i/19615325",
            "https://i.gkd.li/i/23982599"
          ],
          "fastQuery": true
        },
        {
          "activityIds": [
            ".group.activity.GroupDetailActivity",
            ".group.activity.GroupTopicActivity",
            ".search.activity.NewSearchActivity"
          ],
          "matches": "[vid=\"ad_footer\" || vid=\"feed_ad_group\"] >(1,2) [text=\"广告\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/18424681",
            "https://i.gkd.li/i/18424818",
            "https://i.gkd.li/i/29299047"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18422533",
          "fastQuery": true
        },
        {
          "activityIds": ".search.activity.NewSearchActivity",
          "matches": "@[vid=\"ad_not_interest\" || vid=\"group_ad_not_interest\"] -n [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/29295745",
            "https://i.gkd.li/i/29298939"
          ],
          "fastQuery": true
        },
        {
          "activityIds": ".group.activity.GroupTopicActivity",
          "matches": "[vid=\"ad_not_interest\" || vid=\"group_ad_not_interest\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/31183170",
            "https://i.gkd.li/i/31183359"
          ],
          "fastQuery": true
        },
        {
          "activityIds": ".group.activity.GroupTopicActivity",
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^=\"dislike\"] -2 FrameLayout >2 [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/11d3ea75-c640-4b91-942e-3bf83b2e5f5e",
          "snapshotUrls": "https://i.gkd.li/i/19621152",
          "fastQuery": true
        },
        {
          "activityIds": ".group.activity.GroupTopicActivity",
          "matches": "@Image[childCount=0][visibleToUser=true][text=\"\"] < View[childCount=1] -2 View >2 [childCount=0][text=\"广告\"] <<n [vid=\"structure_header_container\" || vid=\"llHeaderContainer\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/18424747",
            "https://i.gkd.li/i/31182864"
          ],
          "fastQuery": true
        },
        {
          "activityIds": ".group.activity.GroupTopicActivity",
          "matches": "@ImageView[visibleToUser=true][width<63 && height<63] <<n [childCount=2] >2 [text^=\"应​用​名​称​：\"][text.length>30]",
          "snapshotUrls": "https://i.gkd.li/i/31183730",
          "excludeSnapshotUrls": "https://i.gkd.li/i/31183914",
          "fastQuery": true
        },
        {
          "preKeys": [
            0,
            1,
            2,
            3,
            4,
            5,
            6
          ],
          "name": "②点击[不感兴趣]",
          "matches": "@[clickable=true] >(1,2) [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/18424404",
            "https://i.gkd.li/i/18424419",
            "https://i.gkd.li/i/18424574",
            "https://i.gkd.li/i/18424711",
            "https://i.gkd.li/i/19615333",
            "https://i.gkd.li/i/29295746",
            "https://i.gkd.li/i/31182735"
          ],
          "activityIds": [
            ".activity.SplashActivity",
            ".subject.structure.activity.MovieActivity",
            ".group.activity.GroupDetailActivity",
            ".group.activity.GroupTopicActivity",
            ".fangorns.topic.TopicsActivity",
            ".subject.struct2.MovieActivity2",
            ".search.activity.NewSearchActivity"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "评价提示-关闭评分反馈弹窗",
      "fastQuery": true,
      "activityIds": "com.douban.frodo.activity.SplashActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.SplashActivity",
          "matches": [
            "[text^=\"喜欢豆瓣吗\"][visibleToUser=true]",
            "[text=\"下次再说\"][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/18424257",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"下次再说\"][id=\"com.douban.frodo:id/neutral\"]",
          "snapshotUrls": "https://i.gkd.li/i/12548314",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.douban.frodo.activity.SplashActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-长按图片后[保存]",
      "desc": "点击[保存]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".group.activity.GroupTopicActivity",
            ".baseproject.image.ImageActivity"
          ],
          "matches": "[text=\"保存\" || text=\"保存图片到相册\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/31184441",
            "https://i.gkd.li/i/31184665",
            "https://i.gkd.li/i/31184797"
          ],
          "exampleUrls": "https://e.gkd.li/f6c2dab4-e87e-4ae5-a778-b97d6cc2b760"
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".group.activity.GroupTopicActivity",
            ".search.activity.NewSearchActivity"
          ],
          "matches": "@ImageView[visibleToUser=true] < FrameLayout - [childCount=2] > [text^=\"立即\" || text^=\"了解\" || text*=\"查看\" || text*=\"下载\" || text*=\"领取\" || text$=\"应用\" || text$=\"详情\" || text$=\"小程序\"][text.length<6]",
          "snapshotUrls": [
            "https://i.gkd.li/i/18424415",
            "https://i.gkd.li/i/29175754",
            "https://i.gkd.li/i/29298575"
          ],
          "fastQuery": true
        },
        {
          "activityIds": ".group.activity.GroupTopicActivity",
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout +2 FrameLayout >2 [text^=\"立即\" || text^=\"了解\" || text*=\"查看\" || text*=\"下载\" || text*=\"领取\" || text$=\"应用\" || text$=\"详情\" || text$=\"小程序\"][text.length<6]",
          "exampleUrls": "https://e.gkd.li/735decb0-7f08-4c7d-8199-a38faf213f77",
          "snapshotUrls": "https://i.gkd.li/i/18424859",
          "fastQuery": true
        },
        {
          "activityIds": ".activity.SplashActivity",
          "matches": "[vid=\"venue_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/86f2589d-87eb-4b9a-83aa-4248b905f7b2",
          "snapshotUrls": "https://i.gkd.li/i/18717693",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 5,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".subject.structure.activity.MovieActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": "https://i.gkd.li/i/13195565"
        },
        {
          "fastQuery": true,
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": "https://i.gkd.li/i/13328126"
        },
        {
          "fastQuery": true,
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^=\"扭动或点击\"]",
          "exampleUrls": "https://e.gkd.li/f8b1e031-3ec1-422c-9214-8350195642cd",
          "snapshotUrls": "https://i.gkd.li/i/13328126"
        },
        {
          "fastQuery": true,
          "activityIds": ".subject.structure.activity.MovieActivity",
          "matches": [
            "[text=\"广告\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/208939d0-9d7f-4a44-8e7d-5070478c15df",
          "snapshotUrls": "https://i.gkd.li/i/18631520"
        },
        {
          "fastQuery": true,
          "activityIds": ".subject.structure.activity.MovieActivity",
          "matches": [
            "[text=\"你发现了一枚徽章\"][visibleToUser=true]",
            "[vid=\"confirmLayout\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/ca74a922-fb47-4fc8-8111-b6a66c2465ff",
          "snapshotUrls": "https://i.gkd.li/i/18717771"
        },
        {
          "name": "腾讯广告-1",
          "activityIds": "com.douban.frodo.subject.structure.activity.MovieActivity",
          "matches": "ImageView - FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13195565"
        },
        {
          "name": "腾讯广告-2",
          "matches": "ImageView -n FrameLayout[childCount=2] > FrameLayout > FrameLayout > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/13296656",
            "https://i.gkd.li/i/13328126"
          ]
        }
      ]
    },
    {
      "key": 6,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".activity.BetaApkDialogActivity",
            ".activity.SplashActivity"
          ],
          "matches": [
            "[text=\"新版试用邀请\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13228832",
            "https://i.gkd.li/i/13659160"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text=\"新版试用邀请\"]",
            "@[text=\"取消\"] + [text=\"下载\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13228832",
            "https://i.gkd.li/i/13659160"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 7,
      "name": "其他-标记看过的影视弹窗",
      "desc": "点击[取消]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".subject.structure.activity.MovieActivity",
          "matches": [
            "[text=\"标记看过的影视\"][visibleToUser=true]",
            "[vid=\"cancelLayout\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/8067419c-a902-4750-9e1e-655bfc5c7342",
          "snapshotUrls": "https://i.gkd.li/i/18717798"
        }
      ]
    },
    {
      "key": 8,
      "name": "功能类-不分享/同步作品短评",
      "desc": "书影音-作品-状态-不分享/同步短评(5s后可手动)",
      "enable": false,
      "fastQuery": true,
      "matchTime": 5000,
      "resetMatch": "activity",
      "activityIds": "com.douban.frodo.subject.activity.RatingActivity",
      "rules": [
        {
          "name": "不分享到微信、微博",
          "matches": "@LinearLayout > [id=\"com.douban.frodo:id/check_weibo_wechat\"][visibleToUser=true][checked=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12508777"
          ],
          "fastQuery": true,
          "matchTime": 5000,
          "resetMatch": "activity",
          "activityIds": "com.douban.frodo.subject.activity.RatingActivity"
        },
        {
          "name": "不同步到动态",
          "matches": "@LinearLayout > [id=\"com.douban.frodo:id/check_status\"][visibleToUser=true][checked=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12508777"
          ],
          "fastQuery": true,
          "matchTime": 5000,
          "resetMatch": "activity",
          "activityIds": "com.douban.frodo.subject.activity.RatingActivity"
        }
      ]
    },
    {
      "key": 9,
      "name": "分段广告-剧照广告",
      "enable": false,
      "activityIds": "com.douban.frodo.baseproject.image.SociableImageActivity",
      "rules": [
        {
          "matches": "TextView[id=\"com.douban.frodo:id/ad_not_interest\"][text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12509475",
          "activityIds": "com.douban.frodo.baseproject.image.SociableImageActivity"
        },
        {
          "matches": "TextView[id=\"com.douban.frodo:id/mainText\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12509476",
          "activityIds": "com.douban.frodo.baseproject.image.SociableImageActivity"
        }
      ]
    },
    {
      "key": 10,
      "name": "分段广告-信息流广告",
      "desc": "点击关闭-点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.douban.frodo.activity.SplashActivity",
        "com.douban.frodo.status.activity.StatusDetailActivity",
        "com.douban.frodo.subject.structure.activity.MovieActivity",
        "com.douban.frodo.subject.activity.ForumTopicActivity",
        "com.douban.frodo.group.activity.GroupDetailActivity",
        "com.douban.frodo.group.activity.GroupTopicActivity",
        "com.douban.frodo.search.activity.NewSearchActivity"
      ],
      "rules": [
        {
          "name": "首页-动态-信息流广告",
          "matches": "ImageView[id=\"com.douban.frodo:id/avatar\"][index=0] +n ImageView[id=\"com.douban.frodo:id/menu_item\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12547964",
            "https://i.gkd.li/i/12548011",
            "https://i.gkd.li/i/12548046"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.douban.frodo.activity.SplashActivity",
            "com.douban.frodo.status.activity.StatusDetailActivity",
            "com.douban.frodo.subject.structure.activity.MovieActivity",
            "com.douban.frodo.subject.activity.ForumTopicActivity",
            "com.douban.frodo.group.activity.GroupDetailActivity",
            "com.douban.frodo.group.activity.GroupTopicActivity",
            "com.douban.frodo.search.activity.NewSearchActivity"
          ]
        },
        {
          "name": "小组-帖子列表信息流广告",
          "matches": "[text=\"广告\"][vid*=\"ad\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12723569",
            "https://i.gkd.li/i/13347455",
            "https://i.gkd.li/i/13692895",
            "https://i.gkd.li/i/16369005"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.douban.frodo.activity.SplashActivity",
            "com.douban.frodo.status.activity.StatusDetailActivity",
            "com.douban.frodo.subject.structure.activity.MovieActivity",
            "com.douban.frodo.subject.activity.ForumTopicActivity",
            "com.douban.frodo.group.activity.GroupDetailActivity",
            "com.douban.frodo.group.activity.GroupTopicActivity",
            "com.douban.frodo.search.activity.NewSearchActivity"
          ]
        },
        {
          "name": "点击不感兴趣",
          "preKeys": 0,
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12548016",
            "https://i.gkd.li/i/12723422",
            "https://i.gkd.li/i/12548016",
            "https://i.gkd.li/i/12723422",
            "https://i.gkd.li/i/16369007"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.douban.frodo.activity.SplashActivity",
            "com.douban.frodo.status.activity.StatusDetailActivity",
            "com.douban.frodo.subject.structure.activity.MovieActivity",
            "com.douban.frodo.subject.activity.ForumTopicActivity",
            "com.douban.frodo.group.activity.GroupDetailActivity",
            "com.douban.frodo.group.activity.GroupTopicActivity",
            "com.douban.frodo.search.activity.NewSearchActivity"
          ]
        },
        {
          "name": "首页-动态-信息流广告 (2)",
          "activityIds": [
            "com.douban.frodo.activity.SplashActivity",
            "com.douban.frodo.status.activity.StatusDetailActivity"
          ],
          "matches": "ImageView[id=\"com.douban.frodo:id/avatar\"][index=0] +n ImageView[id=\"com.douban.frodo:id/menu_item\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12547964",
            "https://i.gkd.li/i/12548011",
            "https://i.gkd.li/i/12548046"
          ],
          "fastQuery": true
        },
        {
          "name": "小组-帖子列表信息流广告 (2)",
          "activityIds": [
            "com.douban.frodo.group.activity.GroupDetailActivity",
            "com.douban.frodo.activity.SplashActivity"
          ],
          "matches": "[id=\"com.douban.frodo:id/ad_tag\"][text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12723569",
            "https://i.gkd.li/i/13347455"
          ],
          "fastQuery": true
        },
        {
          "name": "点击不感兴趣 (2)",
          "preKeys": 3,
          "matches": "@LinearLayout[clickable=true] > [id=\"com.douban.frodo:id/mainText\"][text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12548016",
            "https://i.gkd.li/i/12723422"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.douban.frodo.activity.SplashActivity",
            "com.douban.frodo.status.activity.StatusDetailActivity",
            "com.douban.frodo.subject.structure.activity.MovieActivity",
            "com.douban.frodo.subject.activity.ForumTopicActivity",
            "com.douban.frodo.group.activity.GroupDetailActivity",
            "com.douban.frodo.group.activity.GroupTopicActivity"
          ]
        }
      ]
    },
    {
      "key": 11,
      "name": "分段广告-卡片广告",
      "desc": "点击关闭-点击不感兴趣",
      "enable": false,
      "actionCd": 10000,
      "activityIds": "com.douban.frodo.activity.SplashActivity",
      "rules": [
        {
          "name": "点击\"广告\"",
          "matches": "@View[clickable=true] > Image - TextView[text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12548131",
          "actionCd": 10000,
          "activityIds": "com.douban.frodo.activity.SplashActivity"
        },
        {
          "preKeys": 0,
          "name": "点击\"不感兴趣\"",
          "matches": "[text=\"不感兴趣\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12548116",
          "actionCd": 10000,
          "activityIds": "com.douban.frodo.activity.SplashActivity"
        }
      ]
    },
    {
      "key": 12,
      "name": "局部广告-搜索页/帖子内容与评论区中间的卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "rules": [
        {
          "name": "点击\"x\"关闭型",
          "activityIds": "com.douban.frodo.group.activity.GroupTopicActivity",
          "matches": "ImageView[id=null] +(n) LinearLayout[childCount<=2] + FrameLayout[childCount=1] > ImageView[id=null][visibleToUser=true][top>250]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12674798",
            "https://i.gkd.li/i/12674842",
            "https://i.gkd.li/i/12723462",
            "https://i.gkd.li/i/12723800",
            "https://i.gkd.li/i/13402399",
            "https://i.gkd.li/i/12548476"
          ],
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 13,
      "name": "局部广告-个性化内容推荐弹窗",
      "desc": "首页底部-个性化内容推荐弹窗-点击卡片右上角x直接关闭",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.douban.frodo.activity.SplashActivity",
          "matches": "[id=\"com.douban.frodo:id/info\"][text^=\"开启个性化推荐\"] - [id=\"com.douban.frodo:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12836798"
        },
        {
          "activityIds": [
            "com.douban.frodo.activity.SplashActivity"
          ],
          "matches": "[id=\"com.douban.frodo:id/info\"][text^=\"开启个性化推荐\"] - [id=\"com.douban.frodo:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12836798"
        }
      ]
    },
    {
      "key": 14,
      "name": "未分类-卡片广告",
      "desc": "书影音-卡片广告-点击卡片右下角\"广告\"文字",
      "enable": false,
      "actionCd": 10000,
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12548160",
      "activityIds": "com.douban.frodo.activity.SplashActivity",
      "rules": [
        {
          "name": "点击【广告】",
          "matches": "@View[clickable=true] > Image - TextView[text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12548131",
          "actionCd": 10000,
          "fastQuery": true,
          "activityIds": "com.douban.frodo.activity.SplashActivity"
        },
        {
          "preKeys": 0,
          "name": "点击【不感兴趣】",
          "matches": "[text=\"广告\"] < * + * > [text=\"不感兴趣\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12548116",
          "actionCd": 10000,
          "fastQuery": true,
          "activityIds": "com.douban.frodo.activity.SplashActivity"
        }
      ]
    },
    {
      "key": 15,
      "name": "未分类-搜索页/帖子内容与评论区中间的卡片式广告",
      "desc": "部分有二次弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "rules": [
        {
          "name": "点击【x】关闭型",
          "activityIds": [
            "com.douban.frodo.group.activity.GroupTopicActivity"
          ],
          "matches": "ImageView[id=null] +(n) LinearLayout[childCount<=2] + FrameLayout[childCount=1] > ImageView[id=null][visibleToUser=true][top>250]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12674798",
            "https://i.gkd.li/i/12674842",
            "https://i.gkd.li/i/12723462",
            "https://i.gkd.li/i/12723800",
            "https://i.gkd.li/i/13402399",
            "https://i.gkd.li/i/12548476"
          ],
          "actionMaximum": 1,
          "resetMatch": "activity"
        },
        {
          "name": "点击【广告】选原因型",
          "matches": "[text=\"广告\"][id$=\"ad_not_interest\"]",
          "activityIds": [
            "com.douban.frodo.subject.structure.activity.MovieActivity",
            "com.douban.frodo.subject.activity.ForumTopicActivity",
            "com.douban.frodo.group.activity.GroupTopicActivity",
            "com.douban.frodo.activity.SplashActivity",
            "com.douban.frodo.search.activity.NewSearchActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12548064",
            "https://i.gkd.li/i/12548450",
            "https://i.gkd.li/i/12723751",
            "https://i.gkd.li/i/13062693",
            "https://i.gkd.li/i/13692895"
          ],
          "actionMaximum": 1,
          "resetMatch": "activity"
        },
        {
          "name": "点击【不感兴趣】",
          "preKeys": 1,
          "matches": "@LinearLayout[clickable=true] > [id=\"com.douban.frodo:id/mainText\"][text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12548016",
            "https://i.gkd.li/i/12723422"
          ],
          "actionMaximum": 1,
          "resetMatch": "activity"
        }
      ]
    },
    {
      "key": 16,
      "name": "未分类-版本更新",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            "com.douban.frodo.activity.BetaApkDialogActivity",
            "com.douban.frodo.activity.SplashActivity"
          ],
          "matches": [
            "[text=\"新版试用邀请\"]",
            "@[text=\"取消\"] + [text=\"下载\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13228832",
            "https://i.gkd.li/i/13659160"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
