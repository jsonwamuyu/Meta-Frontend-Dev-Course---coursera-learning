// import { useReducer } from "react";

// const initialState = {
//   wallet: 100,
// };
// const reducer = (state, action) => {
//   console.log(`Action: ${action}, State: ${state}`);

//   if (action.type === "buy_ingredients") {
//     return {
//       wallet: state.wallet - 10,
//     };
//   }
//   if (action.type === "sell_a_meal") {
//     return {
//       wallet: state.wallet + 10,
//     };
//   }
//   if (action.type === "reserve_a_customer") {
//     return {
//       wallet: state.wallet + 200,
//     };
//   }
//   return state;
// };

// const TrackExpenses = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <section className="flex flex-col gap-16">
//       <div>
//         <h1>UseReducer hook</h1>
//         <p className="text-sm">
//           This is a simple example of how to use the useReducer hook in React.
//         </p>
//       </div>
//       <div>
//         <h4>Little Lemon Track expenses</h4>
//         <h5>Wallet: {state.wallet}</h5>
//         <div className="gap-4 flex">
//           <button onClick={() => dispatch({ type: "buy_ingredients" })}>
//             Shopping for veggies
//           </button>
//           <button onClick={() => dispatch({ type: "sell_a_meal" })}>
//             Increase Wallet
//           </button>
//           <button onClick={() => dispatch({ type: "reserve_a_customer" })}>
//             Reserved Customer
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrackExpenses;

import { useReducer } from "react";

const initialState = {
  num: 1,
};
const reducer = (state, action) => {
  // Define your action types
  if (action.type === "double") {
    return {
      num: state.num * 2,
    };
  }
  if (action.type === "divide") {
    return {
      num: state.num / 2,
    };
  }
  return state;
};

const TrackExpenses = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <section>
      <h4>Wallet:{state.num}</h4>
      <div className="flex gap-8">
        <button type="button" onClick={() => dispatch({ type: "double" })}>
          Double
        </button>
        <button onClick={() => dispatch({ type: "divide" })}>Divide</button>
      </div>
    </section>
  );
};

export default TrackExpenses;
