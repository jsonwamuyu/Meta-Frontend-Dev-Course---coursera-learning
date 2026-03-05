import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Assets from "./components/Assets";
import Dashboard from "./components/Dashboard";
import Banner from "./components/Banner";
// import ReactLoop from "./components/coursera/ReactLoop";
import UserContext from "./context/UserContext";
// import Counter from "./components/coursera/Counter";
// import MealList from "../src/components/MealList";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  const [userName, setUserName] = useState(null);

  // Fetch user data from API and update userName
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setUserName(data.name))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <UserContext.Provider value={userName}>
      <Banner message="Welcome to the Learning Management Platform" />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
