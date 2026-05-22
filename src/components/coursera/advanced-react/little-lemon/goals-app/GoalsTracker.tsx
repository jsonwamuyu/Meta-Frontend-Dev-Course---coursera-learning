import { useState } from "react";
import GoalForm from "./GoalForm";
import ListOfGoals from "./ListOfGoals";

const GoalsTracker = () => {
  const [allGoals, setAllGoals] = useState([]);

  function addGoal(goal) {
    setAllGoals([...allGoals, goal]);
  }
  return (
    <section className="my-16">
      <div>
        <h3 className="text-4xl font-bold py-4">Little Lemon Goals Tracker</h3>
        <p className="text-sm">Add and track your goals and achieve them</p>
      </div>
      <GoalForm addGoal={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </section>
  );
};

export default GoalsTracker;
