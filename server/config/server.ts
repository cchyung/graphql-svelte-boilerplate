import express from "express"
import http from "http"
import cors from "cors"
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core"
import { ApolloServerPlugin } from "apollo-server-plugin-base"
import { ApolloServer } from "apollo-server-express"
import { logger } from "lib/logger"
import { schema } from "schemas"
import { AuthenticatedContext, UnauthenticatedContext } from "lib/context"
import { verifyAuthToken } from "lib/auth"
import { BaseError } from "lib/errors"
import { db } from "models"

const loggingPlugin: ApolloServerPlugin = {
	async requestDidStart(requestContext) {
		if (requestContext.request.operationName === "IntrospectionQuery") return

		logger.info(`${requestContext.request.operationName} - ${requestContext.request.http.method}`)

		return {
			async didEncounterErrors(requestContext) {
				for (const error of requestContext.errors) {
					let payload: any = {
						query: requestContext.context.query,
					}

					let formattedPayload

					if (error.originalError) {
						if (error.originalError instanceof BaseError) {
							formattedPayload = {
								...payload,
								extra: error.originalError.extra,
								...((error.originalError.ctx as AuthenticatedContext)?.user
									? { user: (error.originalError.ctx as AuthenticatedContext).user._id }
									: {}),
							}
						} else {
							formattedPayload = payload
						}
						logger.error(error.originalError)
					} else {
						logger.error(error)
					}
				}
			},
		}
	},
}

export const startServer = async () => {
	const app = express()
	app.use(cors())
	const httpServer = http.createServer(app)

	const server = new ApolloServer({
		schema,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer }), loggingPlugin],
		context: async ({ req, res }): Promise<AuthenticatedContext | UnauthenticatedContext> => {
			// parse token from "Bearer"
			let authToken = req.headers.authorization || null

			if (authToken) {
				authToken = authToken.split(" ")[1]
				const authenticatedUser = await verifyAuthToken(authToken)
				return { req, res, user: authenticatedUser, db }
			} else {
				return { req, res, db }
			}
		},
	})

	await server.start()
	server.applyMiddleware({ app })

	httpServer.listen(process.env.PORT ?? 4000, () => {
		logger.info(`🗿 Server ready 🎉`)
	})
}
