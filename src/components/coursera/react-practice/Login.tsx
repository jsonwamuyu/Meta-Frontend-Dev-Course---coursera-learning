import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    alert("Submitted");
    console.log(`Email: ${email} and Password: ${password}`);
  };
  return (
    <section className="max-w-96 my-8">
      <h3 className="text-4xl font-bold mb-8">Login</h3>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex gap-4 flex-col"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="emil"
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 border-[1px]  outline-none rounded-sm"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 outline-none rounded-sm border-[1px]"
          />
        </div>
        <div>
          <button type="submit" className="p-4">
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
