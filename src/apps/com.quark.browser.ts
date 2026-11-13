// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.quark.browser",
  "name": "夸克浏览器",
  "groups": [
    {
      "key": 0,
      "name": "其他-设置默认浏览器提示",
      "desc": "点击取消",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.ucpro.BrowserActivity",
          "matches": "@Button[text=\"取消\"] + Button[text=\"去设置\"]",
          "snapshotUrls": "https://i.gkd.li/i/13249469",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "desc": "点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ucpro.BrowserActivity",
          "matches": [
            "[text*=\"版本更新\" || text^=\"优化升级\" || text^=\"发现新版本\"]",
            "[text=\"取消\" || text=\"暂不更新\"][clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13292512",
            "https://i.gkd.li/i/13455360",
            "https://i.gkd.li/i/24786251",
            "https://i.gkd.li/i/16643051"
          ],
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        },
        {
          "matches": [
            "[text*=\"版本更新\" || text^=\"优化升级\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13292512",
            "https://i.gkd.li/i/13455360",
            "https://i.gkd.li/i/16643051"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": "com.ucpro.BrowserActivity",
      "snapshotUrls": "https://i.gkd.li/i/13292571",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": "com.ucpro.BrowserActivity",
          "matches": "ImageView[vid=\"close_img\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13292571"
        },
        {
          "matches": "ImageView[id=\"com.quark.browser:id/close_img\"][clickable=true]",
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": "com.ucpro.BrowserActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ucpro.BrowserActivity",
          "matches": "[vid=\"ad_close_layout_container\" || vid=\"rel_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/77db7983-bfe0-4701-a580-d5d77a017624",
          "snapshotUrls": [
            "https://i.gkd.li/i/21967140",
            "https://i.gkd.li/i/21967204"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.ucpro.BrowserActivity",
          "matches": "[vid=\"append_element_view_remove_ad_ll\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/3a89486e-83c4-4032-bc07-4531921c9d09",
          "snapshotUrls": "https://i.gkd.li/i/21967126"
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-小说阅读页面底部广告",
      "enable": false,
      "activityIds": "com.ucpro.BrowserActivity",
      "rules": [
        {
          "matches": "[id=\"com.quark.browser:id/tv_close_ad\"][text=\"关闭广告\"]",
          "activityIds": "com.ucpro.BrowserActivity"
        },
        {
          "matches": "[id=\"com.quark.browser:id/ad_close_layout_container\"]",
          "activityIds": "com.ucpro.BrowserActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "功能类-设置默认浏览器提示",
      "desc": "点击取消",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": "com.ucpro.BrowserActivity",
      "snapshotUrls": "https://i.gkd.li/i/13249469",
      "rules": [
        {
          "matches": "@Button[text=\"取消\"] + Button[text=\"去设置\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": "com.ucpro.BrowserActivity"
        }
      ]
    }
  ]
});
