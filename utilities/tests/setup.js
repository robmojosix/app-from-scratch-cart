import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import chaiEnzyme from "chai-enzyme";
import sinonChai from "sinon-chai";
import chai from "chai";

chai.use(chaiEnzyme());
chai.use(sinonChai);

// Stubs for client
// ---
global.window = global.window ? global.window : {};

import { JSDOM } from "jsdom";
const { window } = new JSDOM("<!doctype html><html><body id=\"mock-dom\"></body></html>");
global.document = window.document;
global.window = window;
global.navigator = {
	userAgent: "node.js",
};

Object.keys(document.defaultView).forEach((property) => {
	if (typeof global[property] === "undefined") {
		global[property] = document.defaultView[property];
	}
});
