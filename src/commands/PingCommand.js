const MongoClient = require('mongodb')

module.exports = function executePing(msg) {
    msg.channel.send("Pong!!!")
}
