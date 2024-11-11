import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import ContactNavbar from "../../Navbar/ContactNavbar";
import Navbar from "../../Navbar/Navbar";
import ContactUs from "../Contact/ContactUs";
import SecondContact from "../Contact/SecondContact";
import Product from "../Products/Product";
import ChooseUs from "./ChooseUs/ChooseUs";
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
        <ChooseUs />
        <div>
          <ContactUs />
          <SecondContact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
