import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'antd/dist/antd.dark.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LayoutSite from "./components/LayoutSite/LayoutSite";
import Page from "./pages/Page";
import UserProvider from "./context/UserContext";
ReactDOM.render(
    <UserProvider>
        <Router>
            <LayoutSite>
                <Page />
            </LayoutSite>
        </Router>
    </UserProvider>
    ,
  document.getElementById('root')
);

