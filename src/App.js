import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './Context/UserContext'
import { Routes } from './Routes/Routes'

const App = () => {

  return (

    <>
      <div className="container">
        <div className="main-app">
         
          <AuthProvider>
                    <BrowserRouter children={Routes} basename={"/"} />
            </AuthProvider>

        </div>
      </div>
    </>

  )
}

ReactDOM.render(<App />, document.getElementById("root"))