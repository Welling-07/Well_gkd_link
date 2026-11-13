// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miHoYo.cloudgames.ys",
  "name": "云·原神",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动点击[下载版本更新]",
      "fastQuery": true,
      "activityIds": "com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity",
      "rules": [
        {
          "name": "点击[立即更新]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matches": "[text=\"立即更新\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/26310355",
          "exampleUrls": "https://e.gkd.li/c061f2fd-ed19-4ae2-84c9-ae1bbc37ace1",
          "fastQuery": true,
          "activityIds": "com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity"
        },
        {
          "preKeys": 0,
          "actionMaximum": 1,
          "resetMatch": "app",
          "name": "点击[开始安装]",
          "matches": "[text=\"开始安装\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/26310561",
          "exampleUrls": "https://e.gkd.li/c5f4db25-e1e5-492e-874d-c4e96eea5e99",
          "fastQuery": true,
          "activityIds": "com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-自动点击[使用流量进行游戏]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity",
          "matches": "[text=\"使用流量进行游戏\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14783168",
          "exampleUrls": "https://m.gkd.li/57941037/84c18536-b3a4-4f6e-99b2-264c1a36beb5"
        },
        {
          "fastQuery": true,
          "activityIds": "com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity",
          "matches": "[text=\"使用流量进行游戏\"]",
          "exampleUrls": "https://m.gkd.li/57941037/84c18536-b3a4-4f6e-99b2-264c1a36beb5",
          "snapshotUrls": "https://i.gkd.li/i/14783168"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-中断自动重连",
      "desc": "连接中断-尝试重连/重试",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.mihoyo.gamecloud.playcenter.main.MainActivity",
            "com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity"
          ],
          "matches": "[text=\"尝试重连\" || text=\"重试\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/26311100",
            "https://i.gkd.li/i/27207520"
          ],
          "exampleUrls": [
            "https://e.gkd.li/649824e2-e15e-4ddd-849a-b093357e3a7f",
            "https://e.gkd.li/71a3b3ff-4588-42e0-9750-a207a0c63d8e"
          ]
        }
      ]
    }
  ]
});
