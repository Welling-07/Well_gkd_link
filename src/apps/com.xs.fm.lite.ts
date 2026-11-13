// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xs.fm.lite",
  "name": "番茄音乐（原畅听音乐）",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.dragon.read.pages.main.MainFragmentActivity",
            "com.bytedance.polaris.impl.view.BulletSingleContainerActivity"
          ],
          "matches": "@FlattenUIImage[clickable=true] -(1,2) FlattenUIText[text=\"开心收下\" || text=\"前往领取\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25246321",
            "https://i.gkd.li/i/25246625",
            "https://i.gkd.li/i/25245765"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.dragon.read.pages.main.MainFragmentActivity",
          "matches": "@ImageView[clickable=true] - [text=\"添加番茄音乐组件\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25246270"
        },
        {
          "fastQuery": true,
          "activityIds": "com.dragon.read.pages.main.MainFragmentActivity",
          "matches": "@ImageView[clickable=true] <3 ViewGroup[childCount=3] < ViewGroup < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/24908945"
        },
        {
          "fastQuery": true,
          "activityIds": "com.bytedance.polaris.impl.view.BulletSingleContainerActivity",
          "matches": "@[text=\"狠心离开\"] - FrameLayout > [text=\"立即领取\"]",
          "snapshotUrls": "https://i.gkd.li/i/25367580"
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "matches": "[text^=\"领取成功\"][clickable=true][visibleToUser=true][childCount=1]",
          "snapshotUrls": "https://i.gkd.li/i/25246506"
        },
        {
          "preKeys": 0,
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "matches": "@View[clickable=true][width<90 && height<90] -2 ScrollView < View[childCount=3]",
          "snapshotUrls": "https://i.gkd.li/i/25246616"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-自动展开回复",
      "desc": "点击[展开XX条回复]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.xs.fm.karaoke.impl.cover.KaraokeCoverActivity",
          "matches": "@ViewGroup[clickable=true] > TextView[text^=\"展开\"][text$=\"条回复\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25246736",
            "https://i.gkd.li/i/25282147"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-关联抖音账号登录弹窗",
      "desc": "x掉",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.xs.fm.live.impl.ecom.mall.auth.DouyinAuthActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][width<66 && height<66] <<3 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/25367551",
          "fastQuery": true
        },
        {
          "activityIds": "com.dragon.read.pages.main.MainFragmentActivity",
          "matches": "[text=\"关联抖音后解锁更多功能体验\"] - ImageView[clickable=true][visibleToUser=true][width<66 && height<66]",
          "snapshotUrls": "https://i.gkd.li/i/25367549",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.dragon.read.pages.main.MainFragmentActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][width<45 && height<45] +2 [text=\"回推荐继续听歌\"]",
          "snapshotUrls": "https://i.gkd.li/i/25367586"
        }
      ]
    }
  ]
});
