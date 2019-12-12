import React, { FC } from "react";
import "../styles/PageLanding.scss";
import { useHistory } from "react-router";
import axios from "axios";
import config from "./config";
import Header from "./Header";
import Footer from "./Footer";
import { useT } from "../i18n";
import { Trans } from "react-i18next";

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



	return (
		<div id="landing">
			
			<Header className="header--dark"></Header>
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
							className="btn btn--bounce"
							onClick={(): void => {
								const url = "/palaute";
								history.push(url);

								axios
									.get(config.API_URL + "/test")
									.then(function(response: any) {
										console.log(response);
									})
									.catch((error: Error) => {
										console.error(error.message);
										throw error;
									});
							}}
						>
							{btnFeedback}
						</a>
						<span className="jumbotron-text btn-divader">{jumbotronOr}</span>
						<a
							className="btn btn-secondary"
							onClick={(): void => {
								const url = "/aloite";
								history.push(url);
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
							href="/palaute"
							className="btn btn-secondary btn-secondary--dark"
						>
							{btnFeedback}
						</a>
					</div>
					<div className="teaser teaser--initiative">
						<h2 className="teaser__header text-light">{initiative}</h2>
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
						<a href="/aloite" className="btn btn-secondary">
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
							src="/icon-mic.svg"
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
							src="/icon-mic.svg"
							alt=""
						/>
						<p className="teaser__text">
							{feedbackExample5Text}
						</p>
					</div>
				</div>
			</section>
			<section className="">
				<h2 className="section-header">{initiativesHeadline}</h2>
				<ul className="initiative-list">
					<li>
						<a href="#">Ruotsinkielen opetuksen muuttaminen</a>
						<span className="date">4.12.2019</span>
					</li>
					<li>
						<a href="#">Riistaruokapäiviä kouluihin</a>
						<span className="date">23.11.2019</span>
					</li>
					<li>
						<a href="#">Matematiikan maksutonta tukiopetusta 16-19 -vuotiaille,
						sisältäen lukion!</a>
						<span className="date">23.11.2019</span>
					</li>
					<li>
						<a href="#">Pakkoruotsi</a> <span className="date">23.11.2019</span>
					</li>
					<li>
						<a href="#">Metroihin usb laturi paikat</a>
						<span className="date">23.11.2019</span>
					</li>
					<li>
						<a href="#">Helsingin kaupunki voisi tarjota ilmaisia
						lajittelupisteitä asuinalueille</a>
						<span className="date">23.11.2019</span>
					</li>
					<li>
						<a href="#">Pelitietokoneet Leppävaaran nuorisotalolle.</a>
						<span className="date">23.11.2019</span>
					</li>
				</ul>
			</section>
			<Footer />
		</div>
	);
};

export { PageLanding };
