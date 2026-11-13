// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qihoo.browser",
  "name": "360浏览器",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "activityIds": ".browser.download.ui.DownloadDetailActivity",
          "matches": "LinearLayout[childCount=3] > TextView[text!=null] + @FrameLayout[id!=null][clickable=true][childCount=1] > ImageView[childCount=0][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/4e3c5950-6471-42bf-9785-dab271aa0a55",
          "snapshotUrls": "https://i.gkd.li/i/20218587"
        }
      ]
    }
  ]
});
