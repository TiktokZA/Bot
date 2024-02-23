require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = {
  config: {
    name: "gpt",
    description: "Get ping of the bot",
    usage: `-gpt`,
  },
  async run(bot, message, args) {
    console.log("message", message.channel);
    console.log("args", args);
    if (args.length == 1) {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "assistant", content: previous_prompt },
          { role: "user", content: prompt },
        ],
        max_tokens: 100,
      });

      // Extract the completion text from the API response
      const reply = completion.data.choices[0].message;

      const formattedText = reply.content;
      console.log("formattedText", formattedText);
    } else {
      message.channel.send("This command Invalid !!");
    }
  },
};
