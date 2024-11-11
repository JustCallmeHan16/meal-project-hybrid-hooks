import { useParams } from "react-router";
import hybridHook from "../hooks/hybridHook";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import MealCard from "../components/MealCard";

const Meals = () => {
  
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [newMeals, setNewMeals] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const incPageNumber = (index) => {
    setPageNumber(index);
  };

  const url = "mealUrl";
  const { meals } = hybridHook(url, category);

  //*pagination
  const pagination = (array, mealsPerPage, pageNumber) => {
    const startIndex = (pageNumber - 1) * mealsPerPage;
    const endIndex = startIndex + mealsPerPage;
    return array.slice(startIndex, endIndex);
  };

  const mealsPerPage = 10;
  const paginationNumber = (meals.length / mealsPerPage).toFixed();

  const createPaginateNumber = (number) => {
    const numberArray = [];
    if (number > 1) {
      for (let i = 1; i <= number; i++) {
        numberArray.push(i);
      }
    }
    return numberArray;
  };

  const pageNumberArray = createPaginateNumber(paginationNumber);

  useEffect(() => {
    if (meals?.length > 0) {
      setLoading(!loading);
    }
    setPageNumber(1);
  }, [meals, category]);

  useEffect(() => {
    const currentMeals = pagination(meals, mealsPerPage, pageNumber);
    setNewMeals(currentMeals);
  }, [meals, pageNumber]);

  return (
    <div className="meal-section">
      <div className="mb-2">
        {pageNumberArray.length > 0 &&
          pageNumberArray.map((index) => (
            <button
              onClick={() => incPageNumber(index)}
              className={`w-[35px] ${
                pageNumber === index && "bg-slate-900 text-white"
              } h-[35px] border animate__animated animate__fadeInRight hover:bg-slate-900 smooth hover:text-white`}
              key={index}
            >
              {index}
            </button>
          ))}
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-[70vh]">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-10 card-container">
          {newMeals ? (
            newMeals?.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} pageNumber={pageNumber} />
            ))
          ) : (
            <div className="w-[222px] h-[222px] animate-pulse bg-slate-300"></div>
          )}
        </div>
      )}
    </div>
  );
};

export default Meals;
