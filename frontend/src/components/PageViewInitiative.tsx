import React, { FC, useState, useEffect } from "react";
import "../styles/PageViewInitiative.scss";
import axios from "axios";
import config from "./config";
import Header from "./Header";
import Footer from "./Footer";
import { useT } from "../i18n";
import { Trans } from "react-i18next";
import { useHistory, useLocation } from "react-router";
import * as queryString from "query-string";

const PageViewInitiative: FC = () => {
	const [initiative, setInitiative] = useState({
		header: "",
		description: "",
	});
	console.log(initiative);

	const history = useHistory();
	const location = useLocation();

	const id = queryString.parse(location.search).id;
	console.log(id);

	useEffect(() => {
		axios
			.get(config.API_URL + "/initiatives")
			.then(function(response) {
				response.data.forEach((initiative: any) => {
					if (initiative.service_request_id === id) {
						const text = initiative.description
							.replace(/\r\n/g, "\n")
							.replace(/[\n]+/g, "\n")
							.trim();
						const texts = text.split("\n");
						const header = texts[0];
						const description = texts.slice(1).join("\n");

						const _initiative: any = {
							description: description,
							header: header,
							date: new Date(initiative.requested_datetime),
						};
						setInitiative(_initiative);
					}
				});
			})
			.catch((error: Error) => {
				console.error(error.message);
				throw error;
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Header className="header--landing"></Header>
			<div className="form-container">
				<section className="content-block">
					<h2 className="form-subheader">{initiative.header}</h2>
				</section>
				{initiative &&
					initiative.description.split("\n").map((value, index) => {
						return <p key={"line-" + index}>{value}</p>;
					})}
				<Footer />
			</div>
		</>
	);
};

export { PageViewInitiative };
