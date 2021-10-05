import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'antd/dist/antd.dark.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LayoutSite from "./components/LayoutSite/LayoutSite";
import Page from "./pages/Page";
ReactDOM.render(
    <Router>
        <LayoutSite>
            <Page />
        </LayoutSite>
    </Router>
    ,
  document.getElementById('root')
);

