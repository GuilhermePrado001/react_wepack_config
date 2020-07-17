import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './pages/Header/NavBar';
import Home from './pages/Home/index';
import Report from './pages/Reports/index';
import Client from './pages/Clients/index';
import Schedule from './pages/Schedule/index';
import Config from './pages/SettingsPage/index';
import SettingsProvider from "./Context/SettingsContext";


const App = () => {

  return (

    <>
      <div className="container">
        <div className="main-app">
          <SettingsProvider>
            <BrowserRouter>

                <NavBar />
                <Route exact path="/" component={Home}></Route>
                <Route path="/schedule" component={Schedule}></Route>
                <Route path="/clients" component={Client}></Route>
                <Route path="/config" component={Config}></Route>
                <Route path="/reports" component={Report}></Route>
  
            </BrowserRouter>

          </SettingsProvider>
        </div>
      </div>
    </>

  )
}

ReactDOM.render(<App />, document.getElementById("root"))