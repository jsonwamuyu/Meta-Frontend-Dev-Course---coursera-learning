import { useEffect } from "react";

interface UserProps {
  username: string;
  gender?: "Male" | "Female" | "Other";
}

const User = (props: UserProps) => {
  return (
    <div>
      <h4>User Dashboard</h4>
      <p>Welcome, {props.username}</p>
    </div>
  );
};

const MetaFrontEnd = () => {
  useEffect(() => {
    console.log("MetaFrontEnd component loaded");
  }, []);

  return (
    <div>
      <h4> MetaFrontEnd</h4>
      <p>MetaFrontEnd component rendered</p>
      <User username="Mike Doe" />
    </div>
  );
};

export default MetaFrontEnd;
