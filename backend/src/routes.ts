import * as Router from "@koa/router"

import {
	Test} from "./controllers"

const router = new Router()

router.get("/api", async (ctx) => {
	ctx.body = "API root"
})

router.get("/api/test", async (ctx) => {
	ctx.body = await Test(ctx);
})

router.get("*", async (ctx) => {
	ctx.body = ctx.url
})

const routes = router.routes()

export {routes}