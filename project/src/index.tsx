import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import browserHistory from "./browser-history";
import App from "./components/app/app";
import HistoryRouter from "./components/history-route";
import { store } from "./store";
import { checkAuthorization } from "./store/api-actions";

store.dispatch(checkAuthorization());

const env = process.env.NODE_ENV;
const basename = env === "development" ? "" : "/six-cities-html-academy";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter basename={basename} history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
