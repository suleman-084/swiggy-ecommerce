import { ResCart } from "./ResCart";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.98358648148027&lng=77.48813699930905&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log("data", data);
    const parseData = await data.json();
    // console.log("parsedata", parseData.data);
    setRestaurantList(
      parseData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  console.log("restaurantList:", restaurantList);
  if (restaurantList?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="btn">
        <button
          className="top-res"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info?.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {restaurantList?.map((restaurant) => {
          return <ResCart key={restaurant.info.id} resData={restaurant} />;
        })}
        {/* <ResCart resData={resList[0]} />
          <ResCart resData={resList[1]} />
          <ResCart resData={resList[2]} />
          <ResCart resData={resList[3]} />
          <ResCart resData={resList[4]} />
          <ResCart resData={resList[5]} />
          <ResCart resData={resList[6]} />
          <ResCart resData={resList[7]} />
          <ResCart resData={resList[8]} /> */}
      </div>
    </div>
  );
};
