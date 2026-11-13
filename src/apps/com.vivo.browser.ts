// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vivo.browser",
  "name": "vivo浏览器",
  "groups": [
    {
      "key": 0,
      "name": "功能类-免流提示",
      "activityIds": "com.vivo.browser.pendant.PendantActivity",
      "snapshotUrls": "https://i.gkd.li/i/12847431",
      "rules": [
        {
          "activityIds": ".pendant.PendantActivity",
          "matches": "[vid=\"dialog_button_right\"][text=\"继续浏览\"]",
          "snapshotUrls": "https://i.gkd.li/i/12847431"
        },
        {
          "matches": "[id=\"com.vivo.browser:id/dialog_button_right\"][text=\"继续浏览\"]",
          "activityIds": "com.vivo.browser.pendant.PendantActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-天气详情页面",
      "rules": [
        {
          "activityIds": ".lightweb.LightWebNomalStartActivity",
          "matches": "[text$=\"广告\"] +5 * > Image",
          "snapshotUrls": "https://i.gkd.li/i/14392332"
        },
        {
          "activityIds": "com.vivo.browser.lightweb.LightWebNomalStartActivity",
          "matches": "[text$=\"广告\"] +5 * > Image",
          "snapshotUrls": "https://i.gkd.li/i/14392332"
        }
      ]
    }
  ]
});
