require("dotenv").config();
const { OpenAI } = require("openai");
const fs = require("fs");
const { concat } = require("lodash");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = {
  config: {
    name: "gpt",
    description: "Get ping of the bot",
    usage: `-gpt`,
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
        // max_tokens: 500,
      });
      // console.log("response.choices", response.choices);
      response.choices.map((item) => {
        console.log("mes.message", item.message);
        message.channel.send(item.message);
      });
    } else {
      message.channel.send("This command Invalid !!");
    }
  },
};
