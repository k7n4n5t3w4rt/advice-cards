import { h, render } from '../web_modules/preact.js';
import { useState } from '../web_modules/preact/hooks.js';
import { css } from '../web_modules/emotion.js';
import Counter from './Counter.js';
import htm from '../web_modules/htm.js';
const html = htm.bind(h);

const imageContainer = css`
	background-color: gold;
	min-height: 100vh;
	min-width: 500vw;
`
const box = css`
	height: 100vh;
	width: 100vw;
	display: inline-block;
`
const adviceImage = css`
	height: 100%;
	width: 100%;
	object-fit: cover;
`
const App = props => {
	return html`
	<div className=${imageContainer}>
		<div className="${box}">
			<img className="${adviceImage}" src="/img/001_letmeknow.png" title="Let me know" />
		</div>
		<div class="${box}">
			<img className="${adviceImage}" src="/img/002_iadvise.png" title="I advise" />
		</div>
		<div class="${box}">
			<img className="${adviceImage}" src="/img/003_decidetogether.png" title="We decide together" />
		</div>
		<div class="${box}">
			<img className="${adviceImage}" src="/img/004_decidewithadvice.png" title="I decide with advice" />
		</div>
		<div class="${box}">
			<img className="${adviceImage}" src="/img/005_idecide.png" title="I decide" />
		</div>
	</div>
  `
}

export default App;