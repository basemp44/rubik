function getElementsByClass(str) {
	return Array.from(document.getElementsByClassName(str));
}

function populateBlack() {
	["layer1", "layer2"].forEach(cl =>
		getElementsByClass(cl).forEach(layer => {
			for (let i = 0; i < 9; i++) {
				let tile = document.createElement("div")
				tile.classList = "tile black";
				layer.appendChild(tile);
			}
		})
	);
}

function populateU() { populate("layerZ layer3", "white") }
function populateD() { populate("layerZ layer0", "yellow") }
function populateL() { populate("layerX layer3", "blue") }
function populateF() { populate("layerX layer0", "green") }
function populateR() { populate("layerY layer3", "red") }
function populateB() { populate("layerY layer0", "orange") }


function populate(strClass, color) {
	let layer = getElementsByClass(strClass)[0];
	for (let i = 0; i < 9; i++) {
		let tile = document.createElement("div")
		tile.classList = `tile ${color}`;
		layer.appendChild(tile);
	}
}

window.onload = () => {
	populateU();
	populateD();
	populateL();
	populateF();
	populateR();
	populateB();
	populateBlack();
}