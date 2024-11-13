import productCards from "../../../../data/Card/Card";
import ProductCard from "../ProductCard";
import productImg from "../../../../assets/8.png";

export function Cards() {
  return (
    <div className="bg-[#fff]">
      <div className="product-img flex items-center justify-center">
        <h1 className="text-5xl font-bold text-center text-primary">
          Our Product
        </h1>
        <img src={productImg} alt="" />
      </div>
      <div className="md:flex flex-row gap-4 mb-5 p-2">
        {productCards.map((cards) => {
          return <ProductCard key={cards.id} cards={cards} />;
        })}
      </div>
    </div>
  );
}
