import React from "react";
import "./App.css";
import NavigationBar from "./layouts/NavigationAndFooter/NavigationBar";
import HomePage from "./layouts/HomePage/HopePage";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Footer from "./layouts/HomePage/components/Footer";
import SearchBooksPage from "./layouts/HomePage/SearchBookPage";
import BookCheckoutPage from "./layouts/BookCheckoutPage/BookCheckoutPage";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { LoginCallback, Security } from "@okta/okta-react";
import { oktaConfig } from "./config/OktaConfig";
import LoginWidget from "./Auth/LoginWidget";

const oktaAuth = new OktaAuth(oktaConfig);

function App() {
  const customAuthHandler = () => {
    history.push("/login");
  };

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={customAuthHandler}
      >
        <NavigationBar />
        <div className="flex-grow-1">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/search">
              <SearchBooksPage />
            </Route>
            <Route path="/checkout/:bookId">
              <BookCheckoutPage />
            </Route>
            <Route
              path="/login"
              render={() => <LoginWidget config={oktaConfig} />}
            />
            <Route path="/login/callback" component={LoginCallback} />
          </Switch>
        </div>
        <Footer />
      </Security>
    </div>
  );
}

export default App;
