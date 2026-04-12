import { useState } from "react";
import { AuthContext } from "./coursera/react-practice/context/AuthContext";
import LoggedInUser from "./coursera/react-practice/LoggedInUser";

const Assets = () => {
  // const { user } = useContext(AuthContext);
  // console.log("User context" + user.username);
  const [user, setUser] = useState("Mike");

  const [client, setClient] = useState({
    name: "John Doe",
    email: "doejohn@gmail.com",
  });

  const updateEmail = () => {
    setClient((prevEmail) => {
      return { ...prevEmail, email: "johndoe34@gmail.com" };
    });
  };

  return (
    <AuthContext.Provider value={user}>
      <div className="w-full">
        <div className="container gap-16 flex flex-col">
          <div>
            <h3>Updating state object</h3>
            <p>We use the spread operator to update the state object.</p>
            <div>
              <h5>{client.name}</h5>
              <p className="pb-4">{client.email}</p>
              <button onClick={updateEmail}>Update client email</button>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-5xl">Available Assets</h1>
            <p>This is a list of all available assets in the system.</p>
            <p>PAssed in user value is: {user}</p>
          </div>

          <LoggedInUser />
        </div>
      </div>
    </AuthContext.Provider>
  );
};

export default Assets;
