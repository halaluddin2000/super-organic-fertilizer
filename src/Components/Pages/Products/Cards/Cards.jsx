import productCards from "../../../../data/Card/Card";
import ProductCard from "../ProductCard";
import productImg from "../../../../assets/8.png";

export function Cards() {
  return (
    <div className="bg-slate-100 p-2">
      <div className="product-img flex mb-10 items-center justify-center">
        <h1 className="text-5xl font-bold text-center text-primary">
          Our Product
        </h1>
        <img src={productImg} alt="" />
      </div>
      <div className="grid lg:grid-cols-2 gap-6 ">
        {productCards.map((cards) => {
          return <ProductCard key={cards.id} cards={cards} />;
        })}
      </div>
    </div>
  );
}
