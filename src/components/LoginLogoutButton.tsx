import LoginButton from "./LoginButton";
import LogOutButton from "./LogoutButton";

const LoginLogoutButton = ({ isLoggedIn, handleLoginLogout }) => {
  return isLoggedIn ? (
    <LogOutButton onClick={handleLoginLogout} />
  ) : (
    <LoginButton />
  );
};

export default LoginLogoutButton;
