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
    <div className="body ">
      <div className="btn flex justify-between">
        <div className="search ">
          <input
            type="search"
            className="search-box border-[2px] border-black  rounded-[20px] ml-[40px] px-[20px]"
            placeholder="Search for Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn ml-5 px-[20px] bg-[#1c1917] rounded-[20px] text-white py-[10px]"
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
        <div className="border-[2px] border-black px-[20px] mr-[5rem] rounded-[20px]  hover:bg-black">
          <button
            className="top-res text-[20px] font-[600] mt-[3px] hover:text-white"
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
      </div>

      <div className="res-container m-[30px] flex flex-wrap ">
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
