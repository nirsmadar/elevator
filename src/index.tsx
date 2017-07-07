import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app";
declare const require;

require("./style.scss");

ReactDOM.render(
    <App />, document.getElementById("app")
);