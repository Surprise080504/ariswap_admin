import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import App from "./App";
import store from './store';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/light-bootstrap-dashboard-pro-react.scss?v=2.0.0";
import "assets/css/demo.css";
import 'assets/css/style.css';

import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/dist/sweetalert2.min.css';

toast.configure({
  position: toast.POSITION.TOP_RIGHT,
  pauseOnHover: true,
  newestOnTop: true,
  autoClose: 3000
});

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
    <BrowserRouter basename={'/admin'}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);