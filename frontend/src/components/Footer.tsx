import { FC } from "react";
import React from "react";

const Footer: React.FunctionComponent = () => {
	return (
		<footer className="footer">
			<div className="logo-container">
				<a href="https://www.espoo.fi">
					<img
						className="logo"
						src="/logo-espoo.svg"
						alt="Espoo logo"
					/>
				</a>
			</div>

			<div className="footer-links">
				<a
					className="footer-link"
					href="#"
					target="_blank"
					rel="noopener noreferrer external"
				>
					Tietosuojaseloste
				</a>

				<a href="#" className="footer-link">
					Saavutettavuuseloste
				</a>
			</div>
		</footer>
	);
};

export default Footer;
