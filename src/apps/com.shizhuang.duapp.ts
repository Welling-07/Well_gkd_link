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
    }
  ]
});
