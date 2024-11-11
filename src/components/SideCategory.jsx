import { Link, useParams } from "react-router-dom";
import hybridHook from "../hooks/hybridHook";

const SideCategory = ({ mobileShow, setMobileShow }) => {
  const url = "categoryUrl";
  const { categories } = hybridHook(url);

  const { category } = useParams();

  return (
    <div
      className={`w-[100%] h-[100vh] z-20 overflow-hidden side-category animate__animated ${
        mobileShow ? "animate__fadeIn" : "hidden"
      } bg-[#f5f7f8] absolute flex justify-center items-center`}
    >
      <div className="flex flex-col items-center gap-3">
        <p className="text-[20px] font-bold py-1 px-2 text-slate-900 smooth border-b-[2px] border-b-slate-900">
          MENU
        </p>
        <ul
          className={`text-gray-500 animate__animated w-[400px] flex flex-wrap justify-center gap-3 ${
            mobileShow ? "animate__fadeIn" : "d-none"
          }`}
        >
          {categories?.map((categoryMeal) => (
            <Link
              to={`/${categoryMeal.strCategory}`}
              key={categoryMeal.idCategory}
            >
              <p
                onClick={() => setMobileShow(!mobileShow)}
                className={`${
                  categoryMeal.strCategory === category && "active-mobile"
                } text-[18px] py-1 px-2 hover:bg-slate-900 smooth hover:cursor-pointer hover:text-white border-[2px] border-gray-500 hover:border-slate-900`}
              >
                {categoryMeal.strCategory}
              </p>
            </Link>
          ))}
        </ul>
        <button
          onClick={() => setMobileShow(!mobileShow)}
          className="text-[20px] font-bold py-1 px-2 text-slate-900 smooth border-[2px] hover:bg-slate-900 hover:text-white border-slate-900"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default SideCategory;
