import benefitsCards from "../../../../data/Card/BenefitsCard";
import "./BenefitsCard/BenefitCard.css";
import "./benefits.css";
import BenefitCard from "./BenefitsCard/BenefitCard";
function Benefits() {
  return (
    <div className="benefitsContainer bg-gray-100 my-24 py-10">
      <div className="benefitsHeader">
        <h2 className="text-center font-bold text-4xl">
          Benefits of Sarupala Fertilizer
        </h2>
        <div className="flex justify-center mt-3">
          <div className="card-underline mb-6"></div>
        </div>
        <p className="text-center mb-16 bg-gray-100">
          Super Grow Fertilizer is an eco-friendly product that ensures a
          natural and bioactive approach to cultivation, free from harmful
          chemicals.
        </p>
      </div>
      <div className="benefitsCard grid lg:grid-cols-3 grid-cols mx-4 gap-4 rounded-lg">
        {benefitsCards.map((items) => {
          return <BenefitCard key={items.id} cards={items} />;
        })}
      </div>
    </div>
  );
}

export default Benefits;
