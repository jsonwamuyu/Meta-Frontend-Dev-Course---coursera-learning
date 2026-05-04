import { useEffect, useReducer, useRef, useState } from "react";

const initialState = {
  day: "Monday",
};
const reducer = (state, action) => {
  if (action.type === "Monday") {
    return { day: state.day === "Tuesday" };
  }
  if (action.type === "Tuesday") {
    return { day: state.day === "Wednesday" };
  }
  if (action.type === "Wednesday") {
    return { day: state.day === "Thursday" };
  }
  return state;
};

const UsePrevious = () => {
  const [day, setDay] = useState("Monday");
  // const [state, dispatch] = useReducer(reducer, initialState);
  const prevDay = usePreviousDay(day);

  const getNextDay = (e) => {
    e.preventDefault();
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Saturday");
    } else if (day === "Saturday") {
      setDay("Sunday");
    } else if (day === "Sunday") {
      setDay("Monday");
    }
  };

  return (
    <section>
      {/* <h3>Today is {state.day}</h3> */}
      <div className="flex gap-8">
        <h5>Today is: {day}</h5>
        {prevDay && <h5>Previous day was: {prevDay}</h5>}
      </div>
      <div className="flex gap-8">
        <button onClick={getNextDay}>Next Day</button>
        {/* <button onClick={() => dispatch({ type: "Monday" })}>Next Day</button> */}
      </div>
    </section>
  );
};

const usePreviousDay = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default UsePrevious;
