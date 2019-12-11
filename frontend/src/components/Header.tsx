import { FC } from "react";
import React from "react";

type HeaderProps = {
	className: string;
};

const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
	return (
		<header className={`header header--dark ${props.className}`}>
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
					data-inclusive-menu-opens="difficulty"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<img src="/icon-menu.svg" />
				</button>
				<div
					id="difficulty"
					data-inclusive-menu-from="right"
					role="menu"
					hidden
				>
					<button role="menuitem">Palaute</button>
					<button role="menuitem">Aloite</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
