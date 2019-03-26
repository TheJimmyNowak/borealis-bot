const MongoClient = require('mongodb')
const settings = require('../../settings')

module.exports = function executeRegister(msg) {
    msg.channel.send("Hi User!\nNice to meet you.\nLet's register")

    MongoClient.connect(settings['db-url'], { useNewUrlParser: true }, function(err, db) {
        if (err) console.log('error: ',err);

        var obj = {
            "username": msg.author.username,
            "avatarURL": msg.author.avatarURL,
        }
        var dbo = db.db("borealis")
        dbo.collection("users").insertOne(obj, (err, res) => {
            if (err) console.log(err);
            console.log("Poszło")
            db.close()
        })
    })
}