import fetch, { RequestInit } from "node-fetch"
import * as fs from 'fs'
import * as FormData from "form-data"

const trimbleUrl = "https://easiointi.espoo.fi/efeedback/api/georeport/6aika/requests.json"
//const trimbleUrl = "https://easiointi.espoo.fi/efeedback/api/georeport/v2/requests.json"

export async function SendFeedback(ctx: any) {
	console.log(ctx.request.body)
	console.log(ctx.request.files)

	const url = trimbleUrl
	const serviceCodes = {
		palaute: "8ba7db6f-cf15-ea11-9130-005056b41c86",
		aloite: "8ca7db6f-cf15-ea11-9130-005056b41c86"
		//palaute: "a4b19165-d81c-ea11-9130-005056b41c86",
		//aloite: "355f9d7e-d81c-ea11-9130-005056b41c86"
	}
	const authOptions: { api_key: string; jurisdiction_id: string; service_code: string } = {
		api_key: process.env.TRIMBLE_KEY !== undefined ? process.env.TRIMBLE_KEY : '',
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
	data.append("email", ctx.request.body.email ? ctx.request.body.email : "")
	data.append("first_name", ctx.request.body.first_name ? ctx.request.body.first_name : "")
	data.append("last_name", ctx.request.body.last_name ? ctx.request.body.last_name : "")

	const clear_tmp_files: string[] = []
	Object.keys(ctx.request.files).forEach((key: string, index: number) => {
		const file: File = ctx.request.files[key]
		clear_tmp_files.push((file as any).path)
		data.append("media" + index, fs.createReadStream((file as any).path) as any);
	})

	console.log((data as any).getHeaders())

	fetch(trimbleUrl, {
		method: "POST",
		body: data as any,
		headers: (data as any).getHeaders()
	})
		.then(res => {
			console.log(res)
			return res.json()
		})
		.then(json => {
			console.log("Vastaus:")
			console.log(json)
			clear_tmp_files.forEach(path => {
				fs.unlink(path, (err) => {
					if (err) {
						console.error(err)
						return
					}
				})
				return json
			})
		})
	return "Done"
}

export async function SendInitiative(ctx: any) {
	console.log(ctx.request.body)
	console.log(ctx.request.files)

	const url = trimbleUrl
	const serviceCodes = {
		palaute: "8ba7db6f-cf15-ea11-9130-005056b41c86",
		aloite: "8ca7db6f-cf15-ea11-9130-005056b41c86"
		//palaute: "a4b19165-d81c-ea11-9130-005056b41c86",
		//aloite: "355f9d7e-d81c-ea11-9130-005056b41c86"
	}
	const authOptions: { api_key: string; jurisdiction_id: string; service_code: string } = {
		api_key: process.env.TRIMBLE_KEY !== undefined ? process.env.TRIMBLE_KEY : '',
		jurisdiction_id: "nuortenespoo",
		service_code: serviceCodes["aloite"]
	}
	const postBody = Object.assign({}, ctx.request.body, authOptions, { respond: undefined }, { type: undefined })

	const data: FormData = new FormData()
	data.append("api_key", authOptions.api_key)
	data.append("jurisdiction_id", authOptions.jurisdiction_id)
	data.append("service_code", authOptions.service_code)

	data.append("address_string", "nuortenpalaute.espoo.fi")
	data.append("description", ctx.request.body.description)
	data.append("email", ctx.request.body.email ? ctx.request.body.email : "")
	data.append("first_name", ctx.request.body.first_name ? ctx.request.body.first_name : "")
	data.append("last_name", ctx.request.body.last_name ? ctx.request.body.last_name : "")
	data.append("phone", ctx.request.body.phone ? ctx.request.body.phone : "")

	const clear_tmp_files: string[] = []
	Object.keys(ctx.request.files).forEach((key: string, index: number) => {
		const file: File = ctx.request.files[key]
		clear_tmp_files.push((file as any).path)
		data.append("media" + index, fs.createReadStream((file as any).path) as any);
	})

	console.log((data as any).getHeaders())

	fetch(trimbleUrl, {
		method: "POST",
		body: data as any,
		headers: (data as any).getHeaders()
	})
		.then(res => {
			console.log(res)
			return res.json()
		})
		.then(json => {
			console.log("Vastaus:")
			console.log(json)
			clear_tmp_files.forEach(path => {
				fs.unlink(path, (err) => {
					if (err) {
						console.error(err)
						return
					}
				})
				return json
			})
		})
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

	return (await fetch(trimbleUrl, options)).text()
}
