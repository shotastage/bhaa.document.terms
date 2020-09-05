import React from 'react';
import { createBrowserHistory } from 'history';

import {
  Router,
  Switch,
  Route, RouteProps
} from "react-router-dom";

// Import pages
import App from "./App";
import TermsPage from "./TermsPage";
import PrivPage from "./PrivPage";

const history = createBrowserHistory();


class RouterComponent extends React.Component<RouteProps, {}> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/priv" component={PrivPage} />
        </Switch>
      </Router>
    );
  }
}

export default RouterComponent;
