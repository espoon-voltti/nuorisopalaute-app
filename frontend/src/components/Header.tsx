import { useState } from "react";
import React from "react";
import { useT } from "../i18n";

type HeaderProps = {
	className: string;
};

const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
	const feedback = useT("feedback");
	const initiative = useT("initiative");
	const frontpage = useT("frontpage");
	const ariaMenu = useT("ariaMenu");
	const [expanded, setExpanded] = useState(false);
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
					className="menu"
					aria-label={ariaMenu}
					data-inclusive-menu-opens="navigation"
					aria-haspopup="true"
					aria-expanded={expanded}
					onClick={() => setExpanded(!expanded)}
				></button>
				<div
					id="navigation"
					data-inclusive-menu-from="right"
					role="menu"
					hidden={!expanded}
				>
					<div className="nav-wrapper">
						<nav>
							<button
								className="menuitem selected"
								role="menuitem"
								aria-checked="true"
							>
								{frontpage}
							</button>
							<button className="menuitem" role="menuitem">
								{feedback}
							</button>
							<button className="menuitem" role="menuitem">
								{initiative}
							</button>
						</nav>
						<div className="nav-menu--language">
							<button
								role="menuitem"
								aria-current="page"
								className="lang-link selected"
								aria-checked="true"
							>
								Suomeksi
							</button>
							<button
								role="menuitem"
								className="lang-link"
								lang="sv-SV"
							>
								På svenska
							</button>
							<button
								role="menuitem"
								className="lang-link"
								lang="en-EN"
							>
								In English
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
