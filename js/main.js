import { h, hydrate } from "../web_modules/preact.js";
import App from "./App.js";
import htm from "../web_modules/htm.js";
import screenfull from "../web_modules/screenfull.js";
const html = htm.bind(h);

document.getElementById("main-container").addEventListener("mousedown", () => {
	screenfull.request();
});

hydrate(
	html`
		<${App} />
	`,
	document.getElementById("main-container")
);
