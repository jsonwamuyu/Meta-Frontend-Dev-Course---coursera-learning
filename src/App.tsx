import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Assets from "./components/Assets";
import Dashboard from "./components/Dashboard";
import Banner from "./components/Banner";
import UserContext from "./context/UserContext";
import About from "./components/About";
import Contact from "./components/Contact";
import SignUp from "./components/coursera/react-practice/SignUp";
import NotFound from "./components/NotFound";
import { AuthContext } from "./components/coursera/react-practice/context/AuthContext";
import AdvancedReact from "./components/coursera/advanced-react/AdvancedReact";
import LittleLemon from "./components/coursera/advanced-react/little-lemon/LittleLemon";

function App() {
  const [user, setUser] = useState({
    fullname: "John Doe",
    isAuthenticated: false,
  });

  // Fetch user data from API and update userName
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setUser(data.name))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <>
      <UserContext.Provider value={user}>
        <Banner message="Welcome to the Learning Management Platform" />
        <Navbar />
        <AuthContext.Provider value={{ user }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/little-lemon" element={<LittleLemon />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/advanced-react" element={<AdvancedReact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
