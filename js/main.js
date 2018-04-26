import Rubik from "./model/Rubik.js";
import RubikManager from "./model/RubikManager.js";
import RubikViewHtmlCss from "./view/RubikViewHtmlCss/RubikViewHtmlCss.js";

window.onload = () => {
	const colors = {
		U: "white",
		D: "yellow",
		L: "orange",
		R: "red",
		F: "green",
		B: "blue",
		black: "black"
	}

	let rubik = new Rubik(colors);
	let rubikView = new RubikViewHtmlCss(rubik);
	let rubikManager = new RubikManager(rubik, rubikView);

	rubikView.build();
}