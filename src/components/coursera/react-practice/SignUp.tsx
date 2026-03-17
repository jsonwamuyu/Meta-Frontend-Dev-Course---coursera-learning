import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="container">
      <div className="w-full md:max-w-md">
        <h2 className="font-semibold text-3xl my-4">Create account</h2>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col ">
            <label htmlFor="fullname">Fullname</label>
            <input
              className="p-2 outline-none border-[1px] border-white/50 rounded-sm"
              type="text"
              id="fullname"
              {...register("fullname", {
                required: "Full name is required.",
                minLength: { value: 4, message: "Fullname too short." },
                maxLength: {
                  value: 32,
                  message: "Fullname 32 allowed characters.",
                },
              })}
            />
            {errors.fullname && (
              <p className="text-sm text-red-300">{errors.fullname.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email Address</label>
            <input
              className="p-2 outline-none border-white/50 border-[1px] rounded-sm"
              type="email"
              id="email"
              {...register("email", {
                required: "Email address is required.",
                minLength: { value: 6, message: "Invalid email length" },
              })}
            />
            {errors.email && (
              <p className="text-red-300 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="p-2 border-white/50 border-[1px] outline-none rounded-sm"
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required.",
                minLength: { value: 8, message: "Min 8 characters allowed." },
                maxLength: { value: 20, message: "Max 20 characters allowed." },
              })}
            />
            {errors.password && (
              <p className="text-red-300">{errors.password.message}</p>
            )}
          </div>
          <button>Create account</button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
