import * as Router from "@koa/router"

import { SendFeedback, SendInitiative, GetInitiatives } from "./controllers"

const router = new Router()

router.get("/api", async ctx => {
	ctx.body = "API root"
})

router.post("/api/feedback", async ctx => {
	ctx.body = await SendFeedback(ctx)
})

router.post("/api/initiative", async ctx => {
	ctx.body = await SendInitiative(ctx)
})

router.get("/api/health", async ctx => {
	ctx.body = "healthy"
})

router.get("/api/initiatives", async ctx => {
	ctx.body = await GetInitiatives(ctx)
})

const routes = router.routes()

export { routes }
