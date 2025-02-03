import React from "react";
import Navbar from "@/components/_App/Navbar";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import FeedbackStyleFour from "@/components/Common/FeedbackStyleFour";
import Partner from "@/components/MachineLearning/Partner";
import AboutUsContent2 from "@/components/AboutUs/AboutUsContent2";
import serviceImg1 from "/public/images/services-image/service-image1.png";
import Image from "next/image";
const Career = () => {
  return (
    <>
      <Navbar />
     
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

export default Career;
