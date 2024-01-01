import { useContext, useState } from "react";
import logo from "../../images/bigbite.png";
import hamburger from "../../images/hamburger.png";
import cart from "../../images/cart.png";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/mobileMenuSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const { loggedInuser } = useContext(userContext);

  //Subscribing to the store using the a Selector

  const cartItems = useSelector((store) => store.cart.items);

  const isMenuOpen = useSelector((store) => store.mobile.isMenuOpen);

  const handleMobileMenu = () => {
    dispatch(toggleMenu(isMenuOpen));
  };

  return (
    <div className="head w-full flex mx-auto justify-between items-center px-8 bg-orange-200 shadow-md">
      <div className="w-[6rem]">
        <img src={logo} alt="logo" className="logo mix-blend-multiply " />
      </div>
      {/* this div is for mobile menu  */}
      <div className="flex space-x-8 items-center">
       { !isMenuOpen && <div className="md:hidden flex">
          <Link to={"/cart"}>
            <div className="flex items-center">
              <img className="w-10 flex" src={cart} alt="" />
              <span className="text-[16px] font-semibold text-red-500 rounded-md">
                ({cartItems.length})
              </span>
            </div>
          </Link>
        </div>}
        <img
          src={hamburger}
          className="w-14 block md:hidden"
          onClick={handleMobileMenu}
          alt=""
        />
      </div>
      {/* mobile menu panel */}
      {isMenuOpen && (
        <div className="md:hidden flex absolute w-5/12 px-4 right-0 top-24 bg-orange-200 z-50 h-[50%] rounded-lg">
          <div className="nav-link flex flex-col py-4 px-2">
            <ul className="flex flex-col justify-center space-y-4 text-[20px]">
              <li className="group ">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="group ">
                <Link to={"/about"}>About Us</Link>
              </li>
              <li className="group ">
                <Link to={"/Contact"}>Contact</Link>
              </li>
              <li className="group ">
                <Link to={"/cart"}>
                  Cart{" "}
                  <span className="text-[16px] font-semibold text-red-500 rounded-md">
                    ({cartItems.length})
                  </span>
                </Link>
              </li>
              <li className="group  cursor-pointer font-semibold text-[16px]  bg-orange-900 rounded-2xl px-4 py-1 text-orange-200">
                {loggedInuser}
              </li>
            </ul>
            <button
              className="border-[1px] mt-8 border-orange-900 px-4 py-1 rounded-3xl text-[16px] text-orange-950 hover:bg-orange-900 hover:text-orange-200 "
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </div>
        </div>
      )}
      <div className="nav-link md:flex hidden items-center">
        <ul className="flex justify-between items-center space-x-8 mr-4 text-[20px]">
          <li className="group ">
            <Link to={"/"}>Home</Link>
            <div className="bg-orange-900 w-[0] h-1 rounded-xl group-hover:w-full transition-all duration-200 "></div>
          </li>
          <li className="group ">
            <Link to={"/about"}>About Us</Link>
            <div className="bg-orange-900 w-[0] h-1 rounded-xl group-hover:w-full transition-all duration-200 "></div>
          </li>
          <li className="group ">
            <Link to={"/Contact"}>Contact</Link>
            <div className="bg-orange-900 w-[0] h-1 rounded-xl group-hover:w-full transition-all duration-200 "></div>
          </li>
          <li className="group ">
            <Link to={"/cart"}>
              Cart{" "}
              <span className=" text-[14px] text-white px-1 py-1 bg-green-800 rounded-md">
                ({cartItems.length})
              </span>
            </Link>
            <div className="bg-orange-900 w-[0] h-1 rounded-xl group-hover:w-full transition-all duration-200 "></div>
          </li>
          <button
            className="border-[1px] border-orange-900 px-4 py-1 rounded-3xl text-[16px] text-orange-950 hover:bg-orange-900 hover:text-orange-200 "
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="group  cursor-pointer font-semibold text-[16px] bg-orange-900 rounded-2xl px-4 py-1 text-orange-200">
            {loggedInuser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
