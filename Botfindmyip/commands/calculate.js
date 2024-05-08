const moment = require("moment");
const _ = require("lodash");
module.exports = {
  config: {
    name: "diff",
    description: "Get ping of the bot",
    usage: `-diff`,
  },
  async run(bot, message, args) {
    console.log("message", message.channel);
    console.log("args", args);
    if (args.length == 1 && _.isInteger(parseInt(args[0]))) {
      let Date = moment().subtract(parseInt(args[0]), "days");
      message.channel.send(
        `This Date : ${moment().format(
          "DD-MM-YYYY"
        )} subtract to : ${Date.format("DD-MM-YYYY")}`
      );
    } else {
      message.channel.send("This command Invalid !!");
    }
  },
};
