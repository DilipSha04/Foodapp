import { useContext, useState } from "react";
import logo from "../../images/newlogo.png"
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

  const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  
  const {loggedInuser} = useContext(userContext);
  console.log(loggedInuser)

  //Subscribing to the store using the a Selector

 const cartItems = useSelector((store)=> store.cart.items);
 console.log(cartItems)

  return (
    <div className="head w-full flex mx-auto justify-between items-center px-8 bg-orange-200 shadow-md" >
      <div className="w-[6rem]">
        <img src={logo} alt="logo" className="logo mix-blend-multiply " />
      </div>
      <div className="nav-link flex items-center">
        <ul className="flex justify-between items-center space-x-8 mr-4 text-[20px]">
          <li className="group "><Link to={"/"}>Home</Link><div className="bg-orange-900 w-[0] h-1 rounded-xl group-hover:w-full transition-all duration-200 "></div></li>
          <li className="group "><Link to={"/about"}>About Us</Link><div className="bg-orange-900 w-[0] h-1 rounded-xl group-hover:w-full transition-all duration-200 "></div></li>
          <li className="group "><Link to={"/Contact"}>Contact</Link><div className="bg-orange-900 w-[0] h-1 rounded-xl group-hover:w-full transition-all duration-200 "></div></li>
          <li className="group "><Link to={"/cart"}>Cart <span className=" text-[14px] text-white px-1 py-1 bg-green-800 rounded-md">({cartItems.length})</span></Link><div className="bg-orange-900 w-[0] h-1 rounded-xl group-hover:w-full transition-all duration-200 "></div></li>
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
          <li className="group  cursor-pointer font-semibold text-[16px] bg-orange-900 rounded-2xl px-4 py-1 text-orange-200">{loggedInuser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
