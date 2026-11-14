// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miui.gallery",
  "name": "小米相册",
  "groups": [
    {
      "key": 2,
      "name": "其他-图片保存成功弹窗",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.ExternalPhotoPageActivity",
          "matches": [
            "[text=\"图片已经保存到相册\"]",
            "[text=\"确定\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23383772"
        }
      ]
    }
  ]
});
