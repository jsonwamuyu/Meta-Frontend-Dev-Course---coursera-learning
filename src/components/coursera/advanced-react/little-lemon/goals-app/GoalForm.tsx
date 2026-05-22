import { useState } from "react";

const inputStyles = "border border-gray-300 rounded p-2 ";

const GoalForm = (props) => {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addGoal(formData);
    // alert("form Submitted");
    setFormData({ goal: "", by: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 my-16 w-full">
      <input
        type="text"
        name="goal"
        id="goal"
        value={formData.goal}
        placeholder="Your goal"
        className={inputStyles}
        onChange={handleInputChange}
      />
      <input
        type="text"
        value={formData.by}
        id="by"
        name="by"
        placeholder="Finish by..."
        className={inputStyles}
        onChange={handleInputChange}
      />
      <div>
        <button type="submit">Submit Goal</button>
      </div>
    </form>
  );
};

export default GoalForm;
