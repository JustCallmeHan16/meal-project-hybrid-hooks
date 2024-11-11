import { useState } from "react";
import { LuChefHat } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";
import SideCategory from "./SideCategory";

const Sidebar = ({ categories }) => {
  const [show, setShow] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);

  const { category } = useParams();

  return (
    <>
      <div>
        <SideCategory mobileShow={mobileShow} setMobileShow={setMobileShow} />
      </div>
      <div className="mx-[10px] mt-[10px] h-[100%] nav-bar">
        <div className="mobile-sidebar">
          <div className="hover:scale-[0.8] hover:cursor-pointer hover:text-slate-900 text-slate-900 smooth flex justify-center items-center gap-1">
            <LuChefHat className="text-[30px]" />
            <Link to={"/"}>
              <p className="text-[25px] font-medium">Chef Han</p>
            </Link>
          </div>
          <p
            onClick={() => setMobileShow(!mobileShow)}
            className="mobile-side-category text-[18px] font-medium hover:cursor-pointer smooth hidden"
          >
            Categories 🍔
          </p>
        </div>
        <div className="text-slate-900  category mx-2 flex flex-col justify-center items-start mt-5 overflow-hidden">
          <p
            className="text-[16px] font-medium hover:cursor-pointer"
            onClick={() => setShow(!show)}
          >
            Categories 🍔
          </p>
          <ul
            className={`text-gray-500 animate__animated animate__fadeIn `}
          >
            {categories?.map((categoryMeal) => (
              <Link
                to={`/${categoryMeal.strCategory}`}
                key={categoryMeal.idCategory}
              >
                <p
                  className={`${
                    categoryMeal.strCategory === category && "active-desktop"
                  } text-[14px] py-1 px-2 border-l-[2px] smooth hover:cursor-pointer hover:text-slate-900 border-l-transparent hover:border-l-[2px] hover:border-l-slate-900`}
                >
                  {categoryMeal.strCategory}
                </p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
