const dom = {
	getById(id) {
		return document.getElementById(id);
	},

	getByClass(str) {
		return Array.from(document.getElementsByClassName(str));
	},

	append(idParent, child) {
		dom.getById(idParent).appendChild(child);
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

export default dom;