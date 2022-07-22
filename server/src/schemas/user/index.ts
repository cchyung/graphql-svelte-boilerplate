import { objectType, queryField, mutationField, stringArg, inputObjectType, nonNull } from "nexus"
import { db } from "models"
import { AuthService, UserService } from "services"
import { AccessError } from "lib/errors"

const userService = UserService(db)
const authService = new AuthService()

// ---------------------- Objects ----------------------

export const User = objectType({
	name: "User",
	definition(t) {
		t.string("_id")
		t.string("address")
		t.string("nonce")
		t.string("username")
		t.string("about")
		t.string("email")
		t.boolean("receiveNotifications")
		t.boolean("registered")
		t.string("imageURL")
	},
})

export const UserInput = inputObjectType({
	name: "UserInput",
	definition(t) {
		t.string("address")
		t.string("username")
		t.string("about")
		t.string("email")
		t.boolean("receiveNotifications")
		t.boolean("registered")
		t.string("imageURL")
	},
})

export const LoginObject = objectType({
	name: "LoginObject",
	definition(t) {
		t.string("authToken")
		t.field("user", { type: User })
	},
})

export const NonceObject = objectType({
	name: "NonceObject",
	definition(t) {
		t.string("nonce")
	},
})

// ---------------------- Queries ----------------------

export const GetUser = queryField("user", {
	type: User,
	args: {
		authToken: stringArg(),
	},
	resolve: async (_, { authToken }, ctx) => {
		if (authToken) {
			return await userService.getAuthenticatedUser(authToken)
		} else if (ctx.user) {
			const userId = ctx.user._id
			return await userService.getUser({ id: userId })
		}
	},
})

export const LoginUser = queryField("loginUser", {
	type: LoginObject,
	args: {
		address: stringArg(),
	},
	resolve: async (_, { address }, __) => {
		const user = await userService.getUser({ address })

		if (user) {
			const id = user._id

			return {
				authToken: await authService.generateAuthToken(id.toString()),
				user,
			}
		} else {
			throw Error("could not authenticate user")
		}
	},
})

// ---------------------- Mutations ----------------------

export const getOrCreateUserNonce = mutationField("getOrCreateUserNonce", {
	type: NonceObject,
	args: {
		address: stringArg(),
	},
	resolve: async (_, { address }, __) => {
		let user = await userService.getOrCreateUser({ address })

		return { nonce: user.nonce }
	},
})

export const updateUser = mutationField("updateUser", {
	type: User,
	args: {
		user: nonNull(UserInput),
	},
	resolve: async (_, { user }, ctx) => {
		if (ctx.user.address !== user.address) {
			throw new AccessError("User can only update themselves", { ctx, extra: { address: user.address } })
		}

		return await userService.updateUser({ ...user })
	},
})
