const discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  message.channel.send(`:ping_pong: Pong: **${bot.ping}**ms`);
}
