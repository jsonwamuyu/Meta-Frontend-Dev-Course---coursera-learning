import { useState } from "react";
import { AuthContext } from "./coursera/react-practice/context/AuthContext";
import LoggedInUser from "./coursera/react-practice/LoggedInUser";

const Assets = () => {
  // const { user } = useContext(AuthContext);
  // console.log("User context" + user.username);
  const [user, setUser] = useState("Mike");

  return (
    <AuthContext.Provider value={user}>
      <div className="w-full">
        <div className="container">
          <h1 className="font-bold text-5xl">Available Assets</h1>
          <p>This is a list of all available assets in the system.</p>
          <p>PAssed in user value is: {user}</p>
          <LoggedInUser />
        </div>
      </div>
    </AuthContext.Provider>
  );
};

export default Assets;
