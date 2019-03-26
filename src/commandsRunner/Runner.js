const executePing = require('../commands/PingCommand')

module.exports = function run(msg) {
    var command = msg.content.substr(1)

    switch(command) {
        case "ping": executePing(msg); break;
        default: msg.channel.send("This comment doesn't exist. Try -help."); break;
    }
}
