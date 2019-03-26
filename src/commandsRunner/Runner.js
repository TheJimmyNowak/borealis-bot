const executePing = require('../commands/PingCommand')
const executeRegister = require('../commands/RegisterCommand')

module.exports = function run(msg) {
    var command = msg.content.substr(1)

    switch(command) {
        case "ping": executePing(msg); break;
        case "register": executeRegister(msg); break;
        default: msg.channel.send("This comment doesn't exist. Try -help."); break;
    }
}
