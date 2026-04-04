import { useFormik } from "formik";

const SignUpForm = () => {
  // Pass the initial
  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className="my-16 flex gap-8 flex-col">
      <div>
        <h3 className="text-4xl font-bold">Formik Form</h3>
        <p className="text-sm">Practicing on using Formik library</p>
      </div>
      <form
        action=""
        onSubmit={formik.handleSubmit}
        className="w-full md:max-w-lg"
      >
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            placeholder="First name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="firstname"
            name="lastname"
            onChange={formik.handleChange}
            value={formik.values.lastname}
            placeholder="Last name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
          />
        </div>
        <button type="submit">Formik form</button>
      </form>
    </section>
  );
};

export default SignUpForm;
