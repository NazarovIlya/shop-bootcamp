export const oktaConfig = {
  clientId: `${process.env.REACT_APPclientId}.okta.com/oauth2/default`,
  redirectUrl: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true
}