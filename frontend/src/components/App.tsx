import React, { useEffect } from "react";
import "../styles/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCurrentLanguage, useT } from "../i18n";
import ErrorBoundary from "./ErrorBoundary";
import { PageLanding } from "./PageLanding";
import { PageFeedback } from "./PageFeedback";
import PageError from "./PageError";
import { PageInitiative } from "./PageInitiative";
import { PageViewInitiative } from "./PageViewInitiative";
import { PageThankYou } from "./PageThankYou";
import { PageAccessibility } from "./PageAccessibility";
import Helmet from "react-helmet";
import ScrollToTop from "./ScrollToTop";

const App: React.FC = () => {
	const currentLanguage = useCurrentLanguage();
	const currentPath = window.location.pathname;
	useEffect(() => {
		if (currentPath === "/" || currentPath === `/${currentLanguage}`) {
			if (window.location.hostname.includes("responsfr")) {
				window.location.pathname = "/sv-FI/";
			} else {
				window.location.pathname = `/${currentLanguage}/`;
			}
		}
	}, [currentLanguage, currentPath]);

	document.title = useT("metaTitle");

	if (currentPath !== "/")
		return (
			<ErrorBoundary>
				<div id="app">
					<Router basename={`/${currentLanguage}`}>
						<ScrollToTop />
						<Helmet
							htmlAttributes={{ lang: currentLanguage }}
						></Helmet>
						<Routes>
							<Route path="/" element={<PageLanding />} />
							<Route path="/palaute" element={<PageFeedback />} />
							<Route
								path="/aloite"
								element={<PageInitiative />}
							/>
							<Route
								path="/aloitteet"
								element={<PageViewInitiative />}
							/>
							<Route path="/kiitos" element={<PageThankYou />} />
							<Route
								path="/saavutettavuus"
								element={<PageAccessibility />}
							/>
							<Route element={<PageError error="404" />} />
						</Routes>
					</Router>
				</div>
			</ErrorBoundary>
		);
	else return <></>;
};

export default App;
