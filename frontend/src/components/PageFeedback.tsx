import React, { FC } from "react";
import "../styles/PageFeedback.scss";
import axios from "axios";
import config from "./config";
import Checkbox from "./Checkbox";

const PageFeedback: FC = () => {
	const handleFile = (e: any) => {
		console.log(e.target.files);
	};

	const handleChange = (e: any) => {
		console.log(e.target);
	};

	return (
		<div className="form-container">
				<section className="content-block">
					<h1 className="form-header">Anna palautetta Espoon kaupungin palveluista</h1>
					<img className="form-image" src="/human-yellow.svg" alt="" />
					<p className="form-ingress">
						Onko lenkkitiellä kaatunut puu? Puuttuuko lähikirjastosta joku kaipaamasi opus? Haluatko kiittää tai antaa meille risuja?  

					</p>
					<p>
						Palaute on aloitetta nopeampi ja kevyempi keino kertoa meille myös ideoita ja toimenpide-ehdotuksia. 
					</p>
				</section>

				<section className="content-block">
					<h2 className="form-subheader">Palaute</h2>
					<p>
						Ethän koskaan kirjoita palautteeseesi henkilötunnustasi, pankkitilisi numeroa, terveystietoja tms. arkaluonteista tietoa.
					</p>
					<textarea
						className="textarea"
						required
						placeholder="Kiitos, kommentti, kysymys, moite..."
					/>
					<p className="label">Liitteet</p>
					<p>Voit liittää palautteeseen yhden tai useampia liitetiedostoja, esimerkiksi kuvia havainnosta.</p>
					<input
						type="file"
						name="attachments"
						id="attachments"
						className="file-input"
						onChange={handleFile}
						multiple
					/>
					<p className="disclaimer">Liitteiden yhteenlaskettu maksimikoko on 15Mt. Hyväksytyt tiedostomuodot ovat pdf, doc, docx, rtf, gif, png, jpg, jpeg, tif, tiff, txt, zip, xls, xlsx, ppt ja pptx</p>
				</section>

				<section className="content-block">
					<Checkbox
						id={"allow-publish"}
						name={"allow-publish"}
						isChecked={false}
						children="Palautteeni saa julkaista"
						onChange={newValue =>
							handleChange({
								newValue,
								name: "Palautteeni saa julkaista",
							})
						}
					/>
					
					<Checkbox
						id={"response-yes"}
						name={"response-yes"}
						isChecked={false}
						children="Haluan vastauksen palautteeseeni"
						onChange={newValue =>
							handleChange({
								newValue,
								name: "Haluan vastauksen palautteeseeni",
							})
						}
					/>
				</section>

				<section className="content-block">
					<h2 className="form-subheader">Yhteystiedot</h2>
					<p>Yhteystietojasi ei julkaista, mutta palaute ja siihen annettava vastaus voidaan julkaista, jos sen sallit.</p>

					<div className="field">
					 	<label className="label" htmlFor="email">Sähköposti</label>
						<input className="input" required pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$" type="email" id="email" name="email" />
						<p className="warning-text">Syötä sähköposti oikeassa muodossa.</p>
					</div>

					<div className="field">
					 	<label className="label" htmlFor="firstname">Etunimi <span className="optional">(ei pakollinen)</span></label>
						<input className="input" type="text" id="firstname" name="firstname" />
					</div>

					<div className="field">
					 	<label className="label" htmlFor="lastname">Sukunimi <span className="optional">(ei pakollinen)</span></label>
						<input className="input" type="email" id="lastname" name="lastname" />
					</div>

				</section>

				<section className="content-block">
					<p className="center">Lähettämällä lomakkeen hyväksyt <a href="#" target="_blank">käyttöehdot</a> ja <a href="#" target="_blank">tietosuojaselosteen</a>.</p>
					<button
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
								.then(function (response: any) {
									console.log(response);
								})
								.catch((error: Error) => {
									console.error(error.message);
									throw error;
								});
						}}
					>
						Lähetä palaute
					</button>
					<p className="center">Palautteesi on meille tärkeä ja vastaamme siihen mahdollisimman pian. Kiireellisissä asioissa kannattaa kuitenkin olla suoraan yhteydessä <a href="#" target="_blank" rel="">asiakaspalveluun</a>.</p>
				</section>
		</div>
	);
};

export { PageFeedback };
