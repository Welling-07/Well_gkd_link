// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.dxy.idxyer",
  "name": "丁香园",
  "groups": [
    {
      "key": 0,
      "name": "局部广告",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".biz.main.MainActivity",
          "matches": "[vid=\"iv_image_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/24851243",
            "https://i.gkd.li/i/24868496"
          ],
          "fastQuery": true
        },
        {
          "activityIds": ".biz.job.JobHomeActivity",
          "matches": "[vid=\"include_ad\"] > [vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24858514",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".biz.main.MainActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/24852395",
            "https://i.gkd.li/i/24852398"
          ]
        },
        {
          "name": "内容对你有帮助吗-反馈页面",
          "activityIds": "cn.dxy.drugscomm.business.medadviser.detail.MedAdviserDetailComposeActivity",
          "matches": "[text*=\"有帮助吗\"] + [text*=\"参与反馈\"] +n ImageView[clickable=true][width<100 && height<100]",
          "snapshotUrls": "https://i.gkd.li/i/24995535"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "desc": "点击:x取消",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".biz.main.MainActivity",
          "matches": "[vid=\"iv_close_open_notification\"]",
          "snapshotUrls": "https://i.gkd.li/i/24877703"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-悬浮小窗播放权限",
      "desc": "点击取消",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".common.WebViewActivity",
          "matches": [
            "[text=\"开启悬浮小窗播放功能\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/24865283"
        }
      ]
    }
  ]
});
