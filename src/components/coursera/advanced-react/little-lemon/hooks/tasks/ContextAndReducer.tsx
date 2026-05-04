import React, { useReducer } from "react";
import TasksList from "./TasksList";

const initialTasks = [{ id: 1, text: "Call Sonnie", done: false }];

const taskReducer = (state, action) => {
  return state;
};

const ContextAndReducer = () => {
  const [task, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <section>
      <div>
        <h2 className="">Scaling Up with Reducer and Context</h2>
        <p className="lg:max-w-5xl">
          Reducers let you consolidate a component’s state update logic. Context
          lets you pass information deep down to other components. You can
          combine reducers and context together to manage state of a complex
          screen.
        </p>
      </div>
      <div>
        <TasksList tasks={initialTasks} />
      </div>
    </section>
  );
};

export default ContextAndReducer;
