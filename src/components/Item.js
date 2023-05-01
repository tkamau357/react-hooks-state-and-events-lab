import React, { useState } from "react";

function Item(props) {
  const [isInCart, setIsInCart] = useState(false);

  const handleCartToggle = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      {props.item.name} - {props.item.category}
      <button onClick={handleCartToggle}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;