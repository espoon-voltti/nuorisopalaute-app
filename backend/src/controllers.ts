import querystring = require("querystring")
import axios from "axios"
import fetch, { RequestInit } from "node-fetch"

const trimbleUrl = "https://easiointi.espoo.fi/efeedback/api/georeport/v2/requests.xml"

export async function Test(ctx: any) {
	return "Hello World"
}

export async function SendTest(ctx: any) {
	console.log(ctx.request.body)

	const url = trimbleUrl
	const serviceCodes = {
		palaute: "8ba7db6f-cf15-ea11-9130-005056b41c86",
		aloite: "8ca7db6f-cf15-ea11-9130-005056b41c86"
	}
	const authOptions = {
		api_key: process.env.TRIMBLE_KEY,
		jurisdiction_id: "nuortenespoo",
		service_code: serviceCodes["palaute"]
	}
	console.log(process.env.TRIMBLE_KEY)
	const postBody = Object.assign({}, ctx.request.body, authOptions, { respond: undefined }, { type: undefined })
	const options: RequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
		},
		body: querystring.stringify(postBody)
	}

	try {
		fetch(trimbleUrl, options)
			.then(res => res.text())
			.then(json => {
				console.log(json)
				return json
			})
	} catch (e) {
		console.log(e)
		return e
	}
}
