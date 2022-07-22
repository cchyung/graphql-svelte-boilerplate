import { Types } from "mongoose"
import { Database } from "models"
import { AuthService } from "../auth"

const identityFilter = ({ id, address }) => ({
	$or: [{ _id: id }, { address }],
})

const authService = new AuthService()

export const UserService = (db: Database) => {
	/**
	 * Get a user by id or address
	 * @param options
	 * @returns
	 */
	async function getUser({ id, address }: { id?: string | Types.ObjectId; address?: string }) {
		if (!id && !address) {
			throw new Error("Must provide either id or address")
		}
		const filter = identityFilter({ id, address })
		const query = db.User.findOne(filter)
		return await query.exec()
	}

	/**
	 * Gets all existing users
	 */
	async function getUsers({ ids, addresses }: { ids?: string[]; addresses?: string[] } = {}) {
		const filter = {}
		if (ids || addresses) {
			filter["$or"] = [{ _id: { $in: ids } }, { address: { $in: addresses } }]
		}
		return await db.User.find(filter).exec()
	}

	/**
	 * Creates and returns a new user
	 * @param options
	 * @returns
	 */
	async function createUser({
		address,
		username,
		about,
		email,
		receiveNotifications,
		imageURL,
		registered,
	}: {
		address: string
		username?: string
		about?: string
		email?: string
		receiveNotifications?: boolean
		imageURL?: string
		registered?: boolean
	}) {
		const user = new db.User({
			_id: address,
			address,
			username,
			about,
			email,
			receiveNotifications,
			imageURL,
			registered,
			nonce: authService.generateNonce(),
		})

		return await user.save()
	}

	/**
	 * Fetches a user by address or creates a new one if a user with that address does not exist
	 * @param options
	 * @returns User object
	 */
	async function getOrCreateUser({ address }: { address: string }) {
		const existingUser = await getUser({ address })
		if (existingUser) {
			return existingUser
		}

		return await createUser({ address })
	}

	/**
	 * Updates and returns the updated user
	 * @param options
	 * @returns
	 */
	async function updateUser({
		id,
		address,
		username,
		about,
		email,

		imageURL,
		receiveNotifications,
		registered,
	}: {
		id?: string | Types.ObjectId
		address?: string
		username?: string
		about?: string
		email?: string
		receiveNotifications?: boolean
		imageURL?: string
		registered?: boolean
	}) {
		if (!id && !address) {
			throw new Error("Must provide either id or address")
		}
		const filter = identityFilter({ id, address })
		// Address is immutable
		const properties = {
			$set: {
				address,
				username,
				about,
				email,
				receiveNotifications,
				imageURL,
				registered,
			},
		}
		const options = { new: true }
		const query = db.User.findOneAndUpdate(filter, properties, options)
		return await query.exec()
	}

	/**
	 * Delete a user
	 * @param id
	 * @returns
	 */
	async function deleteUser({ id, address }: { id?: string | Types.ObjectId; address?: string }) {
		if (!id && !address) {
			throw new Error("Must provide either id or address")
		}
		const filter = identityFilter({ id, address })
		const query = db.User.findOneAndDelete(filter)
		return await query.exec()
	}

	/**
	 * Generate a new nonce for user
	 * @param options
	 * @returns
	 */
	async function generateUserNonce({ id, address }: { id?: string | Types.ObjectId; address?: string }) {
		if (!id && !address) {
			throw new Error("Must provide either id or address")
		}
		const filter = identityFilter({ id, address })
		const update = {
			nonce: authService.generateNonce(),
		}
		const options = { new: true }
		const query = db.User.findOneAndUpdate(filter, update, options)
		return await query.exec()
	}

	/**
	 *
	 * @param authToken token from request header
	 * @returns authenticated user if found or nullblak
	 */
	async function getAuthenticatedUser(authToken: string) {
		try {
			const userId = authService.decodeAuthToken(authToken)

			if (userId) {
				const authenticatedUser = await db.User.findById(userId)
				return authenticatedUser
			}
			return null
		} catch (error) {
			return null
		}
	}

	return {
		getUser,
		getUsers,
		createUser,
		getOrCreateUser,
		updateUser,
		deleteUser,
		generateUserNonce,
		getAuthenticatedUser,
	}
}
