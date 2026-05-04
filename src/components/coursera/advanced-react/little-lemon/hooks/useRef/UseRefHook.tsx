import { useRef } from "react";

const UseRefHook = () => {
  const usernameRef = useRef(null);

  const handleFocusInput = () => {
    usernameRef.current.focus();
  };

  return (
    <section>
      <div>
        <h3>UseRef Hook</h3>
        <p>Using useRef hook to access underlying DOM</p>
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" ref={usernameRef} />
      </div>
      <button onClick={handleFocusInput}>Focus Input</button>
    </section>
  );
};

export default UseRefHook;
