const ReactLoop = () => {
  const users = [
    { id: 1, name: "Jay", role: "admin", active: true },
    { id: 2, name: "Mike", role: "editor", active: false },
    { id: 3, name: "Brian", role: "viewer", active: true },
    { id: 4, name: "Peter", role: "viewer", active: true },
    { id: 5, name: "Pablo", role: "admin", active: false },
    { id: 6, name: "Rocky", role: "viewer", active: true },
  ];
  return (
    <div className="w-full my-8">
      <div className="container">
        <h1>React Map,Filter</h1>
        <div className="flex flex-row gap-2 justify-between items-center">
          <div>
            <h6 className="text-lg font-semibold mb-2">All Users</h6>
            {users.map((user) => (
              <div key={user.id} className="flex flex-row gap-1 items-center">
                <h6 className="text-lg ">
                  {user.name}
                  <span className="text-sm text-green-500">
                    {user.role === "admin" && "(admin)"}
                  </span>
                </h6>
              </div>
            ))}
          </div>
          <div>
            <h6>Active Users</h6>
            {users
              .filter((user) => user.active === true)
              .map((u) => (
                <div key={u.id}>
                  <h6>{u.name}</h6>
                  <p className="text-sm">
                    Role: <span className="font-bold">{u.role}</span>
                  </p>
                </div>
              ))}
          </div>
          <div>
            <h6 className="font-semibold text-xl mb-2">Inactive Users</h6>
            {users
              .filter((f) => f.active === false)
              .map((u) => (
                <div key={u.id}>
                  <h6>
                    {u.name} -{" "}
                    <span className="font-light italic">{u.role}</span>
                  </h6>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactLoop;
