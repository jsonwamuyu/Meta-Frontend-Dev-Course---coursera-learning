import { useState } from "react";

const Component = () => {
  const show = false;

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <section className="my-8">
      <div>
        <h4>Props and Conditional Rendering</h4>
        <p>Passing props down to child component</p>
      </div>
      {show && <AnotherComponent fname="Rose" />}

      {loggedIn ? (
        <AnotherComponent fname="Mike" />
      ) : (
        <button onClick={handleLogin}> Login </button>
      )}
    </section>
  );
};

const AnotherComponent = (props: { fname: string }) => {
  return (
    <section>
      <h4>Hello {props.fname}</h4>
    </section>
  );
};
export default Component;
