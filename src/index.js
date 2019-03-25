const { Client } = require('discord.js');
const { token } = require('../settings');
const client = new Client();

client.on('ready', () => console.log('Ready!'));

client.on('message', (msg) => {
    if (msg.author.bot) return;

    if (msg.content.startsWith('!ping')) {
        msg.channel.send('!gnip');
    }
});

client.on('guildCreate', guild => {
    guild.createChannel("borealis-control", "text")
})
client.login(token);