var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;
var client = new MongoClient(new Server('localhost', 27017, {
    socketOptions: {connectTimeoutMS: 500},
    poolSize: 5,
    auto_reconnect: true
}, {
    numberOfRetries: 3,
    retryMilliSeconds: 500
}));
client.open(function (err, client) {
    if (err) {
        console.log("Nie powiodło się połączenie za pośrednictwem obiektu Client.");
    } else {
        var db = client.db("bazaFilmow");
        if (db) {
            console.log("Nawiązano połączenie za pośrednictwem obiektu Client . . .");
            db.authenticate("dbadmin", "test", function (err, results) {
                if (err) {
                    console.log("Uwierzytelnianie nie powiodło się . . .");
                    client.close();
                    console.log("Zamknięto połączenie . . .");
                } else {
                    console.log("Uwierzytelniono za pośrednictwem obiektu Client . . .");
                    db.logout(function (err, result) {
                        if (!err) {
                            console.log("Wylogowano za pośrednictwem obiektu Client . . .");
                        }
                        client.close();

                        console.log("Zamknięto połączenie . . .");
                    });
                }
            });
        }
    }
});