import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI;
const globalForMongoose = globalThis as unknown as { mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } };
const cached = globalForMongoose.mongoose || { conn: null, promise: null };
if (!globalForMongoose.mongoose) globalForMongoose.mongoose = cached;
export async function connectMongo() { if (!MONGODB_URI) throw new Error('MONGODB_URI is not configured'); if (cached.conn) return cached.conn; if (!cached.promise) cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false }); cached.conn = await cached.promise; return cached.conn; }
export const hasMongo = Boolean(MONGODB_URI);
