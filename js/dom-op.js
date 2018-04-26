const dom = {
	getElementsByClass(str) {
		return Array.from(document.getElementsByClassName(str));
	},

	createTagId(tag, id, children = []) {
		return dom._createTag(tag, children, id);
	},

	createTagClass(tag, classList, children = []) {
		return dom._createTag(tag, children, "", classList);
	},

	createTagIdClass(tag, id, classList, children = []) {
		return dom._createTag(tag, children, id, classList);
	},

	createTagAttr(tag, attributes, children = []) {
		return dom._createTag(tag, children, "", "", attributes);
	},

	_createTag(tag, children = [], id="", classList="", attributes = {}, callbacks = {}) {
		let elem = document.createElement(tag);

		elem.id = id;
		elem.classList = classList;
		Object.keys(attributes).forEach(attr => elem.setAttribute(attr, attributes[attr]));
		Object.keys(callbacks).forEach(cb => elem.addEventListener(cb, callbacks[cb]));
		children.forEach(child => elem.appendChild(child));
		return elem;
	}
}