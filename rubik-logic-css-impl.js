function rotate(axis, pos, wise) {
	hideAllAxis();
	removeOldRotClasses(axis, pos);
	showAxis(axis);
	rotateLayer(axis, pos, wise)
		.then(resp => updateRubik(axis, pos, wise));
}

function updateRubik(axis, pos, wise) {
	console.log("updating rubik...");
}

function rotateLayer(axis, pos, wise) {
	let layer = getLayer(axis, pos);
	startAnimation(layer, wise);
	return waitEndAnimation(layer, axis, pos, wise);

	function startAnimation(layer, wise) {
		layer.classList.add(wise ? "rotW" : "rotCw");
	}

	function waitEndAnimation(layer, axis, pos, wise) {
		return new Promise(resolve => {
			layer.addEventListener("transitionend", function wait() {
				layer.removeEventListener("transitionend", wait);
				resolve();
			});
		})
	}
}

function removeOldRotClasses(axis, pos) {
	let layerClassList = getLayer(axis, pos).classList;
	["rotW", "rotCw"].forEach(cl => layerClassList.remove(cl));
}

function getLayer(axis, pos) {
	return document
		.getElementById("rubik")
		.getElementsByClassName(`layer${axis} layer${pos}`)[0];
}

function hideAllAxis() {
	for (let ax of ["X", "Y", "Z"]) {
		let layers = getElementsByClass(`layer${ax}`);
		layers.forEach(layer => hide(layer));
	}
}

function showAxis(axis) {
	let layers = getElementsByClass(`layer${axis}`);
	layers.forEach(layer => show(layer))
}

function hide(elem) {
	elem.classList.add("hidden");
}

function show(elem) {
	elem.classList.remove("hidden");
}