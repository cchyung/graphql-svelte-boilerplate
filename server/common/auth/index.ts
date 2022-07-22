import jwt from "jsonwebtoken"
import { db } from "models"
import { User } from "models/user"

interface KoopAuthJWT extends jwt.Jwt {
	payload: jwt.Jwt["payload"] & {
		userId: string
	}
}

/**
 *
 * @param authToken token from request header
 * @returns authenticated user if found or nullblak
 */
export const verifyAuthToken = async (authToken: string): Promise<User> => {
	try {
		const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET, { complete: true }) as KoopAuthJWT
		const userId = decodedToken.payload.userId

		if (userId) {
			const authenticatedUser = await db.User.findById(userId)
			return authenticatedUser
		}
		return null
	} catch (error) {
		return null
	}
}
