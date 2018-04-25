class Rubik {
	constructor(colors) {
		this.pieces = Array(3).fill(Array(3).fill(Array(3).fill(new Piece(colors))));
	}

	rotateFB(xx, clockwise) {
		let condition = (x,y,z) => xx == x;
		let change    = (x,y,z) => clockwise ? 
			this.pieces[x][2-z][y].rotateFB(clockwise) :
			this.pieces[x][z][2-y].roteteFB(clockwise);
		this.rotate(condition, change);
	}

	rotateLR(yy, clockwise) {

	}

	rotateUD(zz, clockwise) {

	}

	rotate(condition, change) {
		let m = this.pieces;
		this.pieces = m.map(
			(ex,x) => ex.map(
			(ey,y) => ey.map(
			(ez,z) => condition(x,y,z) ? change(x,y,z) : m[x][y][z]
		)));
	}

	*iteratorU() {
		for (let x of [2,1,0])
			for (let y of [0,1,2])
				yield this.pieces[x][y][0].U;
	}

	*iteratorD() {
		for (let x of [0,1,2])
			for (let y of [0,1,2])
				yield this.pieces[x][y][2].D;
	}

	*iteratorL() {
		for (let z of [0,1,2])
			for (let x of [2,1,0])
				yield this.pieces[x][0][z].L;
	}

	*iteratorR() {
		for (let z of [0,1,2])
			for (let x of [0,1,2])
				yield this.pieces[x][2][z].R;
	}

	*iteratorF() {
		for (let z of [0,1,2])
			for (let y of [0,1,2])
				yield this.pieces[0][y][z].F;
	}

	*iteratorB() {
		for (let z of [0,1,2])
			for (let y of [2,1,0])
				yield this.pieces[0][y][z].B;
	}
}