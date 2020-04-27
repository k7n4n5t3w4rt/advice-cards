import { h, render } from "../web_modules/preact.js";
import { useState } from "../web_modules/preact/hooks.js";
import { createStyles } from "../web_modules/simplestyle-js.js";
import Counter from "./Counter.js";
import htm from "../web_modules/htm.js";
const html = htm.bind(h);

const [styles] = createStyles({
  imageContainer: {
    backgroundColor: "gold",
    height: "100%",
    width: "600vw",
    display: "grid",
    gridTemplate: "'a a a a a a'",
  },
  box: {
    height: "100%",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    scrollSnapAlign: "start",
    scrollSnapStop: "normal",
    fontFamily: "courier",
    fontSize: "1.2em",
    color: "#333",
  },
  adviceImage: {
    "@media (max-aspect-ratio: 29/50)": {
      width: "94%",
    },
    outline: "1px solid black",
    marginLeft: "auto",
    marginRight: "auto",
  },
  heading: {
    fontWeight: "normal",
    textAlign: "center",
    fontSize: "1.4em",
    padding: "0",
    margin: "0",
  },
  text: {
    marginTop: "32px",
    textAlign: "center",
    padding: "0",
  },
  instructions: {
    marginTop: "64px",
    textAlign: "center",
    fontSize: "1em",
    padding: "0",
  },
  sahotaLink: {
    textDecoration: "none",
    color: "#555",
  },
  pointerImage: {
    width: "30%",
  },
});

const App = props => {
  return html`
    <div className=${styles.imageContainer}>
      <div className="${styles.box}">
        <h1 className="${styles.heading}">
          “Advice Cards”
        </h1>
        <p className="${styles.text}">
          by ${""}<br />
          <a
            className="${styles.sahotaLink}"
            href="https://agilitrix.com/2016/04/improve-decision-making-advice-cards/"
          >
            Michael Sahota
          </a>
        </p>
        <p className="${styles.text}">
          Made for Michelle
        </p>
        <p className="${styles.instructions}">
          <img
            className="${styles.pointerImage}"
            src="./img/vector-hand-pointing-27.png"
            title="Scroll or swipe right"
          />
        </p>
      </div>
      <div className="${styles.box}">
        <img
          className="${styles.adviceImage}"
          src="./img/001_letmeknow.png"
          title="Let me know"
        />
      </div>
      <div className="${styles.box}">
        <img
          className="${styles.adviceImage}"
          src="./img/002_iadvise.png"
          title="I advise"
        />
      </div>
      <div className="${styles.box}">
        <img
          className="${styles.adviceImage}"
          src="./img/003_decidetogether.png"
          title="We decide together"
        />
      </div>
      <div className="${styles.box}">
        <img
          className="${styles.adviceImage}"
          src="./img/004_decidewithadvice.png"
          title="I decide with advice"
        />
      </div>
      <div className="${styles.box}">
        <img
          className="${styles.adviceImage}"
          src="./img/005_idecide.png"
          title="I decide"
        />
      </div>
    </div>
  `;
};

export default App;
