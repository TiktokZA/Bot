const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const FB_Insight = mongoose.model(
  "FB_Insight",
  new Schema(
    {
      full_label: "String",
      Date: "Date",
      Page_app_ID: "String",
      brand: "String",
      Page_name: "String",
      Page_followers: "Number",
      Page_likers_fans_online: "Number",
      Organic_reach: "Number",
      Paid_reach: "Number",
      Total_reach: "Number",
      Organic_impressions: "Number",
      Paid_impressions: "Number",
      Total_impressions: "Number",
      Page_post_engagements: "Number",
      Likes: "Number",
      Comments: "String",
      Shares: "Number",
      Content_consumptions: "Number",
      Total_video_views: "Number",
      Messaging_connection_count: "String",
      Total_likes: "Number",
      Total_page_views: "Number",
      Organic_video_views: "Number",
      Paid_video_views: "Number",
      Organic_10s_video_views: "Number",
      Paid_10s_video_views: "Number",
      Total_10s_video_views: "Number",
      Organic_30s_video_views: "Number",
      Paid_30s_video_views: "Number",
      Total_30s_video_views: "Number",
      Unique_video_views: "Number",
      createDate: "Date",
    },
    { timestamps: true }
  ),
  "FB_Insight"
);

const FB_Content = mongoose.model(
  "FB_Content",
  new Schema(
    {
      full_label: "String",
      Post_creation_date: "Date",
      Page_app_ID: "String",
      Page_name: "String",
      brand: "String",
      Post_ID: "String",
      Post_name: "String",
      Link_to_post: "String",
      Post_image_URL: "String",
      Post_thumbnail_URL: "String",
      Video_image_URL: "String",
      Post_message: "String",
      Engagement_rate: "Number",
      Post_organic_reach: "Number",
      Post_paid_reach: "Number",
      Post_reach: "Number",
      Post_organic_impressions: "Number",
      Post_paid_impressions: "Number",
      Post_impressions: "Number",
      Total_post_reactions: "Number",
      Page_fans_on_post_creation_date: "Number",
      Post_likes: "Number",
      Post_comments: "String",
      Post_shares: "String",
      Post_consumptions: "Number",
      Post_link_clicks: "String",
      Organic_video_views: "Number",
      Paid_video_views: "Number",
      Video_views: "Number",
      Organic_10s_video_views: "Number",
      Paid_10s_video_views: "Number",
      Total_10s_video_views: "Number",
      Organic_30s_video_views: "Number",
      Paid_30s_video_views: "Number",
      Total_30s_video_views: "Number",
      createDate: "Date",
    },
    { timestamps: true }
  ),
  "FB_Content"
);

const FB_adsGenderAge = mongoose.model(
  "FB_adsGenderAge",
  new Schema(
    {
      full_label: "String",
      brand: "String",
      Date: "Date",
      Ad_set_start_time: "Date",
      Ad_set_end_time: "Date",
      Campaign_ID: "String",
      Campaign_name: "String",
      Ad_set_ID: "String",
      Ad_set_name: "String",
      Ad_ID: "String",
      Ad_name: "String",
      Gender: "String",
      Age: "String",
      body: "String",
      object_story_id: "String",
      Image_url: "String",
      Account_ID: "String",
      Account_name: "String",
      actor_id: "String",
      Ad_creative_ID: "String",
      Campaign_objective: "String",
      Ad_creative_image_URL: "String",
      Ad_creative_thumbnail_URL: "String",
      Promoted_post_ID: "String",
      Promoted_post_image_URL: "String",
      Link_to_promoted_post: "String",
      Cost: "Number",
      Reach: "Number",
      Post_engagements: "Number",
      Impressions: "Number",
      Link_clicks: "Number",
      Clicks_all: "Number",
      Page_likes: "Number",
      New_messaging_conversations: "Number",
      Three_second_video_views: "Number",
      Website_conversions: "Number",
      Website_leads: "Number",
      On_Facebook_leads: "Number",
      Return_on_ad_spend_ROAS: "Number",
      Cost_per_1000_people_reached: "Number",
      Cost_per_post_engagement: "Number",
      CPM_cost_per_1000_impressions: "Number",
      CPC_cost_per_link_click: "Number",
      CPC_all: "Number",
      Cost_per_page_like: "Number",
      Cost_per_new_messaging_conversation: "Number",
      Cost_per_three_second_video_view: "Number",
      Cost_per_website_conversion: "Number",
      Cost_per_website_lead: "Number",
      Cost_per_on_Facebook_lead: "Number",
      Post_comments: "Number",
      Post_reactions: "Number",
      Post_Saves: "Number",
      Post_shares: "Number",
      Photo_views: "Number",
      Video_watches_at_25_percent: "Number",
      Video_watches_at_50_percent: "Number",
      Video_watches_at_75_percent: "Number",
      Video_watches_at_95_percent: "Number",
      Video_watches_at_100_percent: "Number",
      Video_average_watch_time: "Number",
      createDate: "Date",
    },
    { timestamps: true }
  ),
  "FB_adsGenderAge"
);
const FB_ads = mongoose.model(
  "FB_ads",
  new Schema(
    {
      full_label: "String",
      Year: "Date",
      brand: "String",
      Month: "Date",
      Ad_creative_ID: "String",
      actor_id: "String",
      body: "String",
      object_story_id: "String",
      Image_url: "String",
      Account_ID: "String",
      Account_name: "String",
      Ad_set_start_time: "Date",
      Ad_set_end_time: "Date",
      Date: "Date",
      Campaign_ID: "String",
      Campaign_name: "String",
      Cost: "Number",
      Reach: "Number",
      Post_engagements: "Number",
      Impressions: "Number",
      Link_clicks: "Number",
      Clicks_all: "Number",
      Page_likes: "Number",
      New_messaging_conversations: "Number",
      Three_second_video_views: "Number",
      Website_conversions: "Number",
      Website_leads: "Number",
      On_Facebook_leads: "Number",
      Return_on_ad_spend_ROAS: "Number",
      Cost_per_1000_people_reached: "Number",
      Cost_per_post_engagement: "Number",
      CPM_cost_per_1000_impressions: "Number",
      CPC_cost_per_link_click: "Number",
      CPC_all: "Number",
      Cost_per_page_like: "Number",
      Cost_per_new_messaging_conversation: "Number",
      Cost_per_three_second_video_view: "Number",
      Cost_per_website_conversion: "Number",
      Cost_per_website_lead: "Number",
      Cost_per_on_Facebook_lead: "Number",
      Page_engagements: "Number",
      Cost_per_page_engagement: "Number",
      Post_comments: "Number",
      Post_reactions: "Number",
      Post_Saves: "Number",
      Post_shares: "Number",
      Photo_views: "Number",
      Video_watches_at_25_percent: "Number",
      Video_watches_at_50_percent: "Number",
      Video_watches_at_75_percent: "Number",
      Video_watches_at_95_percent: "Number",
      Video_watches_at_100_percent: "Number",
      Video_average_watch_time: "Number",
      createDate: "Date",
    },
    { timestamps: true }
  ),
  "FB_ads"
);

const FB_province = mongoose.model(
  "FB_province",
  new Schema(
    {
      full_label: "String",
      brand: "String",
      City: "String",
      Data_source: "String",
      Date: "Date",
      Page_name: "String",
      Page_app_ID: "String",
      Total_likes: "Number",
      Total_reach: "Number",
    },
    { timestamps: true }
  ),
  "FB_province"
);

const FB_insightAgeGender = mongoose.model(
  "FB_insightAgeGender",
  new Schema(
    {
      full_label: "String",
      City: "String",
      brand: "String",
      Data_source: "String",
      Date: "Date",
      Age: "String",
      Gender: "String",
      Page_name: "String",
      Page_app_ID: "String",
      Total_likes: "Number",
      Total_reach: "Number",
    },
    { timestamps: true }
  ),
  "FB_insightAgeGender"
);

const SchemaDB = mongoose.Schema({}, { collection: "data_convert" });
const Convert = mongoose.model("data_convert", SchemaDB);
module.exports = {
  FB_Insight,
  FB_Content,
  FB_adsGenderAge,
  FB_ads,
  FB_province,
  FB_insightAgeGender,
  Convert,
};
