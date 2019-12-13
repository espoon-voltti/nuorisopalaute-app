import React, { FC, useState } from "react";
import "../styles/PageInitiative.scss";
import axios from "axios";
import config from "./config";
import Checkbox from "./Checkbox";
import Header from "./Header";
import Footer from "./Footer";
import { useT } from "../i18n";
import { Trans } from "react-i18next";

const PageInitiative: FC = () => {
	const [allowPublish, setAllowPublish] = useState(false);
	const [wantsAnswer, setWantsAnswer] = useState(false);
	const [initiativeDescription, setInitiativeDescription] = useState("");
	const [email, setEmail] = useState("");
	const [firstname, setFirstname] = useState("");
	const [surname, setSurname] = useState("");

	const handleFile = (e: any) => {
		console.log(e.target.files);
	};

	const handleChange = (e: any) => {
		console.log(e.target);
	};

	return (
		<div className="form-container">
			<Header className="header--landing"></Header>

			<section className="content-block">
				<h1 className="form-header">
					{useT("initiativePageHeadline")}
				</h1>
				<img className="form-image" src="/human-blue.svg" alt="" />
				<p className="form-ingress">
					{useT("initiativePageIngress")}
				</p>
				<Trans i18nKey="defaultNamespace:initiativePageText">
					<p></p>
					<p></p>
				</Trans>
			</section>

			<section className="content-block">
				<h2 className="form-subheader">Aloite</h2>
				<p>
					{useT("initiativeFormDesc")}
				</p>

				<div className="field">
						<label className="label" htmlFor="headline">
							{useT("formHeadlineLabel")}
						</label>
						<input
							required
							className="input"
							type="text"
							id="headline"
							name="headline"
						/>
				</div>
				<label className="label" htmlFor="initiative">
							{useT("formInitiativeContentLabel")}
						</label>
				<textarea
					className="textarea"
					required
					id="initiative"
					onChange={event =>
						setInitiativeDescription(event.target.value)
					}
				/>
				<p className="label">{useT("formAttachmentsLabel")}</p>
				<p>
					{useT("formAttachmentsDescInitiative")}
				</p>
				<input
					type="file"
					name="attachments"
					id="attachments"
					className="file-input"
					onChange={handleFile}
					multiple
				/>
				<p className="disclaimer">
					{useT("formAttachmentsDisclaimer")}
				</p>
			</section>



			
				<section className="content-block">
					<h2 className="form-subheader">{useT("formContactInfo")}</h2>
					<p>
						{useT("formInitiativeContactInfoDesc")}
					</p>

					<div className="field">
						<label className="label" htmlFor="firstname">
							{useT("formFirstName")}
						</label>
						<input
							required
							className="input"
							type="text"
							id="firstname"
							name="firstname"
							onChange={event => setFirstname(event.target.value)}
						/>
					</div>

					<div className="field">
						<label className="label" htmlFor="lastname">
							{useT("formLastName")}
						</label>
						<input
							required
							className="input"
							type="text"
							id="lastname"
							name="lastname"
							onChange={event => setSurname(event.target.value)}
						/>
					</div>

					<div className="field">
						<label className="label" htmlFor="email">
							{useT("formEmail")}
						</label>
						<input
							className="input"
							required
							pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$"
							type="email"
							id="email"
							name="email"
							onChange={event => setEmail(event.target.value)}
						/>
						<p className="warning-text">
							{useT("formEmailWarning")}
						</p>
					</div>

					<div className="field">
						<label className="label" htmlFor="phonenumber">
							{useT("formTelephoneLabel")}{" "}
							<span className="optional">({useT("formNotRequired")})</span>
						</label>
						<input
							className="input"
							type="email"
							id="phonenumber"
							name="phonenumber"
							//onChange={event => setPhonenumber(event.target.value)}
						/>
					</div>

					
				</section>


			<section className="content-block">
				<p className="center">
					{useT("formPolicyText")}{" "}
					<a href={useT("urlTermsOfUse")} rel="noopener noreferrer external" target="_blank">
						{useT("termsOfUse")}
					</a>{" "}
					{useT("formPolicyTextAnd")}{" "}
					<a href={useT("urlPrivacyPolicy")} rel="noopener noreferrer external" target="_blank">
						{useT("formPrivacyPolicy")}
					</a>
					.
				</p>
				<button
					disabled={!initiativeDescription || (wantsAnswer && !email)}
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
							.then(function(response: any) {
								console.log(response);
							})
							.catch((error: Error) => {
								console.error(error.message);
								throw error;
							});
					}}
				>
					{useT("btnSendInitiative")}
				</button>
				<p className="center">
					{useT("initiativePageFooter")}
				</p>
			</section>
			<Footer />
		</div>
	);
};

export { PageInitiative };
