import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import store from "./app/store";


ReactDOM.createRoot(document.getElementById("root")!).render(
	// TODO: Strict mode renders App twice so two socket connections
	// <React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	// </React.StrictMode>
);
