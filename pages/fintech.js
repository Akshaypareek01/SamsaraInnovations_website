import About from "../components/Fintech/About";
import Benefits from "../components/Fintech/Benefits";
import Cto from "../components/Fintech/Cto";
import Features from "../components/Fintech/Features";
import Footer from "../components/Fintech/Footer";
import HowItWorks from "../components/Fintech/HowItWorks";
import Integrations from "../components/Fintech/Integrations";
import LatestNews from "../components/Fintech/LatestNews";
import MainBanner from "../components/Fintech/MainBanner";
import Navbar from "../components/Fintech/Navbar";
import Partner from "../components/Fintech/Partner";
import PricingPlans from "../components/Fintech/PricingPlans";
import SubscribeForm from "../components/Fintech/SubscribeForm";
import Testimonials from "../components/Fintech/Testimonials";

const Fintech = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Partner />

      <Features />

      <About />

      <HowItWorks />

      <Benefits />

      <Testimonials />

      <Integrations />

      <PricingPlans />

      <Cto />

      <LatestNews />

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default Fintech;
