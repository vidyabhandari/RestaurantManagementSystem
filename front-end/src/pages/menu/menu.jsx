import React from "react";
import MenuSection from "./menuSection";

const menuData = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Garlic Bread",
        description: "Crispy bread topped with garlic butter",
        price: "₹150",
      },
      {
        name: "Caesar Salad",
        description:
          "Fresh lettuce, croutons, and parmesan with Caesar dressing",
        price: "₹250",
      },
    ],
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Paneer Butter Masala",
        description: "Creamy tomato-based curry with cottage cheese",
        price: "₹400",
        icon: "🌱",
      },
      {
        name: "Grilled Fish",
        description: "Marinated in herbs and served with sautéed vegetables",
        price: "₹550",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Chocolate Lava Cake",
        description: "Gooey molten center served with vanilla ice cream",
        price: "₹300",
        icon: "🍫",
      },
    ],
  },
  {
    category: "Beverages",
    items: [
      {
        name: "Mango Smoothie",
        description: "Fresh mango blended with yogurt and honey",
        price: "₹150",
        icon: "🥭",
      },
      {
        name: "Cappuccino",
        description: "Rich espresso with frothy milk",
        price: "₹120",
        icon: "☕",
      },
    ],
  },
];

function Menu() {
  return (
    <div className="menu">
      {menuData.map((section, index) => (
        <MenuSection
          key={index}
          category={section.category}
          items={section.items}
        />
      ))}
    </div>
  );
}

export default Menu;
