import axios from "axios";
import { useEffect, useState } from "react";

const mealHook = (category) => {
  
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const [meals, setMeals] = useState([]);

  const fetchMeals = async (url) => {
    try {
      const {
        data: { meals },
      } = await axios.get(url);
      meals?.length > 0 && setMeals(meals);
      return meals;
    } catch {}
  };

  useEffect(() => {
    fetchMeals(url);
  }, [category]);

  return { meals };
};

export default mealHook;
