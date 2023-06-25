import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import { cat, setCat } from "./store.js";
import { AppState } from "./AppState.js";

render(
  <AppState.Provider value={{ cat, setCat }}>
    <App />
  </AppState.Provider>,
  document.getElementById("app")
);
