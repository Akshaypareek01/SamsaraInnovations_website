import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ServicesStyle3 from "@/components/Services/ServicesStyle3";
import serviceImg1 from "/public/images/services-image/service-image1.png";
import Image from "next/image";
import ServicesStyle2 from "@/components/Services/ServicesStyle2";
const Services3 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Our Services" />

      <ServicesStyle3 />

       {/*<div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
     
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
           </div>*/}

      <Footer />
    </>
  );
};

export default Services3;
