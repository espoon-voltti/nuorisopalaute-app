import querystring = require("querystring")
import axios from "axios"
import fetch, { RequestInit } from "node-fetch"

const trimbleUrl = "https://easiointi.espoo.fi/efeedback/api/georeport/6aika/requests.json"

export async function Test(ctx: any) {
	return "Hello World"
}

export async function SendTest(ctx: any) {
	console.log(ctx.request.body)
	console.log(ctx.request.files)

	const url = trimbleUrl
	const serviceCodes = {
		palaute: "8ba7db6f-cf15-ea11-9130-005056b41c86",
		aloite: "8ca7db6f-cf15-ea11-9130-005056b41c86"
	}
	const authOptions = {
		api_key: process.env.TRIMBLE_KEY,
		jurisdiction_id: "nuortenespoo",
		service_code: serviceCodes["aloite"]
	}
	console.log(process.env.TRIMBLE_KEY)
	const postBody = Object.assign(
		{},
		ctx.request.body,
		authOptions,
		{ respond: undefined },
		{ type: undefined },
		{ "location parameter": "nuortenpalaute.espoo.fi" }
	)
	const options: RequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
		},
		body: querystring.stringify(postBody)
	}

	try {
		fetch(trimbleUrl, options)
			.then(res => {
				console.log(res);
				return res.text()
			})
			.then(json => {
				console.log("Vastaus:")
				console.log(json)
				return json
			})
	} catch (e) {
		console.log("Virhe:")
		console.log(e)
		return e
	}
	return "Done"
}

export async function GetInitiatives(ctx: any): Promise<string> {
	const url = new URL(trimbleUrl)

	const options: RequestInit = {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
		}
	}

	const params = {
		jurisdiction_id: "nuortenespoo",
		start_date: "2018-08-20T00:00:00Z"
	}

	Object.keys(params).forEach(key => url.searchParams.append(key, (params as any)[key]))

	return (await fetch(url, options)).text()
	/*
	try {
		fetch(url, options)
			.then(res => res.text())
			.then(json => {
				console.log(json)
				return "json"
			})
	} catch (e) {
		console.log(e)
		return e
	}*/
}
