import dom from "/js/dom-operations.js"

export default class RubikViewHtmlCssBuilder {
	constructor() {}

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
		let layer = dom.createTagClass("div", `layer, layer${axis} layer${position}`, children);
		dom.append("rubik", layer);
	}

	get _facesX0() {
		return [
			this._customFaceX(3, 1, 3, 0, "up"),
			this._customFaceX(3, 1, 3, 0, "down"),
			this._customFaceX(9, 3, 3, 0, "left"),
			this._customFaceX(1, 1, 1, 0, "right"),
			this._customFaceX(3, 3, 1, 0, "front"),
			this._customFaceX(3, 3, 1, 0, "back")
		];
	}

	get _facesX1() {
		return [
			this._customFaceX(3, 1, 3, 1, "up"),
			this._customFaceX(3, 1, 3, 1, "down"),
			this._customFaceX(1, 1, 1, 1, "left"),
			this._customFaceX(1, 1, 1, 1, "right"),
			this._customFaceX(3, 3, 1, 1, "front"),
			this._customFaceX(3, 3, 1, 1, "back")
		];
	}

	get _facesX2() {
		return [
			this._customFaceX(3, 1, 3, 2, "up"),
			this._customFaceX(3, 1, 3, 2, "down"),
			this._customFaceX(1, 1, 1, 2, "left"),
			this._customFaceX(9, 3, 3, 2, "right"),
			this._customFaceX(3, 3, 1, 2, "front"),
			this._customFaceX(3, 3, 1, 2, "back")
		];
	}

	get _facesY0() {
		return [
			this._customFaceY(9, 3, 3, 0, "up"),
			this._customFaceY(1, 1, 1, 0, "down"),
			this._customFaceY(3, 3, 1, 0, "left"),
			this._customFaceY(3, 3, 1, 0, "right"),
			this._customFaceY(3, 1, 3, 0, "front"),
			this._customFaceY(3, 1, 3, 0, "back")
		];
	}

	get _facesY1() {
		return [
			this._customFaceY(1, 1, 1, 1, "up"),
			this._customFaceY(1, 1, 1, 1, "down"),
			this._customFaceY(3, 3, 1, 1, "left"),
			this._customFaceY(3, 3, 1, 1, "right"),
			this._customFaceY(3, 1, 3, 1, "front"),
			this._customFaceY(3, 1, 3, 1, "back")
		];
	}

	get _facesY2() {
		return [
			this._customFaceY(1, 1, 1, 2, "up"),
			this._customFaceY(9, 3, 3, 2, "down"),
			this._customFaceY(3, 3, 1, 2, "left"),
			this._customFaceY(3, 3, 1, 2, "right"),
			this._customFaceY(3, 1, 3, 2, "front"),
			this._customFaceY(3, 1, 3, 2, "back")
		];
	}

	get _facesZ0() {
		return [
			this._customFaceZ(3, 1, 3, 0, "up"),
			this._customFaceZ(3, 1, 3, 0, "down"),
			this._customFaceZ(3, 3, 1, 0, "left"),
			this._customFaceZ(3, 3, 1, 0, "right"),
			this._customFaceZ(9, 3, 3, 0, "front"),
			this._customFaceZ(1, 1, 1, 0, "back")
		];
	}

	get _facesZ1() {
		return [
			this._customFaceZ(3, 1, 3, 1, "up"),
			this._customFaceZ(3, 1, 3, 1, "down"),
			this._customFaceZ(3, 3, 1, 1, "left"),
			this._customFaceZ(3, 3, 1, 1, "right"),
			this._customFaceZ(1, 1, 1, 1, "front"),
			this._customFaceZ(1, 1, 1, 1, "back")
		];
	}

	get _facesZ2() {
		return [
			this._customFaceZ(3, 1, 3, 2, "up"),
			this._customFaceZ(3, 1, 3, 2, "down"),
			this._customFaceZ(3, 3, 1, 2, "left"),
			this._customFaceZ(3, 3, 1, 2, "right"),
			this._customFaceZ(1, 1, 1, 2, "front"),
			this._customFaceZ(9, 3, 3, 2, "back")
		];
	}

	_customFaceX(ntiles, nrows, ncolums, x, orientation) {
		let children;
		return this._customFaceWithChildren(nrows, ncolums, "x", orientation, children);
	}

	_customFaceY(ntiles, nrows, ncolums, x, orientation) {
		let children;
		return this._customFaceWithChildren(nrows, ncolums, "y", orientation, children);
	}

	_customFaceZ(ntiles, nrows, ncolums, x, orientation) {
		let children;
		return this._customFaceWithChildren(nrows, ncolums, "z", orientation, children);
	}

	_customFaceWithChildren(nrows, ncolums, axis, orientation, children) {
		return dom.createTagClass("div", `tilegroup tilegroup-${nrows}-${ncolums} ${axis}-${orientation}`, children);
	}
}