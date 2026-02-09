const Dashboard = ({ username }: { username: string }) => {
  return (
    <div className="w-full text-sm py-4">
      <div className="container ">
        Welcome, <span className="font-bold">{username}</span>
      </div>
    </div>
  );
};

export default Dashboard;
