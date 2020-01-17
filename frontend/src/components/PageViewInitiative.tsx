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
import { format } from "date-fns";
import { stringify } from "querystring";

interface Initiative {
	header: string;
	description: string;
	date: Date;
	id: number;
	answer: string;
	status: string;
}

const PageViewInitiative: FC = () => {
	const [initiatives, setInitiatives] = useState<Initiative[] | null>(null);
	const [initiative, setInitiative] = useState({
		header: "",
		description: "",
		date: new Date(),
		answer: "",
		status: ""
	});

	const history = useHistory();
	const location = useLocation();

	const id = queryString.parse(location.search).id;

	const initiativesHeadline = useT("initiativesHeadline");
	const answerText = useT("response");

	useEffect(() => {
		axios
			.get(config.API_URL + "/initiatives")
			.then(function (response) {
				const _initiatives: Initiative[] = [];
				response.data.forEach((initiative: any) => {
					const text = initiative.description
						.replace(/\r\n/g, "\n")
						.replace(/[\n]+/g, "\n")
						.trim();
					const texts = text.split("\n");
					const header = texts[0];
					const description = texts.slice(1).join("\n");

					const _initiative: Initiative = {
						id: initiative.service_request_id,
						description: description,
						header: header,
						date: new Date(initiative.requested_datetime),
						answer: initiative.status_notes,
						status: initiative.status
					};
					_initiatives.push(_initiative);
					if (initiative.service_request_id === id) {
						setInitiative(_initiative);
					}
				});
				setInitiatives(_initiatives);
			})
			.catch((error: Error) => {
				console.error(error.message);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Header className="header--landing"></Header>
			<div className="form-container">
				<section className="content-block">
					<h1 className="initiative-headline">{initiative.header}</h1>
					<p className="initiative-date">
						{format(initiative.date, "d.M.yyyy")}
					</p>
					{initiative &&
						initiative.description
							.split("\n")
							.map((value, index) => {
								return <p key={"line-" + index}>{value}</p>;
							})}
					<h2 className="initiative-answer-headline">{answerText}</h2>
					<p className="initiative-answer-text">{initiative.answer}</p>
				</section>

				<section className="">
					<h2 className="section-header-dark">
						{initiativesHeadline}
					</h2>
					<ul className="initiative-list-dark">
						{initiatives &&
							initiatives.map((value, index) => {
								return (
									<li key={"initiatives" + index}>
										<a href={"aloitteet?id=" + value.id}>
											{value.header}
										</a>
										<span className="date">
											{format(value.date, "d.M.yyyy")}
										</span>
									</li>
								);
							})}
					</ul>
				</section>

				<Footer />
			</div>
		</>
	);
};

export { PageViewInitiative };
