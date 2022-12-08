import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./styles/global.scss";

const app = ReactDOM.createRoot(document.getElementById("root") as Element);

app.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
