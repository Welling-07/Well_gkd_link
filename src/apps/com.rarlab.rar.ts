// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.rarlab.rar",
  "name": "RAR",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-订购 RAR 弹窗",
      "desc": "点击[放弃]",
      "activityIds": "com.rarlab.rar.MainActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12781596",
        "https://i.gkd.li/i/15801328"
      ],
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[text=\"订购\" || text=\"訂閱\"] + [text=\"放弃\" || text=\"解除\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12781596",
            "https://i.gkd.li/i/15801328"
          ]
        },
        {
          "matches": "[text~=\"(订购|訂閱)\"] + [id=\"android:id/button1\"][text~=\"(放弃|解除)\"]",
          "fastQuery": true,
          "activityIds": "com.rarlab.rar.MainActivity"
        },
        {
          "matches": "[text=\"订购\"] + [text=\"放弃\"]",
          "activityIds": "com.rarlab.rar.MainActivity",
          "fastQuery": true
        }
      ]
    }
  ]
});
