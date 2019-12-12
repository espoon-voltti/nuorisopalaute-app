import { FC } from "react";
import React from "react";

type HeaderProps = {
	className: string;
};

const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
	return (
		<header className={`header ${props.className}`}>
			<a className="jump-to-content" href="#content">
				Siirry sisältöön
			</a>
			<a href="/">
				<img
					className="logo"
					src="/logo-nuori-espoo.svg"
					alt="Nuori Espoo"
				/>
			</a>
			<div data-inclusive-menu>
				<button
					data-inclusive-menu-opens="navigation"
					aria-haspopup="true"
					aria-expanded="false"
				>
				</button>
				<div
					id="navigation"
					data-inclusive-menu-from="right"
					role="menu"
					hidden
				>
					<div className="nav-menu--language">
							<button role="menuitem" aria-current="page" className="lang-link selected" aria-checked="true" >
								Suomeksi
							</button>
							<button role="menuitem" className="lang-link" lang="sv-SV" >
								På svenska
							</button>
							<button role="menuitem" className="lang-link" lang="en-EN" >
								In English
							</button>
						
					</div>
					<button className="menuitem selected" role="menuitem" aria-checked="true">Etusivu</button>
					<button className="menuitem" role="menuitem">Palaute</button>
					<button className="menuitem" role="menuitem">Aloite</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
