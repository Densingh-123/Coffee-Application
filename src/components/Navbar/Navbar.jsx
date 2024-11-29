import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee, FaRegIdBadge, FaSignInAlt } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },

];

const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img src={Logo} alt="Logo" className="w-14" />
                Coffee Cafe
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Order Button */}
              <Link to="/order">
                <button className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
                  Order
                  <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
              </Link>
              {/* <Link to="/cart">
                <button className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
                  Cart
                  <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
              </Link> */}


              {/* SignIn Button - Unique Styling */}
              
              {/* Register Button - Unique Styling */}
              <Link to="/register">
                <button className="bg-gradient-to-r from-white-500 to-gray-500 text-white px-6 py-2 rounded-full flex items-center gap-3 shadow-lg transform transition-transform duration-200 hover:scale-105">
                  Register
                  <FaRegIdBadge className="text-xl text-white drop-shadow-sm" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
