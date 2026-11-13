// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.twitter.android",
  "name": "X(推特)",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-主页信息流广告",
      "desc": "①点击右上角操作 ②点击[我不喜欢/屏蔽...]",
      "activityIds": [
        "com.twitter.app.main.MainActivity",
        "com.twitter.app.profiles.ProfileActivity"
      ],
      "actionCd": 3000,
      "fastQuery": true,
      "rules": [
        {
          "name": "①点击右上角操作",
          "matches": "@[id$=\"_action\"] <2 * + * >(1,3) [text$=\"广告后播放\" || text$=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12798795",
            "https://i.gkd.li/i/14782884",
            "https://i.gkd.li/i/12813235",
            "https://i.gkd.li/i/14782897",
            "https://i.gkd.li/i/17182889"
          ],
          "actionCd": 3000,
          "fastQuery": true,
          "activityIds": [
            "com.twitter.app.main.MainActivity",
            "com.twitter.app.profiles.ProfileActivity"
          ]
        },
        {
          "matches": "@[vid=\"tweet_curation_action\"] - [vid=\"tweet_ad_badge_top_right\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/705dd827-ff04-4233-af38-60d92439e1f3",
          "snapshotUrls": "https://i.gkd.li/i/24359526",
          "actionCd": 3000,
          "fastQuery": true,
          "activityIds": [
            "com.twitter.app.main.MainActivity",
            "com.twitter.app.profiles.ProfileActivity"
          ]
        },
        {
          "activityIds": "com.x.android.main.MainActivity",
          "matches": "[text=\"Ad\" || getChild(0).text$=\"推广\"] +(1,4) [name$=\"ImageView\" || name$=\"Button\"][visibleToUser=true][desc=\"发帖选项\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/29085434",
            "https://i.gkd.li/i/34428571",
            "https://i.gkd.li/i/32325884",
            "https://i.gkd.li/i/34022771"
          ],
          "actionCd": 3000,
          "fastQuery": true
        },
        {
          "preKeys": [
            0,
            1
          ],
          "matches": "@[clickable=true] > [text^=\"我不喜\" || text^=\"屏蔽\" || text^=\"封鎖\" || text^=\"Block\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14782902",
            "https://i.gkd.li/i/28415651",
            "https://i.gkd.li/i/20239421"
          ],
          "actionCd": 3000,
          "fastQuery": true,
          "activityIds": [
            "com.twitter.app.main.MainActivity",
            "com.twitter.app.profiles.ProfileActivity"
          ]
        },
        {
          "preKeys": 2,
          "activityIds": "com.x.android.main.MainActivity",
          "matches": "@[clickable=true] > [visibleToUser=true][text^=\"我不喜\" || text^=\"屏蔽\" || text^=\"封鎖\" || text^=\"Block\"]",
          "snapshotUrls": "https://i.gkd.li/i/29085445",
          "actionCd": 3000,
          "fastQuery": true
        },
        {
          "name": "视频广告-点击右上角关闭",
          "matches": "@[vid=\"tweet_curation_action\"] <2 * + * >3 [text=\"视频将在广告后播放\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12798795",
            "https://i.gkd.li/i/14782884"
          ],
          "activityIds": [
            "com.twitter.app.main.MainActivity",
            "com.twitter.app.profiles.ProfileActivity"
          ],
          "actionCd": 3000,
          "fastQuery": true
        },
        {
          "name": "推荐广告-点击右上角关闭",
          "matches": "@[vid=\"tweet_curation_action\"] <2 * + * > [text$=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12813235",
            "https://i.gkd.li/i/14782897",
            "https://i.gkd.li/i/17182889"
          ],
          "activityIds": [
            "com.twitter.app.main.MainActivity",
            "com.twitter.app.profiles.ProfileActivity"
          ],
          "actionCd": 3000,
          "fastQuery": true
        },
        {
          "preKeys": [
            5,
            6
          ],
          "name": "点击[我不喜欢这个广告]",
          "matches": "@ViewGroup[clickable=true] > [text=\"我不喜欢这个广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12798810",
            "https://i.gkd.li/i/14782902"
          ],
          "activityIds": [
            "com.twitter.app.main.MainActivity",
            "com.twitter.app.profiles.ProfileActivity"
          ],
          "actionCd": 3000,
          "fastQuery": true
        },
        {
          "name": "推荐广告-点击右上角关闭 (2)",
          "matches": "@[vid=\"tweet_curation_action\"] <2 * + * > [text=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12813235",
            "https://i.gkd.li/i/14782897"
          ],
          "activityIds": [
            "com.twitter.app.main.MainActivity",
            "com.twitter.app.profiles.ProfileActivity"
          ],
          "actionCd": 3000,
          "fastQuery": true
        },
        {
          "preKeys": [
            5,
            8
          ],
          "name": "点击[我不喜欢这个广告] (2)",
          "matches": "@ViewGroup[clickable=true] > [text=\"我不喜欢这个广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12798810",
            "https://i.gkd.li/i/14782902"
          ],
          "activityIds": [
            "com.twitter.app.main.MainActivity",
            "com.twitter.app.profiles.ProfileActivity"
          ],
          "actionCd": 3000,
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-帖子详情页、搜索页信息流广告",
      "desc": "右上角关闭-屏蔽用户-确认屏蔽.点击[我不喜欢]会返回主页,因此点击[屏蔽]",
      "fastQuery": true,
      "activityIds": [
        "com.twitter.tweetdetail.TweetDetailActivity",
        ".search.implementation.results.SearchActivity"
      ],
      "actionCd": 3000,
      "rules": [
        {
          "name": "点击右上角关闭-1",
          "matches": "@[vid=\"tweet_curation_action\"] +n [vid=\"tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12825969",
            "https://i.gkd.li/i/12847584"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            ".search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        },
        {
          "name": "点击右上角关闭-2",
          "matches": "@[vid=\"tweet_curation_action\"] <2 * + [vid=\"tweet_auto_playable_content_parent\"] > [vid=\"tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882676",
            "https://i.gkd.li/i/12904603"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            ".search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        },
        {
          "name": "点击右上角关闭-英文",
          "matches": "[vid=\"tweet_ad_badge_top_right\"] + [vid=\"tweet_curation_action\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13680756"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            ".search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        },
        {
          "preKeys": [
            0,
            1,
            2
          ],
          "name": "点击屏蔽/隐藏,如果机会全用完需要取消遍再屏蔽",
          "matches": "@ViewGroup > [vid=\"action_sheet_item_title\"][text^=\"屏蔽\" || text^=\"Block\" || text^=\"隐藏 @\" || text^=\"Mute @\"||text^=\"Unblock @\"||text^=\"Unmute @\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12828815",
            "https://i.gkd.li/i/12847600",
            "https://i.gkd.li/i/12904602",
            "https://i.gkd.li/i/13680783",
            "https://i.gkd.li/i/25089665",
            "https://i.gkd.li/i/25461007",
            "https://i.gkd.li/i/25461077",
            "https://i.gkd.li/i/25461050"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            ".search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        },
        {
          "preKeys": 3,
          "matches": "[text=\"取消\"||text^=\"Cancel\"] + [text=\"屏蔽\"||text^=\"Block\"||text=\"是的，我确定\"||text^=\"Yes\"||text^=\"屏蔽\"||text^=\"Mute\"||text^=\"Unmute\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12828832",
            "https://i.gkd.li/i/12904601",
            "https://i.gkd.li/i/13680798",
            "https://i.gkd.li/i/25089666",
            "https://i.gkd.li/i/25461062"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            ".search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        },
        {
          "name": "点击右上角关闭-1 (2)",
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] +n [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12825969",
            "https://i.gkd.li/i/12847584"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            "com.twitter.android.search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        },
        {
          "name": "点击右上角关闭-2 (2)",
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 * + [id=\"com.twitter.android:id/tweet_auto_playable_content_parent\"] > [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882676",
            "https://i.gkd.li/i/12904603"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            "com.twitter.android.search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        },
        {
          "name": "点击右上角关闭-英文 (2)",
          "matches": "[id=\"com.twitter.android:id/tweet_ad_badge_top_right\"] + [id=\"com.twitter.android:id/tweet_curation_action\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13680756"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            "com.twitter.android.search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        },
        {
          "preKeys": [
            5,
            6,
            7
          ],
          "name": "点击屏蔽",
          "matches": "@ViewGroup > [id=\"com.twitter.android:id/action_sheet_item_title\"][text^=\"屏蔽\"||text^=\"屏蔽\"||text^=\"Block\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12828815",
            "https://i.gkd.li/i/12847600",
            "https://i.gkd.li/i/12904602",
            "https://i.gkd.li/i/13680783"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            "com.twitter.android.search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        },
        {
          "preKeys": 8,
          "name": "二次确认-点击屏蔽",
          "matches": "[text=\"取消\"||text^=\"Cancel\"] + [text=\"屏蔽\"||text^=\"Block\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12828832",
            "https://i.gkd.li/i/12904601",
            "https://i.gkd.li/i/13680798"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            "com.twitter.android.search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-用户资料页信息流广告",
      "desc": "点击右上角关闭,点击我不喜欢",
      "fastQuery": true,
      "activityIds": "com.twitter.app.profiles.ProfileActivity",
      "actionCd": 3000,
      "rules": [
        {
          "name": "点击右上角关闭-1",
          "matches": "@[vid=\"tweet_curation_action\"] +n [vid=\"tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12825969",
            "https://i.gkd.li/i/12847584"
          ],
          "fastQuery": true,
          "activityIds": "com.twitter.app.profiles.ProfileActivity",
          "actionCd": 3000
        },
        {
          "name": "点击右上角关闭-2",
          "matches": "@[vid=\"tweet_curation_action\"] <2 * + [vid=\"tweet_auto_playable_content_parent\"] > [vid=\"tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882676",
            "https://i.gkd.li/i/12904603"
          ],
          "fastQuery": true,
          "activityIds": "com.twitter.app.profiles.ProfileActivity",
          "actionCd": 3000
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "点击[我不喜欢这个广告]",
          "matches": "@ViewGroup > [vid=\"action_sheet_item_title\"][text=\"我不喜欢这个广告\" || text=\"我不喜歡這個廣告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12798810",
          "fastQuery": true,
          "activityIds": "com.twitter.app.profiles.ProfileActivity",
          "actionCd": 3000
        },
        {
          "name": "点击右上角关闭-1 (2)",
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] +n [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12825969",
            "https://i.gkd.li/i/12847584"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.app.profiles.ProfileActivity"
          ],
          "actionCd": 3000
        },
        {
          "name": "点击右上角关闭-2 (2)",
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 * + [id=\"com.twitter.android:id/tweet_auto_playable_content_parent\"] > [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882676",
            "https://i.gkd.li/i/12904603"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.app.profiles.ProfileActivity"
          ],
          "actionCd": 3000
        },
        {
          "preKeys": [
            3,
            4
          ],
          "name": "点击[我不喜欢这个广告] (2)",
          "matches": "@ViewGroup > [id=\"com.twitter.android:id/action_sheet_item_title\"][text=\"我不喜欢这个广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12798810",
          "fastQuery": true,
          "activityIds": [
            "com.twitter.app.profiles.ProfileActivity"
          ],
          "actionCd": 3000
        }
      ]
    },
    {
      "key": 3,
      "name": "评价提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.twitter.app.main.MainActivity",
          "matches": "[vid=\"app_rating_button_never\"]",
          "snapshotUrls": "https://i.gkd.li/i/13774150",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.twitter.android:id/app_rating_button_never\"]",
          "snapshotUrls": "https://i.gkd.li/i/13774150",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "desc": "点击\"Not now\"",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.twitter.app.main.MainActivity",
          "matches": "@[clickable=true] > [visibleToUser=true][text=\"Not now\" || text=\"暂时不用\"] <<n [vid=\"half_cover_recycler_view_holder\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13930126",
            "https://i.gkd.li/i/25903854"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[clickable=true] > [visibleToUser=true][text=\"Not now\"] <<n [vid=\"half_cover_recycler_view_holder\"]",
          "snapshotUrls": "https://i.gkd.li/i/13930126",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[clickable=true] > [text=\"Not now\"] <<n [vid=\"half_cover_recycler_view_holder\"]",
          "snapshotUrls": "https://i.gkd.li/i/13930126",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "功能类-自动点击翻译",
      "desc": "⚠️对于v12.9.1及以上版本的推特失效",
      "rules": [
        {
          "fastQuery": true,
          "actionCd": 2000,
          "activityIds": "com.twitter.tweetdetail.TweetDetailActivity",
          "matches": "[vid=\"translation_link\" || vid=\"grok_translation_link\"][index=parent.childCount.minus(1)][index!=2]",
          "exampleUrls": [
            "https://e.gkd.li/ced46989-9c6a-4626-b027-7953e0fdc2c6",
            "https://m.gkd.li/57941037/40ece44f-883f-429a-aa0c-17dac15a50e4"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14189817",
            "https://i.gkd.li/i/14615911",
            "https://i.gkd.li/i/25461468",
            "https://i.gkd.li/i/25461607",
            "https://i.gkd.li/i/26642877"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/25537171",
            "https://i.gkd.li/i/26642826"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.twitter.tweetdetail.TweetDetailActivity",
          "matches": "[vid=\"translation_link\"][text^=\"翻译\"]",
          "exampleUrls": "https://m.gkd.li/57941037/40ece44f-883f-429a-aa0c-17dac15a50e4",
          "snapshotUrls": [
            "https://i.gkd.li/i/14189817",
            "https://i.gkd.li/i/14615911"
          ]
        }
      ]
    },
    {
      "key": 6,
      "name": "功能类-自动[显示更多帖子]",
      "desc": "只点击居中的,不点击靠左的[显示更多帖子]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.twitter.app.main.MainActivity",
          "matches": "@FrameLayout[clickable=true] > [text=\"显示更多帖子\"]",
          "exampleUrls": "https://m.gkd.li/57941037/7efa8af7-90d3-42b4-bf5d-3d83775f175a",
          "snapshotUrls": "https://i.gkd.li/i/14189847"
        },
        {
          "activityIds": "com.x.android.main.MainActivity",
          "matches": "@[clickable=true] > TextView[visibleToUser=true][text=\"显示更多帖子\"][right>parent.right.minus(parent.width.div(2))]",
          "snapshotUrls": "https://i.gkd.li/i/30151597",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/30175825",
            "https://i.gkd.li/i/30271020",
            "https://i.gkd.li/i/30271022"
          ]
        }
      ]
    },
    {
      "key": 7,
      "name": "其他-关闭[开启个性化广告]弹窗",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.twitter.app.main.MainActivity",
          "matches": "[vid=\"secondary_button\"][clickable=true][getChild(0).getChild(0).getChild(0).text=\"保留更少相关广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/25150279"
        }
      ]
    },
    {
      "key": 8,
      "name": "功能类-自动显示可能的垃圾信息",
      "desc": "有时(大部分时候)误杀太大",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.twitter.tweetdetail.TweetDetailActivity",
          "matches": "RelativeLayout > [vid=\"content\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25461441"
        }
      ]
    },
    {
      "key": 9,
      "name": "功能类-[保存]图片帖子",
      "desc": "展开菜单自动点击保存图片",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.twitter.app.gallery.GalleryActivity",
          "matches": "@LinearLayout[clickable=true] >3 [text=\"保存\" || text=\"Save\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/26303860",
          "exampleUrls": "https://e.gkd.li/552c4889-e994-4082-8229-d5c5b37e4c6b"
        }
      ]
    },
    {
      "key": 10,
      "name": "功能类-网络错误自动重试",
      "desc": "无法获取帖子=> 点击[重试]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.twitter.tweetdetail.TweetDetailActivity",
          "matches": "[text^=\"现在无法获取帖子\"] + [text=\"重试\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/28419788",
          "exampleUrls": "https://e.gkd.li/5f532b57-1811-437f-bca2-d60c35aeda29"
        }
      ]
    },
    {
      "key": 11,
      "name": "功能类-进入视频自动静音",
      "desc": "点击视频帖子=> 进入详情后自动静音",
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.twitter.explore.immersivemediaplayer.ui.activity.ImmersiveMediaPlayerActivity",
          "matches": "[vid=\"video_mute_toggle\"][clickable=true][visibleToUser=true]",
          "excludeMatches": "[vid=\"video_mute_toggle\"][desc=\"隐藏\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/28436423",
          "excludeSnapshotUrls": "https://i.gkd.li/i/28436424",
          "exampleUrls": "https://e.gkd.li/f0996ce1-5376-4b80-9353-1384eb6e615c",
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 12,
      "name": "功能类-查看潜在敏感内容的个人页面",
      "desc": "点某些账号详情页-警告!-> 是,查看个人资料",
      "matchTime": 8000,
      "actionMaximum": 1,
      "resetMatch": "match",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.twitter.app.profiles.ProfileActivity",
          "matches": "[vid=\"warning_header\"][visibleToUser=true] +2 [vid=\"primary_button\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/29404879",
          "exampleUrls": "https://e.gkd.li/dbdaffed-e1ca-4487-85a1-3a5466e3ff61",
          "matchTime": 8000,
          "actionMaximum": 1,
          "resetMatch": "match"
        }
      ]
    },
    {
      "key": 13,
      "name": "局部广告-账号详情-小蓝标认证",
      "desc": "点击[以后再说]",
      "matchTime": 8000,
      "actionMaximum": 1,
      "resetMatch": "match",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.twitter.app.profiles.ProfileActivity",
          "matches": "[text=\"以后再说\"] < @View[clickable=true] -2 [text^=\"认证标识很\"][visibleToUser=true] <3 View[childCount=6] <<2 [vid=\"profile_upsell_compose\"]",
          "snapshotUrls": "https://i.gkd.li/i/29405012",
          "exampleUrls": "https://e.gkd.li/6196a859-31ce-4d04-9f53-b9346bee25d6",
          "matchTime": 8000,
          "actionMaximum": 1,
          "resetMatch": "match"
        }
      ]
    },
    {
      "key": 14,
      "name": "分段广告-帖子含视频广告",
      "desc": "①点击[跳过] ②点击[屏蔽]该用户",
      "fastQuery": true,
      "activityIds": "com.x.android.main.MainActivity",
      "rules": [
        {
          "name": "①点击[跳过]",
          "matches": "[text=\"跳过\"] < @[clickable=true] -n [text*=\"广告\"] <n [visibleToUser=true] <2 [childCount=2] >4 [vid=\"exo_subtitles\"]",
          "snapshotUrls": "https://i.gkd.li/i/33950650",
          "exampleUrls": "https://e.gkd.li/a9dbde18-fc31-4b28-b277-8ad19d0d3fcf",
          "fastQuery": true,
          "activityIds": "com.x.android.main.MainActivity"
        },
        {
          "preKeys": 0,
          "name": "②点击[屏蔽]该用户",
          "matches": "@[text*=\"屏蔽\"] < [clickable=true] <n ScrollView >2 [visibleToUser=true][text*=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/33951005",
          "exampleUrls": "https://e.gkd.li/5a072c9d-f214-49c0-9446-cc5b185c3664",
          "fastQuery": true,
          "activityIds": "com.x.android.main.MainActivity"
        }
      ]
    },
    {
      "key": 15,
      "name": "未分类-信息流广告-帖子详情页、搜索页",
      "desc": "点击右上角关闭,点击屏蔽用户,确认屏蔽.点击[我不喜欢]会返回主页,因此点击[屏蔽]",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.twitter.tweetdetail.TweetDetailActivity",
        "com.twitter.android.search.implementation.results.SearchActivity"
      ],
      "actionCd": 3000,
      "rules": [
        {
          "name": "点击右上角关闭-1",
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] +n [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12825969",
            "https://i.gkd.li/i/12847584"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            "com.twitter.android.search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        },
        {
          "name": "点击右上角关闭-2",
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 * + [id=\"com.twitter.android:id/tweet_auto_playable_content_parent\"] > [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882676",
            "https://i.gkd.li/i/12904603"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            "com.twitter.android.search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        },
        {
          "name": "点击右上角关闭-英文",
          "matches": "[id=\"com.twitter.android:id/tweet_ad_badge_top_right\"] + [id=\"com.twitter.android:id/tweet_curation_action\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13680756"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            "com.twitter.android.search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        },
        {
          "preKeys": [
            0,
            1,
            2
          ],
          "name": "点击屏蔽",
          "matches": "@ViewGroup > [id=\"com.twitter.android:id/action_sheet_item_title\"][text^=\"屏蔽\"||text^=\"屏蔽\"||text^=\"Block\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12828815",
            "https://i.gkd.li/i/12847600",
            "https://i.gkd.li/i/12904602",
            "https://i.gkd.li/i/13680783"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            "com.twitter.android.search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        },
        {
          "preKeys": 3,
          "name": "二次确认-点击屏蔽",
          "matches": "[text=\"取消\"||text^=\"Cancel\"] + [text=\"屏蔽\"||text^=\"Block\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12828832",
            "https://i.gkd.li/i/12904601",
            "https://i.gkd.li/i/13680798"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.tweetdetail.TweetDetailActivity",
            "com.twitter.android.search.implementation.results.SearchActivity"
          ],
          "actionCd": 3000
        }
      ]
    },
    {
      "key": 16,
      "name": "未分类-信息流广告-用户资料页",
      "desc": "点击右上角关闭,点击我不喜欢",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.twitter.app.profiles.ProfileActivity"
      ],
      "actionCd": 3000,
      "rules": [
        {
          "name": "点击右上角关闭-1",
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] +n [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12825969",
            "https://i.gkd.li/i/12847584"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.app.profiles.ProfileActivity"
          ],
          "actionCd": 3000
        },
        {
          "name": "点击右上角关闭-2",
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 * + [id=\"com.twitter.android:id/tweet_auto_playable_content_parent\"] > [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882676",
            "https://i.gkd.li/i/12904603"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.twitter.app.profiles.ProfileActivity"
          ],
          "actionCd": 3000
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "点击[我不喜欢这个广告]",
          "matches": "@ViewGroup > [id=\"com.twitter.android:id/action_sheet_item_title\"][text=\"我不喜欢这个广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12798810",
          "fastQuery": true,
          "activityIds": [
            "com.twitter.app.profiles.ProfileActivity"
          ],
          "actionCd": 3000
        }
      ]
    },
    {
      "key": 17,
      "name": "未分类-评价弹窗",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": "com.twitter.app.main.MainActivity",
          "matches": "[id=\"com.twitter.android:id/app_rating_button_never\"]",
          "snapshotUrls": "https://i.gkd.li/i/13774150",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 18,
      "name": "功能类-自动翻译",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.twitter.tweetdetail.TweetDetailActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/14189895",
        "https://i.gkd.li/i/14615911"
      ],
      "rules": [
        {
          "matches": "[text^=\"翻译\"][vid=\"translation_link\"]",
          "fastQuery": true,
          "activityIds": "com.twitter.tweetdetail.TweetDetailActivity"
        }
      ]
    },
    {
      "key": 19,
      "name": "功能类-自动显示更多帖子",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.twitter.app.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/14189897",
      "rules": [
        {
          "matches": "[vid=\"gap_text\"][text=\"显示更多帖子\"]",
          "fastQuery": true,
          "activityIds": "com.twitter.app.main.MainActivity"
        }
      ]
    }
  ]
});
