import { Link, useParams } from "react-router-dom";

const MealCard = ({ meal }) => {

  const { category } = useParams();

  return (
    <div className="w-[100%] overflow-hidden animate__animated animate__zoomIn">
      <div className="hover:cursor-pointer relative parent-card">
        <div className="absolute flex justify-center items-center w-[100%] h-[100%] z-10 btn-div">
          <Link to={`/${category}/detail/${meal?.idMeal}`}>
            <button className="px-3 smooth py-1 border-2 border-slate-200 hover:scale-95 rounded text-slate-200 hover:text-white hover:border-white  font-medium">
              Detail
            </button>
          </Link>
        </div>
        <div
          className={`absolute w-[100%] h-[100%] bg-slate-900 opacity-[0.5] layer`}
        ></div>
        {meal?.strMealThumb ? (
          <img src={meal.strMealThumb} alt="Image Alt" />
        ) : (
          <div className="w-[222px] h-[222px] animate-pulse bg-slate-300"></div>
        )}
      </div>
      <p className="line-clamp-1">{meal.strMeal}</p>
    </div>
  );
};

export default MealCard;
