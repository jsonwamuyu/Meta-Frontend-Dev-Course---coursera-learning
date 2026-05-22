import { useState } from "react";

const ControlledUncontrolledComponents = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted successfully." + username);
    console.log("Username: " + username);
    setUsername("");
  };

  return (
    <div>
      <h4 className="text-4xl mb-4">Controlled component</h4>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <fieldset className="form-items">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <button
              disabled={!username}
              className="p-3 disabled:cursor-not-allowed outline-none bg-indigo-500 text-white"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ControlledUncontrolledComponents;

// import { useRef, useState } from "react";

// const ControlledUncontrolledComponents = () => {
//   const [username, setUsername] = useState("");
//   const uname = useRef(null)

//   // const handleControlled = (event) => {
//   //   event.preventDefault();
//   //   set
//   // };

//   const handleUncontrolled = (event) => {
//     event?.preventDefault();
//   };

//   return (
//     <section className="container">
//       <div>
//         <h4>Uncontrolled Components</h4>
//         <p>
//           We user React UseRef Hook to have access to the value of the form
//           input
//         </p>
//         <form action="" onSubmit={handleUncontrolled}>
//           <div>
//             <label htmlFor="username">Username</label>
//             <input type="text" id="username" placeholder="Username" onChange={()=> setUsername()}/>
//           </div>
//         </form>
//       </div>
//       <div>
//         <h4>Controlled Components</h4>
//         <p>
//           The input value is stored in a state and setState function to update
//           it
//         </p>

//         <form action="" onSubmit={handleControlled}></form>
//       </div>
//     </section>
//   );
// };

// export default ControlledUncontrolledComponents;
