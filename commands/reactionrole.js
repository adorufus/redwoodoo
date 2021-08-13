module.exports = {
    name: "reactionrole",
    description: "assign user's role by reacting to reaction",
    async execute(msg, args, Discord, client) {
        const deptChannel = '872766630097215518';
        const jobRwdChannel = '875769397464158288';

        //departement stuff
        const qualitaRole = msg.guild.roles.cache.find(role => role.name === "Qualita Production");
        const rwdRole = msg.guild.roles.cache.find(role => role.name === "Redwoods & Eventevent");
        const qualitaReactionId = '🇶';
        const rwdReactionId = '🇷';
        const mobileReactionId = '📱';
        const fullstackReactionId = '💻';
        const graphicReactionId = '🖌️';
        const digiMarketReactionId = '🇩';

        const mobileDevRole = msg.guild.roles.cache.find(role => role.name === "Mobile Developer");
        const fullstackDevRole = msg.guild.roles.cache.find(role => role.name === "Fullstack Developer");
        const graphicDesignRole = msg.guild.roles.cache.find(role => role.name === "Graphic Designer");
        const digiMarketRole = msg.guild.roles.cache.find(role => role.name === "Digital Marketing");

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle(args[0] == 'job' ? 'Pencet Reaction Yang Sesuai Dengan Job Kalian Ya~~' : 'Pencet Reaction Yang Sesuai Dengan Departement Kalian Yaa~')
            .setDescription(args[0] == 'job' ? 'Biar Notifikasinya Rapih Aja Gitu Loh' : 'Memilih Departement bakal bikin kamu masuk ke dalam channel yang sesuai dengan departement yang kamu pilih\ndan dapat meminimalisir notifikasi yang ga di perlukan\n\n'
                + args[0] == 'job' ? `${mobileReactionId} Mobile Developer\n` : `${qualitaReactionId} Qualita\n`
                    + args[0] == 'job' ? `${fullstackReactionId} Fullstack Developer\n` : `${rwdReactionId} Redwoods & Event Event`
                        + args[0] == 'job' ? `\n${graphicReactionId} Graphic Designer\n` : ''
                            + args[0] == 'job' ? `\n${digiMarketReactionId} Digital Marketing\n` : '');

        let messageEmbed = await client.channels.cache.get(args[0] == 'job' ? jobRwdChannel : deptChannel).send(embed);

        if (args[0] == 'job') {
            messageEmbed.react(mobileReactionId);
            messageEmbed.react(fullstackReactionId);
            messageEmbed.react(graphicReactionId);
            messageEmbed.react(digiMarketReactionId);
        } else {
            messageEmbed.react(qualitaReactionId);
            messageEmbed.react(rwdReactionId);
        }

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            console.log("reaction channel: " + deptChannel.toString());

            if (args[0] == 'job') {
                if (reaction.message.channel.id == jobRwdChannel) {
                    if (reaction.emoji.name === mobileReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(mobileDevRole);
                        console.log("reaction mobiledev added!");
                    }

                    if (reaction.emoji.name === fullstackReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(fullstackDevRole);
                        console.log("reaction fullstackdev added!");
                    }

                    if (reaction.emoji.name === graphicReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(graphicDesignRole);
                        console.log("reaction graphicdesigner added!");
                    }

                    if (reaction.emoji.name === digiMarketReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(digiMarketRole);
                        console.log("reaction fullstackdev added!");
                    }
                } else {
                    return;
                }
            } else {
                if (reaction.message.channel.id == deptChannel) {
                    if (reaction.emoji.name === qualitaReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(qualitaRole);
                        console.log("reaction qualita added!");
                    }

                    if (reaction.emoji.name === rwdReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(rwdRole);
                        console.log("reaction rwd added!");
                    }
                } else {
                    return;
                }
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (args[0] == 'job') {
                if (reaction.message.channel.id == jobRwdChannel) {
                    if (reaction.emoji.name === mobileReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(mobileDevRole);
                        console.log("reaction mobiledev added!");
                    }

                    if (reaction.emoji.name === fullstackReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(fullstackDevRole);
                        console.log("reaction fullstackdev added!");
                    }

                    if (reaction.emoji.name === graphicReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(graphicDesignRole);
                        console.log("reaction graphicdesigner added!");
                    }

                    if (reaction.emoji.name === digiMarketReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(digiMarketRole);
                        console.log("reaction fullstackdev added!");
                    }
                } else {
                    return;
                }
            } else {
                if (reaction.message.channel.id == deptChannel) {
                    console.log("reaction channel: " + deptChannel.toString());
                    if (reaction.emoji.name === qualitaReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(qualitaRole);
                        console.log("reaction qualita removed!");
                    }

                    if (reaction.emoji.name === rwdReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(rwdRole);
                        console.log("reaction rwd removed!");
                    }
                } else {
                    return;
                }
            }
        });
    }
}