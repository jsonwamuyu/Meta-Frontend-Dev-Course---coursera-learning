// import { createContext, useContext,useState } from "react";

import { createContext } from "react";

// const UserContext = createContext(undefined);

// export const UserProvider = ({ children }) => {
//   // Fetch a user and pass as a the value prop
//   const [user] = useState({
//     username: "John Doe",
//     email: "johndoe@gmail.com",
//     age: 34,
//   });
//   return <UserContext.Provider value={{user}}>
//   {children}</UserContext.Provider>;
// };

// export const useUser = () => useContext(UserContext);

const UserContext = createContext(undefined);

export default UserContext;
