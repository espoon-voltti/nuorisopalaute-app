import React, { FC } from "react";
import "../styles/PageLanding.scss";
import { useHistory } from "react-router";
import axios from "axios";
import config from "./config";

const PageLanding: FC = () => {
	const history = useHistory();

	return (
		<div id="landing">
			<div className="menu">
				<button
					className="btn landing-cta"
					onClick={(): void => {
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
					}}
				>
					Anna palautetta
				</button>
			</div>
			<div className="jumbotron">
				<h1>Välitä <br />ja vaikuta</h1>
				<p>Mikä on sinulle tärkeää?</p>
				<a className="btn">Anna palautetta</a>
				<span>tai</span>
				<a className="btn btn-secondary">Jätä aloite</a>
			</div>
			<section className="teaser-container">
				<div className="teaser teaser--feedback">
					<h2>Palaute</h2>
					<p className="teaser-text teaser-text--ingress">Onko lenkkitiellä kaatunut puu? Puuttuuko lähikirjastosta joku kaipaamasi opus? Haluatko kiittää tai antaa meille risuja?</p>
					<p className="teaser-text">Palaute on nopea ja kevyt keino kertoa meille myös ideoita ja toimenpide-ehdotuksia. Palautetta voit jättää anonyymisti.</p> 
					<a className="btn btn-secondary">Anna palautetta</a>
				</div>
				<div className="teaser teaser--initiative">
					<h2>Aloite</h2>
					<p className="teaser-text teaser-text--ingress">Järeämpi keino saada muutosta aikaan.</p>
					<p className="teaser-text">Onko sinulla joku mainio ehdotus, jonka haluaisit saada eteenpäin ja pelkkä palautteen jättäminen ei tunnu riittävältä ratkaisulta?  Aloite rullaa byrokratian rattaissa hitaasti mutta varmasti eteenpäin.</p> 
					<a className="btn btn-secondary">Anna palautetta</a>
				</div>
			</section>
				<h2>Mitä palautteilla on saatu aikaan?</h2>
				<div className="teaser-container">
					<div className="teaser">
						<h3>Karaokea kavereiden kanssa!</h3>
						<img src="" />
						<p className="teaser-text">Palautteiden innoittamana olemme lisänneet karaoketoimintaa Espoon kirjastoissa.</p>
					</div>
					<div className="teaser">
						<h3>Karaokea kavereiden kanssa!</h3>
						<img src="" />
						<p className="teaser-text">Palautteiden innoittamana olemme lisänneet karaoketoimintaa Espoon kirjastoissa.</p>
					</div>
					<div className="teaser">
						<h3>Karaokea kavereiden kanssa!</h3>
						<img src="" />
						<p className="teaser-text">Palautteiden innoittamana olemme lisänneet karaoketoimintaa Espoon kirjastoissa.</p>
					</div>
					<div className="teaser">
						<h3>Karaokea kavereiden kanssa!</h3>
						<img src="" />
						<p className="teaser-text">Palautteiden innoittamana olemme lisänneet karaoketoimintaa Espoon kirjastoissa.</p>
					</div>
					<div className="teaser">
						<h3>Karaokea kavereiden kanssa!</h3>
						<img src="" />
						<p className="teaser-text">Palautteiden innoittamana olemme lisänneet karaoketoimintaa Espoon kirjastoissa.</p>
					</div>
				</div>
			<section>
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
