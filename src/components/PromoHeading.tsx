import React from "react";

const PromoHeading = ({ discount, message }) => {
  return (
    <p className="text-sm">
      <span className="font-bold mr-1">{discount}</span>.{message}
    </p>
  );
};

export default PromoHeading;
