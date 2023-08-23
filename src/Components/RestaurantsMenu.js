import React, { useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [searchText, setSearchText] = useState("");

  console.log("check", resInfo);

  if (resInfo === null) return <Shimmer />;
  console.log("data is", resInfo?.cards?.[0]?.card?.card?.info);
  const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.cards?.[0]?.card?.card?.info;

  //   console.log("check", resInfo?.data?.cards[0]?.card?.card?.info);

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>

      <p>{cuisines}</p>
      <p>{areaName}</p>
      <h3>{costForTwoMessage}</h3>

      <ul>
        <h2>Menu</h2>
        <input
          type="search"
          placeholder="Type here"
          value={searchText}
          onChange={handleSearch}
        />

        {/* <button onClick={() => {}}>search</button> */}
        {itemCards
          ?.filter((menu) => {
            return menu?.card?.info?.name
              ?.toLowerCase()
              ?.includes(searchText.toLowerCase());
          })
          ?.map((item) => (
            <li key={item.card.info.id}>
              {item?.card?.info?.name} - {" Rs."}
              {Math.round(item?.card?.info?.price / 100)}
            </li>
          ))}
        {/* <li>{itemCards[0].card.info.name}</li> // we can write like this too but map is a good way to get all thata at once  */}
      </ul>
    </div>
  );
};

export default RestaurantsMenu;
