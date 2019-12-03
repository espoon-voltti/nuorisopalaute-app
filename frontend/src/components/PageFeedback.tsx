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
		<div id="feedback">
			<div className="menu">
				<div className="feedback-header">Boldattua tekstiä?</div>
				<div className="feedback-pic-1">Tähän toi kuva?</div>
				<div className="bold-paragraph">
					Onko lenkkitielle kaatunut puu? Tässä boldattua selitystä.
				</div>
				<div className="paragraph">
					Palaute on aloitetta nopeampi keino..
				</div>
				<div className="feedback-small-header">Palaute</div>
				<div className="paragraph">
					Ethän koskaan kirjoita henkilötieto.ds.adsa...
				</div>
				<input
					type="text"
					name="feedback-text"
					placeholder="kaikenlaista palautetta tähän"
				/>
				<div className="feedback-very-small-header">Liitteet</div>
				<div className="paragraph">voit liittää yhden tai..</div>
				<input
					type="file"
					name="attachments"
					id="attachments"
					className="attachments"
					onChange={handleFile}
					multiple
				/>
				<br />
				Palautteeni saa julkaista
				<Checkbox
					id={"allow-publish"}
					name={"Palautteeni saa julkaista"}
					isChecked={false}
					onChange={newValue =>
						handleChange({
							newValue,
							name: "Palautteeni saa julkaista",
						})
					}
				/>
				Se toinen checkbox
				<Checkbox
					id={"allow-publish"}
					name={"Palautteeni saa julkaista"}
					isChecked={false}
					onChange={newValue =>
						handleChange({
							newValue,
							name: "Palautteeni saa julkaista",
						})
					}
				/>
				<button
					className="btn landing-cta"
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
					Lähetä testi-palaute
				</button>
			</div>
		</div>
	);
};

export { PageFeedback };
