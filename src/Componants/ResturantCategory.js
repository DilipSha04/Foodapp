import ItemList from "./ItemList";

const ResturantCategory = ({data, showItems, setShowIndex, isActive}) => {
  // const [showItems, setShowItems] = useState(false) 

  /*this componant controlling itself but it should be controlled by it's parent componant which is ResturantMenu */
  
  const handelClick = ()=>{

        setShowIndex();
      // setShowItems(showItems);
  }
  return (
    <div>
      <div className="mx-auto my-4 px-4 py-2 bg-gray-100">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handelClick}
        >
          <span className="font-bold text-gray-700 text-[18px]">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span className="rotate-[90deg] text-gray-700"> &#x27A4;</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
