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

// axios.interceptors.response.use(
//   res => {
//     // console.log(res);
//     return res;
//   },
//   err => {
//     if (err.response.status === 401) {
//       // debugger;
//       toast.error("Phiên làm việc đã hết hạn");
//       // let history = useHistory();
//       // return (<Redirect to={ConstantList.ROOT_PATH + "session/signin"} />)
//       // console.log(Router);
//       // history.push(`/session/signin`);
//       window.location = 'session/signin';
//     }
//     if (err.response.status === 404) {
//       debugger;
//       toast.error("Hàm không tồn tại");
//     }
//     throw err;
//   }
// );
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAURRZzDHfOYu5YnDt2l2SyHo9d9VlWtuQ",
  authDomain: "tranthanhhaimanageemployee.firebaseapp.com",
  projectId: "tranthanhhaimanageemployee",
  storageBucket: "tranthanhhaimanageemployee.firebasestorage.app",
  messagingSenderId: "199284464512",
  appId: "1:199284464512:web:79f335c396a3bfc9a13f65",
  measurementId: "G-XPGWSGVZQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
