import About from "../components/HealthTech/About";
import Benefits from "../components/HealthTech/Benefits";
import Faq from "../components/HealthTech/Faq";
import Features from "../components/HealthTech/Features";
import Footer from "../components/HealthTech/Footer";
import HowItWorks from "../components/HealthTech/HowItWorks";
import LatestNews from "../components/HealthTech/LatestNews";
import MainBanner from "../components/HealthTech/MainBanner";
import Navbar from "../components/HealthTech/Navbar";
import PricingPlans from "../components/HealthTech/PricingPlans";
import Services from "../components/HealthTech/Services";
import SubscribeForm from "../components/HealthTech/SubscribeForm";
import Testimonials from "../components/HealthTech/Testimonials"; 

const HealthTech = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <About />

      <Features />

      <Benefits />

      <Services />

      <HowItWorks />

      <PricingPlans />

      <Testimonials />

      <Faq />

      <LatestNews />

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default HealthTech;
