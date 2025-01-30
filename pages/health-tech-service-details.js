import Navbar from "../components/HealthTech/Navbar";
import PageTitle from "@/components/HealthTechServiceDetails/PageTitle";
import DetailsContent from "@/components/HealthTechServiceDetails/DetailsContent";
import Footer from "../components/HealthTech/Footer";
import SubscribeForm from "../components/HealthTech/SubscribeForm";

const HealthTech = () => {
  return (
    <>
      <Navbar />

      <PageTitle />

      <DetailsContent />

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default HealthTech;
