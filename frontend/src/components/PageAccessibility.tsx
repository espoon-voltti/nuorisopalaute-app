import React, { FC } from "react";
import "../styles/PageAccessibility.scss";
import Header from "./Header";
import Footer from "./Footer";
import { useT } from "../i18n";
import { Trans } from "react-i18next";

const PageAccessibility: FC = () => {
	return (
		<>
			<Header className="header--landing"></Header>
			<div className="accessibility-container">
				<section className="content-block"></section>
				<Footer />
			</div>
		</>
	);
};

export { PageAccessibility };
