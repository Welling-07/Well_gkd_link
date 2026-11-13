// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.magichome",
  "name": "荣耀智慧空间",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-首页顶部广告",
      "activityIds": ".business.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12843930",
      "rules": [
        {
          "matches": "[vid=\"item_close_image\"]",
          "activityIds": ".business.MainActivity"
        },
        {
          "matches": "[id=\"com.hihonor.magichome:id/item_close_image\"]",
          "activityIds": "com.hihonor.magichome.business.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "其他-推荐服务声明",
      "desc": "推荐服务声明弹窗。默认点击\"取消\"按钮",
      "activityIds": ".business.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12843976",
      "rules": [
        {
          "matches": "[text$=\"推荐服务声明\"] < LinearLayout < LinearLayout + LinearLayout > [vid=\"negative_btn\"]",
          "activityIds": ".business.MainActivity"
        },
        {
          "matches": "[text$=\"推荐服务声明\"] < LinearLayout < LinearLayout + LinearLayout > [id=\"com.hihonor.magichome:id/negative_btn\"]",
          "activityIds": "com.hihonor.magichome.business.MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "desc": "点击以后再说",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12916700",
      "rules": [
        {
          "activityIds": ".business.MainActivity",
          "matches": "TextView[text=\"立即更新\"] -2 [vid=\"negative_btn\"][text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/12916700",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "TextView[text=\"立即更新\"] -2 [id=\"com.hihonor.magichome:id/negative_btn\"][text=\"以后再说\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-升级提示",
      "desc": "点击以后再说",
      "enable": false,
      "activityIds": "com.hihonor.magichome.business.MainActivity",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12916700",
      "rules": [
        {
          "matches": "TextView[text=\"立即更新\"] -2 [id=\"com.hihonor.magichome:id/negative_btn\"][text=\"以后再说\"]",
          "activityIds": "com.hihonor.magichome.business.MainActivity",
          "fastQuery": true
        }
      ]
    }
  ]
});
