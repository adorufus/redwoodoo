module.exports = {
    name: "ping",
    description: "check if the bot is online",
    execute(msg, args) {
        msg.reply("pong");
    }
}