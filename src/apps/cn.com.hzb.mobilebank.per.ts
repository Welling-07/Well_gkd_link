// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.hzb.mobilebank.per",
  "name": "杭州银行",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matchRoot": true,
          "forcedTime": 10000,
          "matches": "Image[width<160 && height<160][childCount=0] < @View[clickable=true][childCount=1] <2 View[childCount=2] < View[index=parent.childCount.minus(1)][childCount=1] <n View[id=\"app\"] <<3 [vid=\"h5_pc_container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25150390",
            "https://i.gkd.li/i/25150391"
          ]
        }
      ]
    }
  ]
});
