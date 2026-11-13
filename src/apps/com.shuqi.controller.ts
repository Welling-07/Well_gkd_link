// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.shuqi.controller",
  "name": "书旗小说",
  "groups": [
    {
      "key": 0,
      "name": "局部广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.shuqi.home.MainActivity",
          "anyMatches": [
            "[vid=\"promotion_close\"][visibleToUser=true]",
            "[visibleToUser=true][vid=\"promotion_close\"]"
          ],
          "exampleUrls": "https://e.gkd.li/a634cd5a-7b84-44ad-b65b-99f5e8769eeb",
          "snapshotUrls": [
            "https://i.gkd.li/i/23831955",
            "https://i.gkd.li/i/24859977"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.shuqi.home.MainActivity",
          "matches": "[vid=\"bottomCloseImg\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/9cfc90dc-9afe-45ff-8ee2-f8e173af9bd9",
          "snapshotUrls": "https://i.gkd.li/i/23831956"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-内部右侧浮动广告",
      "enable": false,
      "activityIds": "com.shuqi.home.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12513811",
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/promotion_close\"]",
          "activityIds": "com.shuqi.home.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-关闭打卡红包弹窗",
      "enable": false,
      "activityIds": "com.shuqi.common",
      "snapshotUrls": "https://i.gkd.li/i/12513822",
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/bottomCloseImg\"]",
          "activityIds": "com.shuqi.common"
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-阅读页面底部广告",
      "desc": "点击关闭x图标-关闭优惠券弹窗-关闭当前广告",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.shuqi.android.ui.dialog",
          "matches": "[id=\"com.shuqi.controller:id/right_close_ad_text\"]",
          "snapshotUrls": "https://i.gkd.li/i/12513893"
        },
        {
          "activityIds": "com.shuqi.monthlypay.view",
          "matches": [
            "[text*=\"优惠券\"]",
            "[id=\"com.shuqi.controller:id/close_btn\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12513908"
        },
        {
          "activityIds": "com.shuqi.reader.ShuqiReaderActivity",
          "matches": "@ImageView[clickable=true] - RelativeLayout [id=\"com.shuqi.controller:id/noah_tv_stencil_native_source\"]",
          "snapshotUrls": "https://i.gkd.li/i/12513860"
        },
        {
          "activityIds": "com.shuqi.reader.ShuqiReaderActivity",
          "matches": "[id=\"com.shuqi.controller:id/banner_container_ad\"] >n RelativeLayout + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12901429"
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-听书页面底部广告",
      "desc": "点击卡片右上角关闭按钮-点击底部中间<关闭当前广告>",
      "enable": false,
      "activityIds": "com.shuqi.audio.online.view.AudioBookActivity",
      "rules": [
        {
          "matches": "[id=\"com.shuqi.controller:id/remove_current_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/12513959",
          "activityIds": "com.shuqi.audio.online.view.AudioBookActivity"
        },
        {
          "matches": "[id=\"com.shuqi.controller:id/ad_close_but\"]",
          "snapshotUrls": "https://i.gkd.li/i/12513944",
          "activityIds": "com.shuqi.audio.online.view.AudioBookActivity"
        }
      ]
    }
  ]
});
