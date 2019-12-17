import React, { FC } from "react";
import "../styles/PageThankYou.scss";
import Header from "./Header";
import Footer from "./Footer";
import { useT } from "../i18n";
import { Trans } from "react-i18next";
import { useLocation } from "react-router";
import * as queryString from "query-string";

const PageThankYou: FC = () => {
	const location = useLocation();

	const ref = queryString.parse(location.search).ref;

	const forFeedback = useT("forFeedback");
	const forInitiative = useT("forInitiative");

	const forFeedbackText = useT("thankYouFeedbackText");
	const forInitiativeText = useT("thankYouInitiativeText");

	return (
		<>
			<Header className="header--landing"></Header>
			<div id="content" className="thankyou-container">
				<section className="content-block">
					<h1 className="center">
						{useT("thankYou")}{" "}
						{ref === "palaute" ? forFeedback : forInitiative}!
					</h1>
					<img
						className="form-image"
						src="/human-yellow.svg"
						alt=""
					/>
					<p className="center">
						{ref === "palaute"
							? forFeedbackText
							: forInitiativeText}
					</p>

					<p className="center">
						<a href="/">{useT("backToFrontPage")}.</a>
					</p>
				</section>
				<Footer />
			</div>
		</>
	);
};

export { PageThankYou };
