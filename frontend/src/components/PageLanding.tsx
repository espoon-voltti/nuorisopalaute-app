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
		</div>
	);
};

export { PageLanding };
