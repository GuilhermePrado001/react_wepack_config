import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Callback } from "../Components/Auth/callback";
import { Logout } from "../components/Auth/logout";
import { LogoutCallback } from "../components/Auth/logoutCallback";
import { PrivateRoute } from "./privateRoute";
import { SilentRenew } from "../components/Auth/silentRenew";
import Home from '../Pages/Home/index';
import Report from '../Pages/Reports/index';
import Client from '../Pages/Clients/index';
import Schedule from '../Pages/Schedule/index';
import Config from '../Pages/SettingsPage/index';
import NavBar from '../Pages/Header/NavBar';
import { SettingContext } from "../Context/SettingsContext";

export const Routes = (
    <>
        <NavBar />
        <Switch>
       
            <Route exact={true} path="/signin-oidc" component={Callback} />
            <Route exact={true} path="/logout" component={Logout} />
            <Route exact={true} path="/logout/callback" component={LogoutCallback} />
            <Route exact={true} path="/silentrenew" component={SilentRenew} />

            <PrivateRoute exact={true} path="/reports" component={Report} />
            <PrivateRoute exact={true} path="/clients" component={Client} />
            <PrivateRoute exact={true} path="/schedule" component={Schedule} />
            <PrivateRoute exact={true} path="/config" component={Config} />

            <Route path="/" component={Home} />
        </Switch>
</>
);