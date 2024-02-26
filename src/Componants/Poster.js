import React, { useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";

const PosterCard = () => {

    const { imageId, text, id } = posterData;

  return (
    <div className="flex flex-col justify-center">
      <img className="p-2 " src={imageId} alt="" />
      <h3>{text}</h3>
    </div>
  );
};

const Poster = ({ posterData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data?.json();

    console.log(josn?.data?.cards?.card?.card?.imageGridCards);
  };
  

  return (
    <div className="w-full flex justify-center mx-auto bg-slate-400">
      <div className="w-6/12 px-4 py-4 ">
        {posterData.map((info) => <PosterCard key={id} posterData={info[0]}/>)}
      </div>
    </div>
  );
};

export default Poster;
