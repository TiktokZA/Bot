const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("fs");
require("dotenv").config();
let token = process.env.DISCORD_TOKEN;
let prefix = "-";
const bot = new Client({
  intents: [GatewayIntentBits.Guilds],
});
bot.commands = new Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter(f => f.endsWith(".js"));
for (const file of commandFiles) {
  const props = require(`./commands/${file}`);
  console.log(`${file} loaded`);
  bot.commands.set(props.config.name, props);
}

const eventFiles = fs.readdirSync("./events/").filter(f => f.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    bot.once(event.name, (...args) => event.execute(...args, bot));
  } else {
    bot.on(event.name, (...args) => event.execute(...args, bot));
  }
}

bot.on("messageCreate", async message => {
  console.log("message", message);
  //Check if author is a bot or the message was sent in dms and return
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  //get prefix from config and prepare message so it can be read as a command
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  //Check for prefix
  if (!cmd.startsWith(prefix)) return;

  //Get the command from the commands collection and then if the command is found run the command file
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args);
});

bot.login(token);
