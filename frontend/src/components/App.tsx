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
					<header className="header header--dark">
						<a className="jump-to-content" href="#content">
							Siirry sisältöön
						</a>
						<a href="/"><img className="logo" src="/logo-nuori-espoo.svg" alt="Nuori Espoo" /></a>
						<div data-inclusive-menu>
 							<button data-inclusive-menu-opens="difficulty" aria-haspopup="true" aria-expanded="false">
		   						<img src="/icon-menu.svg" />
	 						</button>
	 						<div id="difficulty" data-inclusive-menu-from="right" role="menu" hidden>
							   <button role="menuitem" >Palaute</button>
							   <button role="menuitem" >Aloite</button>
	 						</div>
						</div>
					</header>
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
