export const IDENTITY_CONFIG = {
    authority: "https://localhost:5000", //(string): The URL of the OIDC provider.
    client_id: "react", //(string): Your client application's identifier as registered with the OIDC provider.
    redirect_uri: "http://localhost:8080", //The URI of your client application to receive a response from the OIDC provider.
    loadUserInfo: true, //(boolean, default: true): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
    response_type: "code", //(string, default: 'id_token'): The type of response desired from the OIDC provider.
    scope: "openid ApiOne", //(string, default: 'openid'): The scope being requested from the OIDC provider.
    grantType: "Code",
    responseMode: 'query',
    post_logout_redirect_uri : "http://localhost:8080"
};

export const METADATA_OIDC = {
    jwks_uri: "https://localhost:5000" + "/.well-known/openid-configuration/jwks",
    authorization_endpoint: "https://localhost:5000" + "/connect/authorize",
    token_endpoint: "https://localhost:5000" + "/connect/token",
    userinfo_endpoint: "https://localhost:5000" + "/connect/userinfo",
    end_session_endpoint: "https://localhost:5000" + "/connect/endsession",
    check_session_iframe: "https://localhost:5000" + "/connect/checksession",
    revocation_endpoint: "https://localhost:5000" + "/connect/revocation",
    introspection_endpoint: "https://localhost:5000" + "/connect/introspect"
};