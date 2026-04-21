// import { useEffect, useState } from "react";

// const FetchUsers = () => {
//   const URL = "https://jsonplaceholder.typicode.com/users";
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch(URL)
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   }, []);
//   console.log(users);

//   return (
//     <div>
//       <h4>Fetch Users</h4>
//       <p>Use https://jsonplaceholder.typicode.com/users</p>

//       <div>
//         {users.length > 0 ? (
//           users.map((user) => {
//             return (
//               <div key={user.id}>
//                 <h5>{user.name}({user.username})</h5>
//                 <p>{user.email}</p>
//                 {/* <p>{user.address}</p> */}
//               </div>
//             );
//           })
//         ) : (
//           <h6>No user found</h6>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FetchUsers;

import { useState, useEffect } from "react";

function FetchUsers() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(user);

  return (
    <section>
      <h1>Customer data</h1>
      {/* <h2>{user.results[0].name.first} </h2> */}
      {/* <img alt="" src={user.results[0].picture.large} /> */}
      {/* <h2>Name: {user.name}<h2>
      <img src={user.img} alt={user.name}/> */}
    </section>
  );
}

export default FetchUsers;
