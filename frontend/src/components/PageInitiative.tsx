import React, { FC, useState } from "react";
import "../styles/PageInitiative.scss";
import axios from "axios";
import config from "./config";
import Checkbox from "./Checkbox";
import Header from "./Header";
import Footer from "./Footer";

const PageInitiative: FC = () => {
	const [allowPublish, setAllowPublish] = useState(false);
	const [wantsAnswer, setWantsAnswer] = useState(false);
	const [initiativeDescription, setInitiativeDescription] = useState("");
	const [email, setEmail] = useState("");
	const [firstname, setFirstname] = useState("");
	const [surname, setSurname] = useState("");

	const handleFile = (e: any) => {
		console.log(e.target.files);
	};

	const handleChange = (e: any) => {
		console.log(e.target);
	};

	return (
		<div className="form-container">
			<Header className="header--landing"></Header>

			<section className="content-block">
				<h1 className="form-header">
					Vaikuta! Jätä aloite
				</h1>
				<img className="form-image" src="/human-blue.svg" alt="" />
				<p className="form-ingress">
					Aloite on palautetta järeämpi keino saada muutosta aikaan. Onko sinulla joku mainio ehdotus, jonka haluaisit saada eteenpäin eikä pelkkä palautteen jättäminen tunnu riittävältä ratkaisulta? Tällä lomakkeella 13–20 -vuotias espoolainen voi jättää aloitteen Espoon kaupungille.
				</p>
				<p>
					Nuorisopalvelujen työntekijät lukevat nuorilta saadut aloitteet ja ohjaavat ne vastattavaksi asiasta vastaaville Espoon kaupungin asiantuntijoille.
				</p>
				<p>
					Nuorten aloitteet ja niihin annetut vastaukset julkaistaan kaikkien nähtäväksi tälle sivustolle. 
				</p>
			</section>

			<section className="content-block">
				<h2 className="form-subheader">Aloite</h2>
				<p>
					Kerro tarkasti mitä aloitteesi koskee ja perustele. Aloitteen ei tarvitse olla pitkä, mutta selkeällä ja mietityllä aloitteella on paremmat mahdollisuudet tulla toteutetuksi.
				</p>

				<div className="field">
						<label className="label" htmlFor="headline">
							Otsikko
						</label>
						<input
							required
							className="input"
							type="text"
							id="headline"
							name="headline"
						/>
				</div>
				<label className="label" htmlFor="initiative">
							Palautteen sisältö
						</label>
				<textarea
					className="textarea"
					required
					id="initiative"
					placeholder="Kiitos, kommentti, kysymys, moite..."
					onChange={event =>
						setInitiativeDescription(event.target.value)
					}
				/>
				<p className="label">Liitteet</p>
				<p>
					Voit liittää aloitteeseen yhden tai useampia liitetiedostoja.
				</p>
				<input
					type="file"
					name="attachments"
					id="attachments"
					className="file-input"
					onChange={handleFile}
					multiple
				/>
				<p className="disclaimer">
					Liitteiden yhteenlaskettu maksimikoko on 15Mt. Hyväksytyt tiedostomuodot ovat pdf, doc, docx, rtf, gif, png, jpg, jpeg, tif, tiff, txt, zip, xls, xlsx, ppt, ja pptx.
				</p>
			</section>



			
				<section className="content-block">
					<h2 className="form-subheader">Yhteystiedot</h2>
					<p>
						Yhteystiedot vaaditaan, jotta voimme vastata aloitteeseesi. Saatamme myös kysyä täydentäviä lisätietoja. Aloitteen voi jättää myös ryhmänä, mutta tällöinkin yhden aloitteen jättäjistä on ilmoitettava yhteystietonsa.
					</p>

					<div className="field">
						<label className="label" htmlFor="firstname">
							Etunimi
						</label>
						<input
							required
							className="input"
							type="text"
							id="firstname"
							name="firstname"
							onChange={event => setFirstname(event.target.value)}
						/>
					</div>

					<div className="field">
						<label className="label" htmlFor="lastname">
							Sukunimi
						</label>
						<input
							required
							className="input"
							type="text"
							id="lastname"
							name="lastname"
							onChange={event => setSurname(event.target.value)}
						/>
					</div>

					<div className="field">
						<label className="label" htmlFor="email">
							Sähköposti
						</label>
						<input
							className="input"
							required
							pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$"
							type="email"
							id="email"
							name="email"
							onChange={event => setEmail(event.target.value)}
						/>
						<p className="warning-text">
							Syötä sähköposti oikeassa muodossa.
						</p>
					</div>

					<div className="field">
						<label className="label" htmlFor="phonenumber">
							Puhelin{" "}
							<span className="optional">(ei pakollinen)</span>
						</label>
						<input
							className="input"
							type="email"
							id="phonenumber"
							name="phonenumber"
							//onChange={event => setPhonenumber(event.target.value)}
						/>
					</div>

					
				</section>


			<section className="content-block">
				<p className="center">
					Lähettämällä lomakkeen hyväksyt{" "}
					<a href="#" target="_blank">
						käyttöehdot
					</a>{" "}
					ja{" "}
					<a href="#" target="_blank">
						tietosuojaselosteen
					</a>
					.
				</p>
				<button
					disabled={!initiativeDescription || (wantsAnswer && !email)}
					className="btn btn--form"
					onClick={(): void => {
						const data = {
							email: "test123@test.fi",
							description: "testi-feedback",
							// eslint-disable-next-line @typescript-eslint/camelcase
							first_name: "test6",
							// eslint-disable-next-line @typescript-eslint/camelcase
							last_name: "",
							lat: "",
							long: "",
							respond: false,
							// eslint-disable-next-line @typescript-eslint/camelcase
							address_string: "nuortenpalaute.espoo.fi",
						};

						axios
							.post(config.API_URL + "/test", data)
							.then(function(response: any) {
								console.log(response);
							})
							.catch((error: Error) => {
								console.error(error.message);
								throw error;
							});
					}}
				>
					Lähetä aloite
				</button>
				<p className="center">
					Aloitteen arvioitu käsittelyaika ilmoitetaan aloitteen jättäjälle mahdollisimman pian. 
				</p>
			</section>
			<Footer />
		</div>
	);
};

export { PageInitiative };
