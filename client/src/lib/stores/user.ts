import { writable, get } from 'svelte/store'
import { getLocalStorage, setLocalStorage } from './common'
import client from '$config/client'
import { GET_USER, GET_OR_CREATE_USER_NONCE, LOGIN_USER } from '$api/user'
import type {
	GetOrCreateUserNonceMutation,
	GetOrCreateUserNonceMutationVariables,
	LoginUserQuery,
	LoginUserQueryVariables,
	User as UserType
} from '$api'
import { showToast } from '$utils'

const userKey = 'user'

export interface User {
	metadata: {
		authToken: string
		[key: string]: any
	}
	user: UserType
	[key: string]: any
}
export interface StoredUser {
	authToken: string
}

// dho: lowkey this is a mess now but it works
// someone please clean this up
export const user = (() => {
	const { subscribe, set, update } = writable<User>(resolveUser(getLocalStorage(userKey)) as User)

	// Initialize from localstorage
	function resolveUser(storedUser: StoredUser | null): Partial<User> {
		if (storedUser) {
			return {
				metadata: {
					authToken: storedUser.authToken,
				}
			}
		}
		return null
	}

	// Sign In Methods
	const signIn = async ({ address, }: { address: string; }) => {
		// Fetch nonce
		const nonceMutate = await client.mutate<
			GetOrCreateUserNonceMutation,
			GetOrCreateUserNonceMutationVariables
		>({
			mutation: GET_OR_CREATE_USER_NONCE,
			variables: { address }
		})
		const nonceData = nonceMutate.data?.getOrCreateUserNonce
		if (!nonceData) throw Error('could not get nonce')

		// Login user
		const userQuery = await client.query<LoginUserQuery, LoginUserQueryVariables>({
			query: LOGIN_USER,
			variables: { address }
		})
		const userData = userQuery.data?.loginUser
		if (!userData) throw Error('could not login user')

		set({
			metadata: {
				authToken: userData.authToken
			},
			user: userData.user
		})

		return userData
	}

	const refreshData = async () => {
		const userQuery = await client.query({
			query: GET_USER,
			variables: { authToken: get(user).metadata.authToken },
			fetchPolicy: 'no-cache'
		})
		const userData = userQuery.data?.user
		if (userData) {
			user.update((u) => ({ ...u, user: userData }))
		}
	}

	// Update localstorage whenever the user changes
	subscribe((user_: User) => {
		const storedUser: StoredUser | null = user_
			? {
					authToken: user_.metadata.authToken,
			  }
			: null
		setLocalStorage(userKey, storedUser)
	})

	const signOut = () => {
		setLocalStorage(userKey, null)
		client.cache.reset()
		client.clearStore()
		set(null)
	}

	return {
		subscribe,
		update,
		refreshData,
		signIn,
		signOut,
		signedIn: () => !!get(user),
	}
})()

// Initialization Methods
const initUserData = async () => {
	if (!user.signedIn()) return
	const userQuery = await client.query({
		query: GET_USER,
		variables: { authToken: get(user).metadata.authToken }
	})
	const userData = userQuery.data?.user

	return userData
}

export const initUser = async () => {
	const userData = await initUserData()

	if (userData) {

		// do one update
		user.update((u) => {
			u.user = userData
			return u
		})
	} else {
		console.error('failed to get user data')
		showToast({
			level: 'error',
			message: 'Failed to get user data. Please contact a team member for support.'
		})
		user.signOut()
	}
}
