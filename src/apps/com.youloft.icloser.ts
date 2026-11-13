// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.youloft.icloser",
  "name": "心动日常",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-购买会员弹窗广告",
      "fastQuery": true,
      "activityIds": "com.youloft.icloser.view.dialog.VipRetainPacketDialog",
      "snapshotUrls": "https://i.gkd.li/i/13067183",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".view.dialog.VipRetainPacketDialog",
          "matches": "[vid=\"tv_later_buy\"]",
          "snapshotUrls": "https://i.gkd.li/i/13067183"
        },
        {
          "matches": "[id=\"com.youloft.icloser:id/tv_later_buy\"]",
          "fastQuery": true,
          "activityIds": "com.youloft.icloser.view.dialog.VipRetainPacketDialog"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-右下角悬浮窗小广告",
      "fastQuery": true,
      "activityIds": "com.youloft.icloser.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13164387",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13164387"
        },
        {
          "matches": "[id=\"com.youloft.icloser:id/iv_close\"]",
          "fastQuery": true,
          "activityIds": "com.youloft.icloser.activity.MainActivity"
        }
      ]
    }
  ]
});
