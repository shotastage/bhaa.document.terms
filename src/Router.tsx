import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route, RouteProps
} from "react-router-dom";

// Import pages
import App from "./App";
import TermsPage from "./TermsPage";
import PrivPage from "./PrivPage";



class RouterComponent extends React.Component<RouteProps, {}> {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/terms" element={<TermsPage/>} />
          <Route path="/priv" element={<PrivPage/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default RouterComponent;
