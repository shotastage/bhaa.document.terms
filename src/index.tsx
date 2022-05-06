import React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterComponent from "./Router";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Suspense fallback={<></>}>
      <RouterComponent />
    </Suspense>
  </React.StrictMode>);

reportWebVitals();
