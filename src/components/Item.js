import React, { useState } from "react";

function Item(props) {
  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      <h3>{props.name}</h3> {props.category}
      <button onClick={handleClick}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;