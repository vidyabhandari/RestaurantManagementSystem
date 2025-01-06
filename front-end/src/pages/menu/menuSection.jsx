import React from "react";
import MenuItem from "./menuItem";

function MenuSection({ category, items }) {
  return (
    <div className="menu-section">
      <h2>{category}</h2>
      <div className="menu-items">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            description={item.description}
            price={item.price}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
