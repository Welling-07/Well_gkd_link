// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.bilibili.app.in",
  "name": "bilibili",
  "groups": [
    {
      "key": 0,
      "name": "评价提示-评论区满意度评价",
      "fastQuery": true,
      "activityIds": "com.bilibili.video.story.StoryVideoActivity",
      "snapshotUrls": "https://i.gkd.li/i/13115189",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "matches": "@View[childCount=0][width<180 && height<180] - [childCount=0][text~=\"你.+评论.*氛围.+？\"] <<n [vid=\"compose_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23125454",
            "https://i.gkd.li/i/23182150"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"对当前的评论区满意吗？\"] + [id=\"com.bilibili.app.in:id/close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.bilibili.video.story.StoryVideoActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "评价提示-APP评分",
      "fastQuery": true,
      "activityIds": "tv.danmaku.bili.MainActivityV2",
      "snapshotUrls": "https://i.gkd.li/i/13180746",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "tv.danmaku.bili.MainActivityV2",
          "matches": [
            "[text=\"鼓励一下\"]",
            "[text=\"下次再说\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13180746",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        },
        {
          "matches": "[id=\"com.bilibili.app.in:id/cancel\"][text=\"下次再说\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "tv.danmaku.bili.MainActivityV2"
        }
      ]
    },
    {
      "key": 2,
      "name": "通知提示-订阅感兴趣的通知",
      "desc": "点击\"暂不开启\"",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13399195",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.bilibili.bplus.im.communication.HomeCommunicationActivity",
          "matches": [
            "[text=\"订阅感兴趣的通知\"]",
            "[text=\"暂不开启\"]"
          ],
          "exampleUrls": "https://e.gkd.li/283c2be2-80d7-43ab-976c-0896e678fc49",
          "snapshotUrls": "https://i.gkd.li/i/18392097",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        },
        {
          "matches": [
            "[text=\"订阅感兴趣的通知\"]",
            "[text=\"暂不开启\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13399195",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"订阅感兴趣的通知\"] +2 LinearLayout [text=\"暂不开启\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "desc": "自动点击\"暂不\"",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "tv.danmaku.bili.MainActivityV2",
          "matches": [
            "[text=\"打开推送通知\"]",
            "[text=\"暂不\"]"
          ],
          "exampleUrls": "https://e.gkd.li/e67d6d21-f09b-44b0-bf91-8b9fa0670e27",
          "snapshotUrls": "https://i.gkd.li/i/15907493"
        },
        {
          "activityIds": "com.bilibili.vip.web.VipWebActivity",
          "matches": "@Image < View + [id=\"subscribeContainer\"] > [text=\"权益更新时推送通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/23714120",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text=\"打开推送通知\"]",
            "[text=\"暂不\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13600976",
            "https://i.gkd.li/i/15907493"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-自动领取会员经验",
      "snapshotUrls": [
        "https://i.gkd.li/i/22886723",
        "https://i.gkd.li/i/22886739"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.bilibili.vip.web.VipWebActivity",
          "matches": "[text^=\"专属等级加速包\"] +n @TextView[childCount=0][text=\"领取\"] <<n [vid=\"webview\"]"
        }
      ]
    },
    {
      "key": 5,
      "name": "功能类-自动关闭故事模式",
      "desc": "播放视频时退出竖屏模式",
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.bilibili.video.story.StoryVideoActivity",
          "matches": "[vid=\"story_ctrl_router\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/4bfd6131-d4be-46be-affb-73338b01f49c",
          "snapshotUrls": "https://i.gkd.li/i/18164075",
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 6,
      "name": "未分类-打开推送通知弹窗",
      "desc": "自动点击“暂不”",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/13600976",
      "rules": [
        {
          "matches": "[text=\"打开推送通知\"] +2 LinearLayout > [id=\"com.bilibili.app.in:id/close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    }
  ]
});
