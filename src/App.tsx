// import { useState, use } from "react";/

import "./App.css";
import Navbar from "./components/Navbar";
import Assets from "./components/Assets";
import Dashboard from "./components/Dashboard";
import Banner from "./components/Banner";
import ReactLoop from "./components/coursera/ReactLoop";
import Media from "./components/Media";
import About from "./components/About";
import Promo from "./components/Promo";

function App() {
  return (
    <>
      <Promo />
      <Banner message="Welcome to the Learning Management Platform" />
      <Navbar />
      <Dashboard username="Johnson" />
      <Media />
      <ReactLoop />
      <Assets />
      <About />
    </>
  );
}

export default App;
