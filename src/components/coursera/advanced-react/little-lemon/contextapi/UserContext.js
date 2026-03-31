import { createContext, useContext } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  // Fetch a user and pass as a the value prop
  const [user] = useState({
    username: "John Doe",
    email: "johndoe@gmail.com",
    age: 34,
  });
  return <UserContext.Provider value={user}></UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
