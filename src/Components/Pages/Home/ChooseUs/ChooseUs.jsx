import img from "../../../../assets/black.png";
import "./chooseUs.css";
function ChooseUs() {
  return (
    <div className="mt-3 p-10">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-4xl mt-5  font-bold text-center">
          Why Choose Sarupala Fertilizer ?
        </h1>
        <div className="heading-underline"></div>
        <p className="my-5 text-center px-36">
          At Super Grow Fertilizer Co. (Pvt) Ltd., we take pride in
          revolutionizing traditional farming practices with our innovative
          Living Fertilizer Formula “Sarupala”. Here us why you should choose
          us.
        </p>
      </div>
      <div className="lg:max-w-5xl md:max-w-4xl max-w-2xl mx-auto mt-16 p-10">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default ChooseUs;
