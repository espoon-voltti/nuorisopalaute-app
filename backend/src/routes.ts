import * as Router from "@koa/router"

import { SendFeedback, SendInitiative, GetInitiatives } from "./controllers"

const router = new Router()

router.get("/api", async (ctx: any) => {
	ctx.body = "API root"
})

router.post("/api/feedback", async (ctx: any) => {
	ctx.body = await SendFeedback(ctx)
})

router.post("/api/initiative", async (ctx: any) => {
	ctx.body = await SendInitiative(ctx)
})

router.get("/api/health", async (ctx: any) => {
	ctx.body = "healthy"
})

router.get("/api/initiatives", async (ctx: any) => {
	ctx.body = await GetInitiatives(ctx)
})

const routes = router.routes()

export { routes }
