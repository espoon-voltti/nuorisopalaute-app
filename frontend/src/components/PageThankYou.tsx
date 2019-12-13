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
				<section className="content-block"></section>
				<Footer />
			</div>
		</>
	);
};

export { PageThankYou };
