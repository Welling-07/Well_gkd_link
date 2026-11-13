// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.yonghui.hyd",
  "name": "永辉生活",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-红包弹窗",
      "desc": "点击关闭",
      "rules": [
        {
          "name": "好券即将过期弹窗",
          "activityIds": ".coupon.couponfactory.CouponFactoryActivity",
          "matches": [
            "[vid=\"advance\" || vid=\"couponsWillGoneHeaderIv\"]",
            "[vid=\"close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13414401",
            "https://i.gkd.li/i/13414444"
          ]
        },
        {
          "name": "领券中心-红包弹窗",
          "activityIds": "cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity",
          "matches": "[id=\"cn.yonghui.hyd:id/advance\"] +n [id=\"cn.yonghui.hyd:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13414401"
        },
        {
          "name": "好券即将过期弹窗 (2)",
          "activityIds": "cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity",
          "matches": "[id=\"cn.yonghui.hyd:id/couponsWillGoneHeaderIv\"] +n [id=\"cn.yonghui.hyd:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13414444"
        }
      ]
    }
  ]
});
