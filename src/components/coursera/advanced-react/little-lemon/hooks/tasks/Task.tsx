const Task = ({ text, done }) => {
  return (
    <div>
      <h5>{text}</h5>
      {done && <p className="text-green-500">DONE</p>}
    </div>
  );
};

export default Task;
