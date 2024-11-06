import { useState } from "react";
import "/src/Components/Navbar/navbar.css";
import { FaCartPlus } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { NavbarMenu } from "../../data/Navbar/NavData";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/SOFlogo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="flex justify-between bg-slate-50 mb-1 items-center py-6">
        {/* logo section */}
        <div className="mainLogo">
          <img src={logo} alt="" />
        </div>
        {/* menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-12 text-gray-600">
            {NavbarMenu.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-red-400 font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* icon section */}
        <div className="text-2xl pr-5 hover:text-rose-400 hidden md:block">
          <FaCartPlus />
        </div>
        {/* mobile menu section */}
        <div className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
          {open ? (
            <IoClose className="text-4xl" />
          ) : (
            <MdMenu className="text-4xl" />
          )}
        </div>
      </div>

      {/* mobile sidebar section */}
      <ResponsiveNavbar open={open} />
    </nav>
  );
}

export default Navbar;
