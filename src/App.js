import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";
import HeaderComponent from './components/Header/HeaderComponent'
import BodyComponent from "./components/Body/BodyComponent";

const App = () => (
  <>
    <div className="container">
      <div className="main-app">
        <BrowserRouter>
          <HeaderComponent />
          <BodyComponent />
        </BrowserRouter>
      </div>
    </div>
  </>
)

ReactDOM.render(<App />, document.getElementById("root"))