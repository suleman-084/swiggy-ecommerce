import { CDN_URL } from "../Utils/constants";

export const ResCart = ({ resData }) => {
  const { name, cuisines, costForTwo, avgRating } = resData?.info;
  return (
    <div className="rescart">
      <img
        className="resimg"
        src={CDN_URL + resData.info?.cloudinaryImageId}
        alt="food"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>

      <h4>{resData.info?.sla.deliveryTime} Minutes</h4>
    </div>
  );
};
