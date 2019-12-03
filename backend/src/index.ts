import * as Koa from "koa"
import * as BodyParser from "koa-body"
import * as Helmet from "koa-helmet"
import { routes } from "./routes"
import config from "./config"

const cors = require("@koa/cors")

const app = new Koa()

app.use(Helmet())
app.use(cors())
app.use(BodyParser({ multipart: true }))
app.use(routes)

const { port } = config

app.listen(port)

console.log("Server running on port 3000")
