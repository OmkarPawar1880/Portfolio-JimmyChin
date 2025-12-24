import React from "react";
import Hero from "./Components/Hero";
import "./App.css";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import ContactCTA from "./Components/CallToAction";
import Footer from "./Components/Footer";
import Header from "./Components/Header";


const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <ContactCTA />
      <Footer />
      


    </>
  );
};

export default App;
