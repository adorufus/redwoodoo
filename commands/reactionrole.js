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
        const videoGraphReactionId = '🎬';
        const artDirectorReactionId = '🎨';
        const copywriterReactionId = '📝';
        const socmedReactionId = '📰';
        const projectCoordReactionId = '🗓️';
        const hoaReactionId = '📊'


        const mobileDevRole = msg.guild.roles.cache.find(role => role.name === "Mobile Developer");
        const fullstackDevRole = msg.guild.roles.cache.find(role => role.name === "Fullstack Developer");
        const graphicDesignRole = msg.guild.roles.cache.find(role => role.name === "Graphic Designer");
        const digiMarketRole = msg.guild.roles.cache.find(role => role.name === "Digital Marketing");
        const copywriterRole = msg.guild.roles.cache.find(role => role.name === "Copywriter");
        const hoaRole = msg.guild.roles.cache.find(role => role.name === "Head Of Account");
        const socialMediaRole = msg.guild.roles.cache.find(role => role.name === "Social Media");
        const projectCoordinatorRole = msg.guild.roles.cache.find(role => role.name === "Project Coordinator");
        const videoGraphRole = msg.guild.roles.cache.find(role => role.name === "Video Grapher");
        const artDirectorRole = msg.guild.roles.cache.find(role => role.name === "Art Director");

        if (args[0] == 'job') {
            let embed = new Discord.MessageEmbed()
                .setColor('#e42643')
                .setTitle('Pencet Reaction Yang Sesuai Dengan Job Kalian Ya~~')
                .setDescription('Biar Notifikasinya Rapih Aja Gitu Loh\n\n'
                    + `${mobileReactionId} Mobile Developer\n`
                    + `${fullstackReactionId} Fullstack Developer\n`
                    + `${graphicReactionId} Graphic Designer\n`
                    + `${videoGraphReactionId} Video Grapher\n`
                    + `${artDirectorReactionId} Art Director\n`
                    + `${copywriterReactionId} Copywriter\n`
                    + `${socmedReactionId} Social Media\n`
                    + `${projectCoordReactionId} Project Coordinator\n`
                    + `${hoaReactionId} Head Of Account\n`
                    + `${digiMarketReactionId} Digital Marketing\n`);

            let messageEmbed = await client.channels.cache.get(jobRwdChannel).send(embed);


            messageEmbed.react(mobileReactionId);
            messageEmbed.react(fullstackReactionId);
            messageEmbed.react(graphicReactionId);
            messageEmbed.react(videoGraphReactionId);
            messageEmbed.react(artDirectorReactionId);
            messageEmbed.react(copywriterReactionId);
            messageEmbed.react(socmedReactionId);
            messageEmbed.react(projectCoordReactionId);
            messageEmbed.react(hoaReactionId);
            messageEmbed.react(digiMarketReactionId);


            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;


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
                        console.log("reaction digital marketing added!");
                    }

                    if (reaction.emoji.name === videoGraphReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(videoGraphRole);
                        console.log("reaction video Graphic added!");
                    }

                    if (reaction.emoji.name === artDirectorReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(artDirectorRole);
                        console.log("reaction Art Director added!");
                    }

                    if (reaction.emoji.name === copywriterReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(copywriterRole);
                        console.log("reaction Copywriter added!");
                    }

                    if (reaction.emoji.name === socmedReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(socialMediaRole);
                        console.log("reaction Social Media added!");
                    }

                    if (reaction.emoji.name === projectCoordReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(projectCoordinatorRole);
                        console.log("reaction Project Coordinator added!");
                    }

                    if (reaction.emoji.name === hoaReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(hoaRole);
                        console.log("reaction head of account added!");
                    }
                } else {
                    return;
                }

            });

            client.on('messageReactionRemove', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;


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
                        console.log("reaction digital marketing added!");
                    }

                    if (reaction.emoji.name === videoGraphReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(videoGraphRole);
                        console.log("reaction video Graphic added!");
                    }

                    if (reaction.emoji.name === artDirectorReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(artDirectorRole);
                        console.log("reaction Art Director added!");
                    }

                    if (reaction.emoji.name === copywriterReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(copywriterRole);
                        console.log("reaction Copywriter added!");
                    }

                    if (reaction.emoji.name === socmedReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(socialMediaRole);
                        console.log("reaction Social Media added!");
                    }

                    if (reaction.emoji.name === projectCoordReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(projectCoordinatorRole);
                        console.log("reaction Project Coordinator added!");
                    }

                    if (reaction.emoji.name === hoaReactionId) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(hoaRole);
                        console.log("reaction head of account added!");
                    }
                } else {
                    return;
                }

            });
        } else if(args[0] == 'dept') {
            let embed = new Discord.MessageEmbed()
                .setColor('#e42643')
                .setTitle('Pencet Reaction Yang Sesuai Dengan Departement Kalian Yaa~')
                .setDescription('Memilih Departement bakal bikin kamu masuk ke dalam channel yang sesuai dengan departement yang kamu pilih\ndan dapat meminimalisir notifikasi yang ga di perlukan\n\n'
                    + `${qualitaReactionId} Qualita\n`
                    + `${rwdReactionId} Redwoods & Event Event`);

            let messageEmbed = await client.channels.cache.get(deptChannel).send(embed);


            messageEmbed.react(qualitaReactionId);
            messageEmbed.react(rwdReactionId);

            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                console.log("reaction channel: " + deptChannel.toString());


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
            });

            client.on('messageReactionRemove', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;


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

            });
        }
    }
}