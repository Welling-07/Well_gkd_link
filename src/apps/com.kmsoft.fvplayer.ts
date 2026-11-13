// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.kmsoft.fvplayer",
  "name": "快码万能播放器",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "enable": false,
      "activityIds": [
        "com.kmsoft.fvplayer.activity.MainActivity",
        "com.kmsoft.fvplayer.activity.PayActivity"
      ],
      "rules": [
        {
          "name": "腾讯SDK",
          "matches": "[id=\"android:id/content\"] >n FrameLayout[index=2][childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/14019546",
          "activityIds": [
            "com.kmsoft.fvplayer.activity.MainActivity",
            "com.kmsoft.fvplayer.activity.PayActivity"
          ]
        },
        {
          "name": "快手SDK",
          "matches": "[vid=\"ksad_tk_view\"] >n @ViewGroup[clickable=true] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/14019547",
          "activityIds": [
            "com.kmsoft.fvplayer.activity.MainActivity",
            "com.kmsoft.fvplayer.activity.PayActivity"
          ]
        }
      ]
    }
  ]
});
