import gql from 'graphql-tag'
import { userFragment } from './fragments'

export const GET_OR_CREATE_USER_NONCE = gql`
	mutation GetOrCreateUserNonce($address: String!) {
		getOrCreateUserNonce(address: $address) {
			nonce
		}
	}
`

export const UPDATE_USER = gql`
	mutation UpdateUser($user: UserInput!) {
		updateUser(user: $user) {
			...user
		}
	}
	${userFragment}
`
