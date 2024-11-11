import img from "../../../assets/Contact-2tracter.jpg";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function SecondContact() {
  return (
    <div className="grid w-full  lg:grid-cols-7 ">
      <div className="lg:col-span-3 bg-[#2A713d] px-4 py-10 text-white">
        <h2 className="text-4xl font-bold mb-10">Contact Details</h2>
        <span className="flex items-center  gap-2 text-xl">
          <MdLocationOn className="text-3xl font-bold" />
          <p>Chunati, Lohagara, Chittagong, Bangladesh</p>
        </span>
        <span className="flex items-center py-6 gap-2 text-xl">
          <MdEmail className="text-3xl font-bold" />

          <p>kaisarkhanW67@gmail.com</p>
        </span>
        <span className="flex items-center gap-2 text-xl">
          <FaPhoneAlt className="text-3xl font-bold" />
          <p>+8801819009090</p>
        </span>
      </div>
      <div className="lg:col-span-4">
        <img className="w-full h-full" src={img} alt="" />
      </div>
    </div>
  );
}

export default SecondContact;
