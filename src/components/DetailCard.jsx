import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

const DetailCard = ({ detail }) => {

  return (
    <div className="flex flex-col items-center">
      <p className="font-medium text-[20px] text-slate-900 py-2">
        {detail.strMeal}
      </p>
      <img
        className="w-[270px] shadow-md hover:cursor-pointer my-3 smooth"
        src={detail.strMealThumb}
        alt=""
      />
      <p className="font-medium text-[13px] px-1 py-1 text-center text-white bg-slate-500 w-[150px] rounded">
        Country - {detail.strArea}
      </p>
      <p className="text-center my-2">{detail.strInstructions}</p>
      <div className="bg-red-600 rounded">
        <Link className="flex items-center text-white w-[175px] justify-evenly py-1 px-1" target="_blank" to={detail.strYoutube}>
          <FaYoutube className="text-[26px]"/>
          <p className="text-[13px]">Watch On Youtube</p>
        </Link>
      </div>
    </div>
  );
};

export default DetailCard;
