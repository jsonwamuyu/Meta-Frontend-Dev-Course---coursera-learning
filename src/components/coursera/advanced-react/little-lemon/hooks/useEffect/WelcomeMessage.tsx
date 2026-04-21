import { useEffect, useState } from "react";

const WelcomeMessage = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.title = toggle
      ? "Welcome to Little Lemon"
      : "Using useEffect hook";
  }, [toggle]);

  return (
    <div className="">
      <h5>UseEffect</h5>
      <button type="button" onClick={handleToggle}>
        Toggle message
      </button>
      {toggle && <p>Welcome to Little Lemon</p>}
    </div>
  );
};

export default WelcomeMessage;
