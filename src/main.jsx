import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";
import { store } from "./ReduxPractice2/app/store.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
