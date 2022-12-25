require('dotenv').config()

const { MongoClient, ObjectId } = require('mongodb');
const client = new MongoClient(process.env.MONGODB);

let db;

const mongoConnect = async (callback) => {
    await client.connect();
    console.log('Connected successfully to server');
    db = client.db("payroll_management");
    callback();
};

const getDb = () => {
    if (db) return db;
    throw "no database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
exports.ObjectId = ObjectId;