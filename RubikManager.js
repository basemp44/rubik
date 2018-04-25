class RubikManager {
	constructor() {
		this.colors = { U:"W", D:"Y", L:"O", R:"R", F:"G", B:"B" };
		this.rubik  = new Rubik(this.colors); 
	}
}