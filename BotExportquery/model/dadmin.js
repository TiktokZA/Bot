const mongoose = require("mongoose");

const SchemaDB = mongoose.Schema(
  {
    brand: String,
    id: String,
    parent_file: String,
    template_id: String,
    data: Object,
    createDate: Date,
    updateDate: Date,
    isDelete: Boolean,
  },
  { collection: "d_admin" }
);
module.exports = mongoose.model("d_admin", SchemaDB);
