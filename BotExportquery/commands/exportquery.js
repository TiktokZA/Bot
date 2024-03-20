var fs = require("fs");
const mongoose = require("mongoose");
const moment = require("moment");
const {
  FB_Insight,
  FB_Content,
  FB_adsGenderAge,
  FB_ads,
  FB_province,
  FB_insightAgeGender,
} = require("../model/facebook");
const { Google_ads } = require("../model/google");
const {
  Lazada,
  Shopee,
  Lazada_Convert,
  Shopee_Convert,
  Lazada_OrderDetail,
  Lazada_Detail,
} = require("../model/ecommerce");
let converter = require("json-2-csv");
const path = require("path");
require("dotenv").config();
const { MONGODB_URL } = process.env;
module.exports = {
  config: {
    name: "query",
    description: "Get Data to Csv",
    usage: `-query`,
  },
  async run(bot, message, args) {
    console.log("message", message.channel);
    console.log("args", args);
    let DB = args[0];
    await mongoose
      .connect(MONGODB_URL + DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(response => {
        console.log("MongoDB Connection Succeeded.");
      })
      .catch(error => {
        console.log("Error in DB connection: " + error);
      });

    let collection = {
      FB_Ads: FB_ads,
      FB_Insight: FB_Insight,
      Google_ads: Google_ads,
      Lazada: Lazada,
      Shopee: Shopee,
    };
    let Datefilter = {
      FB_Ads: "Date",
      FB_Insight: "Date",
      Google_ads: "date",
      Lazada: "created_at",
      Shopee: "create_time",
    };

    let collections = args[1];
    if (collections) {
      let startDate = moment(args[2]).toDate();
      let endDate = moment(args[3]).toDate();
      let objmatch = {};
      objmatch[Datefilter[collections]] = {
        $gte: startDate,
        $lte: endDate,
      };
      let query = [
        {
          $match: objmatch,
        },
      ];
      //   console.log("query", JSON.stringify(query));
      let result = await collection[collections].aggregate(query);
      if (result.length == 0)
        return message.channel.send("This Query Not Have Data!!");

      //   console.log("result", result);
      result = result.map(item => {
        const { _id, ...final } = item;
        return final;
      });
      let url = `Export${DB}-${collections}-${args[2]}-${args[3]}.csv`;
      const csv = converter.json2csv(result);
      //   console.log("First output is", csv);
      fs.writeFile(url, csv, "utf8", function (err) {
        if (err) {
          console.log(
            "Some error occured - file either not saved or corrupted file saved."
          );
        } else {
          console.log("It's saved!");
        }
      });

      await message.channel.send({
        content: "File For You!! ",
        files: [
          {
            attachment: url,
            name: url,
          },
        ],
      });
      fs.unlink(url, function (err) {
        if (err && err.code == "ENOENT") {
          // file doens't exist
          console.info("File doesn't exist, won't remove it.");
        } else if (err) {
          // other errors, e.g. maybe we don't have enough permission
          console.error("Error occurred while trying to remove file");
        } else {
          console.info(`removed`);
        }
      });
    } else {
      message.channel.send("This command Invalid !!");
    }

    // if (args.length == 1 && _.isInteger(parseInt(args[0]))) {
    //   let Date = moment().subtract(parseInt(args[0]), "days");
    //   message.channel.send(
    //     `This Date : ${moment().format(
    //       "DD-MM-YYYY"
    //     )} subtract to : ${Date.format("DD-MM-YYYY")}`
    //   );
    // } else {
    //   message.channel.send("This command Invalid !!");
    // }
  },
};
