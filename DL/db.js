import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL)

export async function connect() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("****  DB - Connection Success ****");
    } catch (err) {
        console.log("Error connecting to Mongo ", err);
    }
}

