export default class RubikManager {
	constructor(rubik, rubikView) {
		this.colors = { U:"W", D:"Y", L:"O", R:"R", F:"G", B:"B" };
		this.rubik  = rubik;
		this.rubikView = rubikView;
	}
}