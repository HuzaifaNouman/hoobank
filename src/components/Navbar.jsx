import { navLinks } from "../data";
import logo from "../assets/logo.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import "../index.css";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="mx-10 max-sm:mx-2 flex justify-between items-center p-4 max-md:pt-7">
        <div>
          <a href="/">
            <img className="w-[120px]" src={logo} alt="HooBank" />
          </a>
        </div>
        <div>
          <ul className="flex justify-center items-center max-md:hidden">
            {navLinks.map((link) => {
              return (
                <a href="/">
                  <li className="text-white p-5" key={link.id}>
                    {link.title}
                  </li>
                </a>
              );
            })}
          </ul>
          <div>
            <img
              className="cursor-pointer hidden max-md:block w-[30px]"
              onClick={() => setToggle((prev) => !prev)}
              src={toggle ? close : menu}
              alt="menu"
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          toggle ? "flex justify-center items-center" : "hidden"
        } w-[calc(100% - 50px)] bg-gradient-to-tr from-[#00040f] to-[#7de7eb] rounded-md mt-5`}
      >
        <ul className="flex justify-center items-center max-md:block">
          {navLinks.map((link) => {
            return (
              <a href="/">
                <li className="text-white p-5 text-lg" key={link.id}>
                  {link.title}
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
