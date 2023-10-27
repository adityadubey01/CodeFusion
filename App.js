import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello");

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(heading);
