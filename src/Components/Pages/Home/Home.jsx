import Hero from "../../Hero/Hero";
import ContactNavbar from "../../Navbar/ContactNavbar";
import Navbar from "../../Navbar/Navbar";
import Product from "../Products/Product";
import Discover from "./Discover/Discover";

function Home() {
  return (
    <div>
      <div>
        <ContactNavbar />
      </div>
      <div className="container">
        <Navbar />
        <Hero />
        <Discover />
        <Product />
      </div>
    </div>
  );
}

export default Home;
