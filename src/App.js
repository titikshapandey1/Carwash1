import Index from "./app/routes/index";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import AppRouter from "./AppRouter";
// import { TokenProvider } from "../src/app/utils/TokenContext";
import {AuthProvider } from "./app/context/AuthContext";
import { SupervisorProvider } from "./app/context/SupervisorContext";

function App() {
  return (
    <>
      <SupervisorProvider>
        <AuthProvider>
          {/* <TokenProvider> */}
            <Index />
          {/* </TokenProvider> */}
        </AuthProvider>
      </SupervisorProvider>
    </>
  );
}

export default App;
