const OidcConfig  = {
    authority: "https://localhost:5000",
    client_id: "react",
    redirect_uri: `http://localhost:8080`,
    response_type: "code",
    scope: "openid ApiOne",
    loadUserInfo: true
};

export default OidcConfig;