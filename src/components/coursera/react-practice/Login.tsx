import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Submitted");
    console.log(`Email: ${data.email} and Password: ${data.password}`);
  };
  return (
    <section className="max-w-96 my-8">
      <h3 className="text-4xl font-bold mb-8">Login</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        className="flex gap-4 flex-col"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              minLength: { value: 8, message: "Invalid email length" },
              maxLength: { value: 32, message: "Email is too long" },
              required: "Email is required",
            })}
            type="email"
            name="email"
            id="emil"
            className="p-4 border-[1px]  outline-none rounded-sm"
          />
          {errors.email && (
            <p className="text-red-300 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            {...register("password", {
              minLength: {
                value: 8,
                message: "Password must be 8 characters long.",
              },
              maxLength: { value: 16, message: "16 characters long allowed." },
              required: "Password is required",
            })}
            type="password"
            name="password"
            id="password"
            className="p-4 outline-none rounded-sm border-[1px]"
          />
          {errors.password && (
            <p className="text-red-300 text-sm">{errors.password.message}</p>
          )}
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
