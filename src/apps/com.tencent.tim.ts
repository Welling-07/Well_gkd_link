// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.tim",
  "name": "TIM",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动点击查看原图",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.tencent.mobileqq.richmediabrowser.AIOGalleryActivity",
            "com.tencent.richframework.gallery.QQGalleryActivity"
          ],
          "matches": "[text^=\"查看原图\"]",
          "exampleUrls": "https://m.gkd.li/57941037/894c5e7b-aab1-452c-a2a7-67a605506c89",
          "snapshotUrls": [
            "https://i.gkd.li/i/15197486",
            "https://i.gkd.li/i/17987327"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.mobileqq.richmediabrowser.AIOGalleryActivity",
          "matches": "[text^=\"查看原图\"]",
          "exampleUrls": "https://m.gkd.li/57941037/894c5e7b-aab1-452c-a2a7-67a605506c89",
          "snapshotUrls": "https://i.gkd.li/i/15197486"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-发送图片时自动勾选[原图]",
      "fastQuery": true,
      "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
      "exampleUrls": "https://m.gkd.li/57941037/57b4e39f-ba48-4e57-a5de-3a461a583e60",
      "snapshotUrls": "https://i.gkd.li/i/15209768",
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.tencent.qqnt.qbasealbum.WinkHomeActivity"
          ],
          "matches": "@[checked=false] + [text=\"原图\"]",
          "exampleUrls": "https://m.gkd.li/57941037/57b4e39f-ba48-4e57-a5de-3a461a583e60",
          "snapshotUrls": [
            "https://i.gkd.li/i/15209768",
            "https://i.gkd.li/i/17987325"
          ],
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "matches": "@[checked=false] + [text=\"原图\"]",
          "exampleUrls": "https://m.gkd.li/57941037/57b4e39f-ba48-4e57-a5de-3a461a583e60",
          "snapshotUrls": "https://i.gkd.li/i/15209768",
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-权限申请自动授权",
      "desc": "App申请权限自动同意",
      "rules": [
        {
          "fastQuery": true,
          "actionCd": 500,
          "activityIds": "com.tencent.open.agent.PublicFragmentActivityForOpenSDK",
          "matches": "[text=\"同意\" || text=\"确认\"][visibleToUser=true][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/24838083",
            "https://i.gkd.li/i/24838130"
          ]
        }
      ]
    }
  ]
});
