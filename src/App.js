import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './pages/Header/NavBar';
import Home from './pages/Home/index';
import Report from './pages/Reports/index';
import Client from './pages/Clients/index';
import Schedule from './pages/Schedule/index';
import Config from './pages/SettingsPage/index';
import { PromotionContext } from "./Context/PromotionContext";
import { StoreContext } from "./Context/StoreContext";

const App = () => {

  const [storeCheck, setStoreCheck] = useState(false);
  const providerStoreValue = useMemo(() => ({ storeCheck, setStoreCheck }), [storeValue, setStoreValue]);

  const [promotionCheck, setPromotionCheck] = useState(false);
  const providerPromotionValue = useMemo(() => ({ promotionCheck, setPromotionCheck }), [promotionValue, setPromotionValue]);

  return (
    <>
      <div className="container">
        <div className="main-app">
          <BrowserRouter>
            <NavBar />
            <StoreContext.Provider value={providerStoreValue}>
              <PromotionContext.Provider value={providerPromotionValue}>
                <Route exact path="/" component={Config}></Route>
                <Route path="/schedule" component={Schedule}></Route>
              </PromotionContext.Provider>
            </StoreContext.Provider>
            <Route path="/clients" component={Client}></Route>
            <Route path="/config" component={Config}></Route>
            <Route path="/reports" component={Report}></Route>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))