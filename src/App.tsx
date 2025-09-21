import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Banner from "./Components/Banner/Banner";
import Features from "./Components/Features/Features";
import AppStore from "./Components/AppStore/AppStore";
import Footer from "./Components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <main className="pt-16 md:pt-20 overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navbar />
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>
      <section id="features" className="scroll-mt-24">
        <Features />
      </section>
      <section id="profile" className="scroll-mt-24">
        <Banner />
      </section>
      <section id="download" className="scroll-mt-24">
        <AppStore />
      </section>
      <Footer />
    </main>
  );
};

export default App;
