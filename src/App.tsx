// import { useState, use } from "react";/

import "./App.css";
import Navbar from "./components/Navbar";
import Assets from "./components/Assets";
import Dashboard from "./components/Dashboard";
import Banner from "./components/Banner";
import ReactLoop from "./components/coursera/ReactLoop";

function App() {
  return (
    <>
      <Banner message="Welcome to the Learning Management Platform" />
      <Navbar />
      <Dashboard username="Johnson" />
      <ReactLoop />
      <Assets />
    </>
  );
}

export default App;
