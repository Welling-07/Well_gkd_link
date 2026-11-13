// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zhihu.android.lite",
  "name": "知乎极速版",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-底部悬浮卡片",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.zhihu.android.mixshortcontainer.MixShortContainerActivity",
          "matches": "View[childCount=3] > @View[clickable=true][childCount=1][text=\"\"] > Image[childCount=0][text=\"\"] <<n [vid=\"view_content\"]",
          "exampleUrls": "https://e.gkd.li/23c80cb4-4bad-451c-b8e9-bfdbdfa7c6c5",
          "snapshotUrls": "https://i.gkd.li/i/16413243"
        }
      ]
    }
  ]
});
