import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-cmccovs2.us.auth0.com"
      clientId="Yq68gApSM1rSGBPHGDGSSnoxDy2aGVqS"
      redirectUri={`${window.location.origin}/timeline`}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
