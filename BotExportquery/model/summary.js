const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const summary = mongoose.model(
  "summary",
  new Schema(
    {
      full_label: "String",
      brand: "String",
      channel: "String",
      type: "String",
      parent_id: "String",
      city: "String",
      author: "Object",
      detail: "Object",
      ad: "Object",
      ad_group: "Object",
      account: "Object",
      audience: "Object",
      created_date: "Date",
      campaign: "Object",
      creative: "Object",
      conversion: "Object",
      page_name: "String",
      page_event: "Object",
      in_app_event: "Object",
      paid: "Object",
      uniq: "Object",
      non_catalog: "Object",
      engagement: "Object",
      reach: "Object",
      createDate: "Date",
      date: "Date",
      campaign: "Object",
      like: "Number",
      total_like: "Number",
      video: "Object",
      data_source: "Object",
      basic: "Object",
      gender: "String",
      create_date: "Date",
    },
    { timestamps: true }
  ),
  "data_convert"
);

module.exports = { summary };
