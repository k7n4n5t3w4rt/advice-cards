import { h, render } from "../web_modules/preact.js";
import { useState } from "../web_modules/preact/hooks.js";
import { css } from "../web_modules/emotion.js";
import Counter from "./Counter.js";
import htm from "../web_modules/htm.js";
const html = htm.bind(h);

const imageContainer = css`
	background-color: gold;
	min-height: 100vh;
	min-width: 600vw;
	display: grid;
	grid-template: "a a a a a a";
`;
const box = css`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	scroll-margin: 10px;
	scroll-snap-align: start;
	scroll-snap-stop: normal;
`;
const adviceImage = css`
	height: 85%;
	width: 94%;
	object-fit: cover;
	object-position: 50% 0;
	outline: 1px solid black;
	margin-left: auto;
	margin-right: auto;
`;
const text = css`
	padding: 10px;
	font-family: sans-serif;
	text-align: center;
	font-size: 1.4em;
`;
const sahotaLink = css`
	text-decoration: none;
`;
const App = (props) => {
	return html`
		<div className=${imageContainer}>
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
			<div className="${box}">
				<p className="${text}">
					Made for Michelle.
				</p>
				<p className="${text}">
					"Advice Cards"<br />
					by<br />
					<a
						className="${sahotaLink}"
						href="https://agilitrix.com/2016/04/improve-decision-making-advice-cards/"
					>
						Michael Sahota
					</a>
				</p>
			</div>
		</div>
	`;
};

export default App;
