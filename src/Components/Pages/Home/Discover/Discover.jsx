import discoverImg from "../../../../assets/slider_02.jpg";
import discoverImg2 from "../../../../assets/leaf.png";
import discoverTextImg from "../../../../assets/fv.png";
import "./discover.css";
function Discover() {
  return (
    <div className="discover grid md:grid-flow-col gap-8 justify-center">
      <div className="discover-img ">
        <img src={discoverImg} alt="" />
      </div>
      <div className="flex-1">
        <div className="discover-img2 mt-0 mb-5">
          <img className="" src={discoverImg2} alt="" />
        </div>
        <span className="text-img flex items-center">
          <img className="" src={discoverTextImg} alt="" />{" "}
          <h2 className="text-2xl font-semibold text-green-700">
            Natural “Bioactive” Fertilizer
          </h2>
        </span>
        <h1 className="text-4xl font-bold mb-5">Living Fertilizer Formula</h1>
        <p className="text-gray-500">
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
