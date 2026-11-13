// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.asjdhjhd.mgd.p3",
  "name": "橘汁",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.windmill.sdk.host.stub.StubActivityStandard_TL_Portrait",
          "matches": "@ImageView[visibleToUser=true][width<78] < [childCount=1] +2 FrameLayout >2 [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/34303867",
          "exampleUrls": "https://e.gkd.li/c080c336-c36e-4001-8fd1-c2ec0ef0a1da"
        }
      ]
    }
  ]
});
