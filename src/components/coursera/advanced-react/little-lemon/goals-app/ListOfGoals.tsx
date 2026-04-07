const ListOfGoals = (props) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Your Goals</h2>
      {props.allGoals.length === 0 ? (
        <p>No goals added yet</p>
      ) : (
        <ul>
          {props.allGoals.map((goal) => (
            <li key={goal.id}>
              {goal.goal} - {goal.by}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ListOfGoals;
