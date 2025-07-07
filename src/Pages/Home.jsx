import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import WhyChooseSection from "../Components/WhyChooseSection";
import PopularDestinations from "../Components/PopularDestinations";
import FormSection from "../Components/FormSection";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import CallToAction from "../Components/CallToAction";
import TravelCategories from "../Components/TravelCategories";
import TravelDeals from "../Components/TravelDeals";

function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <PopularDestinations />
      <TravelDeals />
      <TravelCategories />
      <Testimonials />
      <CallToAction />
      {/* <FormSection/> */}
    </>
  );
}

export default Home;
