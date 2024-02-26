import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";


const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, totalRatings } =
    resInfo?.cards[2]?.card?.card?.info;

  // console.log(resInfo?.cards[0]?.card?.card?.info);

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories)

  return (
    <div className="resMenu w-full px-8 py-4 flex justify-center">
      <div className=" md:w-6/12 w-full Menu mt-4 my-2">
        <div className="flex justify-between border-b-2">
          <div className="text-left my-4 ">
            <h1 className="text-[22px] font-bold text-stone-900">{name}</h1>
            <p className="text-[16px] my-2 text-gray-600 ">
              {cuisines.join(",")}
            </p>
            <p className="text-[16px] my-2 text-gray-600">
              {costForTwoMessage}
            </p>
          </div>
          <div className="flex flex-col my-10 mt-14 py-1 ml-2 border-[1px] rounded-md border-gray-400 px-2 justify-center text-[16px] ">
            <span className="text-green-700">
              {avgRating}
              <span className="stars   text-xl  rounded-2xl text-green-700">
                &#x2605;
              </span>
              <hr className="bg-gray-500 h-[1px]" />
            </span>
            <span className="text-gray-500 mx-auto text-[14px]">
              {totalRatings / 1000}K+
            </span>
          </div>
        </div>
        {categories.map((category, index) => (
          <ResturantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={()=>setShowIndex(index)}

          />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
