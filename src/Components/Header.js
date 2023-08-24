import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../Utils/useOnlineStatus";
export const Header = () => {
  //   console.log(LOGO_URL);
  const onlineStatus = useOnlineStatus();
  const [btnName, setBtnName] = useState("login");
  return (
    <div className="header p-4 m-4 flex justify-between bg-[#B99BEE] rounded-[20px]">
      <div className="logo-container w-[200px]  ">
        <img className="logo rounded-[20px]" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="links flex font-[600] ">
          <li className="px-[20px] hover:font-bold text-[20px] py-[10px]">
            Online status: {onlineStatus ? "✅" : "🔴"}{" "}
          </li>
          <li className="px-[20px]  hover:font-bold text-[20px] py-[10px]">
            <Link to="/" className="nav-link ">
              Home
            </Link>
          </li>
          <li className="px-[20px] hover:font-bold text-[20px] py-[10px]">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="px-[20px] hover:font-bold text-[20px] py-[10px]">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="px-[20px] hover:font-bold text-[20px] py-[10px]">
            <Link to="/grocery" className="nav-link">
              Groceries
            </Link>
          </li>
          <li className="px-[20px] hover:font-bold text-[20px] py-[10px]">
            Cart
          </li>
          <li className="px-[20px] hover:font-bold text-[20px] ">
            <button
              className="login px-[20px] bg-[#1b1a19] rounded-[20px] text-white py-[10px] "
              onClick={() => {
                btnName === "login"
                  ? setBtnName("logout")
                  : setBtnName("login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
