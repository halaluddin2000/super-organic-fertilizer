import { IoLocationOutline } from "react-icons/io5";
import { CiMail, CiInstagram } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

function ContactNavbar() {
  return (
    <nav className="hidden md:block">
      <div className="container flex justify-between text-white">
        <div className="flex flex-8 py-3 p-3 w-4/5 items-center bg-bgColor">
          {/* location */}
          <div className="flex items-center gap-1 border-r-slate-50">
            <IoLocationOutline className="text-2xl" />
            <p>Chunati, Lohagara, Chattogram, Bangladesh .</p>
          </div>
          {/* email  */}
          <div className="flex items-center gap-1 ml-6">
            <CiMail className="text-2xl" />
            <a href="mailto:kaisarkhanW67@gmail.com">kaisarkhanW67@gmail.com</a>
          </div>
          {/* phone number */}
          <div className="flex items-center gap-1 ml-6">
            <FiPhone className="text-xl" />
            <p>+8801819009090</p>
          </div>
        </div>
        <div className="bg-primary w-1/5 ">
          <div className="mr-5 p-3 flex flex-2 gap-6 justify-center items-center">
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <CiInstagram />
            </a>
            <a href="">
              <FaYoutube />
            </a>
            <h2>বাংলা</h2>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ContactNavbar;
