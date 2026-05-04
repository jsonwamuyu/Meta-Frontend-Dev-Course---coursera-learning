import React from "react";

const Button = ({ type, children, ...btnProps }) => {
  const className = type === "primary" ? "btn-primary" : "btn-secondary";
  return (
    <button className={className} {...btnProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...btnProps }) => {
  return (
    <Button type="primary" {...btnProps}>
      {children}
    </Button>
  );
};

const SpreadAtrributes = () => {
  return (
    <div>
      <h5>Spread Attribute</h5>
      <div>
        <Button type="secondary">Signup Today</Button>
        <LoginButton>Login Today</LoginButton>
      </div>
    </div>
  );
};

export default SpreadAtrributes;
