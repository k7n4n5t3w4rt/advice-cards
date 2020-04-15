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
`;
const box = css`
	height: 100vh;
	width: 100vw;
	display: inline-block;
`;
const text = css`
	padding: 10px;
	font-family: sans-serif;
	text-align: center;
	font-size: 2em;
`;
const adviceImage = css`
	height: 100%;
	width: 100%;
	object-fit: cover;
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
					"Advice Cards" are made by
					<a
						href="https://agilitrix.com/2016/04/improve-decision-making-advice-cards/"
						>Michael Sahota</a
					>
				</p>
			</div>
		</div>
	`;
};

export default App;
