import { ResCart } from "./ResCart";
import { resList } from "../Utils/mockdata";
export const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resList.map((restaurant) => {
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
