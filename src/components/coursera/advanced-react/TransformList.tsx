import { TopDish, PopularDish } from "./popular-dish";

const TransformList = () => {
  // Transform the list items
  const listItems = PopularDish.map((dish) => {
    const itemText = `${dish.title} - ${dish.price}`;
    return <li key={dish.id}>{itemText}</li>;
  });
  return (
    <div>
      <h5>Transform a list</h5>

      <div>
        <h5>Transform again</h5>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};

export default TransformList;

import "./App.css";
import DessertsList from "./DessertsList";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}

export default App;

// function DessertsList(props) {
//   // Implement the component here.
//   // Desert calories < 500, sort: low to high

//   const ItemLists = props.data.filter((d) => {
//     return d.calories < 500;
//   }).sort((a,b) => a.calories - b.calories;).map((dessert) =>{
//     cont itemList = `${dessert.name} - ${dessert.calories} cal.`
//     return <li key={`${dessert.name}-${dessert.createdAt}`}>{itemList}</li>
//   })
//   return (
//     <ul>
//       {ItemLists}
//     </ul>
//   );
// }

// export default DessertsList;

function DessertsList(props) {
  const itemLists = props.data
    .filter((dessert) => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map((dessert) => {
      const itemText = `${dessert.name} - ${dessert.calories} cal.`;
      return <li key={`${dessert.name}-${dessert.createdAt}`}>{itemText}</li>;
    });

  return <ul>{itemLists}</ul>;
}

export default DessertsList;
