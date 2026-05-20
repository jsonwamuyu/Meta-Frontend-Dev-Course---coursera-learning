import React, { useState } from "react";

const AddToCart = (children) => {
  const [cartItem, setCartItem] = useState(0);

  const handleAddTocart = () => {
    setCartItem((prev) => {
      return prev + 1;
    });
  };

  return <button>{children}</button>;
};

export default AddToCart;
