const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://admin:PgXKbDKr1SpXRUkv@cluster0.lalsibb.mongodb.net/board";

module.exports = function(callback) {
    return MongoClient.connect(uri, callback);
}