import React from "react";

function MenuItem({ name, description, price, icon }) {
  return (
    <div className="menu-item">
      <h3>
        {name} {icon && <span>{icon}</span>}
      </h3>
      <p>{description}</p>
      <p className="price">{price}</p>
    </div>
  );
}

export default MenuItem;
