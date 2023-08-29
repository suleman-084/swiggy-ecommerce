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
        className="w-6/12 m-auto bg-gray-400 p-2 cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {data.title} ({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
