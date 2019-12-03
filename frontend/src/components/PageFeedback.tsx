import React, { FC } from "react";
import "../styles/PageFeedback.scss";
import axios from "axios";
import config from "./config";

const PageFeedback: FC = () => {
	return (
		<div id="feedback">
			<div className="menu">
				<button
					className="btn landing-cta"
					onClick={(): void => {
						const data = {
							email: "test123@test.fi",
							feedback: "testi-feedback",
							text: "testi-feedback",
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
					Lähetä testi-palaute
				</button>
			</div>
		</div>
	);
};

export { PageFeedback };
