import userContext from "../utils/userContext";
import { useContext } from "react";
import { IMG_URL } from "../utils/constants";

const ResturantCard = ({ resData }) => {
  const { loggedInuser } = useContext(userContext);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    areaName,
    sla,
  } = resData;
  return (
    <div className="res-card md:w-[300px] w-full rounded-md  overflow-hidden md:hover:scale-[.9] mt-[2rem] transition-all duration-300 relative">
      <img
        src={IMG_URL + cloudinaryImageId}
        className="card-img rounded-2xl"
        alt=""
      />
      <div className="px-4 py-2">
        <h3 className="font-bold md:text-[20px] text-[30px] text-stone-900 ">{name}</h3>
        <p className="text-gray-900 text-[18px] py-2 ">{cuisines.join(", ")}</p>
        <p className="text-gray-900 font-semibold ">{costForTwo}</p>
        <div>
          <p className="font-bold my-2 ">
            {avgRating}{" "}
            <span className="stars bg-green-800 px-1 rounded-md text-white">
              {" "}
              &#x272A;
            </span>
          </p>
          <p className="font-semibold ">{sla.deliveryTime} Minutes</p>
        </div>
        <p className="text-gray-900 ">{areaName}</p>
        <p className="text-gray-900 ">User : {loggedInuser}</p>
      </div>
    </div>
  );
};
export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div className="">
        <label className="absolute  bg-slate-700 text-white px-2  z-50 ">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
