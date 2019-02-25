const MongoClient = require("mongodb").MongoClient;
const config = require("./config");

class MongoDb {
    static async getInstance() {
        if (!MongoDb._instance) MongoDb._instance = new MongoDb();
        await MongoDb._instance.connect();
        return MongoDb._instance;
    }

    constructor() {
    }

    async connect() {
        return new Promise((resolve, reject) => {
            let client = new MongoClient(config.dbUrl,  { useNewUrlParser: true });
            client.connect((err, result)=>{
                if (err) reject(err);
                else resolve(result.db(config.dbName));
            });
        });
    }

    async find(collectionName, json) {
        if (!this._db) {
            this._db = await this.connect();
        }

    }
}

module.exports = MongoDb.getInstance();