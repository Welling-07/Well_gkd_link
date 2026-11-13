// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mt.mtxx.mtxx",
  "name": "美图秀秀",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13238352",
      "rules": [
        {
          "matches": "[text=\"升级新版客户端\"] - [text=\"取消\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13238352",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-VIP弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"iv_close\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/d98355c6-1308-4ed1-bf29-56499e22446d",
          "snapshotUrls": "https://i.gkd.li/i/14368853",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.mt.mtxx.mtxx.MainActivity",
          "matches": "[vid=\"iv_close\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/d98355c6-1308-4ed1-bf29-56499e22446d",
          "snapshotUrls": "https://i.gkd.li/i/14368853",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.cosmos.album.album3.XXAlbumMainActivity",
          "matches": "@ImageView[clickable=true] - * > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/15076408"
        },
        {
          "name": "所有图片页",
          "matches": "@ImageView[clickable=true] - * > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/15076408"
        }
      ]
    }
  ]
});
