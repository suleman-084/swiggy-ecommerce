import React from "react";
import { CDN_URL } from "./Utils/constants";

const ItemList = (items) => {
  console.log("lis", items.items);
  return (
    <div>
      {items?.items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-300 border-b-2 "
        >
          <img src={CDN_URL + item?.card?.info?.imageId} className="w-[90px]" />
          <div>
            <span>{item?.card?.info?.name}</span>
            <span>
              {" "}
              ₹{" "}
              {Math.round(
                item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100
              )}
            </span>
          </div>
          <p className="text-xs">{item?.card?.info?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
