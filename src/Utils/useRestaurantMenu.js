import { useEffect, useState } from "react";
import { MENU_API } from "../Utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResinfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const parseJson = await data.json();
    console.log("json", parseJson);
    setResinfo(parseJson.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
