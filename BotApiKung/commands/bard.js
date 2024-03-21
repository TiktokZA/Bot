// const Bard = require("bard-ai");
//
require("dotenv").config();
const fs = require("fs");

// const bard = new Bard(process.env.BARD_API_KEY);

module.exports = {
  config: {
    name: "bard",
    description: "Get ping of the bot",
    usage: `-bard`,
  },
  async run(bot, message, args) {
    // console.log("message", message.channel);
    console.log("args", args);
    if (args.length > 0) {
      let str = "";
      args.map((item) => {
        str = str + item + " ";
      });
      let response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: str }],
        max_tokens: 100,
      });

      for (let mes of response.choices) {
        message.channel.send(mes.message);
      }
    } else {
      message.channel.send("This command Invalid !!");
    }
  },
};
