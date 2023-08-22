import { ResCart } from "./ResCart";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../Utils/useOnlineStatus";
// useOnlineStatus

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filtered, setFiltered] = useState([]);

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
    setFiltered(
      parseData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline!! Please check the internet connection</h1>
    );
  }

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="btn">
        <div className="search">
          <input
            type="search"
            className="search-box"
            placeholder="Search for Restaurants and food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              if (searchText.trim() === "") {
                alert("enter something");
              } else {
                const filteredRestaurant = restaurantList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFiltered(filteredRestaurant);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-res"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info?.avgRating > 4
            );
            setFiltered(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filtered?.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {" "}
              <ResCart resData={restaurant} />{" "}
            </Link>
          );
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
