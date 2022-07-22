import { gql } from 'graphql-tag'

export const userFragment = gql`
	fragment user on User {
		_id
		address
		username
		about
		email
		receiveNotifications
		imageURL
		registered
	}
`
