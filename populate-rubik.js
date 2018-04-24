function getElementsByClass(str) {
	return Array.from(document.getElementsByClassName(str));
}

function create(tag, classList, children=null) {
	let elem = document.createElement(tag);
	elem.classList = classList;
	if (children) {
		children.forEach(child => elem.appendChild(child));
	}

	return elem;
}

function populateLayerX(colors) {
	getElementsByClass("layerX").forEach(layer => {
		let xU = createXU(colors['U']);
		let xD = createXD(colors['D']);
		let xL = createXL(colors['L']);
		let xR = createXR(colors['R']);
		let xF = createXF(colors['F']);
		let xB = createXB(colors['B']);

		[xU,xD,xL,xR,xF,xB].forEach(e => layer.appendChild(e))
	})

	function createXU(color) {
		let children = Array.from({length: 3}, () => create("div", `tile ${color}`));
		return create("div", "tilegroup tilegroup-1-3 x-up", children);
	}

	function createXD(color) {
		let children = Array.from({length: 3}, () => create("div", `tile ${color}`));
		return create("div", "tilegroup tilegroup-1-3 x-down", children);
	}

	function createXL(color) {
		let children = Array.from({length: 9}, () => create("div", `tile ${color}`));
		return create("div", "tilegroup tilegroup-3-3 x-left", children);
	}

	function createXR(color) {
		let children = Array.from({length: 9}, () => create("div", `tile ${color}`));
		return create("div", "tilegroup tilegroup-3-3 x-right", children);
	}

	function createXF(color) {
		let children = Array.from({length: 3}, () => create("div", `tile ${color}`));
		return create("div", "tilegroup tilegroup-3-1 x-front", children);
	}

	function createXB(color) {
		let children = Array.from({length: 3}, () => create("div", `tile ${color}`));
		return create("div", "tilegroup tilegroup-3-1 x-back", children);
	}

}

window.onload = () => {
	let colors = {
		U: "white",
		D: "yellow",
		L: "orange",
		R: "red",
		F: "green",
		B: "blue"
	}

	populateLayerX(colors);
}