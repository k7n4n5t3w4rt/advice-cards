import { h, hydrate } from "../web_modules/preact.js";
import App from "./App.js";
import htm from "../web_modules/htm.js";
import screenfull from "../web_modules/screenfull.js";
const html = htm.bind(h);

hydrate(
	html`
		<${App} />
	`,
	document.getElementById("main-container")
);

// Doesn't work on iPhone ~ https://caniuse.com/#feat=fullscreen
// Plus we only want fullscreen on touch devices
if (
	Modernizr.fullscreen &&
	Modernizr.hasEvent("touchend") &&
	screenfull.isEnabled
) {
	document.getElementById("main-container").addEventListener(
		"touchend",
		() => {
			screenfull.request();
		},
		{ once: true }
	);
}

// Fix for iOS not handling viewport height the same way as everyone else
if (
	typeof window !== "undefined" &&
	!!navigator.platform &&
	/iPad|iPhone|iPod/.test(navigator.platform)
) {
	// it's probably an iPhone
	window.onresize = function() {
		document.body.style.height = window.innerHeight + "px";
		document.body.parentNode.style.height = window.innerHeight + "px";
		document.getElementById("main-container").style.height =
			window.innerHeight + "px";
	};
	window.onresize(); // called to initially set the height.
}
