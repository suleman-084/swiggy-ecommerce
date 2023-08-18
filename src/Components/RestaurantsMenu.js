import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/constants";

const RestaurantsMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const { resId } = useParams();

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const parseJson = await data.json();
    console.log("json", parseJson);
    setResInfo(parseJson);
  };
  //   data.cards[0].card.card.info.name
  //   data.cards[0].card.card.info.costForTwoMessage

  //   console.log(
  //     "resInfo?.data?.cards[0]?.card?.card?.info.",
  //     resInfo?.data?.cards[0]?.card?.card?.info
  //   );
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.data?.cards?.[0]?.card?.card?.info;
  //   console.log("check", resInfo?.data?.cards[0]?.card?.card?.info);

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>

      <p>{cuisines}</p>
      <p>{areaName}</p>
      <h3>{costForTwoMessage}</h3>

      <ul>
        <h2>Menu</h2>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs."}
            {Math.round(item?.card?.info?.price / 100)}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li> // we can write like this too but map is a good way to get all data at once  */}
      </ul>
    </div>
  );
};

export default RestaurantsMenu;
