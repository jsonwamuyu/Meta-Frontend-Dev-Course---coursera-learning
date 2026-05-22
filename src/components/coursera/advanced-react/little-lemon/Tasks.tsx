const users = [
  { id: 1, name: "John", age: 17 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Mike", age: 30 },
];

const Tasks = () => {
  const adultUsers = users.filter((user) => user.age > 18);
  return (
    <div>
      {adultUsers.length === 0 ? (
        <p>No user found</p>
      ) : (
        <ul>
          {adultUsers.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;

// const Tasks = () => {
//   // Filter user with age > 18
//   // map "john(25)"
//   const filteredUsers = users
//     .filter((user) => user.age > 18)
//     .map((user) => <p key={user.id}>{`${user.name}(${user.age})`}</p>);
//   return <div>{filteredUsers}</div>;
// };

// export default Tasks;
