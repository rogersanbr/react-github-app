import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import AppLayout from "./shared/template/Layout";
import AppRouter from "./core/routes/Router";

function App() {
  return (
    <AppLayout logo={logo}>
      <AppRouter />
    </AppLayout>
  );
}

export default App;
