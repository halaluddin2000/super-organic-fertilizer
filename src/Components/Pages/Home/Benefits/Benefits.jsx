import bgImg from "../../../../assets/B.card/18.png";
import "./benefits.css";
function Benefits() {
  return (
    <div className="benefitsContainer my-24 py-10">
      <img className="w-full opacity-15" src={bgImg} alt="" />
      <div className="benefitsHeader">
        <h2>Benefits of Sarupala Fertilizer</h2>
        <div className="heading-underline"></div>
        <p>
          Super Grow Fertilizer is an eco-friendly product that ensures a
          natural and bioactive approach to cultivation, free from harmful
          chemicals.
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default Benefits;
