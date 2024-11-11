import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import hybridHook from "../hooks/hybridHook";
import { Link } from "react-router-dom";

const RootLayout = () => {
  
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const url = "categoryUrl";
  const { categories } = hybridHook(url);

  useEffect(() => {
    if (categories?.length > 0) {
      setLoading(false);
    }
    if (categories === 404) {
      setError(true);
      setLoading(false);
    }
  }, [categories]);

  return (
    <div className="h-screen text-slate-900">
      {error ? (
        <div className="h-screen flex justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="text-[30px] animate-pulse">🍔</p>
            <p className="text-[18px] animate-pulse text-slate-900">
              No meals found ...
            </p>
            <Link to={"/"}>
              <button className="px-4 py-2 border smooth hover:bg-slate-900 hover:text-white hover:scale-90">
                Try Again Later
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          {loading ? (
            <div
              className={`h-screen hidden ${error ? "" : "flex-by-me"} items-center`}
            >
              <Loading />
            </div>
          ) : (
            <div className="grid grid-cols-12 animate__animated animate__fadeIn">
              <div className="col-span-2 h-[90vh] side-bar">
                <Sidebar categories={categories} />
              </div>
              <div className="col-span-10 h-[90vh] page-section mx-[35px] px-5 overflow-y-scroll">
                <div className="col-span-10 h-[10vh] navbar flex items-center mt-[15px]">
                  <Navbar />
                </div>
                <div className="outlet">
                  <Outlet loading={loading} setLoading={setLoading} />
                </div>
              </div>
              <div className="col-span-12 h-[10vh] footer-section">
                <Footer />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RootLayout;
