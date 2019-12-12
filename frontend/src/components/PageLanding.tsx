import React, { FC } from "react";
import "../styles/PageLanding.scss";
import { useHistory } from "react-router";
import axios from "axios";
import config from "./config";
import Header from "./Header";
import Footer from "./Footer";
import { useT } from "../i18n";

const PageLanding: FC = () => {
	const history = useHistory();

	return (
		<div id="landing">
			{useT("exampleText")}
			<Header className="header--landing"></Header>
			<div className="jumbotron">
				<div className="jumbotron-content">
					<h1 className="jumbotron-header">
						Välitä <br />
						ja vaikuta
					</h1>
					<p className="jumbotron-text">Mikä on sinulle tärkeää?</p>
					<div className="jumbotron-btns">
						<a
							className="btn"
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
						</a>
						<span className="jumbotron-text btn-divader">tai</span>
						<a
							className="btn btn-secondary"
							onClick={(): void => {
								const url = "/aloite";
								history.push(url);
							}}
						>
							Jätä aloite
						</a>
					</div>
				</div>
			</div>
			<section className="content-block">
				<div className="teaser-container">
					<div className="teaser teaser--feedback">
						<h2 className="teaser__header">Palaute</h2>
						<img
							className="teaser__image"
							src="/human-yellow.svg"
							alt=""
						/>
						<p className="teaser__text teaser__text--ingress">
							Onko lenkkitiellä kaatunut puu? Puuttuuko jostain penkki, roskis tai fillariteline? Haluatko kiittää tai antaa meille risuja? 
						</p>
						<p className="teaser__text margin-bottom">
							Palaute on aloitetta nopeampi ja kevyempi keino kertoa meille myös ideoita ja toimenpide-ehdotuksia. Palautetta voit jättää anonyymisti.
						</p>
						<a
							href="/palaute"
							className="btn btn-secondary btn-secondary--dark"
						>
							Anna palautetta
						</a>
					</div>
					<div className="teaser teaser--initiative">
						<h2 className="teaser__header text-light">Aloite</h2>
						<img
							className="teaser__image"
							src="/human-blue.svg"
							alt=""
						/>
						<p className="teaser__text teaser__text--ingress text-light">
							Järeämpi keino saada muutosta aikaan.
						</p>
						<p className="teaser__text text-light margin-bottom">
							Onko sinulla mainio ehdotus, jonka haluaisit saada eteenpäin eikä palautteen jättäminen tunnu riittävältä ratkaisulta? 
						</p>
						<a href="/aloite" className="btn btn-secondary">
							Jätä aloite
						</a>
					</div>
				</div>
			</section>
			<section className="content-block">
				<h2 className="section-header">
					Mitä palautteilla on saatu aikaan?
				</h2>
				<div className="teaser-container teaser-container--feedbacks">
					
					<div className="teaser teaser--highlight">
						<h3 className="teaser__header">
							Kätevämmin konserttiin!
						</h3>
						<img
							className="teaser__image"
							src="/icon-tickets.svg"
							alt=""
						/>
						<p className="teaser__text">
							Palautteiden ansiosta Itsenäisyyspäivän
							konserttilippuja saa nyt myös sähköisesti
							Lippupisteen kautta.
						</p>
					</div>
					<div className="teaser teaser--highlight">
						<h3 className="teaser__header">
							Lasereita eläimetkään eivät säiky
						</h3>
						<img
							className="teaser__image"
							src="/icon-fireworks.svg"
							alt=""
						/>
						<p className="teaser__text">
							Uuden vuoden lasershow on vastaus myös
							kuntalaispalautteisiin, joissa toivottiin vähemmän
							häiriötä raketeista.
						</p>
					</div>
					<div className="teaser teaser--highlight">
						<h3 className="teaser__header">
							Kirjastoon vaikka viikonloppuiltana
						</h3>
						<img
							className="teaser__image"
							src="/icon-mic.svg"
							alt=""
						/>
						<p className="teaser__text">
							Kirjastojen omatoimijärjestelmällä vastaamme toiveisiin pidemmistä aukioloajoista.
						</p>
					</div>
					<div className="teaser teaser--highlight">
						<h3 className="teaser__header">
							Karaokea kavereiden kanssa!
						</h3>
						<img
							className="teaser__image"
							src="/icon-mic.svg"
							alt=""
						/>
						<p className="teaser__text">
							Palautteiden innoittamana olemme lisänneet
							karaoketoimintaa Espoon kirjastoissa.
						</p>
					</div>
					<div className="teaser teaser--highlight">
						<h3 className="teaser__header">
							Koirille leikkipaikkoja
						</h3>
						<img
							className="teaser__image"
							src="/icon-mic.svg"
							alt=""
						/>
						<p className="teaser__text">
							Monen koirapuiston ja leikkipaikan rakentaminen on saanut alkusysäyksen kuntalaisen meille antamasta palautteesta.
						</p>
					</div>
				</div>
			</section>
			<section className="">
				<h2 className="section-header">Nuorten tekemät aloitteet</h2>
				<ul className="initiative-list">
					<li>
						Ruotsinkielen opetuksen muuttaminen
						<span className="date">4.12.2019</span>
					</li>
					<li>
						Riistaruokapäiviä kouluihin{" "}
						<span className="date">23.11.2019</span>
					</li>
					<li>
						Matematiikan maksutonta tukiopetusta 16-19 -vuotiaille,
						sisältäen lukion!{" "}
						<span className="date">23.11.2019</span>
					</li>
					<li>
						Pakkoruotsi <span className="date">23.11.2019</span>
					</li>
					<li>
						Metroihin usb laturi paikat{" "}
						<span className="date">23.11.2019</span>
					</li>
					<li>
						Helsingin kaupunki voisi tarjota ilmaisia
						lajittelupisteitä asuinalueille{" "}
						<span className="date">23.11.2019</span>
					</li>
					<li>
						Pelitietokoneet Leppävaaran nuorisotalolle.{" "}
						<span className="date">23.11.2019</span>
					</li>
				</ul>
			</section>
			<Footer />
		</div>
	);
};

export { PageLanding };
