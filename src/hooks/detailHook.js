import axios from "axios";
import { useEffect, useState } from "react";

const detailHook = (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const [detail, setDetail] = useState();
 
  const getDetailById = async (url) => {
    try {
      const { data } = await axios.get(url);
      setDetail(data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        setDetail(error.response.status);
      }
    }
  };

  useEffect(() => {
    getDetailById(url);
  }, [id]);

  return { detail };
};

export default detailHook;
