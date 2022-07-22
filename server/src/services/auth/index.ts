import crypto from "crypto"
import jwt from "jsonwebtoken"

interface JwtPayload {
	userId: string
}

export const AuthService = class {
	/**
	 * Generate a random nonce
	 * @returns
	 */
	generateNonce(): string {
		return crypto.randomBytes(16).toString("base64")
	}

	/**
	 * Generate a signed JWT
	 * @param userId
	 * @returns signed JWT
	 */
	generateAuthToken(userId: string): string {
		return jwt.sign({ userId }, process.env.JWT_SECRET)
	}

	/**
	 * Decode and return userId from JWT
	 * @param authToken token from request header
	 * @returns authenticated user if found or nullblak
	 */
	decodeAuthToken(authToken: string): string {
		const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET, { complete: true })
		const payload = decodedToken.payload as JwtPayload
		return payload.userId
	}
}
