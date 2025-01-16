import React, { useState, useEffect } from "react";
import MenuSection from "./menuSection";

function Menu() {
  const [categories, setCategories] = useState([]); // Categories from API
  const [selectedCategory, setSelectedCategory] = useState(null); // Selected category
  const [foodItems, setFoodItems] = useState([]); // Food items for the selected category
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch categories from the API
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch menu data");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data.categories || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setFoodItems([]); // Clear previous food items
    fetchFoodItems(category); // Fetch food items for the selected category
  };

  const fetchFoodItems = (category) => {
    setLoading(true); // Set loading to true while fetching data
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch food items");
        }
        return response.json();
      })
      .then((data) => {
        setFoodItems(data.meals || []); // Set food items
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food items:", error);
        setError(error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="menu">
      <h1>Menu</h1>

      {/* Categories as buttons */}
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.idCategory}
            className={`category-btn ${
              selectedCategory === category.strCategory ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category.strCategory)}
          >
            {category.strCategory}
          </button>
        ))}
      </div>

      {/* Display food items for the selected category */}
      <div className="food-items">
        <h2>{selectedCategory ? `Food Items in ${selectedCategory}` : ""}</h2>
        {loading && <p>Loading food items...</p>}
        {foodItems.map((food) => (
          <div key={food.idMeal} className="food-item">
            <h3>{food.strMeal}</h3>
            <img src={food.strMealThumb} alt={food.strMeal} />
          </div>
        ))}

        {!loading && foodItems.length === 0 && selectedCategory && (
          <p>No food items available for this category.</p>
        )}
      </div>
    </div>
  );
}

export default Menu;
