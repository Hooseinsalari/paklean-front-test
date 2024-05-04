import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

// date picker
import "react-datepicker/dist/react-datepicker.css";

// react cookie
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
