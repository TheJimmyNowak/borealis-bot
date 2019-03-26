const { Client } = require('discord.js')
const settings = require('../settings')
const run = require('./commandsRunner/Runner')

const client = new Client();

client.on('ready', () => console.log('Ready!'));

client.on('message', (msg) => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(settings["prefix"])) return;

    run(msg)
});


client.login(settings["token"]);