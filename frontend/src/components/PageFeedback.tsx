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
				<h1 className="form-header">Anna palautetta Espoon kaupungin palveluista</h1>
				<img className="form-image" src="/human-yellow.svg" alt="" />
				<p className="form-ingress">
					Onko lenkkitiellä kaatunut puu? Puuttuuko lähikirjastosta joku kaipaamasi opus? Haluatko kiittää tai antaa meille risuja?  

				</p>
				<p>
					Palaute on aloitetta nopeampi ja kevyempi keino kertoa meille myös ideoita ja toimenpide-ehdotuksia. 
				</p>
				<h2 className="form-subheader">Palaute</h2>
				<p>
					Ethän koskaan kirjoita palautteeseesi henkilötunnustasi, pankkitilisi numeroa, terveystietoja tms. arkaluonteista tietoa.
				</p>
				<textarea
					className="textarea"
					required
					placeholder="Kiitos, kommentti, kysymys, moite..."
				/>
				<p className="form-label">Liitteet</p>
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
				<br />
				
				<Checkbox
					id={"allow-publish"}
					name={"allow-publish"}
					isChecked={false}
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
					onChange={newValue =>
						handleChange({
							newValue,
							name: "Palautteeni saa julkaista",
						})
					}
				/>
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
		</div>
	);
};

export { PageFeedback };
