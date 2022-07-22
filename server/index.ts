import { loadConfig } from "config/config"
import { initDatabaseConnection } from "config/database"
import { startServer } from "config/server"
import { logger } from "lib/logger"
;(async () => {
	try {
		logger.info("Starting up Server")

		if (process.env.NODE_ENV !== "production") {
			loadConfig()
		}
		await initDatabaseConnection()
		await startServer()
	} catch (error) {
		logger.error(error)
	}
})()
