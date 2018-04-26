import RubikView from "../RubikView.js";
import RubikViewHtmlCssBuilder from "./RubikViewHtmlCssBuilder.js";
import RubikViewHtmlCssUpdater from "./RubikViewHtmlCssUpdater.js";

export default class RubikViewHtmlCss extends RubikView {
	constructor(rubik) {
		super(rubik);
		this.builder = new RubikViewHtmlCssBuilder();
		this.updater = new RubikViewHtmlCssUpdater(rubik);
	}

	build() {
		this.builder.build();
	}

	update() {
		this.updater.update();
	}
}