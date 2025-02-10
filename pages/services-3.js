import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ServicesStyle3 from "@/components/Services/ServicesStyle3";

const Services3 = () => {
  return (
    <>
      <Navbar />

      {/* <PageBanner pageTitle="Our Services" /> */}

      {/* <ServicesStyle3 /> */}

       <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
           {/* <PageBanner pageTitle="Comming Soon" /> */}
       <div className="image">
                         <Image
                           src={serviceImg1}
                           alt="image"
                           width={155}
                           height={180}
                         />
                       </div>
           <h1
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="500"
                            data-aos-once="true"
                          >
                            Coming soon
                          </h1>
           </div>

      <Footer />
    </>
  );
};

export default Services3;
