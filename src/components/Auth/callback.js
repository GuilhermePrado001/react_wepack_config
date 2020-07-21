import React from "react";
import { AuthConsumer } from "../../Context/UserContext";

export const Callback = () => (
    <AuthConsumer>
        {({ signinRedirectCallback }) => {
            signinRedirectCallback();
            return <span>loading</span>;
        }}
    </AuthConsumer>
);