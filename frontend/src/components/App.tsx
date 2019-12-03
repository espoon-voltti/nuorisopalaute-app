import React from "react";
import "../styles/App.scss";
import { Landing } from "./landing";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import * as config from "./config"

const App: React.FC = () => {
	return (
		<div className="app">
			<Router>
				<header className="header">
					<div className="logo-container">
						<a href="/">
							<img
								className="logo"
								src={
									config.PUBLIC_FILES_URL +
									"/logo-espoo.svg"
								}
								alt="Espoo logo"
							/>
							<h1 className="title">Espoon hoivakodit</h1>
						</a>
					</div>
					<nav className="nav-container">
						<ul className="nav-menu">
							<li>
								<NavLink
									activeClassName="selected"
									exact
									to="/palaute"
								>
									Palaute
									</NavLink>
							</li>
							<li>
								<NavLink
									activeClassName="selected"
									exact
									to="/aloite"
								>
									Aloite
									</NavLink>
							</li>
						</ul>
						<ul className="nav-menu--language">
							<li className="selected">Suomeksi</li>
							<li>|</li>
							<li>
								<NavLink to="#" lang="sv">
									På Svenska
									</NavLink>
							</li>
						</ul>
					</nav>
				</header>

				<main id="content">
					<Route exact path="/" component={Landing} />
				</main>
			</Router>
		</div>
	);
};

export default App;
