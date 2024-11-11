import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <p className="text-[30px]">🍔</p>
        <p className="text-[18px] text-slate-900">
          No meals found ...
        </p>
        <Link to={"/"}>
          <button className="px-4 py-2 border smooth hover:bg-slate-900 hover:text-white hover:scale-90">
            Try Again Later
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
