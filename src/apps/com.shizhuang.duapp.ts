// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.shizhuang.duapp",
  "name": "得物",
  "groups": [
    {
      "key": 0,
      "name": "其他-截屏分享",
      "desc": "关闭截屏时app弹出的分享弹窗",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".modules.product_detail.detailv4.ui.ProductDetailActivityV4",
          "matches": "[vid=\"ivClose\"] +2 [vid=\"ivSave\"]",
          "snapshotUrls": "https://i.gkd.li/i/13473449"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-截屏分享",
      "desc": "关闭截屏时app弹出的分享弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.shizhuang.duapp.modules.product_detail.detailv4.ui.ProductDetailActivityV4",
      "snapshotUrls": "https://i.gkd.li/i/13473449",
      "rules": [
        {
          "matches": "[id=\"com.shizhuang.duapp:id/ivClose\"] +2 [id=\"com.shizhuang.duapp:id/ivSave\"]",
          "fastQuery": true,
          "activityIds": "com.shizhuang.duapp.modules.product_detail.detailv4.ui.ProductDetailActivityV4"
        }
      ]
    }
  ]
});
