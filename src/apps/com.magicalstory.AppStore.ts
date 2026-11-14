// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.magicalstory.AppStore",
  "name": "奇妙应用",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "name": "软件详情页",
          "fastQuery": true,
          "actionDelay": 300,
          "activityIds": [
            ".appDetails.AppDetailsActivity",
            ".main.fragments.square.section.forumDetailsActivity"
          ],
          "matches": [
            "[vid=\"itemUser\"][visibleToUser=true]",
            "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][visibleToUser=true] <<n [vid=\"bannerLayout\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14771070",
            "https://i.gkd.li/i/14771175"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/14771110",
            "https://i.gkd.li/i/17879219"
          ]
        },
        {
          "name": "搜索页面",
          "activityIds": ".search.searchActivity",
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView < FrameLayout +2 *[visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14771429"
        },
        {
          "name": "首页",
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"button_close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/14668408"
        },
        {
          "name": "评论区顶部",
          "fastQuery": true,
          "actionDelay": 300,
          "activityIds": ".main.fragments.square.section.forumDetailsActivity",
          "matches": [
            "[vid=\"title_browse\"][visibleToUser=true]",
            "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView <<n [vid=\"banner\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14758809",
            "https://i.gkd.li/i/14783076"
          ]
        },
        {
          "name": "软件详情页 (2)",
          "fastQuery": true,
          "actionDelay": 300,
          "activityIds": [
            "com.magicalstory.AppStore.appDetails.AppDetailsActivity",
            "com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity"
          ],
          "matches": [
            "[vid=\"itemUser\"][visibleToUser=true]",
            "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView <<n [vid=\"bannerLayout\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14771070",
            "https://i.gkd.li/i/14771175",
            "https://i.gkd.li/i/14771110"
          ]
        },
        {
          "name": "搜索页面 (2)",
          "activityIds": "com.magicalstory.AppStore.search.searchActivity",
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView < FrameLayout +2 *[visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14771429"
        },
        {
          "name": "首页 (2)",
          "fastQuery": true,
          "activityIds": "com.magicalstory.AppStore.main.MainActivity",
          "matches": "[vid=\"button_close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/14668408"
        },
        {
          "name": "评论区顶部 (2)",
          "fastQuery": true,
          "actionDelay": 300,
          "activityIds": "com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity",
          "matches": [
            "[vid=\"title_browse\"][visibleToUser=true]",
            "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView <<n [vid=\"banner\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14758809",
            "https://i.gkd.li/i/14783076"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "通知提示-公告弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.MainActivity",
          "matches": "[text=\"隐藏\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/17892865",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text*=\"隐藏\"][id=\"com.magicalstory.AppStore:id/btn_selectNegative\"]",
          "snapshotUrls": "https://i.gkd.li/i/13437553",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13459373",
      "rules": [
        {
          "activityIds": "com.cretin.www.cretinautoupdatelibrary.activity.UpdateType10Activity",
          "matches": "[vid=\"tv_update\"] <2 * + * > [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13459373",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.magicalstory.AppStore:id/tv_update\"] <2 * + * > [id=\"com.magicalstory.AppStore:id/iv_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-首页横幅广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"item_broadcast\"] >2 [vid=\"button_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/c885f80c-9fd5-4fcc-9117-e8fed04ee300",
          "snapshotUrls": "https://i.gkd.li/i/20259691",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-卡片式广告",
      "enable": false,
      "rules": [
        {
          "name": "软件详情页",
          "fastQuery": true,
          "actionDelay": 300,
          "activityIds": [
            "com.magicalstory.AppStore.appDetails.AppDetailsActivity",
            "com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity"
          ],
          "matches": "@ImageView < FrameLayout[childCount=1] <3 [childCount=5] <<n [vid=\"bannerLayout\"] + [vid=\"itemUser\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14771070",
            "https://i.gkd.li/i/14771175",
            "https://i.gkd.li/i/14771110"
          ]
        },
        {
          "name": "评论区顶部",
          "fastQuery": true,
          "actionDelay": 300,
          "activityIds": "com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity",
          "matches": "@ImageView < FrameLayout[childCount=1] <<n [vid=\"banner\"] +2 [vid=\"title_browse\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14758809",
            "https://i.gkd.li/i/14783076"
          ]
        }
      ]
    },
    {
      "key": 5,
      "name": "通知提示-公告",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.magicalstory.AppStore.main.MainActivity",
      "rules": [
        {
          "matches": "[text*=\"隐藏\"][id=\"com.magicalstory.AppStore:id/btn_selectNegative\"]",
          "snapshotUrls": "https://i.gkd.li/i/13437553",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.magicalstory.AppStore.main.MainActivity"
        }
      ]
    }
  ]
});
