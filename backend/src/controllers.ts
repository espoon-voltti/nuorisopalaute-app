import querystring = require("querystring")
import axios from "axios"
import fetch, { RequestInit } from "node-fetch"
import { request } from "http"
import { RequestOptions } from "http"

const FormData = require("form-data")

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
		//palaute: "a4b19165-d81c-ea11-9130-005056b41c86",
		//aloite: "355f9d7e-d81c-ea11-9130-005056b41c86"
	}
	const authOptions = {
		api_key: process.env.TRIMBLE_KEY,
		jurisdiction_id: "nuortenespoo",
		service_code: serviceCodes["palaute"]
	}
	const postBody = Object.assign({}, ctx.request.body, authOptions, { respond: undefined }, { type: undefined })

	const data: FormData = new FormData()
	data.append("api_key", authOptions.api_key)
	data.append("jurisdiction_id", authOptions.jurisdiction_id)
	data.append("service_code", authOptions.service_code)

	data.append("address_string", "nuortenpalaute.espoo.fi")
	data.append("description", ctx.request.body.description)

	console.log((data as any).getHeaders())

	fetch(trimbleUrl, {
		method: "POST",
		body: data as any,
		headers: (data as any).getHeaders()
	})
		.then(res => {
			console.log(res)
			return res.text()
		})
		.then(json => {
			console.log("Vastaus:")
			console.log(json)
			return json
		})

	/*
		const options: RequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "multipart/form-data; charset=utf-8"
		},
		body: postBody
	}
	
	*/

	/*const options = {
		method: "POST",
		body: data,
		headers: {
			"Content-Type": "multipart/form-data; charset=utf-8"
		}
	}
	
	try {
		fetch(trimbleUrl, options as unknown)
			.then(res => {
				console.log(res)
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
	}*/

	/*const data: FormData = new FormData()
	data.append("api_key", authOptions.api_key)
	data.append("jurisdiction_id", authOptions.jurisdiction_id)
	data.append("service_code", authOptions.service_code)
	
	data.append("description", ctx.request.body.description)
	
	console.log(data)*/

	/*axios
		.post(trimbleUrl, data, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		})
		.then(function (response: any) {
			console.log("Response:")
			console.log(response)
		})
		.catch((error: any) => {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log(error.response.data)
				console.log(error.response.status)
				console.log(error.response.headers)
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log("No request got")
				console.log(error.request)
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log("Failed to set up the request")
				console.log("Error", error.message)
			}
		})*/

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
		start_date: "2018-08-20T00:00:00Z",
		service_code: "8ca7db6f-cf15-ea11-9130-005056b41c86"
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
