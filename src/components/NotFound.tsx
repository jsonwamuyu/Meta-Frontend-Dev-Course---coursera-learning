import React from "react";

const NotFound = () => {
  return (
    <section className="container min-h-['50vh']">
      <div className="my-8 text-center">
        <h3 className="text-4xl font-semibold mb-2">404 Not Found</h3>
        <p>
          This page is not found. <a href="/">Go back home</a>
        </p>
      </div>
    </section>
  );
};

export default NotFound;
