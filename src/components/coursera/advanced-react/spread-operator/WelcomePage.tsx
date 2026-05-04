const Button = ({ type, children, ...buttonProps }) => {
  const className = type === "primary" ? "primaryButton" : "secondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    <Button
      type="secondary"
      {...buttonProps}
      onClick={() => alert("Login button clicked")}
    >
      {children}
    </Button>
  );
};

const WelcomePage = () => {
  return (
    <div>
      <h4>Little Lemon</h4>
      <div>
        <Button type="primary" onClick={alert("Signed Up")}>
          Signup
        </Button>
        <LoginButton type="primary" onClick={() => alert("Logged in")}>
          Login
        </LoginButton>
      </div>
    </div>
  );
};

export default WelcomePage;
