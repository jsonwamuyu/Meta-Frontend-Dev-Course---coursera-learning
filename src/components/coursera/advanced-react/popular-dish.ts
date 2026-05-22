export const PopularDish = [
  {
    id: "1",
    title: "Pilau Masala",
    description: "This is really awesome meal for a family out",
    image: "",
    price: "$5.00",
  },
  {
    id: "2",
    title: "Chapo",
    description: "This is really awesome meal for a family out",
    image: "",
    price: "$15.00",
  },
  {
    id: "3",
    title: "Ugali matumbo",
    description: "This is really awesome meal for a family out",
    image: "",
    price: "$5.00",
  },
];

export const TopDish = PopularDish.map((dish) => {
  return {
    content: `${dish.title} - ${dish.description}`,
    price: dish.price,
  };
});
