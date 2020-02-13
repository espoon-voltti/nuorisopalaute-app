import React, { FC, useEffect, useState } from "react";
import "../styles/PageLanding.scss";
import { useHistory } from "react-router";
import axios from "axios";
import config from "./config";
import Header from "./Header";
import Footer from "./Footer";
import { useT, useCurrentLanguage } from "../i18n";
import { Trans } from "react-i18next";
import { format } from "date-fns";

interface Initiative {
	header: string;
	description: string;
	date: Date;
	id: number;
}

const PageLanding: FC = () => {
	const history = useHistory();
	const jumbotronSubHeadline = useT("jumbotronSubHeadline");
	const jumbotronOr = useT("jumbotronOr");
	const btnFeedback = useT("btnFeedback");
	const btnInitiative = useT("btnInitiative");
	const feedback = useT("feedback");
	const feedbackTeaserIngress = useT("feedbackTeaserIngress");
	const feedbackTeaserText = useT("feedbackTeaserText");
	const initiative = useT("initiative");
	const initiativeTeaserIngress = useT("initiativeTeaserIngress");
	const initiativeTeaserText = useT("initiativeTeaserText");
	const feedbackExamplesHeadline = useT("feedbackExamplesHeadline");
	const feedbackExample1Headline = useT("feedbackExample1Headline");
	const feedbackExample1Text = useT("feedbackExample1Text");
	const feedbackExample2Headline = useT("feedbackExample2Headline");
	const feedbackExample2Text = useT("feedbackExample2Text");
	const feedbackExample3Headline = useT("feedbackExample3Headline");
	const feedbackExample3Text = useT("feedbackExample3Text");
	const feedbackExample4Headline = useT("feedbackExample4Headline");
	const feedbackExample4Text = useT("feedbackExample4Text");
	const feedbackExample5Headline = useT("feedbackExample5Headline");
	const feedbackExample5Text = useT("feedbackExample5Text");
	const initiativesHeadline = useT("initiativesHeadline");

	const currentLanguage = useCurrentLanguage();
	console.log(currentLanguage);

	const [initiatives, setInitiatives] = useState<Initiative[] | null>(null);
	console.log(initiatives);
	useEffect(() => {
		axios
			.get(config.API_URL + "/initiatives")
			.then(function (response) {
				const _initiatives: Initiative[] = [];
				response.data.forEach((initiative: any) => {
					console.log(initiative);
					if (initiative.service_request_id) {
						const text = initiative.description
							.replace(/\r\n/g, "\n")
							.replace(/[\n]+/g, "\n")
							.trim();
						const texts = text.split("\n");
						const header = texts[0];
						const description = texts.slice(1).join("\n");

						const id = initiative.service_request_id;

						const _initiative: Initiative = {
							description: description,
							header: header,
							date: new Date(initiative.requested_datetime),
							id: id,
						};
						_initiatives.push(_initiative);
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
			<Header className="header--dark header--landing"></Header>
			<div className="landing" id="content">
				<div className="jumbotron">
					<div className="jumbotron-content">
						<h1 className="jumbotron-header">
							<Trans i18nKey="defaultNamespace:jumbotronHeadline">
								<span></span>
							</Trans>
						</h1>
						<p className="jumbotron-text">{jumbotronSubHeadline}</p>
						<div className="jumbotron-btns">
							<a
								href="/palaute"
								className="btn btn--bounce"
								onClick={(event: any): void => {
									const url = "/palaute";
									history.push(url);
									event.preventDefault();
								}}
							>
								{btnFeedback}
							</a>
							<span className="jumbotron-text btn-divader">
								{jumbotronOr}
							</span>
							<a
								href="/aloite"
								className="btn btn-secondary"
								onClick={(event: any): void => {
									console.log("Clicked");
									const url = "/aloite";
									history.push(url);
									event.preventDefault();
								}}
							>
								{btnInitiative}
							</a>
						</div>
					</div>
				</div>
				<section className="content-block">
					<div className="teaser-container">
						<div className="teaser teaser--feedback">
							<h2 className="teaser__header">{feedback}</h2>
							<img
								className="teaser__image"
								src="/human-yellow.svg"
								alt=""
							/>
							<p className="teaser__text teaser__text--ingress">
								{feedbackTeaserIngress}
							</p>
							<p className="teaser__text margin-bottom">
								{feedbackTeaserText}
							</p>
							<a
								href={`/${currentLanguage}/palaute`}
								className="btn btn-secondary btn-secondary--dark"
							>
								{btnFeedback}
							</a>
						</div>
						<div className="teaser teaser--initiative">
							<h2 className="teaser__header text-light">
								{initiative}
							</h2>
							<img
								className="teaser__image"
								src="/human-blue.svg"
								alt=""
							/>
							<p className="teaser__text teaser__text--ingress text-light">
								{initiativeTeaserIngress}
							</p>
							<p className="teaser__text text-light margin-bottom">
								{initiativeTeaserText}
							</p>
							<a
								href={`/${currentLanguage}/aloite`}
								className="btn btn-secondary"
							>
								{btnInitiative}
							</a>
						</div>
					</div>
				</section>
				<section className="content-block">
					<h2 className="section-header">
						{feedbackExamplesHeadline}
					</h2>
					<div className="teaser-container teaser-container--feedbacks">
						<div className="teaser teaser--highlight">
							<h3 className="teaser__header">
								{feedbackExample1Headline}
							</h3>
							<img
								className="teaser__image"
								src="/icon-tickets.svg"
								alt=""
							/>
							<p className="teaser__text">
								{feedbackExample1Text}
							</p>
						</div>
						<div className="teaser teaser--highlight">
							<h3 className="teaser__header">
								{feedbackExample2Headline}
							</h3>
							<img
								className="teaser__image"
								src="/icon-fireworks.svg"
								alt=""
							/>
							<p className="teaser__text">
								{feedbackExample2Text}
							</p>
						</div>
						<div className="teaser teaser--highlight">
							<h3 className="teaser__header">
								{feedbackExample3Headline}
							</h3>
							<img
								className="teaser__image"
								src="/icon-library.svg"
								alt=""
							/>
							<p className="teaser__text">
								{feedbackExample3Text}
							</p>
						</div>
						<div className="teaser teaser--highlight">
							<h3 className="teaser__header">
								{feedbackExample4Headline}
							</h3>
							<img
								className="teaser__image"
								src="/icon-mic.svg"
								alt=""
							/>
							<p className="teaser__text">
								{feedbackExample4Text}
							</p>
						</div>
						<div className="teaser teaser--highlight">
							<h3 className="teaser__header">
								{feedbackExample5Headline}
							</h3>
							<img
								className="teaser__image"
								src="/icon-dog.svg"
								alt=""
							/>
							<p className="teaser__text">
								{feedbackExample5Text}
							</p>
						</div>
					</div>
				</section>
				<section className="">
					<h2 className="section-header">
						{initiatives &&
							initiatives.length > 0 &&
							initiativesHeadline}
					</h2>
					<ul className="initiative-list">
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

export { PageLanding };
