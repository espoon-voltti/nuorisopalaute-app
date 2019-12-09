import React, { FC } from "react";
import "../styles/PageLanding.scss";
import { useHistory } from "react-router";
import axios from "axios";
import config from "./config";

const PageLanding: FC = () => {
	const history = useHistory();

	return (
		<div id="landing">
			<header className="header">
				<a href="#"><img src="/logo-nuori-espoo.svg" alt="Nuori Espoo" /></a>
				<div className="menu">
					<a href="#">Palaute</a>
					<a href="#">Aloite</a>
				</div>
				<div className="lang-menu">
					<a href="#">FI</a> | 
					<a href="#">SV</a> | 
					<a href="#">EN</a>
				</div>
			</header>
			
			<div className="jumbotron">
				<div className="jumbotron-content">
					<h1 className="jumbotron-header">Välitä <br />ja vaikuta</h1>
					<p className="jumbotron-text">Mikä on sinulle tärkeää?</p>
					<div className="jumbotron-btns">
						<a className="btn" onClick={(): void => {
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
							}}>Anna palautetta</a>
						<span className="jumbotron-text btn-divader">tai</span>
						<a className="btn btn-secondary">Jätä aloite</a>
					</div>
				</div>
			</div>
			<section className="content-block">
				<div className="teaser-container">
					<div className="teaser teaser--feedback">
						<h2 className="teaser__header">Palaute</h2>
						<img className="teaser__image" src="/human-yellow.svg" alt="" />
						<p className="teaser__text teaser__text--ingress">Onko lenkkitiellä kaatunut puu? Puuttuuko lähikirjastosta joku kaipaamasi opus? Haluatko kiittää tai antaa meille risuja?</p>
						<p className="teaser__text margin-bottom">Palaute on nopea ja kevyt keino kertoa meille myös ideoita ja toimenpide-ehdotuksia. Palautetta voit jättää anonyymisti.</p> 
						<a className="btn btn-secondary btn-secondary--dark">Anna palautetta</a>
					</div>
					<div className="teaser teaser--initiative">
						<h2 className="teaser__header text-light">Aloite</h2>
						<img className="teaser__image" src="/human-blue.svg" alt="" />
						<p className="teaser__text teaser__text--ingress text-light">Järeämpi keino saada muutosta aikaan.</p>
						<p className="teaser__text text-light margin-bottom">Onko sinulla joku mainio ehdotus, jonka haluaisit saada eteenpäin ja pelkkä palautteen jättäminen ei tunnu riittävältä ratkaisulta?  Aloite rullaa byrokratian rattaissa hitaasti mutta varmasti eteenpäin.</p> 
						<a className="btn btn-secondary">Anna palautetta</a>
					</div>
				</div>
			</section>
			<section className="content-block">
				<h2 className="section-header">Mitä palautteilla on saatu aikaan?</h2>
				<div className="teaser-container teaser-container--feedbacks">
					<div className="teaser teaser--highlight">
						<h3>Karaokea kavereiden kanssa!</h3>
						<img src="" />
						<p className="teaser__text">Palautteiden innoittamana olemme lisänneet karaoketoimintaa Espoon kirjastoissa.</p>
					</div>
					<div className="teaser teaser--highlight">
						<h3>Karaokea kavereiden kanssa!</h3>
						<img src="" />
						<p className="teaser__text">Palautteiden innoittamana olemme lisänneet karaoketoimintaa Espoon kirjastoissa.</p>
					</div>
					<div className="teaser teaser--highlight">
						<h3>Karaokea kavereiden kanssa!</h3>
						<img src="" />
						<p className="teaser__text">Palautteiden innoittamana olemme lisänneet karaoketoimintaa Espoon kirjastoissa.</p>
					</div>
					<div className="teaser teaser--highlight">
						<h3>Karaokea kavereiden kanssa!</h3>
						<img src="" />
						<p className="teaser__text">Palautteiden innoittamana olemme lisänneet karaoketoimintaa Espoon kirjastoissa.</p>
					</div>
					<div className="teaser teaser--highlight">
						<h3>Karaokea kavereiden kanssa!</h3>
						<img src="" />
						<p className="teaser__text">Palautteiden innoittamana olemme lisänneet karaoketoimintaa Espoon kirjastoissa.</p>
					</div>
				</div>
			</section>
			<section className="content-block">
				<h2>Nuorten tekemät aloitteet</h2>
				<dl className="initiative-list">
					<li>Ruotsinkielen opetuksen muuttaminen   4.12.2019</li>
					<li>Riistaruokapäiviä kouluihin 23.11.2019</li>
					<li>Matematiikan maksutonta tukiopetusta 16-19 -vuotiaille, sisältäen lukion! 23.11.2019</li>
					<li>Pakkoruotsi 23.11.2019</li>
					<li>Metroihin usb laturi paikat 23.11.2019</li>
					<li>Helsingin kaupunki voisi tarjota ilmaisia lajittelupisteitä asuinalueille 23.11.2019</li>
					<li>Pelitietokoneet Leppävaaran nuorisotalolle. 23.11.2019</li>
				</dl>
			</section>
		</div>
	);
};

export { PageLanding };
