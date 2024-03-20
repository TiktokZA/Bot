const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Transaction_point = mongoose.model(
  "Transaction_point",
  new Schema(
    {
      ID: "String",
      TYPE: "String",
      brand: "String",
      IS_APPROVE: "String",
      POINT_RECEIVE: "Number",
      POINT_REDEEM: "Number",
      USER_ID: "String",
      USER: "String",
      ADMIN_USER: "String",
      CREATEDATE: "Date",
      TITLE: "String",
      // created_at :"Date",
      // updated_at :"Date"
    },
    { timestamps: true }
  ),
  "Transaction_point"
);
const Transaction_bills = mongoose.model(
  "Transaction_bills",
  new Schema(
    {
      ID: "String",
      TYPE: "String",
      brand: "String",
      IS_APPROVE: "String",
      IS_NOT_APPROVE: "String",
      NOT_APPROVE_REASON: "String",
      POINT_RECEIVE: "Number",
      DOWNLOAD: "Object",
      SHOPNAME: "String",
      PROVINCE: "String",
      USER_ID: "String",
      USER: "String",
      ADMIN_USER: "String",
      CREATEDATE: "Date",
      SHOPNAME_OTHER: "String",
      SHOPNAME_OTHER_ONLINE: "String",
      // created_at :"Date",
      // updated_at :"Date"
    },
    { timestamps: true }
  ),
  "Transaction_bills"
);
const Transaction_rewards = mongoose.model(
  "Transaction_rewards",
  new Schema(
    {
      ID: "String",
      TYPE: "String",
      brand: "String",
      NUM_REWARD: "String",
      REWARD: "String",
      POINT_REDEEM: "Number",
      LOGISTIC_IS_RECEIPT: "String",
      LOGISTIC_RECEIPTED_AT: "String",
      LOGISTIC_IS_DELIVER: "String",
      LOGISTIC_CODE: "String",
      LOGISTIC_DELIVERED_AT: "String",
      USER_ID: "String",
      USER: "String",
      ADMIN_USER: "String",
      LOGISTIC_EXTRA: "String",
      CREATEDATE: "Date",
    },
    { timestamps: true }
  ),
  "Transaction_rewards"
);
const Users = mongoose.model(
  "users_aura",
  new Schema(
    {
      ID: "String",
      POINT_RECEIVE: "number",
      brand: "String",
      POINT_REDEEM: "number",
      POINT_SUM: "number",
      IS_CUSTOMER: "String",
      FIRST_NAME: "String",
      LAST_NAME: "String",
      MOBILE: "String",
      GENDER: "String",
      BIRTH_DATE: "Date",
      DISTRICT: "String",
      PROVINCE: "String",
    },
    { timestamps: true }
  ),
  "users_aura"
);
const CRM_Users = mongoose.model(
  "CRM_User",
  new Schema(
    {
      brand: "String",
      RegisterDate: "Date",
      UserId: "String",
      FullName: "String",
      Gender: "String",
      ContactNumber: "String",
      Email: "String",
      BirthDate: "Date",
      Age: "Number",
      ProvinceName: "String",
      Zipcode: "String",
      FacebookId: "String",
      LineUid: "String",
      BuzzebeesKey: "String",
      LastUpdate: "Date",
      createdate: "Date",
    },
    { timestamps: true }
  ),
  "CRM_User"
);
const CRM_Transaction = mongoose.model(
  "CRM_Transaction",
  new Schema(
    {
      brand: "String",
      TransactionDate: "Date",
      UserId: "String",
      "Point Change": "Number",
      "Point Current": "Number",
      Activity: "String",
      CampaignId: "String",
      CampaignName: "String",
      BuzzebeesKey: "String",
      RedeemItem: "String",
      RedeemAmount: "Number",
      createdate: "Date",
    },
    { timestamps: true }
  ),
  "CRM_Transaction"
);
// const SchemaDB3 = mongoose.Schema({}, { collection: "Users" });
// const Users = mongoose.model("Users", SchemaDB3);
// const UsersDB = mongoose.model("lazada_details", SchemaDB3);
module.exports = {
  Transaction_point,
  Transaction_bills,
  Transaction_rewards,
  Users,
  CRM_Users,
  CRM_Transaction,
};
