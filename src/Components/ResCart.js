import { CDN_URL } from "../Utils/constants";

export const ResCart = ({ resData }) => {
  const { name, cuisines, costForTwo, avgRating, areaName } = resData?.info;

  const cuisinesText = cuisines.join(", ");

  // Define a maximum number of characters for cuisines
  const maxCuisinesLength = 30; // Adjust the value as needed

  // Truncate cuisines text if it exceeds the maximum length
  const truncatedCuisines =
    cuisinesText.length > maxCuisinesLength
      ? cuisinesText.substring(0, maxCuisinesLength - 3) + "..." // Subtract 3 for the ellipsis
      : cuisinesText;

  return (
    <div className="rescart  w-[250px] h-[20rem] mr-[20px]   px-[20px] py-[20px] rounded-[20px] mb-[20px]  transition-transform ease-in-out transform-gpu hover:scale-95">
      <img
        className="resimg object-cover h-[50%] w-[130%] rounded-[20px]"
        src={CDN_URL + resData.info?.cloudinaryImageId}
        alt="food"
      />
      <h1 className="mt-[10px] font-[700] text-[20px]">{name}</h1>
      <h4 className="text-[20px] font-[500]">
        ❇️
        {avgRating}
      </h4>
      <p className="text-[#96959F]">{truncatedCuisines}</p>
      <h4 className="text-[#96959F]">{costForTwo}</h4>
      <h4 className="text-[#96959F]">{areaName}</h4>

      {/* <h4>{resData.info?.sla.deliveryTime} Minutes</h4> */}
    </div>
  );
};
