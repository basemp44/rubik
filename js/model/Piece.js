export default class Piece {
	constructor(colors) {
		this.U = colors.U;
		this.D = colors.D;
		this.L = colors.L;
		this.R = colors.R;
		this.F = colors.F;
		this.B = colors.B;
	}

	rotateFB(clockwise) {
		if (clockwise)
			[this.U, this.R, this.D, this.L] = [this.L, this.U, this.R, this.D];
		else
			[this.U, this.R, this.D, this.L] = [this.R, this.D, this.L, this.U];
		return this;
	}

	rotateLR(clockwise) {
		if (clockwise)
			[this.U, this.B, this.D, this.F] = [this.F, this.U, this.B, this.D];
		else
			[this.U, this.B, this.D, this.F] = [this.B, this.D, this.F, this.U];
		return this;
	}

	rotateUD(clockwise) {
		if (clockwise)
			[this.F, this.L, this.B, this.R] = [this.R, this.F, this.L, this.B];
		else
			[this.F, this.L, this.B, this.R] = [this.L, this.B, this.R, this.F];
		return this;
	}
}