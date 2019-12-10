import * as Router from "@koa/router"

import { Test, SendTest, GetInitiatives } from "./controllers"

const router = new Router()

router.get("/api", async ctx => {
	ctx.body = "API root"
})

router.get("/api/test", async ctx => {
	ctx.body = await Test(ctx)
})

router.post("/api/test", async ctx => {
	ctx.body = await SendTest(ctx)
})

router.get("/api/health", async ctx => {
	ctx.body = "healthy"
})

router.get("/api/initiatives", async ctx => {
	ctx.body = await GetInitiatives(ctx)
})

const routes = router.routes()

export { routes }
