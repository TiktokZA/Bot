module.exports = {
  name: "ready",
  once: true,
  execute(bot) {
    let channels = bot.channels.cache.filter((ch) => ch.name === "bot");
    //Log Bot's username and the amount of servers its in to console
    console.log(
      `${bot.user.username} is online on ${bot.guilds.cache.size} servers!`
    );
    try {
      // channels.forEach((channel) => channel.send("Hello there! I'am Ready"));
    } catch (e) {
      console.log("[ERROR:]", e);
    }

    //Set the Presence of the bot user
    // bot.user.setPresence({ activities: [{ name: "My code" }] });
  },
};
