const dotenv = require("dotenv")

const nodeEnv = process.env.NODE_ENV

if (nodeEnv !== "production") dotenv.config()

const port = process.env.PORT || 3000

const pgUser = process.env.DB_USER ? process.env.DB_USER : "postgres"
const pgPassword = process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "postgres"

const pgHost = process.env.DB_URL ? process.env.DB_URL : "postgres"
const pgDatabaseName = process.env.DB_NAME ? process.env.DB_NAME : "postgres"

export default {
	nodeEnv,
	port,
	pgUser,
	pgPassword,
	pgHost,
	pgDatabaseName
}
