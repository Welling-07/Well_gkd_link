// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hupu.games",
  "name": "虎扑",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-信息流广告",
      "desc": "点击卡片右上角广告文字,出现广告反馈,点击屏蔽该广告",
      "fastQuery": true,
      "activityIds": [
        ".main.MainActivity",
        "com.hupu.android.bbs.detail.PostDetailActivity",
        "com.hupu.topic.TopicActivity",
        "com.hupu.android.bbs.page.rating.ratingDetail.RatingDetailActivity"
      ],
      "rules": [
        {
          "matches": "[vid=\"shield_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12511005",
            "https://i.gkd.li/i/13258026",
            "https://i.gkd.li/i/13259692",
            "https://i.gkd.li/i/15360331"
          ],
          "fastQuery": true,
          "activityIds": [
            ".main.MainActivity",
            "com.hupu.android.bbs.detail.PostDetailActivity",
            "com.hupu.topic.TopicActivity",
            "com.hupu.android.bbs.page.rating.ratingDetail.RatingDetailActivity"
          ]
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] > [text=\"屏蔽该广告\" || text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12511010",
            "https://i.gkd.li/i/12534848",
            "https://i.gkd.li/i/13259699",
            "https://i.gkd.li/i/15360360",
            "https://i.gkd.li/i/17869227"
          ],
          "fastQuery": true,
          "activityIds": [
            ".main.MainActivity",
            "com.hupu.android.bbs.detail.PostDetailActivity",
            "com.hupu.topic.TopicActivity",
            "com.hupu.android.bbs.page.rating.ratingDetail.RatingDetailActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/27383159"
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-推荐流广告",
      "desc": "点击卡片右上角广告文字,出现广告反馈,点击屏蔽该广告",
      "enable": false,
      "activityIds": [
        "com.hupu.games.main.MainActivity",
        "com.hupu.android.bbs.detail.PostDetailActivity",
        "com.hupu.topic.TopicActivity",
        "com.hupu.android.bbs.page.rating.ratingDetail.RatingDetailActivity"
      ],
      "fastQuery": true,
      "rules": [
        {
          "matches": "[vid=\"shield_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12511005",
            "https://i.gkd.li/i/13258026",
            "https://i.gkd.li/i/13259692",
            "https://i.gkd.li/i/15360331"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.hupu.games.main.MainActivity",
            "com.hupu.android.bbs.detail.PostDetailActivity",
            "com.hupu.topic.TopicActivity",
            "com.hupu.android.bbs.page.rating.ratingDetail.RatingDetailActivity"
          ]
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] > [text=\"屏蔽该广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12511010",
            "https://i.gkd.li/i/12534848",
            "https://i.gkd.li/i/13259699",
            "https://i.gkd.li/i/15360360"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.hupu.games.main.MainActivity",
            "com.hupu.android.bbs.detail.PostDetailActivity",
            "com.hupu.topic.TopicActivity",
            "com.hupu.android.bbs.page.rating.ratingDetail.RatingDetailActivity"
          ]
        },
        {
          "matches": "@[id=\"com.hupu.games:id/shield_view\"] >2 [id=\"com.hupu.games:id/tv_tag\"][text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12511005",
            "https://i.gkd.li/i/13258026",
            "https://i.gkd.li/i/13259692"
          ],
          "activityIds": [
            "com.hupu.games.main.MainActivity",
            "com.hupu.android.bbs.detail.PostDetailActivity",
            "com.hupu.topic.TopicActivity"
          ],
          "fastQuery": true
        },
        {
          "preKeys": 2,
          "matches": "@[clickable=true] > [id=\"com.hupu.games:id/tv_title\"][text=\"屏蔽该广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12511010",
            "https://i.gkd.li/i/12534848",
            "https://i.gkd.li/i/13259699"
          ],
          "activityIds": [
            "com.hupu.games.main.MainActivity",
            "com.hupu.android.bbs.detail.PostDetailActivity",
            "com.hupu.topic.TopicActivity"
          ],
          "fastQuery": true
        }
      ]
    }
  ]
});
