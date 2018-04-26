import dom from "/js/dom-operations.js"

export default class RubikViewHtmlCssBuilder {
	constructor() { }

	build() {
		this._buildRotationLayersX();
		this._buildRotationLayersY();
		this._buildRotationLayersZ();
	}

	_buildRotationLayersX() {
		this._buildRotationLayerX0();
		this._buildRotationLayerX1();
		this._buildRotationLayerX2();
	}

	_buildRotationLayersY() {
		this._buildRotationLayerY0();
		this._buildRotationLayerY1();
		this._buildRotationLayerY2();
	}

	_buildRotationLayersZ() {
		this._buildRotationLayerZ0();
		this._buildRotationLayerZ1();
		this._buildRotationLayerZ2();
	}

	_buildRotationLayerX0() { this._buildRotationLayer("X", 0, this._facesX0); }
	_buildRotationLayerX1() { this._buildRotationLayer("X", 1, this._facesX1); }
	_buildRotationLayerX2() { this._buildRotationLayer("X", 2, this._facesX2); }

	_buildRotationLayerY0() { this._buildRotationLayer("Y", 0, this._facesY0); }
	_buildRotationLayerY1() { this._buildRotationLayer("Y", 1, this._facesY1); }
	_buildRotationLayerY2() { this._buildRotationLayer("Y", 2, this._facesY2); }

	_buildRotationLayerZ0() { this._buildRotationLayer("Z", 0, this._facesZ0); }
	_buildRotationLayerZ1() { this._buildRotationLayer("Z", 1, this._facesZ1); }
	_buildRotationLayerZ2() { this._buildRotationLayer("Z", 2, this._facesZ2); }

	_buildRotationLayer(axis, position, children) {
		let layer = dom.createTagClass("div", `layer layer${axis} layer${position}`, children);
		dom.append("rubik", layer);
	}

	get _facesX0() { return this._facesX(0); }
	get _facesX1() { return this._facesX(1); }
	get _facesX2() { return this._facesX(2); }

	get _facesY0() { return this._facesY(0); }
	get _facesY1() { return this._facesY(1); }
	get _facesY2() { return this._facesY(2); }

	get _facesZ0() { return this._facesZ(0); }
	get _facesZ1() { return this._facesZ(1); }
	get _facesZ2() { return this._facesZ(2); }

	_facesX(x) {
		let l_attr = x == 0 ? [9, 3, 3] : [1, 1, 1];
		let r_attr = x == 2 ? [9, 3, 3] : [1, 1, 1];
		return [
			this._customFaceX(l_attr[1], l_attr[2], "left",  this._tilesFromXLeft(x, l_attr[0])),
			this._customFaceX(r_attr[1], r_attr[2], "right", this._tilesFromXRight(x, r_attr[0])),
			this._customFaceX(1,         3,         "up",    this._tilesFromXUp(x, 3)),
			this._customFaceX(1,         3,         "down",  this._tilesFromXDown(x, 3)),
			this._customFaceX(3,         1,         "front", this._tilesFromXFront(x, 3)),
			this._customFaceX(3,         1,         "back",  this._tilesFromXBack(x, 3))
		];
	}

	_facesY(y) {
		let u_attr = y == 0 ? [9, 3, 3] : [1, 1, 1];
		let d_attr = y == 2 ? [9, 3, 3] : [1, 1, 1];
		return [
			this._customFaceY(u_attr[1], u_attr[2], "up",    this._tilesFromYUp(y, u_attr[0])),
			this._customFaceY(d_attr[1], d_attr[2], "down",  this._tilesFromYDown(y, d_attr[0])),
			this._customFaceY(3,         1,         "left",  this._tilesFromYLeft(y, 3)),
			this._customFaceY(3,         1,         "right", this._tilesFromYRight(y, 3)),
			this._customFaceY(1,         3,         "front", this._tilesFromYFront(y, 3)),
			this._customFaceY(1,         3,         "back",  this._tilesFromYBack(y, 3))
		];
	}

	_facesZ(z) {
		let f_attr = z == 0 ? [9, 3, 3] : [1, 1, 1];
		let b_attr = z == 2 ? [9, 3, 3] : [1, 1, 1];
		return [
			this._customFaceZ(f_attr[1], f_attr[2], "front", this._tilesFromZFront(z, f_attr[0])),
			this._customFaceZ(b_attr[1], b_attr[2], "back",  this._tilesFromZBack(z, b_attr[0])),
			this._customFaceZ(1,         3,         "up",    this._tilesFromZUp(z, 3)),
			this._customFaceZ(1,         3,         "down",  this._tilesFromZDown(z, 3)),
			this._customFaceZ(3,         1,         "left",  this._tilesFromZLeft(z, 3)),
			this._customFaceZ(3,         1,         "right", this._tilesFromZRight(z, 3))
		];
	}

	_customFaceX(nrows, ncolums, orientation, children) {
		return this._customFaceWithChildren(nrows, ncolums, "x", orientation, children);
	}

	_customFaceY(nrows, ncolums, orientation, children) {
		return this._customFaceWithChildren(nrows, ncolums, "y", orientation, children);
	}

	_customFaceZ(nrows, ncolums, orientation, children) {
		return this._customFaceWithChildren(nrows, ncolums, "z", orientation, children);
	}

	_tilesFromCustom(ntiles, xGen, yGen, zGen, orientation) {
		return Array.from({length:ntiles}, (e,i) => {
			let x = xGen.next().value;
			let y = yGen.next().value;
			let z = zGen.next().value;
			return dom.createTagClass("div", `tile tile-${x}-${y}-${z}-${orientation}`);
		});
	}

	_tilesFromXLeft(x, ntiles)  { return this._tilesFromCustom(ntiles, same(x), same(9), same(9), "left")}
	_tilesFromXRight(x, ntiles) { return this._tilesFromCustom(ntiles, same(x), same(9), same(9), "right")}
	_tilesFromXUp(x, ntiles)    { return this._tilesFromCustom(ntiles, same(x), same(9), same(9), "up")}
	_tilesFromXDown(x, ntiles)  { return this._tilesFromCustom(ntiles, same(x), same(9), same(9), "down")}
	_tilesFromXFront(x, ntiles) { return this._tilesFromCustom(ntiles, same(x), same(9), same(9), "front")}
	_tilesFromXBack(x, ntiles)  { return this._tilesFromCustom(ntiles, same(x), same(9), same(9), "back")}

	_tilesFromYUp(y, ntiles)    { return this._tilesFromCustom(ntiles, same(9), same(y), same(9), "up")}
	_tilesFromYDown(y, ntiles)  { return this._tilesFromCustom(ntiles, same(9), same(y), same(9), "down")}
	_tilesFromYLeft(y, ntiles)  { return this._tilesFromCustom(ntiles, same(9), same(y), same(9), "left")}
	_tilesFromYRight(y, ntiles) { return this._tilesFromCustom(ntiles, same(9), same(y), same(9), "right")}
	_tilesFromYFront(y, ntiles) { return this._tilesFromCustom(ntiles, same(9), same(y), same(9), "front")}
	_tilesFromYBack(y, ntiles)  { return this._tilesFromCustom(ntiles, same(9), same(y), same(9), "back")}

	_tilesFromZFront(z, ntiles) { return this._tilesFromCustom(ntiles, same(9), same(9), same(z), "front")}
	_tilesFromZBack(z, ntiles)  { return this._tilesFromCustom(ntiles, same(9), same(9), same(z), "back")}
	_tilesFromZUp(z, ntiles)    { return this._tilesFromCustom(ntiles, same(9), same(9), same(z), "up")}
	_tilesFromZDown(z, ntiles)  { return this._tilesFromCustom(ntiles, same(9), same(9), same(z), "down")}
	_tilesFromZLeft(z, ntiles)  { return this._tilesFromCustom(ntiles, same(9), same(9), same(z), "left")}
	_tilesFromZRight(z, ntiles) { return this._tilesFromCustom(ntiles, same(9), same(9), same(z), "right")}

	_customFaceWithChildren(nrows, ncolums, axis, orientation, children) {
		return dom.createTagClass("div", `tilegroup tilegroup-${nrows}-${ncolums} ${axis}-${orientation}`, children);
	}
}

function* ascMod(mod) {
	let i = 0;
	while (true) {
		yield i++ % mod;
	}
}

function* ascStep(step) {
	let i = 0;
	let j = 0;
	while (++j) {
		yield i;
		if (j%3 == 0) {
			i++;
		}
	}
}

function* same(value) {
	while(true) {
		yield value;
	}
}