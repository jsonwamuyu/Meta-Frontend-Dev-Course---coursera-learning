import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Assets from "./components/Assets";
import Dashboard from "./components/Dashboard";
import Banner from "./components/Banner";
import ReactLoop from "./components/coursera/ReactLoop";
import UserContext from "./context/UserContext";

function App() {
  const [userName, setUserName] = useState(null);
  // Fetch user data from API and update userName
  useEffect(() => {
    // fetch user from API - jsonplaceholder
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setUserName(data.name))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);
  return (
    <UserContext.Provider value={userName}>
      <Banner message="Welcome to the Learning Management Platform" />
      <Navbar />
      <Dashboard />
      <ReactLoop />
      <Assets />
    </UserContext.Provider>
  );
}

export default App;
