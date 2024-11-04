import Hero from "../../Hero/Hero";
import ContactNavbar from "../../Navbar/ContactNavbar";
import Navbar from "../../Navbar/Navbar";

function Home() {
  return (
    <div>
      <div>
        <ContactNavbar />
      </div>
      <Navbar />

      <Hero />
    </div>
  );
}

export default Home;
