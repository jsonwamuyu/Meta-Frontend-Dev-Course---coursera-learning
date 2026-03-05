import React from "react";

const Contact = () => {
  return (
    <section className="w-full text-sm py-4">
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">
          For inquiries, please email us at{" "}
          <a
            href="mailto:info@company.com"
            className="text-blue-500 hover:underline"
          >
            info@company.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
