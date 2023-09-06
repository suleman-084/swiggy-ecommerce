import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log("data ", data);
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => setShowItems(!showItems);
  return (
    <div>
      {/* {header} */}
      <div
        className="w-6/12 mx-auto  my-6 shadow-lg bg-gray-400 p-2 cursor-pointer "
        onClick={handleClick}
      >
        <div className="flex justify-between flex-col">
          <div className="flex justify-between py-6">
            <span className="font-bold text-lg">
              {data.title} ({data?.itemCards?.length})
            </span>
            <span>⬇️</span>
          </div>
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
