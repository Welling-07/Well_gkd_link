// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sina.weibo",
  "name": "微博",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".feed.MPDialogActivity",
          "matches": "WebView[text=\"Wbox\"] > View[childCount=1] >(1,2) View[childCount=2] > @TextView[clickable=true][visibleToUser=true][childCount=0][index=1][width<200] <<n [vid=\"container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14969848",
            "https://i.gkd.li/i/16944794",
            "https://i.gkd.li/i/19807700"
          ],
          "fastQuery": true
        },
        {
          "activityIds": ".feed.MPDialogActivity",
          "matches": "@Image[text=\"close\"] < View[childCount=4] <2 * <<n [vid=\"container\"]",
          "snapshotUrls": "https://i.gkd.li/i/14033735",
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.business",
          "matches": "@[id=\"com.sina.weibo:id/btn_close\"] - FrameLayout > [id=\"com.sina.weibo:id/ad_tag\"]",
          "snapshotUrls": "https://i.gkd.li/i/12750090",
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.feed.MPDialogActivity",
          "matches": "View[childCount=2] > @TextView[clickable=true] - View >n [visibleToUser=true][text=\"元\"] <<n [id=\"com.sina.weibo:id/container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13670266",
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.page.ad.DiscoverAdDialog",
          "matches": "[id=\"com.sina.weibo:id/ad_portrait_layout\"] + [id=\"com.sina.weibo:id/btn_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705974",
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.feed.MPDialogActivity",
          "matches": "WebView[text=\"Wbox\"] > View[childCount=1] > View[childCount=2] > @TextView[clickable=true][visibleToUser=true][childCount=0][index=1][width<200] <<n [vid=\"container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14969848",
            "https://i.gkd.li/i/16944794"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.feed.MPDialogActivity",
          "matches": "@Image[text=\"close\"] < View[childCount=4] <2 * <<n [id=\"com.sina.weibo:id/container\"]",
          "snapshotUrls": "https://i.gkd.li/i/14033735",
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.feed.MPDialogActivity",
          "matches": "View[childCount=2] > @TextView[clickable=true] - View >n [text=\"元\"] <<n [id=\"com.sina.weibo:id/container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13670266",
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.feed.MPDialogActivity",
          "matches": "[text^=\"今日签到\"] <n * + @TextView[visibleToUser=true] <<n [vid=\"container\"]",
          "snapshotUrls": "https://i.gkd.li/i/14969848",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "desc": "自动点击暂不开启",
      "fastQuery": true,
      "activityIds": "com.sina.weibo.MainTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/12705986",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".notifyguidev2.NotifyGuideV2Activity",
          "matches": "[text=\"暂不开启\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/18342279",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.sina.weibo:id/bt_cancel\"][text=\"暂不开启\"] + [id=\"com.sina.weibo:id/bt_confirm\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705979",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.sina.weibo.MainTabActivity"
        },
        {
          "matches": "[text^=\"打开通知\"] < LinearLayout + ImageView[id=\"com.sina.weibo:id/right_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705986",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.sina.weibo.MainTabActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-定位权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "rules": [
        {
          "activityIds": [
            ".MainTabActivity",
            ".utils.WeiboDialog$CustomDialog"
          ],
          "matches": "@[text=\"以后再说\"] +2 [text=\"去开启\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13218093",
            "https://i.gkd.li/i/13003311"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".MainTabActivity",
          "matches": "@[vid=\"btn_close\"] +2 [text=\"使用您的位置信息\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255595",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0
        },
        {
          "matches": "@[text=\"以后再说\"] +2 [text=\"去开启\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13218093",
            "https://i.gkd.li/i/13003311"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0
        },
        {
          "matches": "@[id=\"com.sina.weibo:id/btn_close\"] +2 [text=\"使用您的位置信息\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255595",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 2
        }
      ]
    },
    {
      "key": 3,
      "name": "分段广告-信息流广告",
      "desc": "点击关闭-点击[不感兴趣/不想看到此类内容]",
      "fastQuery": true,
      "activityIds": [
        ".feed.DetailWeiboActivity",
        ".feed.detailrefactor.DetailPageActivity",
        ".feed.SubCommentActiity",
        ".feed.halfcontainer.HalfContainerPageActivity"
      ],
      "rules": [
        {
          "matches": "@[vid=\"ll_close\" || vid=\"closeButton\"] > [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13852321",
            "https://i.gkd.li/i/19526000",
            "https://i.gkd.li/i/21828244",
            "https://i.gkd.li/i/24291704",
            "https://i.gkd.li/i/19538265"
          ],
          "exampleUrls": "https://e.gkd.li/a3d4a9fb-43a0-46e0-a073-13d9691beb19",
          "fastQuery": true,
          "activityIds": [
            ".feed.DetailWeiboActivity",
            ".feed.detailrefactor.DetailPageActivity",
            ".feed.SubCommentActiity",
            ".feed.halfcontainer.HalfContainerPageActivity"
          ]
        },
        {
          "matches": "RelativeLayout >2 ImageView[vid=\"right_top_tag\" || vid=\"iv_ad_x\"][clickable=true][visibleToUser=true][width<200]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14210775",
            "https://i.gkd.li/i/22275086"
          ],
          "exampleUrls": "https://e.gkd.li/f0d15b65-21f5-4398-9d24-da858ea34a8b",
          "fastQuery": true,
          "activityIds": [
            ".feed.DetailWeiboActivity",
            ".feed.detailrefactor.DetailPageActivity",
            ".feed.SubCommentActiity",
            ".feed.halfcontainer.HalfContainerPageActivity"
          ]
        },
        {
          "matches": [
            "[vid=\"left_img_ad_container\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13635551",
            "https://i.gkd.li/i/19525985"
          ],
          "fastQuery": true,
          "activityIds": [
            ".feed.DetailWeiboActivity",
            ".feed.detailrefactor.DetailPageActivity",
            ".feed.SubCommentActiity",
            ".feed.halfcontainer.HalfContainerPageActivity"
          ]
        },
        {
          "matches": "@[name$=\"FrameLayout\" || name$=\"ImageView\"][clickable=true][childCount<2][width<50 && height<50] <<n [name$=\"Layout\"] -(1,2) [visibleToUser=true] >(1,3) [vid=\"shareLayout_0\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/21166775",
            "https://i.gkd.li/i/21828269",
            "https://i.gkd.li/i/31557775"
          ],
          "exampleUrls": "https://e.gkd.li/83586a40-3c41-460a-acab-248517589fe5",
          "fastQuery": true,
          "activityIds": [
            ".feed.DetailWeiboActivity",
            ".feed.detailrefactor.DetailPageActivity",
            ".feed.SubCommentActiity",
            ".feed.halfcontainer.HalfContainerPageActivity"
          ]
        },
        {
          "preKeys": [
            0,
            1,
            2,
            3
          ],
          "matchRoot": true,
          "anyMatches": [
            "[text$=\"不感兴趣\"][clickable=true]",
            "@LinearLayout[clickable=true] >2 [text=\"不感兴趣\" || text=\"不想看到此类内容\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13852322",
            "https://i.gkd.li/i/13958782",
            "https://i.gkd.li/i/16785777",
            "https://i.gkd.li/i/14730274",
            "https://i.gkd.li/i/19551451",
            "https://i.gkd.li/i/20710958",
            "https://i.gkd.li/i/21828246"
          ],
          "fastQuery": true,
          "activityIds": [
            ".feed.DetailWeiboActivity",
            ".feed.detailrefactor.DetailPageActivity",
            ".feed.SubCommentActiity",
            ".feed.halfcontainer.HalfContainerPageActivity"
          ]
        },
        {
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "[vid=\"ll_close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13852321",
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "[vid=\"corner_marker_view\"] >2 [vid=\"right_top_tag\"]",
          "snapshotUrls": "https://i.gkd.li/i/14210775",
          "fastQuery": true
        },
        {
          "position": {
            "left": "width * 0.9537",
            "top": "width * 0.0611"
          },
          "activityIds": "com.sina.weibo.MainTabActivity",
          "matches": "LinearLayout + LinearLayout[visibleToUser=true][childCount=6] > @ViewGroup > ViewGroup > FrameLayout > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/14729705",
            "https://i.gkd.li/i/14753916"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": [
            "[vid=\"left_img_ad_tag\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/039f312b-0d6a-4316-9737-ead761e8e194",
          "snapshotUrls": "https://i.gkd.li/i/16828094",
          "fastQuery": true
        },
        {
          "preKeys": 5,
          "name": "点击\"不感兴趣\"",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "[text=\"不感兴趣\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13852322",
          "fastQuery": true
        },
        {
          "preKeys": [
            5,
            6,
            8
          ],
          "name": "点击\"不想看到此类内容\"",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "@LinearLayout[index=1][clickable=true] >2 [text=\"不想看到此类内容\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13958782",
            "https://i.gkd.li/i/16785777"
          ],
          "fastQuery": true
        },
        {
          "preKeys": 7,
          "fastQuery": true,
          "activityIds": "com.sina.weibo.MainTabActivity",
          "matches": "@[clickable=true] >2 [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/14730274"
        },
        {
          "name": "点击关闭",
          "matches": "[text=\"广告\"] + [id=\"com.sina.weibo:id/iv_close_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13852321",
          "fastQuery": true,
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity"
        },
        {
          "preKeys": 12,
          "name": "点击\"不感兴趣\" (2)",
          "matches": "[text=\"不感兴趣\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13852322",
          "fastQuery": true,
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity"
        },
        {
          "preKeys": [
            12,
            6
          ],
          "name": "点击\"不想看到此类内容\" (2)",
          "matches": "@LinearLayout[index=1][clickable=true] >2 [text=\"不想看到此类内容\"]",
          "snapshotUrls": "https://i.gkd.li/i/13958782",
          "fastQuery": true,
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "评价提示-APP评分弹窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.sina.weibo.MainTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/13620220",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".MainTabActivity",
          "matches": "@[text=\"不了，谢谢\"] +4 [text=\"喜欢，给好评\"]",
          "snapshotUrls": "https://i.gkd.li/i/13620220",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"不了，谢谢\"] +4 [text=\"喜欢，给好评\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.sina.weibo.MainTabActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "功能类-自动点击查看原图",
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".photoalbum.imageviewer.ImageViewer",
          "matches": "@LinearLayout >3 [vid=\"tv_dialog_item\"][text^=\"原图\"]",
          "snapshotUrls": "https://i.gkd.li/i/13929119"
        },
        {
          "activityIds": "com.sina.weibo.photoalbum.imageviewer.ImageViewer",
          "matches": "@LinearLayout >3 [vid=\"tv_dialog_item\"][text^=\"原图\"]",
          "snapshotUrls": "https://i.gkd.li/i/13929119",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 6,
      "name": "功能类-超话自动签到",
      "fastQuery": true,
      "rules": [
        {
          "name": "点击签到",
          "activityIds": ".supergroup.SGPageActivity",
          "matches": [
            "ViewGroup[childCount=2] > [text=\"管理\"][visibleToUser=true]",
            "[text=\"签到\" || text=\"Sign in\"] < [vid=\"right_button\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/15092999",
            "https://i.gkd.li/i/15092970",
            "https://i.gkd.li/i/15136801"
          ],
          "fastQuery": true
        },
        {
          "name": "取消勾选[接收本超话签到提醒推送]",
          "activityIds": ".supergroup.pagepop.PagePopActivity",
          "matches": "@[checked=true] < * > [text=\"接收本超话签到提醒推送\"]",
          "snapshotUrls": "https://i.gkd.li/i/15103524",
          "fastQuery": true
        },
        {
          "name": "关闭签到成功弹窗",
          "activityIds": ".supergroup.pagepop.PagePopActivity",
          "matches": [
            "[text^=\"连续签到\"]",
            "[vid=\"iv_close_v2\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/15103524",
            "https://i.gkd.li/i/15136825",
            "https://i.gkd.li/i/15136842"
          ],
          "fastQuery": true
        },
        {
          "name": "点击签到 (2)",
          "activityIds": "com.sina.weibo.supergroup.SGPageActivity",
          "matches": [
            "ViewGroup[childCount=2] > [text=\"管理\"][visibleToUser=true]",
            "[text=\"签到\" || text=\"Sign in\"] < [vid=\"right_button\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/15092999",
            "https://i.gkd.li/i/15092970",
            "https://i.gkd.li/i/15136801"
          ],
          "fastQuery": true
        },
        {
          "name": "取消勾选[接收本超话签到提醒推送] (2)",
          "activityIds": "com.sina.weibo.supergroup.pagepop.PagePopActivity",
          "matches": "@[checked=true] < * > [text=\"接收本超话签到提醒推送\"]",
          "snapshotUrls": "https://i.gkd.li/i/15103524",
          "fastQuery": true
        },
        {
          "name": "关闭签到成功弹窗 (2)",
          "activityIds": "com.sina.weibo.supergroup.pagepop.PagePopActivity",
          "matches": [
            "[text^=\"连续签到\"]",
            "[vid=\"iv_close_v2\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/15103524",
            "https://i.gkd.li/i/15136825",
            "https://i.gkd.li/i/15136842"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 7,
      "name": "功能类-超话一键签到",
      "desc": "点击[一键签到]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".supergroup.generic.GenericChannelActivity",
          "matches": [
            "[text*=\"一键签到\"][visibleToUser=true]",
            "[vid=\"checkinBtn\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/3fad288d-ba21-44ed-8ebe-f9b4cbde1d3c",
          "snapshotUrls": "https://i.gkd.li/i/16420751"
        },
        {
          "fastQuery": true,
          "activityIds": "com.sina.weibo.supergroup.generic.GenericChannelActivity",
          "matches": [
            "[text*=\"一键签到\"][visibleToUser=true]",
            "[vid=\"checkinBtn\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/3fad288d-ba21-44ed-8ebe-f9b4cbde1d3c",
          "snapshotUrls": "https://i.gkd.li/i/16420751"
        }
      ]
    },
    {
      "key": 8,
      "name": "其他-关闭猪手提示",
      "desc": "点击[取消]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainTabActivity",
          "matches": [
            "[text^=\"猪手超话自动签到失败\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://e.gkd.li/92e08aea-ae70-4ea8-be65-442f8e2e423d",
          "snapshotUrls": "https://i.gkd.li/i/16827119"
        }
      ]
    },
    {
      "key": 9,
      "name": "功能类-关闭点赞时的验证",
      "rules": [
        {
          "activityIds": ".geetest.GeetCheckActivityForNet",
          "matches": "Button[text^=\"关闭验证\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/7a8ed873-a6e8-4260-9f5c-3ff05d5788db",
          "snapshotUrls": "https://i.gkd.li/i/16827853"
        }
      ]
    },
    {
      "key": 10,
      "name": "功能类-关主页自动切换到[关注的人]TAB",
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".flowbusiness.commonpage.FlowCommonPageActivity",
          "matches": "@[clickable=true] >2 [text=\"关注的人\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/6ef5bbf7-bb11-4cbb-b46b-bdc7c333a617",
          "snapshotUrls": "https://i.gkd.li/i/18423013",
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 11,
      "name": "分段广告-评论区博主内容推荐",
      "desc": "点击关闭-点击[不感兴趣]/[不想看到此类内容]",
      "fastQuery": true,
      "activityIds": [
        ".feed.detailrefactor.DetailPageActivity",
        ".story.gallery.feed.StoryFeedCommentsActivity2"
      ],
      "rules": [
        {
          "matches": "@[vid=\"ll_close\"] > [text=\"推荐\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19551850",
            "https://i.gkd.li/i/19552278"
          ],
          "fastQuery": true,
          "activityIds": [
            ".feed.detailrefactor.DetailPageActivity",
            ".story.gallery.feed.StoryFeedCommentsActivity2"
          ]
        },
        {
          "preKeys": 0,
          "matchRoot": true,
          "matches": "[text$=\"不感兴趣\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19551857",
            "https://i.gkd.li/i/19552282",
            "https://i.gkd.li/i/24211723"
          ],
          "fastQuery": true,
          "activityIds": [
            ".feed.detailrefactor.DetailPageActivity",
            ".story.gallery.feed.StoryFeedCommentsActivity2"
          ]
        },
        {
          "activityIds": [
            "com.sina.weibo.feed.DetailWeiboActivity"
          ],
          "matches": "RelativeLayout[visibleToUser=true] - RelativeLayout >n @[id=\"com.sina.weibo:id/ll_close\"] > [id=\"com.sina.weibo:id/tv_tips\"] + [id=\"com.sina.weibo:id/iv_close_icon\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12674498",
            "https://i.gkd.li/i/13035647"
          ],
          "fastQuery": true
        },
        {
          "preKeys": 2,
          "activityIds": [
            "com.sina.weibo.utils.WeiboDialog$CustomDialog",
            "com.sina.weibo.feed.DetailWeiboActivity"
          ],
          "matches": "TextView[text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12674511",
            "https://i.gkd.li/i/12929591"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 12,
      "name": "分段广告-评论区荐读",
      "fastQuery": true,
      "activityIds": [
        ".feed.detailrefactor.DetailPageActivity",
        ".feed.DetailWeiboActivity",
        ".feed.halfcontainer.HalfContainerPageActivity"
      ],
      "rules": [
        {
          "matches": "@[vid=\"ll_close\"] > [text=\"荐读\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/bab872e2-6967-49f5-8443-46af8f225d8f",
          "snapshotUrls": [
            "https://i.gkd.li/i/21828298",
            "https://i.gkd.li/i/24237728",
            "https://i.gkd.li/i/24291674"
          ],
          "fastQuery": true,
          "activityIds": [
            ".feed.detailrefactor.DetailPageActivity",
            ".feed.DetailWeiboActivity",
            ".feed.halfcontainer.HalfContainerPageActivity"
          ]
        },
        {
          "preKeys": 0,
          "matches": "[text$=\"不感兴趣\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/4d35d427-f6ab-42bf-a369-65c5b602fcdf",
          "snapshotUrls": "https://i.gkd.li/i/21828292",
          "fastQuery": true,
          "activityIds": [
            ".feed.detailrefactor.DetailPageActivity",
            ".feed.DetailWeiboActivity",
            ".feed.halfcontainer.HalfContainerPageActivity"
          ]
        }
      ]
    },
    {
      "key": 13,
      "name": "全屏广告-兴趣领域推荐",
      "desc": "出现在长久未登录的账户再次登录时",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.sina.weibo.account.interest.InterestActivity",
      "snapshotUrls": "https://i.gkd.li/i/12531405",
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/rl_account_title_bar\"] > [id=\"com.sina.weibo:id/tv_title_bar_skip\"][text=\"跳过\"]",
          "fastQuery": true,
          "activityIds": "com.sina.weibo.account.interest.InterestActivity"
        }
      ]
    },
    {
      "key": 14,
      "name": "全屏广告-精选博主推荐",
      "desc": "出现在长久未登录的账户再次登录时",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.sina.weibo.account.recommend.RecommendActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12531433",
        "https://i.gkd.li/i/12531434"
      ],
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/tv_option\"&&text=\"取消勾选\"]",
          "fastQuery": true,
          "activityIds": "com.sina.weibo.account.recommend.RecommendActivity"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/new_next_btn\"&&text=\"进入微博（已选0个）\"]",
          "fastQuery": true,
          "activityIds": "com.sina.weibo.account.recommend.RecommendActivity"
        }
      ]
    },
    {
      "key": 15,
      "name": "局部广告-博文内容区与评论区中间卡片广告",
      "desc": "点击右上角x",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "[id=\"com.sina.weibo:id/left_img_container\"] + LinearLayout >2 [id=\"com.sina.weibo:id/close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12673043",
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "[id=\"com.sina.weibo:id/left_video_container\"] + LinearLayout >2 [id=\"com.sina.weibo:id/close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13635551",
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "[id=\"com.sina.weibo:id/tvTrendsTitle\"] + [id=\"com.sina.weibo:id/iv_ad_x\"]",
          "snapshotUrls": "https://i.gkd.li/i/13787207",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 16,
      "name": "局部广告-首页顶部话题分享窗口",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.sina.weibo.MainTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/12705972",
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/tvGuide\"] + [id=\"com.sina.weibo:id/v_close\"] + [id=\"com.sina.weibo:id/iv_close\"]",
          "fastQuery": true,
          "activityIds": "com.sina.weibo.MainTabActivity"
        }
      ]
    },
    {
      "key": 17,
      "name": "局部广告-首页顶部签到卡片",
      "desc": "自动点击x按钮",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.sina.weibo.MainTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/12749876",
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/ll_check_in_container\"] < FrameLayout - FrameLayout > TextView + [id=\"com.sina.weibo:id/v_close\"]",
          "fastQuery": true,
          "activityIds": "com.sina.weibo.MainTabActivity"
        }
      ]
    },
    {
      "key": 18,
      "name": "局部广告-悬浮广告",
      "desc": "自动点击x按钮",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.sina.weibo.MainTabActivity",
          "matches": "[id=\"com.sina.weibo:id/floating_window\"] >2 [id=\"com.sina.weibo:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12750118",
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.MainTabActivity",
          "matches": "[id=\"com.sina.weibo:id/floating_window\"] >n [id=\"com.sina.weibo:id/closeView\"]",
          "snapshotUrls": "https://i.gkd.li/i/13206775",
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.MainTabActivity",
          "matches": "[id=\"com.sina.weibo:id/tv_tag\"] + @*[clickable=true] + [id=\"com.sina.weibo:id/countdown_btn_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13206841",
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "@[id=\"com.sina.weibo:id/close_layout\"] - LinearLayout [id=\"com.sina.weibo:id/btnFollow\"]",
          "snapshotUrls": "https://i.gkd.li/i/13482954",
          "fastQuery": true
        },
        {
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "[text*=\"一键转发\"] < LinearLayout +2 [id=\"com.sina.weibo:id/tv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13482960",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 19,
      "name": "未分类-博文内容区与评论区中间卡片式广告",
      "desc": "点击右上角x",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "[id=\"com.sina.weibo:id/corner_marker_view\"] >2 [id=\"com.sina.weibo:id/right_top_tag\"]",
          "snapshotUrls": "https://i.gkd.li/i/12673051",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 20,
      "name": "通知提示-请求开启通知弹窗",
      "desc": "自动点击暂不开启",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12705979",
      "rules": [
        {
          "matches": "@[id=\"com.sina.weibo:id/bt_cancel\"][text=\"暂不开启\"] + [id=\"com.sina.weibo:id/bt_confirm\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 21,
      "name": "功能类-点赞任务奖励",
      "desc": "点击x",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.sina.weibo.feed.MPDialogActivity",
      "snapshotUrls": "https://i.gkd.li/i/13837867",
      "rules": [
        {
          "matches": "[vid=\"container\"] >n [text=\"close\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.sina.weibo.feed.MPDialogActivity"
        }
      ]
    }
  ]
});
