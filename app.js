require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = "?";
const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.login(process.env.CLIENT_TOKEN);

client.on('message', msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(msg, args);
    }
    else if(command === 'clickup'){
        client.commands.get('clickup').execute(msg, args);
    }
    else if(command === 'reactionrole'){
        client.commands.get('reactionrole').execute(msg, args, Discord, client);
    } else if(command === 'clear'){
        client.commands.get('clear').execute(msg, args);
    }
}); 