import discoverImg from "../../../../assets/slider_02.jpg";
import discoverTextImg from "../../../../assets/fv.png";
import "./discover.css";
function Discover() {
  return (
    <div className="discovered grid md:grid-flow-col gap-8 justify-center">
      <div className="discover-img ">
        <img src={discoverImg} alt="" />
      </div>
      <div className="flex-1">
        <span className="text-img pt-4 flex items-center">
          <img className="" src={discoverTextImg} alt="" />{" "}
          <h2 className="lg:text-3xl text-xl font-semibold text-green-700">
            Natural “Bioactive” Fertilizer
          </h2>
        </span>
        <h1 className="text-4xl lg:text-5xl my-4 font-bold mb-5">
          Living Fertilizer Formula
        </h1>
        <p className="text-gray-500 py-4 pr-5">
          Discover the difference with “SARUPALA” more than just fertilizer, it
          is a living solution to enrich your soil. Our unique formula,
          developed through cutting-edge biotechnology, harnesses the power of
          live beneficial organisms. Unlike ordinary compost, “SARUPALA”
          Fertilizer revitalizes the soil by helping essential micro-organisms,
          bacteria, and insects, such as earthworms, creating a thriving
          ecosystem beneath the surface.
        </p>
      </div>
    </div>
  );
}

export default Discover;
