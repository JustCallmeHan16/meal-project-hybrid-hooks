import { useParams } from "react-router";
import hybridHook from "../hooks/hybridHook";
import { useEffect, useState } from "react";
import DetailCard from "../components/DetailCard";

const Detail = () => {
  
  const { id } = useParams();
  const [newDetail, setNewDetail] = useState();

  const url = "detailUrl";
  const { detail } = hybridHook(url, "", id);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (detail?.meals) {
      const { meals } = detail;
      setNewDetail(meals);
      setLoading(false);
    }
  }, [detail]);

  console.log(newDetail);

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center">
          <p className="font-medium w-[270px] text-[20px] text-slate-900 py-4 bg-slate-300 animate-pulse"></p>
          <div className="w-[270px] h-[270px] hover:cursor-pointer smooth bg-slate-300 my-2 animate-pulse" />
          <p className="font-medium w-[150px] text-[20px] text-slate-900 py-3 my-2 bg-slate-300 animate-pulse"></p>
          <p className="bg-slate-300 text-slate-300 animate-pulse">
            Heat oven to 190C/170C fan/gas 5. Tip the flour and sugar into a
            large bowl. Add the butter, then rub into the flour using your
            fingertips to make a light breadcrumb texture. Do not overwork it or
            the crumble will become heavy. Sprinkle the mixture evenly over a
            baking sheet and bake for 15 mins or until lightly coloured.
            Meanwhile, for the compote, peel, core and cut the apples into 2cm
            dice. Put the butter and sugar in a medium saucepan and melt
            together over a medium heat. Cook for 3 mins until the mixture turns
            to a light caramel. Stir in the apples and cook for 3 mins. Add the
            blackberries and cinnamon, and cook for 3 mins more. Cover, remove
            from the heat, then leave for 2-3 mins to continue cooking in the
            warmth of the pan. To serve, spoon the warm fruit into an ovenproof
            gratin dish, top with the crumble mix, then reheat in the oven for
            5-10 mins. Serve with vanilla ice cream.
          </p>
        </div>
      ) : (
        <div>
          {newDetail?.map((detail) => (
            <DetailCard key={detail.idMeal} detail={detail} />
          ))}
        </div>
      )}
    </>
  );
};

export default Detail;
