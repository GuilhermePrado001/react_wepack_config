import React from "react";
import { AuthConsumer } from "../../Context/UserContext";

export const SilentRenew = () => (
    <AuthConsumer>
        {({ signinSilentCallback }) => {
            signinSilentCallback();
            return <span>loading</span>;
        }}
    </AuthConsumer>
);