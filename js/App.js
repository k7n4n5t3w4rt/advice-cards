import { h, render } from "../web_modules/preact.js";
import { useState } from "../web_modules/preact/hooks.js";
import { css } from "../web_modules/emotion.js";
import Counter from "./Counter.js";
import htm from "../web_modules/htm.js";
const html = htm.bind(h);

const marginTopValue = 5;

const imageContainer = css`
	background-color: gold;
	height: 100%;
	width: 600vw;
	display: grid;
	grid-template: "a a a a a a";
`;
const box = css`
	height: 100%;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	scroll-snap-align: start;
	scroll-snap-stop: normal;
	font-family: courier;
	font-size: 1.2em;
	color: #333;
`;
const adviceImage = css`
	@media (max-aspect-ratio: 29/50) {
		width: 94%;
	}
	outline: 1px solid black;
	margin-left: auto;
	margin-right: auto;
`;
const heading = css`
	font-weight: normal;
	text-align: center;
	font-size: 1.4em;
	padding: 0;
	margin: 0;
`;
const text = css`
	margin-top: ${marginTopValue * 4}px;
	text-align: center;
	padding: 0;
`;
const instructions = css`
	margin-top: ${marginTopValue * 8}px;
	text-align: center;
	font-size: 1em;
	padding: 0;
`;
const sahotaLink = css`
	text-decoration: none;
	color: #555;
`;
const pointerImage = css`
	width: 30%;
`;
const App = (props) => {
	return html`
		<div className=${imageContainer}>
			<div className="${box}">
				<h1 className="${heading}">
					“Advice Cards”
				</h1>
				<p className="${text}">
					by ${""}<br />
					<a
						className="${sahotaLink}"
						href="https://agilitrix.com/2016/04/improve-decision-making-advice-cards/"
					>
						Michael Sahota
					</a>
				</p>
				<p className="${text}">
					Made for Michelle
				</p>
				<p className="${instructions}">
					<img
						className="${pointerImage}"
						src="./img/vector-hand-pointing-27.png"
						title="Scroll or swipe right"
					/>
				</p>
			</div>
			<div className="${box}">
				<img
					className="${adviceImage}"
					src="./img/001_letmeknow.png"
					title="Let me know"
				/>
			</div>
			<div className="${box}">
				<img
					className="${adviceImage}"
					src="./img/002_iadvise.png"
					title="I advise"
				/>
			</div>
			<div className="${box}">
				<img
					className="${adviceImage}"
					src="./img/003_decidetogether.png"
					title="We decide together"
				/>
			</div>
			<div className="${box}">
				<img
					className="${adviceImage}"
					src="./img/004_decidewithadvice.png"
					title="I decide with advice"
				/>
			</div>
			<div className="${box}">
				<img
					className="${adviceImage}"
					src="./img/005_idecide.png"
					title="I decide"
				/>
			</div>
		</div>
	`;
};

export default App;
