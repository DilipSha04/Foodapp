import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAdditem = (item) =>{
    //Dispatch and action
    dispatch(addItem(item))
  }

  // console.log(items);
  return (
    <div>
      <div>
        {items?.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="px-2 py-4 border-b-2 border-gray-300"
          >
            <div className="flex justify-between">
              <div className="flex flex-col space-y-2 font-semibold text-gray-600">
                <span>{item?.card?.info?.name}</span>
                <span>{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100} &#x20B9;</span>
              </div>
              <div className="relative">
                <button className="absolute bg-orange-100 px-8 py-1 rounded-md text-[14px] top-12 left-4 text-orange-800 hover:bg-orange-800 hover:text-orange-100 transition duration-300" onClick={()=>handleAdditem(item)}>Add+</button>
                <img src={IMG_URL + item?.card?.info?.imageId} className="w-[120px] m-1 p-1 rounded-md" />
              </div>
            </div>
            <p className="text-[14px] text-gray-500">
              {item?.card?.info?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
