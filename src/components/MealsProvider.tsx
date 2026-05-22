import { createContext, useState } from "react";

const meals = [
  { id: 1, name: "Pizza", price: 10 },
  { id: 2, name: "Burger", price: 8 },
  { id: 3, name: "Sushi", price: 12 },
];

const MealsContext = createContext({});

export const MealsProvider = ({ children }) => {
  const [mealsList] = useState(meals);
  console.log("Hello there");
  console.log("Meal list in meals provider" + mealsList);
  return (
    <MealsContext.Provider value={{ mealsList }}>
      {children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
// export const useMealsContext = () => useContext(MealsContext);
