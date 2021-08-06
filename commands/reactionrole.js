module.exports = {
    name: "reactionrole",
    description: "assign user's role by reacting to reaction",
    async execute(msg, args, Discord, client) {
        const channel = '872766630097215518';
        const qualitaRole = msg.guild.roles.cache.find(role => role.name === "Qualita Production");
        const rwdRole = msg.guild.roles.cache.find(role => role.name === "Redwoods & Eventevent");
        const qualitaReactionId = '🇶';
        const rwdReactionId = '🇷';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Pencet Reaction Yang Sesuai Dengan Departement Kalian Yaa~')
            .setDescription('Memilih Departement bakal bikin kamu masuk ke dalam channel yang sesuai dengan departement yang kamu pilih\ndan dapat meminimalisir notifikasi yang ga di perlukan\n\n' 
            + `${qualitaReactionId} Qualita\n`
            + `${rwdReactionId} Redwoods & Event Event`);

        let messageEmbed = await client.channels.cache.get(channel).send(embed);
        messageEmbed.react(qualitaReactionId);
        messageEmbed.react(rwdReactionId);

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            console.log("reaction channel: " + channel.toString());

            if(reaction.message.channel.id == channel) {
                if(reaction.emoji.name === qualitaReactionId) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(qualitaRole);
                    console.log("reaction qualita added!");
                }

                if(reaction.emoji.name === rwdReactionId) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(rwdRole);
                    console.log("reaction rwd added!");
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel) {
                console.log("reaction channel: " + channel.toString());
                if(reaction.emoji.name === qualitaReactionId) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(qualitaRole);
                    console.log("reaction qualita removed!");
                }

                if(reaction.emoji.name === rwdReactionId) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(rwdRole);
                    console.log("reaction rwd removed!");
                }
            } else {
                return;
            }
        });
    }
}