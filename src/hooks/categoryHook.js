import axios from "axios";
import { useEffect, useState } from "react";

const categoryHook = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const [categories, setCategories] = useState();

  const fetchCategories = async (url) => {
    try {
      const response = await axios.get(url);
      const { data } = response;
      setCategories(data?.categories);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        setCategories(error.response.status);
      }
    }
  };

  useEffect(() => {
    fetchCategories(url);
  }, []);

  return { categories };
};

export default categoryHook;
