// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.estrongs.android.pop",
  "name": "ES文件浏览器",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.fighter.loader.view.InteractTemplateAdDialog",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12509667"
        },
        {
          "fastQuery": true,
          "activityIds": ".view.FileExplorerActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": "https://i.gkd.li/i/12509669"
        },
        {
          "fastQuery": true,
          "activityIds": [
            ".app.openscreenad.HomeBackSplashActivity",
            ".app.PopVideoPlayer",
            ".view.FileExplorerActivity"
          ],
          "matches": "[vid=\"ad_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/3632e624-28bf-45fd-bb52-a7ee9a644b7a",
          "snapshotUrls": [
            "https://i.gkd.li/i/18072076",
            "https://i.gkd.li/i/18072078",
            "https://i.gkd.li/i/24684475"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告",
      "activityIds": ".view.FileExplorerActivity",
      "fastQuery": true,
      "rules": [
        {
          "matches": "ImageView - LinearLayout >2 ImageView[vid=\"close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12674919",
          "fastQuery": true,
          "activityIds": ".view.FileExplorerActivity"
        },
        {
          "matches": "@[vid=\"close\"] + [vid=\"ad_flag_source\"]",
          "snapshotUrls": "https://i.gkd.li/i/12818281",
          "fastQuery": true,
          "activityIds": ".view.FileExplorerActivity"
        },
        {
          "matches": "[vid=\"close_b_t_a_i_b_no_compliance\"]",
          "snapshotUrls": "https://i.gkd.li/i/13842299",
          "fastQuery": true,
          "activityIds": ".view.FileExplorerActivity"
        },
        {
          "matches": "ImageView - LinearLayout >(2) ImageView[id=\"com.estrongs.android.pop:id/close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12674919"
          ],
          "activityIds": "com.estrongs.android.pop.view.FileExplorerActivity",
          "fastQuery": true
        },
        {
          "matches": "@[id=\"com.estrongs.android.pop:id/close\"] + [id=\"com.estrongs.android.pop:id/ad_flag_source\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12818281"
          ],
          "activityIds": "com.estrongs.android.pop.view.FileExplorerActivity",
          "fastQuery": true
        },
        {
          "matches": "[vid=\"close_b_t_a_i_b_no_compliance\"]",
          "snapshotUrls": "https://i.gkd.li/i/13842299",
          "activityIds": "com.estrongs.android.pop.view.FileExplorerActivity",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.fighter.loader.view.InteractTemplateAdDialog",
          "matches": "[id=\"com.estrongs.android.pop:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12509667"
        },
        {
          "activityIds": "com.estrongs.android.pop.view.FileExplorerActivity",
          "matches": "TextView[text!=null] < FrameLayout - ImageView - FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12509669"
        },
        {
          "activityIds": "com.estrongs.android.pop.view.FileExplorerActivity",
          "matches": "[id=\"com.estrongs.android.pop:id/interact_ad_root\"] >n [id=\"com.estrongs.android.pop:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13936617"
        }
      ]
    }
  ]
});
