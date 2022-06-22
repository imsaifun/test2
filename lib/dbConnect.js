import mongoose from "mongoose";

const MDB_URI = process.env.MDB_URI;
if (!MDB_URI) {
    throw new Error(
        'please define MDB_URI in the env.local file'
    );
}

let cached = global.mongoose;
if (!cached) { cached = global.mongoose = { conn: null, promise: null }; }

export default async function dbConnect() {
    if (cached.conn) { return cached.conn; };

    if (!cached.promise) {
        const options = { bufferCommands: false, };

        cached.promise = mongoose.connect(MDB_URI, options)
            .then(mongoose => mongoose);
    }
    cached.conn = await cached.promise;
    console.log('connected to mdb')
    return cached.conn;
}