window.onload = () => {
	let colors = {
		U: "white",
		D: "yellow",
		L: "orange",
		R: "red",
		F: "green",
		B: "blue",
		black: "black"
	}

	populateLayerX(colors);
	populateLayerY(colors);
	populateLayerZ(colors);
}