// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.reddit.frontpage",
  "name": "Reddit",
  "groups": [
    {
      "key": 0,
      "name": "其他-关闭订阅社区消息提示",
      "desc": "自动点击[Not Now]",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.reddit.launch.main.MainActivity",
          "matches": "[vid=\"sheet_container\"] > [vid=\"cancel_button\"][text=\"Not Now\"][clickable=true]",
          "exampleUrls": "https://e.gkd.li/b640f2c9-4564-420f-8a2f-20f461032f3d",
          "snapshotUrls": [
            "https://i.gkd.li/i/13649914",
            "https://i.gkd.li/i/17269009"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "其他-NSFW 内容提示",
      "desc": "自动点击 continue",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.reddit.launch.main.MainActivity",
          "matches": "Button[text=\"Cancel\"] + Button[text=\"Continue\"]",
          "snapshotUrls": "https://i.gkd.li/i/13649992",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "分段广告-卡片广告",
      "desc": "①点击卡片右上角 ②点击[隐藏]",
      "fastQuery": true,
      "activityIds": "com.reddit.launch.main.MainActivity",
      "rules": [
        {
          "name": "①点击卡片右上角",
          "matches": "@[id=\"post_overflow\"] <4 [id=\"post_header\"] <(1,2) [id=\"promoted_post_unit\"] <<n [vid=\"main_activity_navhost\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28876494",
            "https://i.gkd.li/i/29087336"
          ],
          "fastQuery": true,
          "activityIds": "com.reddit.launch.main.MainActivity"
        },
        {
          "name": "①坐标点击卡片右上角",
          "position": {
            "left": "width * 0.9106",
            "top": "width * 0.0657"
          },
          "matches": "View[top=prev.bottom] - @View[height<200][top=prev.top] <2 [id=\"conversation_screen_ad\"] <<n [visibleToUser=true] <n [vid=\"fragment_pager\"]",
          "snapshotUrls": "https://i.gkd.li/i/28876944",
          "fastQuery": true,
          "activityIds": "com.reddit.launch.main.MainActivity"
        },
        {
          "preKeys": 0,
          "name": "②主页-点击[隐藏]",
          "matches": "[text=\"Hide\" || text=\"隱藏\"] <2 @[clickable=true] <7 [id=\"action_item_list\"] <<n [vid=\"main_activity_navhost\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28876631",
            "https://i.gkd.li/i/29087234"
          ],
          "fastQuery": true,
          "activityIds": "com.reddit.launch.main.MainActivity"
        },
        {
          "preKeys": 1,
          "name": "②帖子页-点击[隐藏]",
          "matchRoot": true,
          "matches": "[text=\"Hide\" || text=\"隱藏\"] < @[clickable=true] < ScrollView < View < View < View < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28876636",
            "https://i.gkd.li/i/29087235"
          ],
          "fastQuery": true,
          "activityIds": "com.reddit.launch.main.MainActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-社区消息-更新提示",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.reddit.launch.main.MainActivity",
          "matches": "[id=\"com.reddit.frontpage:id/cancel_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13649914",
          "fastQuery": true
        }
      ]
    }
  ]
});
