import { UserManager, WebStorageStateStore, Log } from "../../../node_modules/oidc-client";
import { IDENTITY_CONFIG, METADATA_OIDC } from '../../Config/OidcConfig2';

export default class AuthService {
    UserManager;

    constructor() {

        this.UserManager = new UserManager({
            ...IDENTITY_CONFIG,
            userStore: new WebStorageStateStore({ store: window.sessionStorage }),
            metadata: {
                ...METADATA_OIDC
            },
            response_mode: "query"
        });

        // Logger
        Log.logger = console;
        Log.level = Log.DEBUG;

        this.UserManager.events.addUserLoaded((user) => {
            if (window.location.href.indexOf("signin-oidc") !== -1) {
                this.navigateToScreen();
            }
        });
        this.UserManager.events.addSilentRenewError((e) => {
            console.log("silent renew error", e.message);
        });

        this.UserManager.events.addAccessTokenExpired(() => {
            console.log("token expired");
            this.signinSilent();
        });
    }

    signinRedirectCallback = () => {
        console.log("MAYBE HERE")
        this.UserManager.signinRedirectCallback().then(() => {
            "";
        });
    };


    getUser = async () => {
        const user = await this.UserManager.getUser();
        if (!user) {
            return await this.UserManager.signinRedirectCallback();
        }
        return user;
    };

    parseJwt = (token) => {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace("-", "+").replace("_", "/");
        return JSON.parse(window.atob(base64));
    };


    signinRedirect = () => {
        localStorage.setItem("redirectUri", window.location.pathname);
        console.log("signinRedirect AQUI")
        this.UserManager.signinRedirect({});
    };


    navigateToScreen = () => {
        window.location.replace("/en/dashboard");
    };


    isAuthenticated = () => {
        const oidcStorage = JSON.parse(sessionStorage.getItem(`oidc.user:${process.env.REACT_APP_AUTH_URL}:${process.env.REACT_APP_IDENTITY_CLIENT_ID}`))

        return (!!oidcStorage && !!oidcStorage.access_token)
    };

    signinSilent = () => {
        console.log("NOT HERE")
        this.UserManager.signinSilent()
            .then((user) => {
                console.log("signed in", user);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    signinSilentCallback = () => {
        console.log("NOT HERE")
        this.UserManager.signinSilentCallback();
    };

    createSigninRequest = () => {
        console.log("NOT HERE")
        return this.UserManager.createSigninRequest();
    };

    logout = () => {
        console.log("NOT HERE")
        this.UserManager.signoutRedirect({
            id_token_hint: localStorage.getItem("id_token")
        });
        this.UserManager.clearStaleState();
    };

    signoutRedirectCallback = () => {
        console.log("NOT HERE")
        this.UserManager.signoutRedirectCallback().then(() => {
            localStorage.clear();
            window.location.replace("http://localhost:8080/");
        });
        this.UserManager.clearStaleState();
    };
}