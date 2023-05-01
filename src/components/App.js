// import React, { useState} from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleDarkModeToggle = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={isDarkMode ? "dark-mode" : "light-mode"}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={handleDarkModeToggle}>
//         {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//       </button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  }

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="App-header">
        <h1>My App</h1>
        <button onClick={handleModeToggle}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

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

function ShoppingList({items}) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = selectedCategory === 'All' ? items : items.filter(
    item => item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
        <ul className="Items">
        {filteredItems.map(item => (
          <li key={item.id}>
            <Item key={item.id} name={item.name} category={item.category} />
          </li>
        ))}
        </ul>
    </div>
    </div>
  );
}


export default App;