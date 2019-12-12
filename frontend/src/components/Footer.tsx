import { FC } from "react";
import React from "react";
import { useT } from "../i18n";

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
					href="Tietosuojaseloste"
					target="_blank"
					rel="noopener noreferrer external"
				>
					{useT("footerLinkPrivacy")}
				</a>

				<a href="/saavutettavuus" className="footer-link">
					{useT("footerLinkAccessibility")}
				</a>
			</div>
		</footer>
	);
};

export default Footer;
