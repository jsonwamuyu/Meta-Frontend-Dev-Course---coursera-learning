// import { useContext } from "react";
// import UserProfile from "./UserProfile";
// const profile = "../src/assets/profile.png";
// import UserContext from "../context/UserContext";

// const Dashboard = () => {
//   // const userName = "Johnson";
//   const userName = useContext(UserContext);
//   return (
//     <div className="w-full text-sm py-4">
//       <div className="container">
//         Welcome, <span className="font-bold">{userName}</span>
//       </div>
//       <UserProfile username="Mike" role="Admin" profile_picture={profile} />
//     </div>
//   );
// };

// export default Dashboard;

import { useContext } from "react";
import UserContext from "../context/UserContext"; // ✅ Missing line
import UserProfile from "./UserProfile";

const profile = "../src/assets/profile.png";

const Dashboard = () => {
  const userName = useContext(UserContext);

  return (
    <div className="w-full text-sm py-4">
      <div className="container">
        Welcome, <span className="font-bold">{userName}</span>
      </div>
      <UserProfile username="Mike" role="Admin" profile_picture={profile} />
    </div>
  );
};

export default Dashboard;
