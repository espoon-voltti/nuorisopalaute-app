import React, { FC, useState } from "react";
import "../styles/PageFeedback.scss";
import axios from "axios";
import config from "./config";
import Checkbox from "./Checkbox";
import Header from "./Header";
import Footer from "./Footer";
import FileDropzone from "./FileDropzone";
import { useT } from "../i18n";
import { useHistory } from "react-router";

const PageFeedback: FC = () => {
	const [allowPublish, setAllowPublish] = useState(false);
	const [wantsAnswer, setWantsAnswer] = useState(false);
	const [feedbackDescription, setFeedbackDescription] = useState("");
	const [email, setEmail] = useState("");
	const [firstname, setFirstname] = useState("");
	const [surname, setSurname] = useState("");
	const [attachments, setAttachments] = useState([]);

	const formContactInfo = useT("formContactInfo");
	const formContactInfoDesc = useT("formContactInfoDesc");
	const formEmail = useT("formEmail");
	const formEmailWarning = useT("formEmailWarning");
	const formFirstName = useT("formFirstName");
	const formLastName = useT("formLastName");
	const formNotRequired = useT("formNotRequired");

	const history = useHistory();

	const attachmentsChanged = (files: any) => {
		console.log(files);
		setAttachments(files);
	};

	const handleChange = (e: any) => {
		console.log(e.target);
	};

	return (
		<>
			<Header className="header"></Header>
			<div id="content" className="form-container">
				<section className="content-block">
					<h1 className="form-header">
						{useT("feedbackPageHeadline")}
					</h1>
					<img
						className="form-image"
						src="/human-yellow.svg"
						alt=""
					/>
					<p className="form-ingress">
						{useT("feedbackPageIngress")}
					</p>
					<p>{useT("feedbackPageText")}</p>
				</section>

				<section className="content-block">
					<label htmlFor="feedback" className="form-subheader">{useT("feedback")}</label>
					<p>{useT("feedbackFormDesc")}</p>
					<textarea
						className="textarea"
						required
						id="feedback"
						placeholder={useT("feedbackFormPlaceholder")}
						onChange={event =>
							setFeedbackDescription(event.target.value)
						}
					/>
					<label className="label">{useT("formAttachmentsLabel")}</label>
					<p>{useT("formAttachmentsDescFeedback")}</p>

					<FileDropzone onAttachmentsChanged={attachmentsChanged} />
					<p className="disclaimer">
						{useT("formAttachmentsDisclaimer")}
					</p>
				</section>

				<section className="content-block">
					<Checkbox
						id={"allow-publish"}
						name={"allow-publish"}
						isChecked={allowPublish}
						children={useT("formAllowPublishing")}
						onChange={newValue => setAllowPublish(newValue)}
					/>

					<Checkbox
						id={"response-yes"}
						name={"response-yes"}
						isChecked={wantsAnswer}
						children={useT("formIwantReply")}
						onChange={newValue => setWantsAnswer(newValue)}
					/>
				</section>

				{wantsAnswer && (
					<section className="content-block">
						<h2 className="form-subheader">{formContactInfo}</h2>
						<p>{formContactInfoDesc}</p>

						<div className="field">
							<label className="label" htmlFor="email">
								{formEmail}
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
							<p className="warning-text">{formEmailWarning}</p>
						</div>

						<div className="field">
							<label className="label" htmlFor="firstname">
								{formFirstName}{" "}
								<span className="optional">
									({formNotRequired})
								</span>
							</label>
							<input
								className="input"
								type="text"
								id="firstname"
								name="firstname"
								onChange={event =>
									setFirstname(event.target.value)
								}
							/>
						</div>

						<div className="field">
							<label className="label" htmlFor="lastname">
								{formLastName}{" "}
								<span className="optional">
									({formNotRequired})
								</span>
							</label>
							<input
								className="input"
								type="text"
								id="lastname"
								name="lastname"
								onChange={event =>
									setSurname(event.target.value)
								}
							/>
						</div>
					</section>
				)}

				<section className="content-block">
					<p className="center">
						{useT("formPolicyText")}{" "}
						<a
							href={useT("urlTermsOfUse")}
							rel="noopener noreferrer external"
							target="_blank"
						>
							{useT("termsOfUse")}
						</a>{" "}
						{useT("formPolicyTextAnd")}{" "}
						<a
							href={useT("urlPrivacyPolicy")}
							rel="noopener noreferrer external"
							target="_blank"
						>
							{useT("formPrivacyPolicy")}
						</a>
						.
					</p>
					<button
						disabled={
							!feedbackDescription || (wantsAnswer && !email)
						}
						className="btn btn--form"
						onClick={(): void => {
							const data: FormData = new FormData();

							//data.append("email", email);
							//data.append("first_name", firstname);
							//data.append("last_name", surname);
							data.append("description", feedbackDescription);
							data.append(
								"address_string",
								"nuortenpalaute.espoo.fi",
							);

							history.push("/kiitos");

							/*const data = {
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
						};*/

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
						{useT("btnSendFeedBack")}
					</button>
					<p className="center">
						{useT("feedbackPageFooter")}{" "}
						<a
							href={useT("urlCustomerService")}
							target="_blank"
							rel="noopener noreferrer external"
						>
							{useT("customerService")}
						</a>
						.
					</p>
				</section>
				<Footer />
			</div>
		</>
	);
};

export { PageFeedback };
