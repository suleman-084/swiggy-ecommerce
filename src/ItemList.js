import React from "react";
import { CDN_URL } from "./Utils/constants";

const ItemList = (items) => {
  console.log("lis", items.items);
  return (
    <div className="bg-slate-100 !p-0">
      {items?.items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between "
        >
          <div className="w-9/12">
            <div className="py-2 font-bold">
              <span className="">{item?.card?.info?.name}</span>
              <br />
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
          <div className="w-3/12 p-4  ">
            <div className="absolute  ">
              <button className="p-2 mx-[20px] rounded-[20px] bg-black shadow-lg   text-white">
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-[140px] rounded-[20px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
