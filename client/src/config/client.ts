import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core/index.js'
import type { NormalizedCacheObject } from '@apollo/client/core/index.js'
import { setContext } from '@apollo/client/link/context/index.js'
import env from '$env'

import { get } from 'svelte/store'
import { user } from '$lib/stores'

class Client {
	private static _instance: Client
	client: ApolloClient<NormalizedCacheObject>
	cache: InMemoryCache

	constructor() {
		if (Client._instance) {
			return Client._instance
		}
		Client._instance = this
		this.cache = new InMemoryCache()
		this.client = this.setupClient()
	}

	setupClient() {
		const httpLink = new HttpLink({
			uri: `${env.SERVER_URL}/graphql`
		})

		const authLink = setContext((_, { headers }) => {
			const authToken = get(user)?.metadata?.authToken

			return {
				headers: {
					...headers,
					authorization: authToken ? `Bearer ${authToken}` : ''
				}
			}
		})

		return new ApolloClient({
			link: authLink.concat(httpLink),
			cache: this.cache
		})
	}
}

export default new Client().client
