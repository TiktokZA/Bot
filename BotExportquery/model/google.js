const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Google_ads = mongoose.model(
  "Google_ads",
  new Schema(
    {
      full_label: "String",
      brand: "String",
      account_name: "String",
      ad_group_id: "String",
      ad_group_name: "String",
      ad_id: "String",
      campaign_id: "String",
      campaign_name: "String",
      date: "Date",
      display_url: "String",
      final_url: "String",
      headline: "String",
      image_ad_name: "String",
      image_ad_url: "String",
      account_id: "String",
      advertising_channel_type: "String",
      ad_type: "String",
      viewable_impressions: "Number",
      average_position_unweighted: "Number",
      clicks: "Number",
      conversions: "Number",
      total_conversion_value: "Number",
      cost: "Number",
      engagements: "Number",
      impressions: "Number",
      interactions: "Number",
      video_impressions: "Number",
      watch_100_percent_views: "Number",
      video_views: "Number",
      view_through_conversions: "Number",
      createDate: "Date",
    },
    { timestamps: true }
  ),
  "Google_ads"
);

const Google_ads_convert = mongoose.model(
  "Google_ads_convert",
  new Schema(
    {
      full_label: "String",
      brand: "String",
      channel: "String",
      type: "String",
      parent_id: "String",
      account_name: "String",
      ad_group_id: "String",
      ad_group_name: "String",
      ad_id: "String",
      campaign_id: "String",
      campaign_name: "String",
      date: "Date",
      display_url: "String",
      final_url: "String",
      headline: "String",
      image_ad_name: "String",
      image_ad_url: "String",
      account_id: "String",
      advertising_channel_type: "String",
      ad_type: "String",
      viewable_impressions: "Number",
      average_position_unweighted: "Number",
      clicks: "Number",
      conversions: "Number",
      total_conversion_value: "Number",
      cost: "Number",
      engagements: "Number",
      impressions: "Number",
      interactions: "Number",
      video_impressions: "Number",
      watch_100_percent_views: "Number",
      video_views: "Number",
      view_through_conversions: "Number",
      createDate: "Date",
    },
    { timestamps: true }
  ),
  "data_convert"
);
module.exports = { Google_ads, Google_ads_convert };
