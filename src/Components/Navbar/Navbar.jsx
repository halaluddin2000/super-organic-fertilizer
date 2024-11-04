import { useState } from "react";
import { NavbarMenu } from "./NavData";
import "/src/Components/Navbar/navbar.css";
import { FaCartPlus } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import ResponsiveNavbar from "./ResponsiveNavbar";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="container flex justify-between items-center py-6">
        {/* logo section */}
        <div>
          <img src="/src/assets/SOFlogo.png" alt="" />
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
        <div className="text-2xl hover:text-rose-400">
          <FaCartPlus />
        </div>
        {/* mobile menu section */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <MdMenu className="text-4xl" />
        </div>
      </div>

      {/* mobile sidebar section */}
      <ResponsiveNavbar open={open} />
    </nav>
  );
}

export default Navbar;
