import Index from "./app/routes/index";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import AppRouter from "./AppRouter";
import { AuthProvider } from "../src/app/utils/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Index />
      </AuthProvider>
    </>
  );
}

export default App;
