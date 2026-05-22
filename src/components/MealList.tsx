// import { useContext } from "react";
// import MealsContext from "./MealsProvider";
// interface Meal {
//   id: string | number;
//   name: string;
//   price: number;
// }

// const MealList = () => {
//   const { mealsList } = useContext(MealsContext);
//   console.log("Meals List from Context:", mealsList);
//   return (
//     <section className="container my-8">
//       <h2 className="text-2xl font-bold mb-4">Meal List</h2>
//       {mealsList.map((meal) => {
//         return (
//           <div key={meal.id}>
//             <h3 className="text-xl font-semibold">{meal.name}</h3>
//             <p className="text-gray-600">Price: ${meal.price}</p>
//           </div>
//         );
//       })}
//     </section>
//   );
// };

// export default MealList;

import { createContext, useContext } from "react";
import MealsProvider from "./MealsProvider";

const mealsList = [
  { id: "1", name: "Pizza", price: 2 },
  { id: "2", name: "Chapati", price: 3 },
  { id: "3", name: "Mukimo", price: 4 },
];

const MealList = () => {
  const context = useContext(MealsProvider);
  // if (!context) throw new Error("MealsContext not provided");

  // const { mealsList } = context;
  console.log("Meals in mealist component" + mealsList[1]);
  return (
    <section className="container my-8">
      <h2 className="text-2xl font-bold mb-4">Meal List</h2>
      {mealsList.map((meal) => (
        <div key={meal.id} className="flex gap-4">
          <h3 className="text-xl font-semibold">{meal.name}</h3>
          <p className="text-gray-600">Price: ${meal.price}</p>
        </div>
      ))}
    </section>
  );
};

export default MealList;
