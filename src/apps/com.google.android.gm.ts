// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.google.android.gm",
  "name": "Gmail",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-信息流广告",
      "desc": "右滑删除⚠️该规则需v1.12.0及以上版本可使用",
      "fastQuery": true,
      "rules": [
        {
          "matches": "@[childCount=7][vid$=\"ad_teaser_item\"] >2 [vid=\"ad_badge_text\"]",
          "action": "swipe",
          "swipeArg": {
            "start": {
              "left": "width * 0.15",
              "top": "width * 0.08"
            },
            "end": {
              "left": "width * 0.64",
              "top": "width * 0.08"
            },
            "duration": 114
          },
          "snapshotUrls": [
            "https://i.gkd.li/i/13255698",
            "https://i.gkd.li/i/25542293"
          ],
          "fastQuery": true
        },
        {
          "fastQuery": true,
          "name": "点击广告扩展-1",
          "matches": "[id=\"com.google.android.gm:id/button_chip_ad_teaser_info_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255698"
        },
        {
          "fastQuery": true,
          "name": "点击广告扩展-2",
          "matches": "[id=\"com.google.android.gm:id/basic_ad_teaser_info_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255698"
        },
        {
          "preKeys": [
            1,
            2
          ],
          "name": "广告中心-点击屏蔽",
          "matches": "Button[text=\"屏蔽此广告\"||text^=\"Block\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13255700",
            "https://i.gkd.li/i/13724271"
          ],
          "fastQuery": true
        },
        {
          "preKeys": 3,
          "name": "点击继续确认屏蔽",
          "matches": "Button[text=\"继续\"||text=\"Continue\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13255701",
            "https://i.gkd.li/i/13724287"
          ],
          "fastQuery": true
        },
        {
          "preKeys": 4,
          "fastQuery": true,
          "name": "关闭弹窗",
          "matches": "[id=\"com.google.android.gm:id/my_ad_center_close_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13263279"
        },
        {
          "preKeys": [
            1,
            2
          ],
          "name": "广告中心-点击屏蔽 (2)",
          "matches": "Button[text=\"屏蔽此广告\"||text^=\"Block\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13255700",
            "https://i.gkd.li/i/13724271"
          ],
          "fastQuery": true
        },
        {
          "preKeys": 6,
          "name": "点击继续确认屏蔽 (2)",
          "matches": "Button[text=\"继续\"||text=\"Continue\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13255701",
            "https://i.gkd.li/i/13724287"
          ],
          "fastQuery": true
        },
        {
          "preKeys": 7,
          "fastQuery": true,
          "name": "关闭弹窗 (2)",
          "matches": "[id=\"com.google.android.gm:id/my_ad_center_close_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13263279"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-首页卡片",
      "desc": "邮件页顶部[试用Google Woekspace]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.google.android.gm.ui.MailActivityGmail",
          "matches": "Button - View[desc=\"\"] < @View[childCount=2][clickable=true][width=102 && height=102][visibleToUser=true] - TextView <n View[childCount>5 && childCount<10] <<3 ComposeView - LinearLayout <<2 [vid=\"thread_list_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/30378474",
          "exampleUrls": "https://e.gkd.li/357dc3c9-cf98-40b3-a01d-35bb8219dae8"
        }
      ]
    }
  ]
});
