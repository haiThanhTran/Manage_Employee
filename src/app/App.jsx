import "../fake-db";
import "../styles/_app.scss";
import React from "react";
import { Provider } from "react-redux";
import { Router, useHistory } from "react-router-dom";
import EgretTheme from "./EgretLayout/EgretTheme/EgretTheme";
import AppContext from "./appContext";
import history from "history.js";

import "../styles/nprogress.css";
import { loadProgressBar } from "axios-progress-bar";

import routes from "./RootRoutes";
import {Store} from "./redux/Store";
import Auth from "./auth/Auth";
import EgretLayout from "./EgretLayout/EgretLayout";
import { toast } from "react-toastify";


// import UserService from "./services/UserService";
// import httpService from "./services/HttpService";

loadProgressBar();
toast.configure();


const App = () => {
  return (
    <AppContext.Provider value={{ routes }}>
      
        <Provider store={Store}>
          <EgretTheme>
            <Auth>
              <Router history={history}>
                <EgretLayout />
              </Router>
            </Auth>
          </EgretTheme>
        </Provider>
      
    </AppContext.Provider>
  );
};

export default App;
