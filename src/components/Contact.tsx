import { useState, useEffect } from "react";

const Contact = () => {
  //MOUNTING - when the component first render

  return (
    <section className="w-full text-sm py-4">
      <div className="container">
        <h1>Contact Us</h1>
        <p className="text-lg">
          For inquiries, please email us at{" "}
          <a
            href="mailto:info@company.com"
            className="text-blue-500 hover:underline"
          >
            info@company.com
          </a>
        </p>
        <div className="my-24">
          <h5>React useEffect hook</h5>
          <p>On component MOUNTING or UPDATING or UNMOUNTING</p>
          <Counter />
        </div>
      </div>
    </section>
  );
};

export default Contact;

function Counter() {
  const [counter, setCounter] = useState(0);

  // Runs every time counter state changes
  useEffect(() => {
    console.log(`Counter: ${counter}`);

    // Runs when component unmount
    return () => {
      console.log("Component unmounted");
    };
  }, [counter]);

  // Runs once when the component get mounted
  useEffect(() => {
    console.log("Runs ONCE when the component MOUNT");
  }, []);

  // No dependency list - runs every time the component re-renders for whichever reason.
  // useEffect(() => {
  //   console.log("ALWAYS RUNNING");
  // });

  return (
    <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
      {counter}
    </button>
  );
}
