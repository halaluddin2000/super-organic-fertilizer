import img from "../../assets/fv.png";
import "./testimon.css";
function TestimonialsVideo() {
  return (
    <div className="mb-36">
      <div>
        <span className="flex justify-center">
          <img className="w-10 gap-2" src={img} alt="" />
          <h4 className="text-xl font-semibold">Testimonials</h4>
        </span>
        <div className=" flex justify-center">
          <span className="underline my-4"></span>
        </div>
        <h2 className="text-4xl font-bold text-center">What Our Farmers Say</h2>
      </div>
      <div className="flex justify-center mt-10 ">
        <iframe
          className="cursor-pointer"
          src="https://www.youtube.com/embed/SgHcPIJtKBY?si=_vlviaMN35yr0ZwI"
          width="720"
          height="375"
        ></iframe>
      </div>
    </div>
  );
}

export default TestimonialsVideo;
