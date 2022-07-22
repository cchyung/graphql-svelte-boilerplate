import gql from 'graphql-tag'
import { userFragment } from './fragments'

export const GET_USER = gql`
	query GetUser($authToken: String) {
		user(authToken: $authToken) {
			...user
		}
	}
	${userFragment}
`

export const LOGIN_USER = gql`
	query LoginUser($address: String!) {
		loginUser(address: $address) {
			authToken
			user {
				...user
			}
		}
	}
	${userFragment}
`
