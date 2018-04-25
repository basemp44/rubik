function getElementsByClass(str) {
	return Array.from(document.getElementsByClassName(str));
}

function create(tag, classList, children = null) {
	let elem = document.createElement(tag);
	elem.classList = classList;
	if (children) {
		children.forEach(child => elem.appendChild(child));
	}

	return elem;
}

function populateLayerX(colors) {
	getElementsByClass("layerX").forEach((layer, i) => {
		let xU = createXU(colors.U);
		let xD = createXD(colors.D);
		let xL = createXL(i == 0 ? colors.L : colors.black);
		let xR = createXR(i == 2 ? colors.R : colors.black);
		let xF = createXF(colors.F);
		let xB = createXB(colors.B);

		[xU, xD, xL, xR, xF, xB].forEach(e => layer.appendChild(e))
	})

	function createXU(color) { return createXCustom(3, color, 1, 3, "up"); }
	function createXD(color) { return createXCustom(3, color, 1, 3, "down"); }
	function createXL(color) { return createXCustom(9, color, 3, 3, "left"); }
	function createXR(color) { return createXCustom(9, color, 3, 3, "right"); }
	function createXF(color) { return createXCustom(3, color, 3, 1, "front"); }
	function createXB(color) { return createXCustom(3, color, 3, 1, "back"); }

	function createXCustom(ntiles, color, nrows, ncolums, position) {
		let children = Array.from({ length: ntiles }, () => create("div", `tile ${color}`));
		return create("div", `tilegroup tilegroup-${nrows}-${ncolums} x-${position}`, children)
	}
}

function populateLayerY(colors) {
	getElementsByClass("layerY").forEach((layer, i) => {
		let yU = createYU(i == 0 ? colors.U : colors.black);
		let yD = createYD(i == 2 ? colors.D : colors.black);
		let yL = createYL(colors.L);
		let yR = createYR(colors.R);
		let yF = createYF(colors.F);
		let yB = createYB(colors.B);

		[yU, yD, yL, yR, yF, yB].forEach(e => layer.appendChild(e))
	})

	function createYU(color) { return createYCustom(9, color, 3, 3, "up"); }
	function createYD(color) { return createYCustom(9, color, 3, 3, "down"); }
	function createYL(color) { return createYCustom(3, color, 3, 1, "left"); }
	function createYR(color) { return createYCustom(3, color, 3, 1, "right"); }
	function createYF(color) { return createYCustom(3, color, 1, 3, "front"); }
	function createYB(color) { return createYCustom(3, color, 1, 3, "back"); }

	function createYCustom(ntiles, color, nrows, ncolums, position) {
		let children = Array.from({ length: ntiles }, () => create("div", `tile ${color}`));
		return create("div", `tilegroup tilegroup-${nrows}-${ncolums} y-${position}`, children)
	}
}

function populateLayerZ(colors) {
	getElementsByClass("layerZ").forEach((layer, i) => {
		let zU = createZU(colors.U);
		let zD = createZD(colors.D);
		let zL = createZL(colors.L);
		let zR = createZR(colors.R);
		let zF = createZF(i == 2 ? colors.F : colors.black);
		let zB = createZB(i == 0 ? colors.B : colors.black);

		[zU, zD, zL, zR, zF, zB].forEach(e => layer.appendChild(e))
	})

	function createZU(color) { return createZCustom(3, color, 1, 3, "up"); }
	function createZD(color) { return createZCustom(3, color, 1, 3, "down"); }
	function createZL(color) { return createZCustom(3, color, 3, 1, "left"); }
	function createZR(color) { return createZCustom(3, color, 3, 1, "right"); }
	function createZF(color) { return createZCustom(9, color, 3, 3, "front"); }
	function createZB(color) { return createZCustom(9, color, 3, 3, "back"); }

	function createZCustom(ntiles, color, nrows, ncolums, position) {
		let children = Array.from({ length: ntiles }, () => create("div", `tile ${color}`));
		return create("div", `tilegroup tilegroup-${nrows}-${ncolums} z-${position}`, children)
	}
}