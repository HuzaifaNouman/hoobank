import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Bussiness from "./components/Bussiness";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Testimonials from "./components/Testimonials";
import BussinessModel from "./components/BussinessModel";

import "./main.css";
import Service from "./components/Service";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="base-color font-stack w-full">
        <div className="max-sm:mx-5 max-[350px]:mx-2">
          <Navbar />
          <Hero />
          <Stats />
          <Bussiness />
          <Billing />
          <CardDeal />
          <Testimonials />
          <BussinessModel />
          <Service />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
