import mongoose from "mongoose"
import { MongoMemoryServer } from "mongodb-memory-server"

let mongod: MongoMemoryServer

/**
 * Create the in-memory MongoDB server
 */
export const dbCreate = async () => {
	mongod = await MongoMemoryServer.create()
}

/**
 * Connect to the in-memory database.
 */
export const dbConnect = async () => {
	const uri = mongod.getUri()
	await mongoose.connect(uri)
}

/**
 * Create and Connect the database
 */
export const dbStart = async () => {
	await dbCreate()
	await dbConnect()
}

/**
 * Drop database, close the connection and stop mongod.
 */
export const dbClose = async () => {
	await mongoose.connection.dropDatabase()
	await mongoose.connection.close()
	await mongod.stop()
}

/**
 * Remove all the data for all db collections.
 */
export const dbClear = async () => {
	const collections = mongoose.connection.collections

	for (const key in collections) {
		const collection = collections[key]
		await collection.deleteMany({})
	}
}
