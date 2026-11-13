// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sec.android.app.music",
  "name": "Samsung Music",
  "groups": [
    {
      "key": 0,
      "name": "功能类-[优化电池使用量]弹窗",
      "desc": "点击[取消]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".common.activity.MusicMainActivity",
          "matches": [
            "[text=\"是否为三星音乐关闭优化电池使用量？\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/884ae3c4-5b94-4213-939c-9da783dd0be9",
          "snapshotUrls": "https://i.gkd.li/i/15144792"
        },
        {
          "fastQuery": true,
          "activityIds": "com.sec.android.app.music.common.activity.MusicMainActivity",
          "matches": [
            "[text=\"是否为三星音乐关闭优化电池使用量？\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/884ae3c4-5b94-4213-939c-9da783dd0be9",
          "snapshotUrls": "https://i.gkd.li/i/15144792"
        }
      ]
    }
  ]
});
