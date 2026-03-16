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

// import { useContext } from "react";
// import UserContext from "../context/UserContext";
import UserProfile from "./UserProfile";
import Component from "./coursera/react-practice/Component";
import Login from "./coursera/react-practice/Login";

const profile = "../src/assets/profile.png";

const Dashboard = () => {
  // const userName = useContext(UserContext);
  const userName = "JOHNSON";

  return (
    <section className="w-full text-sm py-4">
      <div className="container">
        <div>
          <p className="py-4">
            Welcome, <span className="font-bold">{userName}</span>
          </p>
        </div>
        <Component />
        <UserProfile username="Mike" role="Admin" profile_picture={profile} />
        <Login />
      </div>
    </section>
  );
};

export default Dashboard;
