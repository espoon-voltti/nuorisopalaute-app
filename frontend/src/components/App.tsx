import React from "react";
import "../styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as config from "./config";
import { useCurrentLanguage } from "../i18n";
import ErrorBoundary from "./ErrorBoundary";
import { PageLanding } from "./PageLanding";
import { PageFeedback } from "./PageFeedback";
import PageError from "./PageError";

const App: React.FC = () => {
	const currentLanguage = useCurrentLanguage();

	return (
		<ErrorBoundary>
			<div id="app">
				<Router basename={`/${currentLanguage}`}>
					<main id="content">
						<Switch>
							<Route exact path="/" component={PageLanding} />
							<Route
								exact
								path="/palaute"
								component={PageFeedback}
							/>
							<Route
								component={() => <PageError error="404" />}
							/>
						</Switch>
						
					</main>
					<footer
						className="footer">
						<div className="logo-container">
							<a href="https://www.espoo.fi">
								<img
									className="logo"
									src="/logo-espoo.svg"
									alt="Espoo logo"
								/>
							</a>
						</div>

						<div className="footer-links">
								<a  className="footer-link"
									href="#"
									target="_blank"
									rel="noopener noreferrer external"
								>
									Tietosuojaseloste
								</a>
							
								<a href="#" className="footer-link">
									Saavutettavuuseloste 
								</a>
							
						</div>
					</footer>
				</Router>
			</div>
		</ErrorBoundary>
	);
};

export default App;
