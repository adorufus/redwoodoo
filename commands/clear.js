const { Message } = require("discord.js");

module.exports = {
    name: "clear",
    description: "Clear (n) amount of message",
    async execute(msg, args){
        if(!args[0]) return msg.reply("Harus Masukin Berapa total Message Yang Mau Di Apus Dong 😮‍💨");
        if(isNaN(args[0])) return msg.reply("Harus Masukin Berapa total Message Yang Mau Di Apus Dong 😮‍💨");

        if(args[0] > 100) return msg.reply("Kamu Ga Bisa Apus Lebih Dari 100 tauuuu 😖");
        if(args[0] < 1) return msg.reply("Kamu Ga Bisa Apus Kurang Dari 1 tauuuu 😖");

        await msg.channel.messages.fetch({limit: args[0]}).then(messages => {
            msg.channel.bulkDelete(messages);
        })
    }
}