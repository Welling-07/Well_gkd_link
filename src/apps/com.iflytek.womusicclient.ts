// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.iflytek.womusicclient",
  "name": "联通视频彩铃",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "android.womusic.com.songcomponent.MainActivity",
          "matches": "[vid=\"iv_img\"] + [vid=\"btn_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/64eb594e-f764-4080-a3e6-620e7174602f",
          "snapshotUrls": "https://i.gkd.li/i/14680681",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-广告弹窗",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "android.womusic.com.songcomponent.MainActivity",
          "matches": "[vid=\"iv_img\"] + [vid=\"btn_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/64eb594e-f764-4080-a3e6-620e7174602f",
          "snapshotUrls": "https://i.gkd.li/i/14680681"
        }
      ]
    }
  ]
});
