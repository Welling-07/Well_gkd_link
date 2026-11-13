// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.spotify.music",
  "name": "Spotify",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "fastQuery": true,
      "activityIds": [
        ".SpotifyMainActivity",
        ".com.spotify.nowplaying.musicinstallation.NowPlayingActivity"
      ],
      "rules": [
        {
          "name": "主页Ad",
          "matches": "[vid=\"ad_tag\"] + [vid=\"close_button\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24270410",
          "exampleUrls": "https://e.gkd.li/539c0135-9b5b-44c2-baec-4eb9953f8e69",
          "fastQuery": true,
          "activityIds": [
            ".SpotifyMainActivity",
            ".com.spotify.nowplaying.musicinstallation.NowPlayingActivity"
          ]
        },
        {
          "name": "播放器Ad",
          "matches": "[desc=\"关闭广告\"] < @[clickable=true][childCount=2] <3 View <<5 [vid=\"track_carousel\"]",
          "snapshotUrls": "https://i.gkd.li/i/27084526",
          "exampleUrls": "https://e.gkd.li/2605fd95-0ef4-4cd6-be04-adc577b10e1a",
          "fastQuery": true,
          "activityIds": [
            ".SpotifyMainActivity",
            ".com.spotify.nowplaying.musicinstallation.NowPlayingActivity"
          ]
        }
      ]
    }
  ]
});
