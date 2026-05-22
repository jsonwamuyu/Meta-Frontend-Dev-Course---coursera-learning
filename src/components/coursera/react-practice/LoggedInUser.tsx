import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const LoggedInUser = () => {
  const user = useContext(AuthContext);
  console.log("User type: " + typeof user + " Value is" + user);
  return (
    <div>
      <h4>Auth context testing</h4>
      <p>Hello logged in user: {user}</p>
    </div>
  );
};

export default LoggedInUser;
