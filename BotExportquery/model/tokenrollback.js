const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const tokenplatform = mongoose.model(
  "tokenplatform",
  new Schema(
    {
      channel: "String",
      brand: "String",
      token: "String",
      appid: "String",
      appsecret: "String",
    },
    { timestamps: true }
  ),
  "tokenplatform"
);

module.exports = {
  tokenplatform,
};
