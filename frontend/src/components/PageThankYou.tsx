import React, { FC } from "react";
import "../styles/PageThankYou.scss";
import Header from "./Header";
import Footer from "./Footer";
import { useT } from "../i18n";
import { Trans } from "react-i18next";

const PageThankYou: FC = () => {
	return (
		<>
			<Header className="header--landing"></Header>
			<div className="thankyou-container">
				<section className="content-block">
					<h1 className="center">{useT("thankYou")} {" "} {useT("forFeedback")}!</h1>
					<img
						className="form-image"
						src="/human-yellow.svg"
						alt=""
					/>
					<p className="center">{useT("thankYouFeedbackText")}</p>

					<p className="center"><a href="/">{useT("backToFrontPage")}.</a></p>
				</section>
				<Footer />
			</div>
		</>
	);
};

export { PageThankYou };
