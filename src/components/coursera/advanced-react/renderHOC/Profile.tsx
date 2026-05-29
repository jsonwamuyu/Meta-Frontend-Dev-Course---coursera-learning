import Avatar from "./Avatar";

const Card = ({ children }) => {
  return <div className="">{children}</div>;
};

const Profile = () => {
  const user = {
    name: "John Doe",
    role: "Senior Software engineer (Meta)",
  };
  return (
    <section className="flex flex-col gap-8">
      <h4>Profile Details</h4>
      <Avatar {...user} />
    </section>
  );
};

export default Profile;
