import React from "react";
import "../styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as config from "./config";
import { useCurrentLanguage } from "../i18n";
import ErrorBoundary from "./ErrorBoundary";
import { PageLanding } from "./PageLanding";
import { PageFeedback } from "./PageFeedback";
import PageError from "./PageError";
import { PageInitiative } from "./PageInitiative";
import { PageThankYou } from "./PageThankYou";

const App: React.FC = () => {
	const currentLanguage = useCurrentLanguage();

	return (
		<ErrorBoundary>
			<div id="app">
				<Router basename={`/${currentLanguage}`}>
					<Switch>
						<Route exact path="/" component={PageLanding} />
						<Route exact path="/palaute" component={PageFeedback} />
						<Route
							exact
							path="/aloite"
							component={PageInitiative}
						/>
						<Route exact path="/kiitos" component={PageThankYou} />
						<Route component={() => <PageError error="404" />} />
					</Switch>
				</Router>
			</div>
		</ErrorBoundary>
	);
};

export default App;
