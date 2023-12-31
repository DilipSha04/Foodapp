import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  const [listOFResturant, setListOFResturant] = useState([]);

  const [filterdResturant, setFilterdResturant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  const { loggedInUser, setUserName } = useContext(userContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json)
    // console.log(
    //   json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // optional-chaing
    setListOFResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="offline text-center my-[50px] font-mono text-xl">
        Look's like Your Are Offline!!! Check your internet 😟
      </h1>
    );

  return listOFResturant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="main-container w-full px-8 py-4">
      <div className="md:mx-auto mx-2 w-full">
        <div className="filter lg:flex md:flex py-2 w-100% justify-center max-w-[1080px] hidden">
          <input
            className="px-4 py-1 text-[16px] bg-orange-200 mx-4 outline-orange-900 rounded-md  "
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border-[1px] border-orange-900 px-4 py-1 rounded-md text-orange-900 hover:bg-orange-900 hover:text-orange-200 transition-all duration-200"
            onClick={() => {
              //filterd the resturant cards and update the ui
              //Search text
              const filterdResturant = listOFResturant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterdResturant(filterdResturant);
            }}
          >
            Search
          </button>
          <button
            className="filter-btn bg-orange-900 px-4 py-1 rounded-md text-orange-200 mx-4 hover:text-orange-300 transition-all duration-200"
            onClick={() => {
              filterdList = listOFResturant.filter(
                (res) => res.info.avgRating > 4
              );
              setListOFResturant(filterdList);
            }}
          >
            Find Top Rated
          </button>
          <label
            className="text-orange-900 leading-8 text-[20px] mx-2"
            htmlFor=""
          >
            User :
          </label>
          <input
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            className="bg-orange-200 px-2 outline-orange-900 rounded-md"
          />
        </div>
        <div className="res-container w-full flex flex-wrap px-4 py-4 justify-center gap-8">
          {filterdResturant.map((restaurants) => (
            <Link
              className="Link"
              key={restaurants.info.id}
              to={"/resturant/" + restaurants.info.id}
            >
              {" "}
              {restaurants.info.promoted ? (
                <ResturantCardPromoted resData={restaurants} />
              ) : (
                <ResturantCard resData={restaurants?.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
