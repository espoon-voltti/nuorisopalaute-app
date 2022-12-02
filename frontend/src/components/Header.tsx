import { useState, useEffect, useRef } from "react";
import React from "react";
import { useNavigate, useLocation } from "react-router";
import { useT, Language, useCurrentLanguage } from "../i18n";
import i18next from "i18next";

type HeaderProps = {
	className: string;
};

function useOnClickOutside(ref: any, handler: any): void {
	useEffect(() => {
		const listener = (event: any): void => {
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}

			handler(event);
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]); // ... passing it into this hook. // ... but to optimize you can wrap handler in useCallback before ... // ... callback/cleanup to run every render. It's not a big deal ... // ... function on every render that will cause this effect ... // It's worth noting that because passed in handler is a new ... // Add ref and handler to effect dependencies
}

const setLanguage = (lng: Language): void => {
	i18next.changeLanguage(lng);
};

const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
	const feedback = useT("feedback");
	const initiative = useT("initiative");
	const frontpage = useT("frontpage");
	const ariaMenu = useT("ariaMenu");
	const [expanded, setExpanded] = useState(false);
	const ref = useRef();

	const currentLanguage = useCurrentLanguage();
	const navigate = useNavigate();
	const location = useLocation();

	useOnClickOutside(ref, () => setExpanded(false));

	return (
		<header className={`header ${props.className}`}>
			<a className="jump-to-content" href="#content">
				{useT("jumpToContent")}
			</a>
			<a href={`/${currentLanguage}/`} title={useT("backToFrontPage")}>
				<img
					className="logo"
					src="/logo-nuori-espoo.png"
					alt="Nuori Espoo"
				/>
			</a>
			<div data-inclusive-menu ref={ref as any}>
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
								aria-checked={location.pathname === "/"}
								onClick={(): void => {
									const url = "/";
									navigate(url, { replace: true });
								}}
							>
								{frontpage}
							</button>
							<button
								className="menuitem"
								role="menuitem"
								aria-checked={location.pathname === "/palaute"}
								onClick={(): void => {
									const url = "/palaute";
									navigate(url, { replace: true });
								}}
							>
								{feedback}
							</button>
							<button
								className="menuitem"
								role="menuitem"
								aria-checked={location.pathname === "/aloite"}
								onClick={(): void => {
									const url = "/aloite";
									navigate(url, { replace: true });
								}}
							>
								{initiative}
							</button>
						</nav>
						<div className="nav-menu--language">
							<button
								role="menuitem"
								aria-current="page"
								className="lang-link selected"
								aria-checked={currentLanguage === "fi-FI"}
								onClick={(): void => {
									setLanguage("fi-FI");
								}}
							>
								Suomeksi
							</button>
							<button
								role="menuitem"
								className="lang-link"
								lang="sv-SV"
								aria-checked={currentLanguage === "sv-FI"}
								onClick={(): void => {
									setLanguage("sv-FI");
								}}
							>
								På svenska
							</button>
							<button
								role="menuitem"
								className="lang-link"
								lang="en-EN"
								aria-checked={currentLanguage === "en-FI"}
								onClick={(): void => {
									setLanguage("en-FI");
								}}
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
