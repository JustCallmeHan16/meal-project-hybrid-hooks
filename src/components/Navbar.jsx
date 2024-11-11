import { useLocation, useNavigate, useParams } from "react-router";
import hybridHook from "../hooks/hybridHook";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location?.pathname;

  const [path, setPath] = useState(false);
  const [search, setSearch] = useState("");
  const [newCategory, setNewCategory] = useState();

  const url = "detailUrl";
  const { detail } = hybridHook(url, "", id);

  const searchFoodByName = async (endpoint) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${endpoint}`;

    try {
      const { data } = await axios.get(url);
      const mealData = data?.meals;

      if (mealData.length > 1) {
        return mealData;
      } else {
        const { strCategory, idMeal } = mealData[0];
        const mealObject = { strCategory, idMeal };
        return mealObject;
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
      }
    }
  };

  const searchFood = async () => {
    if (search) {
      const findFood = await searchFoodByName(search);
      console.log(findFood);
      setSearch("");
      navigate(`${findFood.strCategory}/detail/${findFood.idMeal}`);
    } else {
      setText(true);
    }
  };

  useEffect(() => {
    if (id) {
      if (detail?.meals) {
        const { strCategory } = detail?.meals[0];
        setNewCategory(strCategory);
      }
    }
  }, [detail]);

  useEffect(() => {
    if (!id) {
      setNewCategory(category);
    }
  }, [id]);

  useEffect(() => {
    if (pathname === "/") {
      setPath(true);
    } else {
      setPath(false);
    }
  });

  const className =
    "px-3 py-2 animate__animated animate__fadeInRight border-[2px] hover:scale-95 hover:shadow-md border-slate-900 bg-slate-900 hover:cursor-pointer text-white smooth";

  return (
    <div className="flex mobile-nav justify-between w-[100%]">
      {id ? (
        <Link to={`/${newCategory}`}>
          <p className={className}> {newCategory} </p>
        </Link>
      ) : (
        <p className={className}>{category ? category : "Home"}</p>
      )}
      {path ? (
        ""
      ) : (
        <div className="flex items-center overflow-hidden">
          <input
            className="py-2 px-2 outline-none smooth hover:border-slate-900 border-[2px]"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            onClick={searchFood}
            className="bg-slate-900 py-2 border-l-0 border-slate-900 border-[2px]"
          >
            <p className="text-white px-2 hover:cursor-pointer">Search</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
