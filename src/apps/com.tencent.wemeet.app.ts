// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.wemeet.app",
  "name": "腾讯会议",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14332625",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.tencent.wemeet.sdk.meeting.premeeting.home.HomeActivity",
          "matches": "@[text=\"稍后更新\"][clickable=true] + [text=\"立即更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/26088565",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text^=\"腾讯会议新版本\"] +3 * > [text=\"下次安装\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "评价提示-通话质量评价",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.tencent.wemeet.sdk.meeting.aftermeeting.AfterMeetingFeedbackMeetingExperienceActivity",
          "matches": [
            "[text=\"通话品质如何\"]",
            "[vid=\"closeBtn\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23786665"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.tencent.wemeet.sdk.meeting.premeeting.home.HomeActivity",
          "matches": "@Button[clickable=true][childCount=1] > ImageView[childCount=0][width<80 && height<80] <<n [vid=\"operatingBannerContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/23786670"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.tencent.wemeet.sdk.meeting.aftermeeting.AfterMeetingPictureActivity",
          "matches": "[vid=\"btnClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/23787037"
        }
      ]
    }
  ]
});
