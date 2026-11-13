// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.drivedu.chexuetang",
  "name": "车学堂",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": ".main.activity.MainActivity_",
      "rules": [
        {
          "matches": "@[clickable=true][width<82] < [desc^=\"dislike\"] + * >2 [text=\"广告\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/16020d11-8e5b-4fb5-8e57-6baaa13ce6a9",
          "snapshotUrls": "https://i.gkd.li/i/15137765",
          "fastQuery": true,
          "activityIds": ".main.activity.MainActivity_"
        },
        {
          "matches": "@[name$=\"View\"][width<72][height<72] < FrameLayout <3 FrameLayout <<(6,8) [vid=\"fragment_ad\"]",
          "exampleUrls": "https://m.gkd.li/57941037/402dc635-354e-4c4b-a6b9-0eebeecfee0d",
          "snapshotUrls": "https://i.gkd.li/i/15148368",
          "fastQuery": true,
          "activityIds": ".main.activity.MainActivity_"
        },
        {
          "activityIds": "cn.com.drivedu.chexuetang.main.activity.MainActivity_",
          "matches": "[desc^=\"dislike\"] > @View[clickable=true][visibleToUser=true] <<n [vid=\"fragment_ad\"]",
          "exampleUrls": "https://m.gkd.li/57941037/16020d11-8e5b-4fb5-8e57-6baaa13ce6a9",
          "snapshotUrls": "https://i.gkd.li/i/15137765",
          "fastQuery": true
        },
        {
          "activityIds": "cn.com.drivedu.chexuetang.main.activity.MainActivity_",
          "matches": "FrameLayout[childCount=5] > FrameLayout > @ImageView[visibleToUser=true] <<n [vid=\"fragment_ad\"]",
          "exampleUrls": "https://m.gkd.li/57941037/402dc635-354e-4c4b-a6b9-0eebeecfee0d",
          "snapshotUrls": "https://i.gkd.li/i/15148368",
          "fastQuery": true
        }
      ]
    }
  ]
});
