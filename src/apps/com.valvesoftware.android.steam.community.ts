// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.valvesoftware.android.steam.community",
  "name": "Steam",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动展开信息",
      "desc": "展开游戏介绍的详细信息",
      "matchRoot": true,
      "rules": [
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.5",
            "bottom": "height * 0.3"
          },
          "activityIds": ".MainActivity",
          "matches": "@[text^=\"展开\" || getChild(0).text^=\"展开\"][visibleToUser=true][bottom<getPrev(7).bottom] <n View <2 View[childCount=2] <n [id=\"tabletGrid\"] <2 * <2 [id=\"responsive_page_template_content\"] <3 [childCount=4] <2 View[childCount=2] <<2 WebView[text!=null] <<3 ViewGroup -2 HorizontalScrollView >3 [text=\"菜单\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/29454381",
            "https://i.gkd.li/i/29454378"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/29472521",
          "exampleUrls": "https://e.gkd.li/583ee471-9cbf-4025-9445-206f4c2ef357",
          "matchRoot": true
        }
      ]
    }
  ]
});
