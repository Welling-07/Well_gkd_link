// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.rosan.installer.x.revived",
  "name": "InstallerX Revived",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动[确认]安装",
      "desc": "点击[确认]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.rosan.installer.ui.activity.InstallerActivity",
          "matches": "[text=\"确认\"] < @View[clickable=true] <n View < View[index=parent.childCount.minus(1)] -n [text=\"安装确认\"] <n View < View < View < View < ViewGroup < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/33545659",
          "exampleUrls": "https://e.gkd.li/71b051a6-c805-42d8-9c35-877044b92272"
        }
      ]
    }
  ]
});
