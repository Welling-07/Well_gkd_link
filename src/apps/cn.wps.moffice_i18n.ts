// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.wps.moffice_i18n",
  "name": "WPS Office Lite",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "cn.wps.moffice.func.pdf.OverseaPayActivity",
          "matches": "@ImageView[clickable=true][width<90 && height<90] < LinearLayout + [text=\"确定退出吗？\"]",
          "snapshotUrls": "https://i.gkd.li/i/23577702"
        },
        {
          "fastQuery": true,
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "matches": "@ImageView[clickable=true][width<90 && height<90] <n [childCount=2] <n [childCount=2] < [vid=\"TANGRAM_VIEW_CONTAINER_ID\"]",
          "snapshotUrls": "https://i.gkd.li/i/23578206"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "cn.wps.moffice.main.local.HomeRootActivity",
          "matches": [
            "[text^=\"开启通知权限\"]",
            "@[clickable=true] >2 [text=\"别再烦我\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23577888"
        }
      ]
    }
  ]
});
