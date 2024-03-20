const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Page = mongoose.model(
  "Page",
  new Schema(
    {
      brand: "String",
      page_name: "String",
      page_id: "String",
    },
    { timestamps: true }
  ),
  "Page"
);
module.exports = {
  Page,
};
