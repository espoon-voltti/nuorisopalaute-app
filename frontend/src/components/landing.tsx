import React from "react"
import "../styles/landing.scss"
import { useHistory } from "react-router-dom";
import { Button } from "reakit/Button";


function Landing() {
	let history = useHistory();

	const areas = ["Espoon keskus", "Espoonlahti", "Leppävaara", "Matinkylä", "Tapiola"];

	let selected_area = -1;

	const on_selected_area = function(event: any) {
		console.log(event.target.value)
		selected_area = event.target.value;
	}

	const menu_items_dom: object[] = areas.map((area, index) => {
		return (
			<option value={index} key={index}>{area}</option>
		)
	});

	return (
		<div id="landing">
			<div className="jumbotron">
				<h2 className="jumbotron__header">Palautehommaa<span>Tutustu.</span></h2>		
			</div>

			<div className="content-column">

				<section className="content-block">
					<h2>Asiaa</h2>
					<p>Paljon asiaa</p>
				</section>
			</div>
		</div>
	)
}
//			<p className="nursinghome-container-child" id="nursinghome-summary">{this.nursinghome.summary}</p>

export { Landing }
