// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.weaver.emobile7",
  "name": "EMobile7",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@[id=\"com.weaver.emobile7:id/sdl__negative_button\"][text=\"取消\"] +(2) [id=\"com.weaver.emobile7:id/sdl__positive_button\"][text=\"更新\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673154"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
